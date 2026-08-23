"""
backend.app.biometrics.service
==============================

Loop-engineered background service for Anchor's real-time face recognition.
Decouples camera frame ingestion, biometric inference, passive liveness EAR tracking,
auto-enrollment, and smooth MJPEG video streaming across dedicated producer-consumer threads.
Supports dynamic multi-camera device switching on the fly.

Privacy: All processing is 100% on-device and local.
"""

from __future__ import annotations

import asyncio
import base64
import logging
import os
import sys
import threading
import time
from typing import Any, Dict, List, Optional, Set, Tuple

import cv2
import mediapipe as mp
from mediapipe.tasks.python import BaseOptions
from mediapipe.tasks.python.vision import (
    FaceLandmarker,
    FaceLandmarkerOptions,
    RunningMode,
)
import numpy as np

from ..config import (
    DEFAULT_ENTER_STREAK,
    DEFAULT_EXIT_STREAK,
    DEFAULT_SCAN_INTERVAL,
    DEFAULT_TOLERANCE,
    MODEL_PATH,
    AUTO_ENROLL_ENABLED,
    AUTO_ENROLL_SAMPLE_INTERVAL_SEC,
)
from ..storage.roster_storage import PersonProfile, RosterStorage
from .frame_quality import (
    run_quality_checks,
    classify_pose_bucket,
    classify_lighting_bucket,
    compute_quality_score,
)
from .profile_manager import ProfileManager
from .enrollment_logger import EnrollmentLogger
from .recognizer import (
    DetectionResult,
    FaceRecognizer,
    PersonRecord,
    compute_encoding,
    calculate_eye_aspect_ratio,
)

logger = logging.getLogger(__name__)


def _safe_open_camera(idx: int) -> Optional[cv2.VideoCapture]:
    """Platform-safe camera device opener with full error suppression for headless/cloud servers."""
    # On Linux / headless / Docker / Render: check if /dev/video{idx} exists
    if sys.platform.startswith("linux"):
        if not os.path.exists(f"/dev/video{idx}"):
            return None
        try:
            c = cv2.VideoCapture(idx, cv2.CAP_V4L2)
            if c and c.isOpened():
                return c
        except Exception:
            pass
        try:
            c = cv2.VideoCapture(idx)
            if c and c.isOpened():
                return c
        except Exception:
            return None

    # On Windows: use DSHOW with fallback to default backend
    elif sys.platform == "win32":
        try:
            c = cv2.VideoCapture(idx, cv2.CAP_DSHOW)
            if c and c.isOpened():
                return c
        except Exception:
            pass
        try:
            c = cv2.VideoCapture(idx)
            if c and c.isOpened():
                return c
        except Exception:
            return None

    # Other platforms (macOS / generic):
    else:
        try:
            c = cv2.VideoCapture(idx)
            if c and c.isOpened():
                return c
        except Exception:
            return None

    return None


