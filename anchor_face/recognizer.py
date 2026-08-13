"""
anchor_face.recognizer
======================

Core recognition engine.  ``FaceRecognizer`` owns the camera loop,
detects faces using MediaPipe's FaceLandmarker, extracts a geometric
encoding from 478 3D face landmarks, and compares it against a
pre-computed roster of known encodings.

Debounced ``on_recognized`` / ``on_unrecognized`` events ensure the
rest of Anchor never sees per-frame flicker.

Privacy: everything runs on-device — no frames or encodings leave the
machine.  The FaceLandmarker model is bundled locally.

NOTE: The original spec called for ``face_recognition`` (dlib), but
dlib requires CMake + a C++ compiler and has no pre-built wheel for
Python 3.14.  MediaPipe 1.0 installs cleanly via pip on all platforms
and provides equivalent face detection + landmark extraction.  We derive
a geometric encoding from the normalised 3D landmarks — this is less
discriminative than a deep-learned 128-d embedding, but works well for
the small-roster, single-camera scenario Anchor targets.
"""

from __future__ import annotations

import logging
import os
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, List, Optional, Sequence

import cv2
import mediapipe as mp
import numpy as np
from mediapipe.tasks.python import BaseOptions
from mediapipe.tasks.python.vision import (
    FaceLandmarker,
    FaceLandmarkerOptions,
    RunningMode,
)
from numpy.typing import NDArray

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

# Path to the bundled FaceLandmarker model (downloaded once, lives with the
# package so nothing is fetched at runtime).
_MODEL_PATH = str(Path(__file__).parent / "face_landmarker.task")

# Number of facial landmarks MediaPipe returns per face.
_NUM_LANDMARKS = 478

# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

# A flattened vector of landmark (x, y, z) coordinates, centred and scaled.
Encoding = NDArray[np.float64]


@dataclass
class PersonRecord:
    """A registered person in the roster.

    Attributes
    ----------
    person_id : str
        Unique identifier / display name (e.g. ``"daughter_priya"``).
    encodings : list[Encoding]
        One or more geometric face encodings computed **once** at
        registration time and reused on every scan.  More encodings
        → better recall across angles and lighting.
    """

    person_id: str
    encodings: List[Encoding] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Encoding helpers
# ---------------------------------------------------------------------------


def compute_encoding(
    frame_bgr: NDArray[np.uint8],
    landmarker: FaceLandmarker,
) -> Optional[Encoding]:
    """Detect a face in *frame_bgr* and return a geometric encoding.

    The encoding is a 1-D array of ``_NUM_LANDMARKS * 3`` floats
    representing the normalised, centred, and scale-invariant (x, y, z)
    landmark positions.  Returns ``None`` if no face is detected.
    """
    rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
    mp_image = mp.Image(
        image_format=mp.ImageFormat.SRGB,
        data=rgb,
    )
    result = landmarker.detect(mp_image)

    if not result.face_landmarks:
        return None

    # Take the first (largest/most-prominent) face.
    landmarks = result.face_landmarks[0]
    coords = np.array(
        [[lm.x, lm.y, lm.z] for lm in landmarks],
        dtype=np.float64,
    )  # shape (_NUM_LANDMARKS, 3)

    # Centre on the nose tip (landmark 1) and normalise by inter-ocular
    # distance (landmarks 33 = right eye inner, 263 = left eye inner) to
    # make the encoding translation- and scale-invariant.
    nose = coords[1]
    coords -= nose

    eye_dist = np.linalg.norm(coords[33] - coords[263])
    if eye_dist > 1e-6:
        coords /= eye_dist

    return coords.flatten()


def encoding_distance(a: Encoding, b: Encoding) -> float:
    """Euclidean distance between two geometric encodings."""
    return float(np.linalg.norm(a - b))


# ---------------------------------------------------------------------------
# Recognition engine
# ---------------------------------------------------------------------------


