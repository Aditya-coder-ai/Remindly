"""
anchor_face.service
===================

Background worker and coordinator for Anchor's real-time face recognition.
Bridges MediaPipe FaceRecognizer events with asynchronous WebSocket broadcasts,
manages camera lifecycle, and handles interactive face registration.
"""

from __future__ import annotations

import asyncio
import base64
import logging
import os
import threading
import time
from typing import Any, Callable, Dict, List, Optional, Set

import cv2
import numpy as np

from .recognizer import (
    FaceRecognizer,
    PersonRecord,
    compute_encoding,
    _MODEL_PATH,
)
from .storage import PersonProfile, RosterStorage

logger = logging.getLogger(__name__)


class RecognitionService:
    """Threaded face recognition service that broadcasts events to async WebSocket clients."""

    def __init__(
        self,
        storage: Optional[RosterStorage] = None,
        camera_index: int = 0,
        tolerance: float = 0.45,
        scan_interval_sec: float = 0.4,
    ):
        self.storage = storage or RosterStorage()
        self.camera_index = camera_index
        self.tolerance = tolerance
        self.scan_interval_sec = scan_interval_sec

        self._recognizer: Optional[FaceRecognizer] = None
        self._thread: Optional[threading.Thread] = None
        self._running: bool = False
        self._camera_available: bool = False
        self._last_status: Dict[str, Any] = {
            "active": False,
            "camera_available": False,
            "current_person": None,
            "roster_count": len(self.storage.list_profiles()),
            "last_seen_time": None,
        }

        # WebSocket subscriber queues
        self._subscribers: Set[asyncio.Queue] = set()
        self._loop: Optional[asyncio.AbstractEventLoop] = None
        self._lock = threading.Lock()

        # Shared frame for face registration snapshots
        self._latest_bgr_frame: Optional[np.ndarray] = None
        self._frame_lock = threading.Lock()

    def set_event_loop(self, loop: asyncio.AbstractEventLoop) -> None:
        self._loop = loop

    def register_subscriber(self) -> asyncio.Queue:
        q: asyncio.Queue = asyncio.Queue()
        with self._lock:
            self._subscribers.add(q)
        # Send current status immediately
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
            "current_person": (
                self._recognizer.confirmed_person
                if (self._recognizer and self._running)
                else None
            ),
            "roster_count": len(self.storage.list_profiles()),
            "timestamp": time.time(),
        }

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

    # -----------------------------------------------------------------------
    # Lifecycle
    # -----------------------------------------------------------------------

    def reload_roster(self) -> None:
        """Update recognizer roster with newest encodings from storage."""
        if not self._recognizer:
            return
        records = self.storage.get_person_records()
        self._recognizer._roster = records
        self._recognizer._known_encodings = []
        self._recognizer._known_ids = []
        for person in records:
            for enc in person.encodings:
                self._recognizer._known_encodings.append(enc)
                self._recognizer._known_ids.append(person.person_id)
        logger.info("Reloaded recognizer roster (%d encodings total).", len(self._recognizer._known_encodings))

    def start(self) -> None:
        """Start the recognition loop in a dedicated background worker."""
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
        """Worker thread loop managing camera and recognizer."""
        roster_records = self.storage.get_person_records()

        self._recognizer = FaceRecognizer(
            roster=roster_records,
            tolerance=self.tolerance,
            enter_streak=2,
            exit_streak=3,
            scan_interval_sec=self.scan_interval_sec,
            frame_scale=0.5,
            camera_index=self.camera_index,
            on_recognized=self._on_recognized,
            on_unrecognized=self._on_unrecognized,
        )

        try:
            # Ensure model file exists (auto-download if missing)
            if not os.path.exists(_MODEL_PATH):
                logger.info("FaceLandmarker model not found at %s. Downloading...", _MODEL_PATH)
                try:
                    import urllib.request
                    urllib.request.urlretrieve(
                        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
                        _MODEL_PATH,
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
                base_options=BaseOptions(model_asset_path=_MODEL_PATH),
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
                ret, frame = cap.read()
                if not ret:
                    time.sleep(0.1)
                    continue

                with self._frame_lock:
                    self._latest_bgr_frame = frame.copy()

                now = time.monotonic()
                if now - last_scan_time < self.scan_interval_sec:
                    time.sleep(0.05)
                    continue
                last_scan_time = now

                # Run detection & update state
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

    # -----------------------------------------------------------------------
    # Registration & Snapshots
    # -----------------------------------------------------------------------

    def capture_and_register_face(self, person_id: str, image_base64: Optional[str] = None) -> Dict[str, Any]:
        """Compute face encoding from either uploaded image or current live frame."""
        frame: Optional[np.ndarray] = None

        if image_base64:
            try:
                # Strip data URL prefix if present
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
            return {"success": False, "error": "No camera frame or image provided"}

        # Need a temporary landmarker if recognizer is not running
        from mediapipe.tasks.python import BaseOptions
        from mediapipe.tasks.python.vision import (
            FaceLandmarker,
            FaceLandmarkerOptions,
            RunningMode,
        )

        options = FaceLandmarkerOptions(
            base_options=BaseOptions(model_asset_path=_MODEL_PATH),
            running_mode=RunningMode.IMAGE,
            num_faces=1,
        )
        landmarker = FaceLandmarker.create_from_options(options)
        try:
            encoding = compute_encoding(frame, landmarker)
        finally:
            landmarker.close()

        if encoding is None:
            return {"success": False, "error": "No face detected. Please ensure clear lighting and face the camera directly."}

        added = self.storage.add_encoding(person_id, encoding)
        if added:
            self.reload_roster()
            return {"success": True, "message": f"Successfully registered face encoding for {person_id}."}
        return {"success": False, "error": f"Person '{person_id}' not found in roster."}

    def get_latest_frame_jpeg(self) -> Optional[bytes]:
        """Return the latest camera frame encoded as JPEG bytes for web streaming."""
        with self._frame_lock:
            if self._latest_bgr_frame is not None:
                frame = self._latest_bgr_frame.copy()
            else:
                frame = None

        if frame is None:
            # Generate an informative standby canvas so the browser stream never hangs
            standby = np.zeros((480, 640, 3), dtype=np.uint8)
            standby[:] = (26, 32, 28)  # Deep calm dark green/slate
            
            # Draw subtle grid/frame border
            cv2.rectangle(standby, (10, 10), (630, 470), (45, 60, 50), 1)
            
            # Status text
            cv2.putText(
                standby,
                "ANCHOR REAL-TIME VISION",
                (180, 210),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.65,
                (140, 190, 155),
                2,
                cv2.LINE_AA,
            )
            
            if self._recognizer and self._recognizer.confirmed_person:
                p_id = self._recognizer.confirmed_person
                p = self.storage.get_profile(p_id)
                name = p.name if p else p_id.capitalize()
                cv2.putText(
                    standby,
                    f"Visitor Detected: {name}",
                    (195, 255),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (80, 220, 120),
                    2,
                    cv2.LINE_AA,
                )
            else:
                cv2.putText(
                    standby,
                    "Camera Standby / Simulation Mode Active",
                    (150, 250),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.5,
                    (160, 170, 165),
                    1,
                    cv2.LINE_AA,
                )
                cv2.putText(
                    standby,
                    "Simulate visits or connect webcam to view live feed",
                    (135, 280),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.42,
                    (110, 125, 120),
                    1,
                    cv2.LINE_AA,
                )

            ret, jpeg = cv2.imencode(".jpg", standby, [int(cv2.IMWRITE_JPEG_QUALITY), 80])
            return jpeg.tobytes() if ret else None

        # Add recognition indicator overlay
        if self._recognizer and self._recognizer.confirmed_person:
            person = self.storage.get_profile(self._recognizer.confirmed_person)
            name = person.name if person else self._recognizer.confirmed_person
            cv2.putText(
                frame,
                f"Recognized: {name}",
                (20, 45),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.9,
                (0, 220, 100),
                2,
                cv2.LINE_AA,
            )

        ret, jpeg = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), 75])
        if ret:
            return jpeg.tobytes()
        return None

    # -----------------------------------------------------------------------
    # Simulation & Test Hooks
    # -----------------------------------------------------------------------

    def simulate_recognized(self, person_id: str) -> None:
        """Simulate person arrival for testing/demo without webcam."""
        logger.info("Simulating arrival for: %s", person_id)
        self._on_recognized(person_id)

    def simulate_unrecognized(self) -> None:
        """Simulate person departure for testing/demo without webcam."""
        logger.info("Simulating departure.")
        self._on_unrecognized()
