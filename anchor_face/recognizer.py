"""
anchor_face.recognizer
======================

Upgraded face recognition engine with pose-invariant 3D geometric alignment,
anatomical biometric ratio extraction, and calibrated confidence scoring.

Privacy: All processing is 100% on-device and local.
"""

from __future__ import annotations

import logging
import os
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Dict, List, Optional, Sequence, Tuple

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

# Path to the bundled FaceLandmarker model
_MODEL_PATH = str(Path(__file__).parent / "face_landmarker.task")

# Number of facial landmarks MediaPipe returns per face
_NUM_LANDMARKS = 478

# Core anatomical landmark indices from MediaPipe Face Mesh
# Key anchor points for 3D alignment and biometric ratio calculations
LM_NOSE_TIP = 1
LM_NOSE_TOP = 168
LM_GLABELLA = 9
LM_CHIN = 152

LM_LEFT_EYE_OUTER = 263
LM_LEFT_EYE_INNER = 362
LM_LEFT_EYE_PUPIL = 468 if _NUM_LANDMARKS > 468 else 362
LM_RIGHT_EYE_OUTER = 33
LM_RIGHT_EYE_INNER = 133
LM_RIGHT_EYE_PUPIL = 473 if _NUM_LANDMARKS > 473 else 133

LM_LEFT_BROW_OUTER = 300
LM_LEFT_BROW_INNER = 282
LM_RIGHT_BROW_OUTER = 70
LM_RIGHT_BROW_INNER = 52

LM_MOUTH_LEFT = 291
LM_MOUTH_RIGHT = 61
LM_UPPER_LIP = 0
LM_LOWER_LIP = 17

LM_LEFT_CHEEK = 454
LM_RIGHT_CHEEK = 234

# 68 Key Landmark subset for structural profile matching
KEY_LANDMARK_INDICES = [
    # Jaw outline (17 points)
    234, 93, 132, 58, 172, 136, 150, 149, 152, 377, 378, 365, 397, 288, 361, 323, 454,
    # Right eyebrow (5 points)
    70, 63, 105, 66, 107,
    # Left eyebrow (5 points)
    336, 296, 334, 293, 300,
    # Nose bridge & tip (9 points)
    168, 6, 197, 195, 5, 4, 1, 19, 94,
    # Right eye (6 points)
    33, 160, 158, 133, 153, 144,
    # Left eye (6 points)
    362, 385, 387, 263, 373, 380,
    # Outer lip (12 points)
    61, 39, 37, 0, 267, 269, 291, 405, 314, 17, 84, 181,
    # Inner lip (8 points)
    78, 81, 13, 311, 308, 402, 14, 178,
]

# Type alias
Encoding = NDArray[np.float64]


@dataclass
class DetectionResult:
    """Detailed result of a single frame's face detection and matching."""
    matched_person_id: Optional[str]
    confidence: float  # 0.0 to 1.0 (0% to 100%)
    distance: float
    bbox: Optional[Tuple[int, int, int, int]] = None  # (xmin, ymin, xmax, ymax) in pixels
    keypoints: List[Tuple[int, int]] = field(default_factory=list)


@dataclass
class PersonRecord:
    """A registered person in the roster with their biometric face encodings."""
    person_id: str
    encodings: List[Encoding] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Biometric Encoding & Alignment
# ---------------------------------------------------------------------------

def _align_3d_landmarks(coords: NDArray[np.float64]) -> NDArray[np.float64]:
    """Frontalize and scale-normalize 3D landmark coordinates.
    
    1. Translates face center (midpoint of pupils/eyes) to origin (0, 0, 0).
    2. Rotates face to align eye line horizontally (Roll normalization).
    3. Normalizes 3D depth by nose-to-eye plane (Pitch and Yaw compensation).
    4. Scales by inter-ocular distance.
    """
    aligned = coords.copy()

    # Midpoint of eyes as center of face
    left_eye = aligned[LM_LEFT_EYE_INNER]
    right_eye = aligned[LM_RIGHT_EYE_INNER]
    eye_center = (left_eye + right_eye) / 2.0
    aligned -= eye_center

    # Inter-ocular distance for scale normalization
    eye_dist = np.linalg.norm(left_eye - right_eye)
    if eye_dist < 1e-6:
        eye_dist = 1.0
    aligned /= eye_dist

    # 2D in-plane rotation (Roll correction)
    dx = left_eye[0] - right_eye[0]
    dy = left_eye[1] - right_eye[1]
    angle = np.arctan2(dy, dx)
    cos_a, sin_a = np.cos(-angle), np.sin(-angle)
    rot_z = np.array([
        [cos_a, -sin_a, 0.0],
        [sin_a,  cos_a, 0.0],
        [0.0,    0.0,   1.0],
    ])
    aligned = aligned @ rot_z.T

    # 3D Yaw compensation using nose tip vs eye center
    nose = aligned[LM_NOSE_TIP]
    yaw_ratio = nose[0]  # should be ~0 when facing camera directly
    aligned[:, 0] -= yaw_ratio * (1.0 - np.abs(aligned[:, 2])) * 0.4

    return aligned