class FaceRecognizer:
    """Continuous, hands-free face recognition against a known roster.

    Parameters
    ----------
    roster : Sequence[PersonRecord]
        Pre-registered people with their face encodings.
    tolerance : float
        Maximum encoding distance to count as a match (lower ⟹ stricter).
        Geometric landmark encodings typically range 0–2; default 0.45
        is a reasonable starting point for a small roster.
    enter_streak : int
        How many consecutive matching frames are required before
        ``on_recognized`` fires (debounce for entering "confirmed" state).
    exit_streak : int
        How many consecutive non-matching frames are required before
        ``on_unrecognized`` fires (debounce for leaving "confirmed" state).
    scan_interval_sec : float
        Minimum wall-clock seconds between full face-detection passes.
        Frames captured in between are discarded to save CPU.
    frame_scale : float
        Factor to resize each frame before detection (0 < scale ≤ 1).
        Smaller ⟹ faster but less accurate at distance.
    camera_index : int
        ``cv2.VideoCapture`` device index (0 = default webcam).
    on_recognized : callable, optional
        ``fn(person_id: str) -> None`` — called once when a person's
        presence is confirmed.
    on_unrecognized : callable, optional
        ``fn() -> None`` — called once when the confirmed person has
        left frame.  This is the hook where Anchor would stop STT and
        send the transcript for summarisation (handled elsewhere).
    """

    # ---- construction ----

    def __init__(
        self,
        roster: Sequence[PersonRecord],
        *,
        tolerance: float = 0.45,
        enter_streak: int = 3,
        exit_streak: int = 4,
        scan_interval_sec: float = 0.5,
        frame_scale: float = 0.5,
        camera_index: int = 0,
        on_recognized: Optional[Callable[[str], None]] = None,
        on_unrecognized: Optional[Callable[[], None]] = None,
    ) -> None:
        # ---- roster ----
        self._roster: List[PersonRecord] = list(roster)
        # Pre-collect all known encodings and their person-ids into
        # parallel lists so matching is a single pass.
        self._known_encodings: List[Encoding] = []
        self._known_ids: List[str] = []
        for person in self._roster:
            for enc in person.encodings:
                self._known_encodings.append(enc)
                self._known_ids.append(person.person_id)

        # ---- tuning knobs (all configurable, no magic numbers) ----
        self.tolerance: float = tolerance
        self.enter_streak: int = enter_streak
        self.exit_streak: int = exit_streak
        self.scan_interval_sec: float = scan_interval_sec
        self.frame_scale: float = frame_scale
        self.camera_index: int = camera_index

        # ---- callbacks ----
        self._on_recognized = on_recognized
        self._on_unrecognized = on_unrecognized

        # ---- debounce state ----
        self._confirmed_person: Optional[str] = None  # person_id or None
        self._match_counter: int = 0   # consecutive frames with same match
        self._miss_counter: int = 0    # consecutive frames with no match
        self._pending_person: Optional[str] = None  # candidate building streak

        # ---- run control ----
        self._running: bool = False

        # ---- MediaPipe landmarker (initialised in start()) ----
        self._landmarker: Optional[FaceLandmarker] = None

    # ---- public helpers ----

    @property
    def confirmed_person(self) -> Optional[str]:
        """The person_id currently confirmed in-frame, or ``None``."""
        return self._confirmed_person

    def add_person(self, person: PersonRecord) -> None:
        """Hot-add a person to the roster while the loop is running."""
        self._roster.append(person)
        for enc in person.encodings:
            self._known_encodings.append(enc)
            self._known_ids.append(person.person_id)
        logger.info("Added person '%s' with %d encoding(s).",
                     person.person_id, len(person.encodings))

    def stop(self) -> None:
        """Signal the capture loop to exit after the current iteration."""
        self._running = False

    # ---- capture loop ----

    def start(self) -> None:
        """Open the camera and run the recognition loop until ``stop()``
        is called or the process is interrupted.

        The loop:
        1. Grabs a frame from the webcam.
        2. If enough time has passed since the last scan, resizes the
           frame and runs face landmark detection.
        3. Computes a geometric encoding and compares it against the
           roster to find the closest match within tolerance.
        4. Feeds the per-frame result into the debounce state machine.
        5. Fires ``on_recognized`` / ``on_unrecognized`` when a state
           transition occurs.
        """
        if not os.path.exists(_MODEL_PATH):
            raise FileNotFoundError(
                f"FaceLandmarker model not found at {_MODEL_PATH}. "
                "Run the download step from the README."
            )

        # Create the MediaPipe FaceLandmarker.
        options = FaceLandmarkerOptions(
            base_options=BaseOptions(model_asset_path=_MODEL_PATH),
            running_mode=RunningMode.IMAGE,
            num_faces=1,
            min_face_detection_confidence=0.5,
            min_face_presence_confidence=0.5,
            min_tracking_confidence=0.5,
        )
        self._landmarker = FaceLandmarker.create_from_options(options)

        cap = cv2.VideoCapture(self.camera_index)
        if not cap.isOpened():
            raise RuntimeError(
                f"Cannot open camera (index {self.camera_index}). "
                "Check that a webcam is connected and not in use by "
                "another application."
            )

        self._running = True
        last_scan_time: float = 0.0

        logger.info(
            "Recognition loop started — tolerance=%.2f, enter_streak=%d, "
            "exit_streak=%d, scan_interval=%.2fs, scale=%.2f",
            self.tolerance, self.enter_streak, self.exit_streak,
            self.scan_interval_sec, self.frame_scale,
        )

        try:
            while self._running:
                ret, frame = cap.read()
                if not ret:
                    logger.warning("Failed to grab frame; retrying…")
                    time.sleep(0.1)
                    continue

                now = time.monotonic()
                if now - last_scan_time < self.scan_interval_sec:
                    # Skip this frame to stay within the scan budget.
                    continue
                last_scan_time = now

                # -- detect & match --
                match_id = self._process_frame(frame)

                # -- debounce --
                self._update_state(match_id)

        except KeyboardInterrupt:
            logger.info("Interrupted — shutting down recognition loop.")
        finally:
            # Clean shutdown: always release the camera and landmarker.
            cap.release()
            if self._landmarker:
                self._landmarker.close()
                self._landmarker = None
            logger.info("Camera released.")

    # ---- internals ----

    def _process_frame(self, frame: NDArray[np.uint8]) -> Optional[str]:
        """Detect a face in *frame*, return the ``person_id`` of the best
        match within tolerance, or ``None`` if nobody is recognised.

        Parameters
        ----------
        frame : ndarray
            A BGR frame straight from ``cv2.VideoCapture.read()``.

        Returns
        -------
        str or None
            The matched person_id, or None.
        """
        assert self._landmarker is not None

        # Resize for speed.
        small = cv2.resize(
            frame,
            (0, 0),
            fx=self.frame_scale,
            fy=self.frame_scale,
        )

        # Compute encoding via MediaPipe landmarks.
        enc = compute_encoding(small, self._landmarker)
        if enc is None:
            return None

        if not self._known_encodings:
            return None

        # Compare against every known encoding and pick the best.
        best_id: Optional[str] = None
        best_dist: float = float("inf")

        for known_enc, known_id in zip(
            self._known_encodings, self._known_ids
        ):
            dist = encoding_distance(enc, known_enc)
            if dist < best_dist:
                best_dist = dist
                best_id = known_id

        if best_dist <= self.tolerance:
            logger.debug("Match: %s (distance %.3f)", best_id, best_dist)
            return best_id

        # Face detected but didn't match anyone — treated as "unknown".
        logger.debug(
            "Face detected but no match (best distance %.3f > tolerance %.2f)",
            best_dist, self.tolerance,
        )
        return None

    def _update_state(self, match_id: Optional[str]) -> None:
        """Debounce state machine.

        We require ``enter_streak`` consecutive frames with the **same**
        person before confirming them, and ``exit_streak`` consecutive
        frames with no match (or a different person) before un-confirming.

        This avoids:
        - Flicker on a passing glance (a single matching frame doesn't
          trigger ``on_recognized``).
        - Premature "left" events when someone briefly looks away or is
          momentarily occluded.

        Parameters
        ----------
        match_id : str or None
            The person_id matched in this frame, or None.
        """
        if self._confirmed_person is None:
            # ---- NOT currently tracking anyone ----
            if match_id is not None:
                if match_id == self._pending_person:
                    self._match_counter += 1
                else:
                    # New candidate — reset streak.
                    self._pending_person = match_id
                    self._match_counter = 1

                if self._match_counter >= self.enter_streak:
                    self._confirmed_person = match_id
                    self._pending_person = None
                    self._match_counter = 0
                    self._miss_counter = 0
                    logger.info("Recognized: %s", match_id)
                    if self._on_recognized:
                        self._on_recognized(match_id)
            else:
                # No face / unknown face — nothing to track yet.
                self._pending_person = None
                self._match_counter = 0

        else:
            # ---- Currently tracking a confirmed person ----
            if match_id == self._confirmed_person:
                # Still seeing them — reset the miss counter.
                self._miss_counter = 0
            else:
                # They're gone (or someone else appeared).
                self._miss_counter += 1

                if self._miss_counter >= self.exit_streak:
                    left_person = self._confirmed_person
                    self._confirmed_person = None
                    self._miss_counter = 0
                    self._match_counter = 0
                    self._pending_person = None
                    logger.info("%s left frame.", left_person)
                    if self._on_unrecognized:
                        self._on_unrecognized()
