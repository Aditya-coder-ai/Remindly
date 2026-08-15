"""
backend.app.biometrics.service
==============================

Background worker and coordinator for Anchor's real-time face recognition.
Bridges MediaPipe FaceRecognizer events with asynchronous WebSocket broadcasts,
manages camera lifecycle, renders live visual overlays, and handles face registration.
"""

from __future__ import annotations

import asyncio
import base64
import logging
import os
import threading
import time
from typing import Any, Dict, Optional, Set, Tuple

import cv2
import numpy as np

from ..config import (
    DEFAULT_ENTER_STREAK,
    DEFAULT_EXIT_STREAK,
    DEFAULT_SCAN_INTERVAL,
    DEFAULT_TOLERANCE,
    MODEL_PATH,
)
from ..storage.roster_storage import PersonProfile, RosterStorage
from .recognizer import (
    DetectionResult,
    FaceRecognizer,
    PersonRecord,
    compute_encoding,
)

logger = logging.getLogger(__name__)


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
    r = min(radius, max(1, (x2 - x1) // 2), max(1, (y2 - y1) // 2))

    cv2.ellipse(img, (x1 + r, y1 + r), (r, r), 180, 0, 90, color, thickness)
    cv2.ellipse(img, (x2 - r, y1 + r), (r, r), 270, 0, 90, color, thickness)
    cv2.ellipse(img, (x2 - r, y2 - r), (r, r), 0, 0, 90, color, thickness)
    cv2.ellipse(img, (x1 + r, y2 - r), (r, r), 90, 0, 90, color, thickness)

    cv2.line(img, (x1 + r, y1), (x2 - r, y1), color, thickness)
    cv2.line(img, (x1 + r, y2), (x2 - r, y2), color, thickness)
    cv2.line(img, (x1, y1 + r), (x1, y2 - r), color, thickness)
    cv2.line(img, (x2, y1 + r), (x2, y2 - r), color, thickness)


class RecognitionService:
    """Threaded face recognition service that broadcasts events to async WebSocket clients."""

    # ===================================================================
    # PRIVACY TRADEOFF — Capture Device Pairing
    # ===================================================================
    # With the remote-frame injection feature (inject_remote_frame),
    # raw camera video leaves the capture device and travels peer-to-peer
    # over the local network to the compute device BEFORE face recognition
    # runs. This is a step back from the previous architecture where video
    # never left the device with the camera.
    #
    # The tradeoff is accepted because:
    #   - Wearable/glasses hardware lacks compute for on-device recognition
    #   - WebRTC is encrypted (DTLS-SRTP) and peer-to-peer (no cloud relay)
    #   - Limited to same-LAN only (no TURN server configured)
    #
    # Revisit when on-device inference becomes viable for glasses-class HW.
    # ===================================================================

    # How long (seconds) before we consider the remote stream dead and
    # fall back to the local webcam automatically.
    _REMOTE_TIMEOUT_SEC: float = 3.0

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
        self._thread: Optional[threading.Thread] = None
        self._running: bool = False
        self._camera_available: bool = False

        self._subscribers: Set[asyncio.Queue] = set()
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        self._lock = threading.Lock()

        self._latest_bgr_frame: Optional[np.ndarray] = None
        self._frame_lock = threading.Lock()

        # ----- Remote capture-device pairing state -----
        # When a wearable camera is paired via WebRTC, the browser-side
        # relay extracts JPEG frames and POSTs them to /api/remote_frame.
        # Those frames are decoded and written into _latest_bgr_frame by
        # inject_remote_frame(), and the recognition loop skips local
        # webcam reads while the remote stream is active.
        #
        # >>> THIS IS THE SOURCE SWAP — the exact point where the video
        # >>> feed switches from local webcam to the remote capture device.
        self._remote_active: bool = False
        self._remote_last_seen: float = 0.0  # time.monotonic() of last frame

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
    # Remote Frame Injection (Capture-Device Pairing)
    # -----------------------------------------------------------------------

    def inject_remote_frame(self, jpeg_bytes: bytes) -> bool:
        """
        Accept a JPEG frame from the browser-side WebRTC relay and write it
        into the shared frame buffer.  The recognition loop will pick it up
        on its next scan cycle — no other pipeline changes needed.

        Returns True on success, False if the JPEG could not be decoded.
        """
        np_arr = np.frombuffer(jpeg_bytes, np.uint8)
        frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        if frame is None:
            return False

        with self._frame_lock:
            self._latest_bgr_frame = frame

        # Mark remote stream as alive so the recognition loop skips
        # local webcam reads (the source swap).
        self._remote_last_seen = time.monotonic()
        if not self._remote_active:
            self._remote_active = True
            logger.info(
                "Remote capture-device stream activated — "
                "local webcam paused while remote frames are flowing."
            )
            self.broadcast_event({"type": "status", "data": self.get_status()})

        return True

    @property
    def _remote_stream_alive(self) -> bool:
        """True if we received a remote frame within the timeout window."""
        if not self._remote_active:
            return False
        return (time.monotonic() - self._remote_last_seen) < self._REMOTE_TIMEOUT_SEC

    def _check_remote_timeout(self) -> None:
        """Auto-fallback: if the remote stream goes silent, resume local webcam."""
        if self._remote_active and not self._remote_stream_alive:
            self._remote_active = False
            logger.info(
                "Remote capture-device stream timed out (>%.1fs silence) — "
                "falling back to local webcam.",
                self._REMOTE_TIMEOUT_SEC,
            )
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

    def start(self) -> None:
        if self._running:
            return

        self._running = True
        self._thread = threading.Thread(target=self._run_loop, name="AnchorFaceService", daemon=True)
        self._thread.start()
        logger.info("Recognition service thread launched.")

    def stop(self) -> None:
        self._running = False
        if self._recognizer:
            self._recognizer.stop()
        if self._thread and self._thread.is_alive():
            self._thread.join(timeout=2.0)
        self._thread = None
        logger.info("Recognition service stopped.")

    def _run_loop(self) -> None:
        """Worker thread loop managing camera and recognizer.

        SOURCE SWAP POINT — When _remote_active is True, this loop skips
        cap.read() and instead picks up frames written by
        inject_remote_frame() into _latest_bgr_frame.  The downstream
        recognition pipeline (_process_frame / _update_state) is identical
        regardless of where the frame came from.
        """
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
            frame_scale=0.5,
            camera_index=self.camera_index,
            on_recognized=self._on_recognized,
            on_unrecognized=self._on_unrecognized,
        )

        try:
            if not os.path.exists(MODEL_PATH):
                logger.info("FaceLandmarker model not found at %s. Downloading...", MODEL_PATH)
                try:
                    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
                    import urllib.request
                    urllib.request.urlretrieve(
                        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
                        MODEL_PATH,
                    )
                    logger.info("FaceLandmarker model downloaded successfully.")
                except Exception as dl_err:
                    logger.error("Failed to auto-download FaceLandmarker model: %s", dl_err)
                    self._camera_available = False
                    self.broadcast_event({"type": "status", "data": self.get_status()})
                    return

            from mediapipe.tasks.python import BaseOptions
            from mediapipe.tasks.python.vision import (
                FaceLandmarker,
                FaceLandmarkerOptions,
                RunningMode,
            )

            options = FaceLandmarkerOptions(
                base_options=BaseOptions(model_asset_path=MODEL_PATH),
                running_mode=RunningMode.IMAGE,
                num_faces=1,
                min_face_detection_confidence=0.5,
                min_face_presence_confidence=0.5,
                min_tracking_confidence=0.5,
            )
            landmarker = FaceLandmarker.create_from_options(options)
            self._recognizer._landmarker = landmarker

            cap = cv2.VideoCapture(self.camera_index, cv2.CAP_DSHOW)
            if not cap.isOpened():
                cap = cv2.VideoCapture(self.camera_index)

            if not cap.isOpened():
                logger.warning("Webcam index %d not accessible; running in simulation/standby mode.", self.camera_index)
                self._camera_available = False
                self.broadcast_event({"type": "status", "data": self.get_status()})
                landmarker.close()
                return

            self._camera_available = True
            self.broadcast_event({"type": "status", "data": self.get_status()})

            last_scan_time: float = 0.0

            while self._running:
                # -------------------------------------------------------
                # SOURCE SWAP: skip local webcam when remote is active.
                # Remote frames are injected directly into
                # self._latest_bgr_frame by inject_remote_frame().
                # -------------------------------------------------------
                if self._remote_stream_alive:
                    # Remote capture device is streaming — use its frames.
                    with self._frame_lock:
                        frame = (
                            self._latest_bgr_frame.copy()
                            if self._latest_bgr_frame is not None
                            else None
                        )
                    if frame is None:
                        time.sleep(0.03)
                        continue
                else:
                    # Check if remote just timed out → log fallback.
                    self._check_remote_timeout()

                    # Normal path: read from the local webcam.
                    ret, frame = cap.read()
                    if not ret:
                        time.sleep(0.05)
                        continue

                    with self._frame_lock:
                        self._latest_bgr_frame = frame.copy()

                now = time.monotonic()
                if now - last_scan_time < self.scan_interval_sec:
                    time.sleep(0.03)
                    continue
                last_scan_time = now

                match_id = self._recognizer._process_frame(frame)
                self._recognizer._update_state(match_id)

        except Exception as e:
            logger.error("Error in recognition loop: %s", e, exc_info=True)
        finally:
            if 'cap' in locals() and cap.isOpened():
                cap.release()
            if self._recognizer and self._recognizer._landmarker:
                self._recognizer._landmarker.close()
                self._recognizer._landmarker = None
            self._camera_available = False
            self._running = False
            self.broadcast_event({"type": "status", "data": self.get_status()})

    def capture_and_register_face(self, person_id: str, image_base64: Optional[str] = None) -> Dict[str, Any]:
        """Compute biometric face encoding from image or current live camera frame."""
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

        from mediapipe.tasks.python import BaseOptions
        from mediapipe.tasks.python.vision import (
            FaceLandmarker,
            FaceLandmarkerOptions,
            RunningMode,
        )

        options = FaceLandmarkerOptions(
            base_options=BaseOptions(model_asset_path=MODEL_PATH),
            running_mode=RunningMode.IMAGE,
            num_faces=1,
            min_face_detection_confidence=0.4,
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

    def get_latest_frame_jpeg(self) -> Optional[bytes]:
        """Return the latest camera frame encoded as JPEG with visual face bounding boxes."""
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

        det: Optional[DetectionResult] = (
            self._recognizer.last_detection if self._recognizer else None
        )

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
                if len(self.storage.list_profiles()) == 0 or len(self._recognizer._known_encodings) == 0:
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

        cv2.rectangle(frame, (0, h - 30), (w, h), (18, 28, 22), -1)
        enrolled_count = len(self._recognizer._known_encodings) if self._recognizer else 0
        status_text = f"Anchor Live Vision • {enrolled_count} Face Encodings Enrolled"
        cv2.putText(frame, status_text, (16, h - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (160, 200, 180), 1, cv2.LINE_AA)

        ret, jpeg = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), 80])
        if ret:
            return jpeg.tobytes()
        return None

    def simulate_recognized(self, person_id: str) -> None:
        logger.info("Simulating arrival for: %s", person_id)
        self._on_recognized(person_id)

    def simulate_unrecognized(self) -> None:
        logger.info("Simulating departure.")
        self._on_unrecognized()