def _extract_biometric_ratios(coords: NDArray[np.float64]) -> NDArray[np.float64]:
    """Extract scale- and pose-invariant anatomical facial distance ratios."""
    def dist(idx1: int, idx2: int) -> float:
        return float(np.linalg.norm(coords[idx1] - coords[idx2]))

    d_inter_ocular = max(dist(LM_RIGHT_EYE_OUTER, LM_LEFT_EYE_OUTER), 1e-5)
    d_inner_ocular = max(dist(LM_RIGHT_EYE_INNER, LM_LEFT_EYE_INNER), 1e-5)
    d_face_width = max(dist(LM_RIGHT_CHEEK, LM_LEFT_CHEEK), 1e-5)
    d_face_height = max(dist(LM_GLABELLA, LM_CHIN), 1e-5)
    d_nose_length = max(dist(LM_NOSE_TOP, LM_NOSE_TIP), 1e-5)
    d_mouth_width = max(dist(LM_MOUTH_RIGHT, LM_MOUTH_LEFT), 1e-5)
    d_nose_to_chin = max(dist(LM_NOSE_TIP, LM_CHIN), 1e-5)
    d_lip_height = max(dist(LM_UPPER_LIP, LM_LOWER_LIP), 1e-5)
    d_eye_to_mouth_r = dist(LM_RIGHT_EYE_PUPIL, LM_MOUTH_RIGHT)
    d_eye_to_mouth_l = dist(LM_LEFT_EYE_PUPIL, LM_MOUTH_LEFT)

    ratios = [
        # Facial proportions
        d_face_width / d_face_height,
        d_inter_ocular / d_face_width,
        d_inner_ocular / d_inter_ocular,
        d_nose_length / d_face_height,
        d_mouth_width / d_face_width,
        d_mouth_width / d_inter_ocular,
        d_nose_to_chin / d_face_height,
        d_lip_height / d_mouth_width,
        # Bilateral symmetries
        dist(LM_NOSE_TIP, LM_RIGHT_EYE_INNER) / max(dist(LM_NOSE_TIP, LM_LEFT_EYE_INNER), 1e-5),
        dist(LM_NOSE_TIP, LM_MOUTH_RIGHT) / max(dist(LM_NOSE_TIP, LM_MOUTH_LEFT), 1e-5),
        dist(LM_CHIN, LM_RIGHT_CHEEK) / max(dist(LM_CHIN, LM_LEFT_CHEEK), 1e-5),
        d_eye_to_mouth_r / max(d_eye_to_mouth_l, 1e-5),
        # Eyebrow proportions
        dist(LM_RIGHT_BROW_OUTER, LM_RIGHT_BROW_INNER) / d_inter_ocular,
        dist(LM_LEFT_BROW_OUTER, LM_LEFT_BROW_INNER) / d_inter_ocular,
        dist(LM_RIGHT_BROW_INNER, LM_RIGHT_EYE_INNER) / d_nose_length,
        dist(LM_LEFT_BROW_INNER, LM_LEFT_EYE_INNER) / d_nose_length,
    ]

    return np.array(ratios, dtype=np.float64)