def _draw_rounded_rect(
    img: np.ndarray,
    top_left: Tuple[int, int],
    bottom_right: Tuple[int, int],
    color: Tuple[int, int, int],
    thickness: int = 2,
    radius: int = 12,
) -> None:
    """Draw a smooth rounded rectangle on an image."""
    x1, y1 = top_left
    x2, y2 = bottom_right
    w_box = max(1, x2 - x1)
    h_box = max(1, y2 - y1)
    r = min(radius, w_box // 2, h_box // 2)
    if r < 1:
        cv2.rectangle(img, (x1, y1), (x2, y2), color, thickness)
        return

    cv2.ellipse(img, (x1 + r, y1 + r), (r, r), 180, 0, 90, color, thickness)
    cv2.ellipse(img, (x2 - r, y1 + r), (r, r), 270, 0, 90, color, thickness)
    cv2.ellipse(img, (x2 - r, y2 - r), (r, r), 0, 0, 90, color, thickness)
    cv2.ellipse(img, (x1 + r, y2 - r), (r, r), 90, 0, 90, color, thickness)

    cv2.line(img, (x1 + r, y1), (x2 - r, y1), color, thickness)
    cv2.line(img, (x1 + r, y2), (x2 - r, y2), color, thickness)
    cv2.line(img, (x1, y1 + r), (x1, y2 - r), color, thickness)
    cv2.line(img, (x2, y1 + r), (x2, y2 - r), color, thickness)


class RecognitionService:
    """Multi-threaded face recognition engine with decoupled capture, inference, and dynamic camera switching."""

    _REMOTE_TIMEOUT_SEC: float = 3.0
    _OVERLAY_EXPIRY_SEC: float = 1.0

    def __init__(
        self,
        storage: Optional[RosterStorage] = None,
        camera_index: int = 0,
        tolerance: float = DEFAULT_TOLERANCE,
        scan_interval_sec: float = DEFAULT_SCAN_INTERVAL,
    ):
        self.storage = storage or RosterStorage()
        self.camera_index = camera_index
        self.tolerance = tolerance
        self.scan_interval_sec = scan_interval_sec

        self._recognizer: Optional[FaceRecognizer] = None
        self._capture_thread: Optional[threading.Thread] = None
        self._inference_thread: Optional[threading.Thread] = None
        self._stop_event = threading.Event()
        self._running: bool = False
        self._camera_available: bool = False

        # Camera switching event
        self._camera_switch_requested = threading.Event()

        self._subscribers: Set[asyncio.Queue] = set()
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        self._lock = threading.Lock()

        # Thread-safe double buffer for latest frame
        self._latest_bgr_frame: Optional[np.ndarray] = None
        self._latest_frame_time: float = 0.0
        self._frame_seq: int = 0
        self._frame_lock = threading.Lock()

        # Cached detection for smooth visual streaming
        self._cached_detection: Optional[DetectionResult] = None
        self._cached_detection_time: float = 0.0
        self._detection_lock = threading.Lock()

        # Remote capture-device pairing state
        self._remote_active: bool = False
        self._remote_last_seen: float = 0.0

        # Auto-Enrollment state
        self._profile_manager = ProfileManager(self.storage)
        self._enrollment_logger = EnrollmentLogger()
        self._last_enrollment_sample_time: float = 0.0

    def set_event_loop(self, loop: asyncio.AbstractEventLoop) -> None:
        self._loop = loop

    def register_subscriber(self) -> asyncio.Queue:
        q: asyncio.Queue = asyncio.Queue()
        with self._lock:
            self._subscribers.add(q)
        q.put_nowait({"type": "status", "data": self.get_status()})
        return q

    def unregister_subscriber(self, q: asyncio.Queue) -> None:
        with self._lock:
            self._subscribers.discard(q)

    def broadcast_event(self, event: Dict[str, Any]) -> None:
        """Thread-safe broadcast to all active WebSocket clients."""
        with self._lock:
            subs = list(self._subscribers)

        if not subs:
            return

        if self._loop and self._loop.is_running():
            for q in subs:
                self._loop.call_soon_threadsafe(q.put_nowait, event)

    def get_status(self) -> Dict[str, Any]:
        return {
            "active": self._running,
            "camera_available": self._camera_available,
            "active_camera_index": self.camera_index,
            "remote_active": self._remote_active,
            "current_person": (
                self._recognizer.confirmed_person
                if (self._recognizer and self._running)
                else None
            ),
            "roster_count": len(self.storage.list_profiles()),
            "timestamp": time.time(),
        }

    # -----------------------------------------------------------------------
    # Multi-Camera Device Enumeration & Dynamic Hot-Switching
    # -----------------------------------------------------------------------

    def get_available_cameras(self, max_probe: int = 2) -> List[Dict[str, Any]]:
        """Quickly probe and list available video capture devices."""
        # If active camera is already confirmed working, return immediately
        if self._camera_available:
            return [{
                "index": self.camera_index,
                "name": f"Camera {self.camera_index} (Active: {'Default / Integrated' if self.camera_index == 0 else 'External / USB'})",
                "is_active": True,
            }]

        # In cloud / headless Linux environments without /dev/video*, return standby mode safely
        if sys.platform.startswith("linux") and not any(os.path.exists(f"/dev/video{i}") for i in range(max_probe)):
            return [{
                "index": 0,
                "name": "Camera 0 (Standby / Cloud)",
                "is_active": True,
            }]

        cameras = []
        for idx in range(max_probe):
            test_cap = _safe_open_camera(idx)
            if test_cap and test_cap.isOpened():
                name = f"Camera {idx} ({'Default / Integrated' if idx == 0 else 'External / USB'})"
                cameras.append({
                    "index": idx,
                    "name": name,
                    "is_active": (idx == self.camera_index),
                })
                try:
                    test_cap.release()
                except Exception:
                    pass

        if not cameras:
            cameras.append({
                "index": 0,
                "name": "Camera 0 (Default)",
                "is_active": True,
            })
        return cameras

    def set_camera_index(self, new_index: int) -> bool:
        """Hot-switch active webcam index dynamically without restarting service."""
        if new_index == self.camera_index and self._camera_available:
            return True

        logger.info("Switching camera from index %d to index %d", self.camera_index, new_index)
        self.camera_index = new_index
        if self._recognizer:
            self._recognizer.camera_index = new_index

        self._camera_switch_requested.set()
        self.broadcast_event({"type": "status", "data": self.get_status()})
        return True

    # -----------------------------------------------------------------------
    # Remote Frame Injection (Capture-Device Pairing)
    # -----------------------------------------------------------------------

    def inject_remote_frame(self, jpeg_bytes: bytes) -> bool:
        """Accept a JPEG frame from the browser-side WebRTC relay."""
        np_arr = np.frombuffer(jpeg_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        if frame is None:
            return False

        now = time.monotonic()
        with self._frame_lock:
            self._latest_bgr_frame = frame
            self._latest_frame_time = now
            self._frame_seq += 1

        self._remote_last_seen = now
        if not self._remote_active:
            self._remote_active = True
            logger.info("Remote capture-device stream activated — local webcam paused.")
            self.broadcast_event({"type": "status", "data": self.get_status()})

        return True

    @property
    def _remote_stream_alive(self) -> bool:
        if not self._remote_active:
            return False
        return (time.monotonic() - self._remote_last_seen) < self._REMOTE_TIMEOUT_SEC

    def _check_remote_timeout(self) -> None:
        if self._remote_active and not self._remote_stream_alive:
            self._remote_active = False
            logger.info("Remote stream timed out — resuming local webcam.")
            self.broadcast_event({"type": "status", "data": self.get_status()})

    # -----------------------------------------------------------------------
    # Recognition Callbacks
    # -----------------------------------------------------------------------

    def _on_recognized(self, person_id: str) -> None:
        profile = self.storage.get_profile(person_id)
        person_data = (
            profile.to_dict()
            if profile
            else {"person_id": person_id, "name": person_id.capitalize(), "relationship": "Visitor"}
        )
        logger.info("Recognized visitor: %s", person_data.get("name"))
        self.broadcast_event({
            "type": "recognized",
            "person": person_data,
            "timestamp": time.time(),
        })

    def _on_unrecognized(self) -> None:
        logger.info("Visitor left camera frame.")
        self.broadcast_event({
            "type": "unrecognized",
            "timestamp": time.time(),
        })

    def reload_roster(self) -> None:
        """Update recognizer roster with newest encodings from storage."""
        if not self._recognizer:
            return
        records = [
            PersonRecord(
                person_id=p.person_id,
                encodings=[np.array(e, dtype=np.float64) for e in p.encodings if len(e) > 0],
            )
            for p in self.storage._profiles.values()
        ]
        self._recognizer._roster = records
        self._recognizer._rebuild_lookup()
        logger.info("Reloaded recognizer roster (%d encodings total).", len(self._recognizer._known_encodings))

    # -----------------------------------------------------------------------
    # Service Lifecycle & Thread Management
    # -----------------------------------------------------------------------

    def start(self) -> None:
        if self._running:
            return

        self._running = True
        self._stop_event.clear()
        self._camera_switch_requested.clear()

        records = [
            PersonRecord(
                person_id=p.person_id,
                encodings=[np.array(e, dtype=np.float64) for e in p.encodings if len(e) > 0],
            )
            for p in self.storage._profiles.values()
        ]
        self._recognizer = FaceRecognizer(
            roster=records,
            tolerance=self.tolerance,
            enter_streak=DEFAULT_ENTER_STREAK,
            exit_streak=DEFAULT_EXIT_STREAK,
            margin_threshold=0.025,
            scan_interval_sec=self.scan_interval_sec,
            frame_scale=0.65,
            camera_index=self.camera_index,
            on_recognized=self._on_recognized,
            on_unrecognized=self._on_unrecognized,
        )

        # Launch Producer: Camera Capture Loop
        self._capture_thread = threading.Thread(
            target=self._capture_loop,
            name="AnchorCameraGrabber",
            daemon=True,
        )
        self._capture_thread.start()

        # Launch Consumer: Biometric Recognition Inference Loop
        self._inference_thread = threading.Thread(
            target=self._recognition_loop,
            name="AnchorBiometricsWorker",
            daemon=True,
        )
        self._inference_thread.start()

        logger.info("Recognition service multi-threaded loops launched.")

    def stop(self) -> None:
        self._running = False
        self._stop_event.set()
        self._camera_switch_requested.set()

        if self._recognizer:
            self._recognizer.stop()

        if self._capture_thread and self._capture_thread.is_alive():
            self._capture_thread.join(timeout=2.0)
        self._capture_thread = None

        if self._inference_thread and self._inference_thread.is_alive():
            self._inference_thread.join(timeout=2.0)
        self._inference_thread = None

        logger.info("Recognition service stopped cleanly.")

    # -----------------------------------------------------------------------
    # LOOP ENGINEERING: Producer Thread — Camera Capture Grabber
    # -----------------------------------------------------------------------

    def _capture_loop(self) -> None:
        """Dedicated high-rate camera capture loop with dynamic camera switching."""
        cap: Optional[cv2.VideoCapture] = None
        current_opened_index = -1

        try:
            cap = _safe_open_camera(self.camera_index)
            if cap and cap.isOpened():
                current_opened_index = self.camera_index
                self._camera_available = True
            else:
                self._camera_available = False
                logger.info("Webcam index %d not accessible; running in standby/remote mode.", self.camera_index)

            self.broadcast_event({"type": "status", "data": self.get_status()})

            while not self._stop_event.is_set():
                # Handle dynamic camera hot-switch request
                if self._camera_switch_requested.is_set():
                    self._camera_switch_requested.clear()
                    if cap and cap.isOpened():
                        try:
                            cap.release()
                        except Exception:
                            pass
                    cap = _safe_open_camera(self.camera_index)
                    if cap and cap.isOpened():
                        current_opened_index = self.camera_index
                        self._camera_available = True
                        logger.info("Successfully switched to camera index %d", self.camera_index)
                    else:
                        self._camera_available = False
                        logger.warning("Failed to open newly selected camera index %d", self.camera_index)
                    self.broadcast_event({"type": "status", "data": self.get_status()})

                if self._remote_stream_alive:
                    time.sleep(0.02)
                    continue

                self._check_remote_timeout()

                if cap is None or not cap.isOpened():
                    time.sleep(4.0)
                    if not self._remote_stream_alive:
                        cap = _safe_open_camera(self.camera_index)
                        if cap and cap.isOpened():
                            current_opened_index = self.camera_index
                            self._camera_available = True
                            self.broadcast_event({"type": "status", "data": self.get_status()})
                    continue

                try:
                    ret, frame = cap.read()
                except Exception:
                    ret, frame = False, None

                if not ret or frame is None:
                    time.sleep(0.01)
                    continue

                now = time.monotonic()
                with self._frame_lock:
                    self._latest_bgr_frame = frame
                    self._latest_frame_time = now
                    self._frame_seq += 1

                time.sleep(0.005)

        except Exception as e:
            logger.error("Error in camera capture loop: %s", e, exc_info=True)
        finally:
            if cap is not None:
                try:
                    cap.release()
                except Exception:
                    pass
            self._camera_available = False
            self.broadcast_event({"type": "status", "data": self.get_status()})

    # -----------------------------------------------------------------------
    # LOOP ENGINEERING: Consumer Thread — Biometric Recognition Worker
    # -----------------------------------------------------------------------

    def _recognition_loop(self) -> None:
        """Dedicated biometric recognition worker thread with drift-compensated scheduling."""
        landmarker: Optional[FaceLandmarker] = None
        try:
            if not os.path.exists(MODEL_PATH):
                logger.info("FaceLandmarker model not found at %s. Downloading...", MODEL_PATH)
                os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
                import urllib.request
                urllib.request.urlretrieve(
                    "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
                    MODEL_PATH,
                )
                logger.info("FaceLandmarker model downloaded successfully.")

            options = FaceLandmarkerOptions(
                base_options=BaseOptions(model_asset_path=MODEL_PATH),
                running_mode=RunningMode.IMAGE,
                num_faces=1,
                min_face_detection_confidence=0.45,
                min_face_presence_confidence=0.45,
                min_tracking_confidence=0.45,
            )
            try:
                landmarker = FaceLandmarker.create_from_options(options)
                if self._recognizer:
                    self._recognizer._landmarker = landmarker
            except Exception as le:
                logger.warning(
                    "Could not initialize MediaPipe FaceLandmarker on this host (%s). "
                    "In headless Linux containers, ensure libegl1, libgl1, and libglib2.0-0 are installed.",
                    le,
                )
                landmarker = None

            last_processed_seq = -1
            next_tick = time.monotonic()

            while not self._stop_event.is_set():
                now = time.monotonic()

                frame: Optional[np.ndarray] = None
                seq: int = -1
                with self._frame_lock:
                    if self._latest_bgr_frame is not None:
                        frame = self._latest_bgr_frame.copy()
                        seq = self._frame_seq

                if frame is None or seq == last_processed_seq:
                    time.sleep(0.015)
                    continue

                last_processed_seq = seq

                # Run detailed detection, matching, and EAR passive liveness check
                det = self._recognizer.process_frame_detailed(frame)
                self._recognizer._update_state(det.matched_person_id)

                with self._detection_lock:
                    self._cached_detection = det
                    self._cached_detection_time = time.monotonic()

                # Auto-Enrollment Pipeline
                if AUTO_ENROLL_ENABLED and self._recognizer.confirmed_person:
                    person_id = self._recognizer.confirmed_person
                    if (now - self._last_enrollment_sample_time) >= AUTO_ENROLL_SAMPLE_INTERVAL_SEC:
                        self._last_enrollment_sample_time = now
                        self._run_auto_enrollment_pipeline(person_id, frame, det)

                # Drift-compensated interval timing
                next_tick += self.scan_interval_sec
                sleep_duration = next_tick - time.monotonic()
                if sleep_duration > 0:
                    time.sleep(sleep_duration)
                else:
                    next_tick = time.monotonic()

        except Exception as e:
            logger.error("Error in recognition inference loop: %s", e, exc_info=True)
        finally:
            if landmarker:
                landmarker.close()
            if self._recognizer:
                self._recognizer._landmarker = None

    # -----------------------------------------------------------------------
    # Face Enrollment Snapshot API
    # -----------------------------------------------------------------------

    def capture_and_register_face(self, person_id: str, image_base64: Optional[str] = None) -> Dict[str, Any]:
        """Compute aspect-ratio-invariant face embedding from uploaded image or webcam frame."""
        frame: Optional[np.ndarray] = None

        if image_base64:
            try:
                if "," in image_base64:
                    image_base64 = image_base64.split(",", 1)[1]
                img_bytes = base64.b64decode(image_base64)
                np_arr = np.frombuffer(img_bytes, np.uint8)
                frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
            except Exception as e:
                return {"success": False, "error": f"Invalid image data: {e}"}
        else:
            with self._frame_lock:
                if self._latest_bgr_frame is not None:
                    frame = self._latest_bgr_frame.copy()

        if frame is None:
            return {"success": False, "error": "No camera frame or image provided. Ensure webcam is connected or upload a photo."}

        options = FaceLandmarkerOptions(
            base_options=BaseOptions(model_asset_path=MODEL_PATH),
            running_mode=RunningMode.IMAGE,
            num_faces=1,
            min_face_detection_confidence=0.35,
        )
        landmarker = FaceLandmarker.create_from_options(options)
        try:
            encoding = compute_encoding(frame, landmarker)
        finally:
            landmarker.close()

        if encoding is None:
            return {
                "success": False,
                "error": "No face detected in snapshot. Please ensure good lighting and face the camera directly.",
            }

        added = self.storage.add_encoding(person_id, encoding)
        if added:
            self.reload_roster()
            profile = self.storage.get_profile(person_id)
            count = len(profile.encodings) if profile else 1
            return {
                "success": True,
                "encodings_count": count,
                "message": f"Successfully enrolled face snapshot for {profile.name if profile else person_id} ({count} total).",
            }
        return {"success": False, "error": f"Person '{person_id}' not found in roster."}

    # -----------------------------------------------------------------------
    # Live MJPEG Stream & Snapshot Generator
    # -----------------------------------------------------------------------

    def get_latest_frame_jpeg(self) -> Optional[bytes]:
        """Return the latest camera frame encoded as JPEG with biometric HUD and EAR liveness overlay."""
        with self._frame_lock:
            if self._latest_bgr_frame is not None:
                frame = self._latest_bgr_frame.copy()
            else:
                frame = np.zeros((480, 640, 3), dtype=np.uint8)
                frame[:] = (28, 38, 32)
                cv2.putText(
                    frame,
                    "Anchor Live Vision • Starting Camera...",
                    (110, 240),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.65,
                    (200, 230, 215),
                    2,
                    cv2.LINE_AA,
                )

        h, w = frame.shape[:2]

        now = time.monotonic()
        det: Optional[DetectionResult] = None
        with self._detection_lock:
            if (now - self._cached_detection_time) <= self._OVERLAY_EXPIRY_SEC:
                det = self._cached_detection

        if det and det.bbox:
            xmin, ymin, xmax, ymax = det.bbox

            if det.matched_person_id:
                profile = self.storage.get_profile(det.matched_person_id)
                name = profile.name if profile else det.matched_person_id
                pct = int(det.confidence * 100)
                label = f"{name} ({pct}% Match)"
                box_color = (60, 190, 80)
                badge_bg = (30, 120, 50)
            else:
                if len(self.storage.list_profiles()) == 0 or (self._recognizer and len(self._recognizer._known_encodings) == 0):
                    label = "Face Detected (0 Roster Enrolled)"
                else:
                    label = "Visitor (Unregistered)"
                box_color = (40, 160, 240)
                badge_bg = (20, 100, 180)

            _draw_rounded_rect(frame, (xmin, ymin), (xmax, ymax), box_color, thickness=2, radius=14)

            for kx, ky in det.keypoints:
                cv2.circle(frame, (kx, ky), 3, box_color, -1, cv2.LINE_AA)

            font = cv2.FONT_HERSHEY_SIMPLEX
            font_scale = 0.55
            thickness = 1
            (text_w, text_h), baseline = cv2.getTextSize(label, font, font_scale, thickness)

            label_ymin = max(ymin - 32, 10)
            cv2.rectangle(
                frame,
                (xmin, label_ymin),
                (xmin + text_w + 16, label_ymin + text_h + 14),
                badge_bg,
                -1,
            )
            cv2.putText(
                frame,
                label,
                (xmin + 8, label_ymin + text_h + 6),
                font,
                font_scale,
                (255, 255, 255),
                thickness,
                cv2.LINE_AA,
            )

            # Liveness Indicator Badge (Top Right of Bounding Box)
            if det.is_live:
                live_text = f"Live (EAR {det.ear:.2f} • Blinks {det.blink_count})"
                live_bg = (20, 130, 40)
            else:
                live_text = f"Verifying Liveness (EAR {det.ear:.2f})"
                live_bg = (20, 90, 150)

            (l_w, l_h), _ = cv2.getTextSize(live_text, font, 0.45, 1)
            cv2.rectangle(
                frame,
                (xmax - l_w - 14, ymax + 6),
                (xmax, ymax + l_h + 18),
                live_bg,
                -1,
            )
            cv2.putText(
                frame,
                live_text,
                (xmax - l_w - 8, ymax + l_h + 12),
                font,
                0.45,
                (255, 255, 255),
                1,
                cv2.LINE_AA,
            )

        # Status Bar Overlay
        cv2.rectangle(frame, (0, h - 30), (w, h), (18, 28, 22), -1)
        enrolled_count = len(self._recognizer._known_encodings) if self._recognizer else 0
        cam_text = f"Cam #{self.camera_index}"
        status_text = f"Anchor Live Vision • {cam_text} • {enrolled_count} Face Encodings Enrolled"
        cv2.putText(frame, status_text, (16, h - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (160, 200, 180), 1, cv2.LINE_AA)

        ret, jpeg = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), 82])
        if ret:
            return jpeg.tobytes()
        return None

    def simulate_recognized(self, person_id: str) -> None:
        logger.info("Simulating arrival for: %s", person_id)
        self._on_recognized(person_id)

    def simulate_unrecognized(self) -> None:
        logger.info("Simulating departure.")
        self._on_unrecognized()

    # -----------------------------------------------------------------------
    # Auto-Enrollment Helper
    # -----------------------------------------------------------------------

    def _run_auto_enrollment_pipeline(self, person_id: str, frame: np.ndarray, detection: Optional[DetectionResult]) -> None:
        if not detection or detection.landmarks_3d is None or not detection.bbox:
            return

        ok, reason, metrics = run_quality_checks(
            frame,
            detection.landmarks_3d,
            detection.confidence,
            detection.bbox,
        )

        if not ok:
            self._enrollment_logger.log_decision(
                person_id=person_id,
                decision="rejected",
                reason=reason,
                sharpness=metrics.get("sharpness"),
                face_size_px=metrics.get("face_min_side"),
                yaw=metrics.get("yaw"),
                pitch=metrics.get("pitch"),
                roll=metrics.get("roll"),
                brightness=metrics.get("brightness"),
                detection_score=metrics.get("detection_score"),
                extra=metrics,
            )
            return

        xmin, ymin, xmax, ymax = detection.bbox
        h, w = frame.shape[:2]
        crop_xmin = max(0, xmin)
        crop_ymin = max(0, ymin)
        crop_xmax = min(w, xmax)
        crop_ymax = min(h, ymax)
        face_crop = frame[crop_ymin:crop_ymax, crop_xmin:crop_xmax]

        if face_crop.size == 0:
            return

        pose = classify_pose_bucket(metrics["yaw"], metrics["pitch"]).value
        lighting = classify_lighting_bucket(face_crop).value

        quality_score = compute_quality_score(
            metrics["sharpness"],
            metrics["face_min_side"],
            metrics["detection_score"],
            metrics["brightness"],
        )

        if self._recognizer and self._recognizer._landmarker:
            encoding = compute_encoding(frame, self._recognizer._landmarker)
        else:
            return

        if encoding is None:
            return

        enroll, enroll_reason, replace_id = self._profile_manager.should_enroll(
            person_id=person_id,
            embedding=encoding.tolist(),
            pose_bucket=pose,
            lighting_bucket=lighting,
            quality_score=quality_score,
        )

        if enroll:
            self._profile_manager.enroll_sample(
                person_id=person_id,
                embedding=encoding.tolist(),
                pose_bucket=pose,
                lighting_bucket=lighting,
                quality_score=quality_score,
                face_crop_bgr=face_crop,
                replace_sample_id=replace_id,
            )
            self.reload_roster()

        self._enrollment_logger.log_decision(
            person_id=person_id,
            decision="accepted" if enroll else "rejected",
            reason=enroll_reason,
            quality_score=quality_score,
            pose_bucket=pose,
            lighting_bucket=lighting,
            replaced_sample_id=replace_id,
            sharpness=metrics.get("sharpness"),
            face_size_px=metrics.get("face_min_side"),
            yaw=metrics.get("yaw"),
            pitch=metrics.get("pitch"),
            roll=metrics.get("roll"),
            brightness=metrics.get("brightness"),
            detection_score=metrics.get("detection_score"),
            extra=metrics,
        )