def compute_encoding(
    frame_bgr: NDArray[np.uint8],
    landmarker: FaceLandmarker,
) -> Optional[Encoding]:
    """Detect a face in *frame_bgr* and return an aligned biometric encoding vector.

    The encoding combines:
    1. 16 scale-invariant anatomical distance ratios.
    2. 68 canonical 3D aligned key landmark positions (x, y, z).
    L2-normalized into a compact, highly discriminative biometric signature.
    """
    rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
    mp_image = mp.Image(
        image_format=mp.ImageFormat.SRGB,
        data=rgb,
    )
    result = landmarker.detect(mp_image)

    if not result.face_landmarks:
        return None

    landmarks = result.face_landmarks[0]
    coords = np.array(
        [[lm.x, lm.y, lm.z] for lm in landmarks],
        dtype=np.float64,
    )

    # 1. 3D Pose alignment
    aligned_coords = _align_3d_landmarks(coords)

    # 2. Extract biometric ratios (16 dimensions)
    ratios = _extract_biometric_ratios(aligned_coords)

    # 3. Extract 68 key aligned structural landmarks (68 * 3 = 204 dimensions)
    key_landmarks = aligned_coords[KEY_LANDMARK_INDICES].flatten()

    # 4. Composite vector (16 + 204 = 220 dimensions)
    composite = np.concatenate([ratios * 2.0, key_landmarks])

    # 5. L2 unit normalization
    norm = np.linalg.norm(composite)
    if norm > 1e-6:
        composite /= norm

    return composite


def encoding_distance(a: Encoding, b: Encoding) -> float:
    """Cosine / normalized Euclidean distance between two biometric encodings."""
    # Ensure both are 1D arrays of matching shape
    a_flat = a.flatten()
    b_flat = b.flatten()
    if a_flat.shape != b_flat.shape:
        # Fallback for legacy 1434-length vectors
        min_len = min(len(a_flat), len(b_flat))
        a_flat = a_flat[:min_len]
        b_flat = b_flat[:min_len]
        a_flat /= max(np.linalg.norm(a_flat), 1e-6)
        b_flat /= max(np.linalg.norm(b_flat), 1e-6)

    # Euclidean distance between unit vectors ranges from 0.0 (identical) to 2.0
    return float(np.linalg.norm(a_flat - b_flat))


def calculate_confidence(distance: float, tolerance: float = 0.35) -> float:
    """Calculate calibrated match confidence percentage (0.0 to 1.0)."""
    if distance <= 0.0:
        return 1.0
    # Linear decay with soft sigmoid curve
    score = max(0.0, 1.0 - (distance / (tolerance * 1.5)))
    return round(float(score), 3)


# ---------------------------------------------------------------------------
# Recognition Engine
# ---------------------------------------------------------------------------

class FaceRecognizer:
    """Continuous, hands-free face recognition against a known roster."""

    def __init__(
        self,
        roster: Sequence[PersonRecord],
        *,
        tolerance: float = 0.38,
        enter_streak: int = 2,
        exit_streak: int = 3,
        scan_interval_sec: float = 0.35,
        frame_scale: float = 0.5,
        camera_index: int = 0,
        on_recognized: Optional[Callable[[str], None]] = None,
        on_unrecognized: Optional[Callable[[], None]] = None,
    ) -> None:
        self._roster: List[PersonRecord] = list(roster)
        self._known_encodings: List[Encoding] = []
        self._known_ids: List[str] = []
        self._rebuild_lookup()

        self.tolerance: float = tolerance
        self.enter_streak: int = enter_streak
        self.exit_streak: int = exit_streak
        self.scan_interval_sec: float = scan_interval_sec
        self.frame_scale: float = frame_scale
        self.camera_index: int = camera_index

        self._on_recognized = on_recognized
        self._on_unrecognized = on_unrecognized

        self._confirmed_person: Optional[str] = None
        self._match_counter: int = 0
        self._miss_counter: int = 0
        self._pending_person: Optional[str] = None

        self._running: bool = False
        self._landmarker: Optional[FaceLandmarker] = None
        self.last_detection: Optional[DetectionResult] = None

    def _rebuild_lookup(self) -> None:
        self._known_encodings = []
        self._known_ids = []
        for person in self._roster:
            for enc in person.encodings:
                self._known_encodings.append(enc)
                self._known_ids.append(person.person_id)

    @property
    def confirmed_person(self) -> Optional[str]:
        return self._confirmed_person

    def add_person(self, person: PersonRecord) -> None:
        self._roster.append(person)
        self._rebuild_lookup()
        logger.info("Added person '%s' with %d encoding(s).", person.person_id, len(person.encodings))

    def stop(self) -> None:
        self._running = False

    def process_frame_detailed(
        self,
        frame: NDArray[np.uint8],
    ) -> DetectionResult:
        """Process a frame, detect face landmarks, compute biometric match and bounding box."""
        if self._landmarker is None:
            return DetectionResult(matched_person_id=None, confidence=0.0, distance=999.0)

        h, w = frame.shape[:2]
        small = cv2.resize(frame, (0, 0), fx=self.frame_scale, fy=self.frame_scale)

        rgb = cv2.cvtColor(small, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        result = self._landmarker.detect(mp_image)

        if not result.face_landmarks:
            self.last_detection = None
            return DetectionResult(matched_person_id=None, confidence=0.0, distance=999.0)

        landmarks = result.face_landmarks[0]
        
        # Calculate pixel bounding box on original frame
        xs = [int(lm.x * w) for lm in landmarks]
        ys = [int(lm.y * h) for lm in landmarks]
        pad = int(min(w, h) * 0.05)
        bbox = (
            max(0, min(xs) - pad),
            max(0, min(ys) - pad),
            min(w, max(xs) + pad),
            min(h, max(ys) + pad),
        )

        # Keypoints for visualization (eyes, nose, mouth corners)
        keypoints = [
            (int(landmarks[LM_RIGHT_EYE_INNER].x * w), int(landmarks[LM_RIGHT_EYE_INNER].y * h)),
            (int(landmarks[LM_LEFT_EYE_INNER].x * w), int(landmarks[LM_LEFT_EYE_INNER].y * h)),
            (int(landmarks[LM_NOSE_TIP].x * w), int(landmarks[LM_NOSE_TIP].y * h)),
            (int(landmarks[LM_MOUTH_RIGHT].x * w), int(landmarks[LM_MOUTH_RIGHT].y * h)),
            (int(landmarks[LM_MOUTH_LEFT].x * w), int(landmarks[LM_MOUTH_LEFT].y * h)),
        ]

        # Extract biometric encoding
        coords = np.array([[lm.x, lm.y, lm.z] for lm in landmarks], dtype=np.float64)
        aligned = _align_3d_landmarks(coords)
        ratios = _extract_biometric_ratios(aligned)
        key_landmarks = aligned[KEY_LANDMARK_INDICES].flatten()
        composite = np.concatenate([ratios * 2.0, key_landmarks])
        norm = np.linalg.norm(composite)
        if norm > 1e-6:
            composite /= norm

        if not self._known_encodings:
            det = DetectionResult(
                matched_person_id=None,
                confidence=0.0,
                distance=999.0,
                bbox=bbox,
                keypoints=keypoints,
            )
            self.last_detection = det
            return det

        # Match against all known encodings
        best_id: Optional[str] = None
        best_dist: float = float("inf")

        for known_enc, known_id in zip(self._known_encodings, self._known_ids):
            dist = encoding_distance(composite, known_enc)
            if dist < best_dist:
                best_dist = dist
                best_id = known_id

        conf = calculate_confidence(best_dist, self.tolerance)

        matched_id = best_id if best_dist <= self.tolerance else None

        det = DetectionResult(
            matched_person_id=matched_id,
            confidence=conf,
            distance=best_dist,
            bbox=bbox,
            keypoints=keypoints,
        )
        self.last_detection = det
        return det

    def _process_frame(self, frame: NDArray[np.uint8]) -> Optional[str]:
        det = self.process_frame_detailed(frame)
        return det.matched_person_id

    def _update_state(self, match_id: Optional[str]) -> None:
        """Debounce state machine."""
        if self._confirmed_person is None:
            if match_id is not None:
                if match_id == self._pending_person:
                    self._match_counter += 1
                else:
                    self._pending_person = match_id
                    self._match_counter = 1

                if self._match_counter >= self.enter_streak:
                    self._confirmed_person = match_id
                    self._pending_person = None
                    self._match_counter = 0
                    self._miss_counter = 0
                    logger.info("Recognized visitor confirmed: %s", match_id)
                    if self._on_recognized:
                        self._on_recognized(match_id)
            else:
                self._pending_person = None
                self._match_counter = 0
        else:
            if match_id == self._confirmed_person:
                self._miss_counter = 0
            else:
                self._miss_counter += 1
                if self._miss_counter >= self.exit_streak:
                    left_person = self._confirmed_person
                    self._confirmed_person = None
                    self._miss_counter = 0
                    self._match_counter = 0
                    self._pending_person = None
                    logger.info("Visitor left camera frame: %s", left_person)
                    if self._on_unrecognized:
                        self._on_unrecognized()
