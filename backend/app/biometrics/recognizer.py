"""
backend.app.biometrics.recognizer
=================================

Enhanced face recognition engine with aspect-ratio-invariant isotropic geometry,
pose-invariant 3D alignment, anatomical biometric ratio extraction,
Eye Aspect Ratio (EAR) blink detection for passive liveness, differential
feature weighting, margin-based ambiguity rejection, and identity-locked
temporal hysteresis.

Privacy: All processing is 100% on-device and local.
"""

from __future__ import annotations

import collections
import logging
import math
import os
import time
from dataclasses import dataclass, field
from typing import Callable, Deque, Dict, List, Optional, Sequence, Tuple

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

from ..config import (
    DEFAULT_ENTER_STREAK,
    DEFAULT_EXIT_STREAK,
    DEFAULT_SCAN_INTERVAL,
    DEFAULT_TOLERANCE,
    MODEL_PATH,
)

logger = logging.getLogger(__name__)

# Core anatomical landmark indices from MediaPipe Face Mesh
LM_NOSE_TIP = 1
LM_SUBNASALE = 2
LM_NOSE_TOP = 168
LM_GLABELLA = 9
LM_CHIN = 152
LM_SUBLABIALE = 18

LM_LEFT_EYE_OUTER = 263
LM_LEFT_EYE_INNER = 362
LM_LEFT_EYE_TOP = 386
LM_LEFT_EYE_BOTTOM = 374
LM_LEFT_EYE_TOP_2 = 385
LM_LEFT_EYE_BOTTOM_2 = 380
LM_LEFT_EYE_PUPIL = 468

LM_RIGHT_EYE_OUTER = 33
LM_RIGHT_EYE_INNER = 133
LM_RIGHT_EYE_TOP = 159
LM_RIGHT_EYE_BOTTOM = 145
LM_RIGHT_EYE_TOP_2 = 158
LM_RIGHT_EYE_BOTTOM_2 = 153
LM_RIGHT_EYE_PUPIL = 473

LM_LEFT_BROW_OUTER = 300
LM_LEFT_BROW_INNER = 285
LM_LEFT_BROW_PEAK = 334
LM_RIGHT_BROW_OUTER = 70
LM_RIGHT_BROW_INNER = 55
LM_RIGHT_BROW_PEAK = 105

LM_MOUTH_LEFT = 291
LM_MOUTH_RIGHT = 61
LM_UPPER_LIP = 0
LM_LOWER_LIP = 17

LM_LEFT_CHEEK = 454
LM_RIGHT_CHEEK = 234
LM_LEFT_JAW_CORNER = 397
LM_RIGHT_JAW_CORNER = 172
LM_LEFT_ALARE = 331
LM_RIGHT_ALARE = 102

# 36 Key Structural Anchor Landmarks for pose-invariant profile matching
RIGID_ANCHOR_INDICES = [
    LM_GLABELLA, LM_NOSE_TOP, LM_NOSE_TIP, LM_SUBNASALE, LM_CHIN, LM_SUBLABIALE,
    LM_LEFT_EYE_OUTER, LM_LEFT_EYE_INNER, LM_LEFT_EYE_TOP, LM_LEFT_EYE_BOTTOM,
    LM_RIGHT_EYE_OUTER, LM_RIGHT_EYE_INNER, LM_RIGHT_EYE_TOP, LM_RIGHT_EYE_BOTTOM,
    LM_LEFT_BROW_OUTER, LM_LEFT_BROW_INNER, LM_LEFT_BROW_PEAK,
    LM_RIGHT_BROW_OUTER, LM_RIGHT_BROW_INNER, LM_RIGHT_BROW_PEAK,
    LM_LEFT_CHEEK, LM_RIGHT_CHEEK, LM_LEFT_JAW_CORNER, LM_RIGHT_JAW_CORNER,
    LM_LEFT_ALARE, LM_RIGHT_ALARE,
    LM_MOUTH_LEFT, LM_MOUTH_RIGHT, LM_UPPER_LIP, LM_LOWER_LIP,
    # Structural facial contour anchors
    93, 136, 149, 378, 365, 323,
]

# Type alias
Encoding = NDArray[np.float64]


@dataclass
class DetectionResult:
    """Detailed result of a single frame's face detection, matching, and liveness verification."""
    matched_person_id: Optional[str]
    confidence: float  # 0.0 to 1.0 (0% to 100%)
    distance: float
    bbox: Optional[Tuple[int, int, int, int]] = None  # (xmin, ymin, xmax, ymax) in pixels
    keypoints: List[Tuple[int, int]] = field(default_factory=list)
    landmarks_3d: Optional[NDArray[np.float64]] = None
    # Passive Liveness & EAR Metrics
    ear: float = 0.0
    is_live: bool = False
    blink_count: int = 0
    liveness_score: float = 0.0


@dataclass
class PersonRecord:
    """A registered person in the roster with their biometric face encodings."""
    person_id: str
    encodings: List[Encoding] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Eye Aspect Ratio (EAR) & Passive Liveness Tracking
# ---------------------------------------------------------------------------

def calculate_eye_aspect_ratio(coords: NDArray[np.float64]) -> Tuple[float, float, float]:
    """Compute Soukupová-Čech 6-point Eye Aspect Ratio (EAR) for left, right, and average.

    EAR = (||p2 - p6|| + ||p3 - p5||) / (2 * ||p1 - p4||)
    Normal open eye: 0.22 - 0.38
    Closed eye (blink): < 0.17
    """
    def _ear_for_points(p1: int, p2: int, p3: int, p4: int, p5: int, p6: int) -> float:
        # Vertical distances
        d_v1 = float(np.linalg.norm(coords[p2] - coords[p6]))
        d_v2 = float(np.linalg.norm(coords[p3] - coords[p5]))
        # Horizontal distance
        d_h = float(np.linalg.norm(coords[p1] - coords[p4]))
        if d_h < 1e-6:
            return 0.0
        return (d_v1 + d_v2) / (2.0 * d_h)

    # Left eye: 263(outer), 386(top1), 385(top2), 362(inner), 380(bot2), 374(bot1)
    ear_left = _ear_for_points(
        LM_LEFT_EYE_OUTER, LM_LEFT_EYE_TOP, LM_LEFT_EYE_TOP_2,
        LM_LEFT_EYE_INNER, LM_LEFT_EYE_BOTTOM_2, LM_LEFT_EYE_BOTTOM,
    )

    # Right eye: 33(outer), 159(top1), 158(top2), 133(inner), 153(bot2), 145(bot1)
    ear_right = _ear_for_points(
        LM_RIGHT_EYE_OUTER, LM_RIGHT_EYE_TOP, LM_RIGHT_EYE_TOP_2,
        LM_RIGHT_EYE_INNER, LM_RIGHT_EYE_BOTTOM_2, LM_RIGHT_EYE_BOTTOM,
    )

    ear_avg = (ear_left + ear_right) / 2.0
    return ear_left, ear_right, ear_avg


class LivenessTracker:
    """State machine tracking Eye Aspect Ratio (EAR) dynamics and natural blink cycles."""

    EAR_CLOSED_THRESHOLD: float = 0.17
    EAR_OPEN_THRESHOLD: float = 0.20
    MIN_BLINK_FRAMES: int = 1
    MAX_BLINK_FRAMES: int = 7
    LIVENESS_EXPIRY_SEC: float = 12.0

    def __init__(self, history_len: int = 40):
        self._history_len = history_len
        self._ear_history: Deque[float] = collections.deque(maxlen=history_len)
        self._consecutive_closed: int = 0
        self._blink_count: int = 0
        self._last_blink_time: float = 0.0
        self._face_seen_start: float = 0.0
        self._last_update_time: float = 0.0

    def reset(self) -> None:
        self._ear_history.clear()
        self._consecutive_closed = 0
        self._blink_count = 0
        self._last_blink_time = 0.0
        self._face_seen_start = 0.0

    def update(self, current_ear: float) -> Tuple[bool, float, int]:
        """Update tracker with new frame's EAR.

        Returns:
            (is_live: bool, liveness_score: float, blink_count: int)
        """
        now = time.monotonic()
        if self._face_seen_start == 0.0:
            self._face_seen_start = now
        self._last_update_time = now

        self._ear_history.append(current_ear)

        # Blink state machine
        if current_ear < self.EAR_CLOSED_THRESHOLD:
            self._consecutive_closed += 1
        elif current_ear >= self.EAR_OPEN_THRESHOLD:
            if self.MIN_BLINK_FRAMES <= self._consecutive_closed <= self.MAX_BLINK_FRAMES:
                self._blink_count += 1
                self._last_blink_time = now
                logger.debug("Natural eye blink detected (#%d, EAR=%.3f)", self._blink_count, current_ear)
            self._consecutive_closed = 0

        # Liveness verification criteria
        has_recent_blink = (self._blink_count > 0) and ((now - self._last_blink_time) < self.LIVENESS_EXPIRY_SEC)

        # Micro-dynamics variance: real human eyes have natural micro-tremors and saccades
        ear_variance = 0.0
        if len(self._ear_history) >= 10:
            ear_variance = float(np.std(list(self._ear_history)))

        # Natural human variance typically > 0.007 across 20 frames (static photos < 0.002)
        has_natural_variance = ear_variance > 0.007 and (now - self._face_seen_start) > 1.2

        is_live = has_recent_blink or (has_natural_variance and self._blink_count >= 1)

        # Continuous liveness score (0.0 to 1.0)
        score = 0.0
        if self._blink_count > 0:
            time_decay = max(0.0, 1.0 - (now - self._last_blink_time) / self.LIVENESS_EXPIRY_SEC)
            score = 0.5 + 0.5 * time_decay
        elif has_natural_variance:
            score = min(0.65, ear_variance / 0.02)
        else:
            score = min(0.35, (now - self._face_seen_start) / 10.0)

        return is_live, round(score, 3), self._blink_count


# ---------------------------------------------------------------------------
# Biometric Encoding & Alignment
# ---------------------------------------------------------------------------

def _normalize_landmarks_isotropic(
    landmarks: Any,
    width: int,
    height: int,
) -> NDArray[np.float64]:
    """Convert normalized MediaPipe landmarks to isotropic canonical coordinates."""
    ref_dim = float(max(width, height, 1))
    coords = np.empty((len(landmarks), 3), dtype=np.float64)
    for i, lm in enumerate(landmarks):
        coords[i, 0] = (lm.x * width) / ref_dim
        coords[i, 1] = (lm.y * height) / ref_dim
        coords[i, 2] = (lm.z * width) / ref_dim
    return coords


def _align_3d_landmarks(coords: NDArray[np.float64]) -> NDArray[np.float64]:
    """Frontalize and scale-normalize 3D landmark coordinates in isotropic space."""
    aligned = coords.copy()

    # 1. Translate center of eye line to origin (0, 0, 0)
    left_inner = aligned[LM_LEFT_EYE_INNER]
    right_inner = aligned[LM_RIGHT_EYE_INNER]
    left_outer = aligned[LM_LEFT_EYE_OUTER]
    right_outer = aligned[LM_RIGHT_EYE_OUTER]
    eye_center = (left_inner + right_inner) / 2.0
    aligned -= eye_center

    # 2. Scale normalization using bi-ocular breadth
    eye_dist = np.linalg.norm(left_outer - right_outer)
    if eye_dist < 1e-6:
        eye_dist = 1.0
    aligned /= eye_dist

    # 3. Roll correction (2D rotation in XY plane)
    dx = left_outer[0] - right_outer[0]
    dy = left_outer[1] - right_outer[1]
    roll_angle = np.arctan2(dy, dx)
    cos_r, sin_r = np.cos(-roll_angle), np.sin(-roll_angle)
    rot_z = np.array([
        [cos_r, -sin_r, 0.0],
        [sin_r,  cos_r, 0.0],
        [0.0,    0.0,   1.0],
    ])
    aligned = aligned @ rot_z.T

    # 4. Pitch correction (rotation around X axis using eye-to-chin midline)
    glabella = aligned[LM_GLABELLA]
    chin = aligned[LM_CHIN]
    vert_dy = chin[1] - glabella[1]
    vert_dz = chin[2] - glabella[2]
    pitch_angle = np.arctan2(vert_dz, vert_dy)
    if abs(pitch_angle) < 0.7:
        cos_p, sin_p = np.cos(-pitch_angle * 0.75), np.sin(-pitch_angle * 0.75)
        rot_x = np.array([
            [1.0, 0.0,    0.0],
            [0.0, cos_p, -sin_p],
            [0.0, sin_p,  cos_p],
        ])
        aligned = aligned @ rot_x.T

    # 5. Yaw compensation
    nose = aligned[LM_NOSE_TIP]
    yaw_ratio = float(nose[0])
    aligned[:, 0] -= yaw_ratio * (1.0 - np.clip(np.abs(aligned[:, 2]), 0.0, 0.8)) * 0.45

    return aligned


def _extract_biometric_ratios(coords: NDArray[np.float64]) -> NDArray[np.float64]:
    """Extract 32 fine-grained scale- and pose-invariant anatomical indices."""
    def dist(idx1: int, idx2: int) -> float:
        return float(np.linalg.norm(coords[idx1] - coords[idx2]))

    def triangle_aspect(p1: int, p2: int, p3: int) -> float:
        v_base = coords[p2] - coords[p1]
        base_len = max(float(np.linalg.norm(v_base)), 1e-5)
        v_p3 = coords[p3] - coords[p1]
        proj = np.dot(v_p3, v_base) / (base_len ** 2)
        h_vec = v_p3 - proj * v_base
        height = float(np.linalg.norm(h_vec))
        return height / base_len

    d_bi_ocular = max(dist(LM_RIGHT_EYE_OUTER, LM_LEFT_EYE_OUTER), 1e-5)
    d_inter_canthal = max(dist(LM_RIGHT_EYE_INNER, LM_LEFT_EYE_INNER), 1e-5)
    d_bizygomatic = max(dist(LM_RIGHT_CHEEK, LM_LEFT_CHEEK), 1e-5)
    d_bigonial = max(dist(LM_RIGHT_JAW_CORNER, LM_LEFT_JAW_CORNER), 1e-5)
    d_face_height = max(dist(LM_NOSE_TOP, LM_CHIN), 1e-5)
    d_total_height = max(dist(LM_GLABELLA, LM_CHIN), 1e-5)
    d_nose_length = max(dist(LM_NOSE_TOP, LM_SUBNASALE), 1e-5)
    d_nose_width = max(dist(LM_RIGHT_ALARE, LM_LEFT_ALARE), 1e-5)
    d_mouth_width = max(dist(LM_MOUTH_RIGHT, LM_MOUTH_LEFT), 1e-5)
    d_lip_height = max(dist(LM_UPPER_LIP, LM_LOWER_LIP), 1e-5)
    d_philtrum = max(dist(LM_SUBNASALE, LM_UPPER_LIP), 1e-5)
    d_chin_height = max(dist(LM_LOWER_LIP, LM_CHIN), 1e-5)
    d_eye_h_r = max(dist(LM_RIGHT_EYE_TOP, LM_RIGHT_EYE_BOTTOM), 1e-5)
    d_eye_w_r = max(dist(LM_RIGHT_EYE_OUTER, LM_RIGHT_EYE_INNER), 1e-5)
    d_eye_h_l = max(dist(LM_LEFT_EYE_TOP, LM_LEFT_EYE_BOTTOM), 1e-5)
    d_eye_w_l = max(dist(LM_LEFT_EYE_OUTER, LM_LEFT_EYE_INNER), 1e-5)

    ratios = [
        # 1. Major Facial Indices (Anthropometric Standards)
        d_bizygomatic / d_total_height,              # Morphological facial index
        d_bigonial / d_bizygomatic,                  # Mandibular-zygomatic index
        d_inter_canthal / d_bi_ocular,               # Intercanthal index
        d_nose_width / d_nose_length,                # Nasal index
        d_mouth_width / d_bizygomatic,               # Cheilo-zygomatic index
        d_mouth_width / d_bi_ocular,                 # Mouth-to-eye breadth
        d_lip_height / d_mouth_width,                # Vermilion height ratio
        d_philtrum / d_chin_height,                  # Philtrum-to-chin proportion
        d_nose_length / d_face_height,               # Nasal-facial height ratio
        d_chin_height / d_face_height,               # Chin-to-facial height ratio
        # 2. Eye & Orbit Morphology
        d_eye_h_r / d_eye_w_r,                       # Right orbital index
        d_eye_h_l / d_eye_w_l,                       # Left orbital index
        d_eye_w_r / d_inter_canthal,                 # Eye-to-intercanthal width
        d_eye_w_l / d_inter_canthal,                 # Left eye-to-intercanthal
        # 3. Craniofacial Triangles (Pose & Scale Free)
        triangle_aspect(LM_RIGHT_EYE_INNER, LM_LEFT_EYE_INNER, LM_NOSE_TIP),
        triangle_aspect(LM_RIGHT_EYE_INNER, LM_LEFT_EYE_INNER, LM_UPPER_LIP),
        triangle_aspect(LM_RIGHT_CHEEK, LM_LEFT_CHEEK, LM_CHIN),
        triangle_aspect(LM_RIGHT_JAW_CORNER, LM_LEFT_JAW_CORNER, LM_CHIN),
        triangle_aspect(LM_MOUTH_RIGHT, LM_MOUTH_LEFT, LM_NOSE_TIP),
        # 4. Bilateral Asymmetry & Proportions
        dist(LM_NOSE_TIP, LM_RIGHT_EYE_INNER) / max(dist(LM_NOSE_TIP, LM_LEFT_EYE_INNER), 1e-5),
        dist(LM_NOSE_TIP, LM_MOUTH_RIGHT) / max(dist(LM_NOSE_TIP, LM_MOUTH_LEFT), 1e-5),
        dist(LM_CHIN, LM_RIGHT_CHEEK) / max(dist(LM_CHIN, LM_LEFT_CHEEK), 1e-5),
        dist(LM_CHIN, LM_RIGHT_JAW_CORNER) / max(dist(LM_CHIN, LM_LEFT_JAW_CORNER), 1e-5),
        # 5. Eyebrow Heights & Arching
        dist(LM_RIGHT_BROW_PEAK, LM_RIGHT_EYE_TOP) / d_bi_ocular,
        dist(LM_LEFT_BROW_PEAK, LM_LEFT_EYE_TOP) / d_bi_ocular,
        dist(LM_RIGHT_BROW_OUTER, LM_RIGHT_BROW_INNER) / d_bi_ocular,
        dist(LM_LEFT_BROW_OUTER, LM_LEFT_BROW_INNER) / d_bi_ocular,
        # 6. Relative Cross-Facial Angles & Distances
        dist(LM_GLABELLA, LM_NOSE_TOP) / d_nose_length,
        dist(LM_NOSE_TIP, LM_CHIN) / d_total_height,
        dist(LM_RIGHT_EYE_PUPIL, LM_MOUTH_RIGHT) / max(dist(LM_LEFT_EYE_PUPIL, LM_MOUTH_LEFT), 1e-5),
        dist(LM_SUBLABIALE, LM_CHIN) / d_chin_height,
        dist(LM_RIGHT_ALARE, LM_RIGHT_CHEEK) / max(dist(LM_LEFT_ALARE, LM_LEFT_CHEEK), 1e-5),
    ]

    return np.array(ratios, dtype=np.float64)


def _build_feature_vector(aligned_coords: NDArray[np.float64]) -> Encoding:
    """Construct 206-dimensional normalized biometric feature vector from aligned landmarks."""
    ratios = _extract_biometric_ratios(aligned_coords)

    anchors = aligned_coords[RIGID_ANCHOR_INDICES]
    weights = np.ones(len(RIGID_ANCHOR_INDICES), dtype=np.float64)
    weights[:26] = 2.0
    weighted_anchors = (anchors * weights[:, np.newaxis]).flatten()

    primary_indices = [
        LM_GLABELLA, LM_NOSE_TOP, LM_NOSE_TIP, LM_CHIN,
        LM_LEFT_EYE_INNER, LM_RIGHT_EYE_INNER,
        LM_LEFT_EYE_OUTER, LM_RIGHT_EYE_OUTER,
        LM_LEFT_CHEEK, LM_RIGHT_CHEEK,
        LM_LEFT_JAW_CORNER, LM_RIGHT_JAW_CORNER,
    ]
    prim_coords = aligned_coords[primary_indices]
    n_prim = len(primary_indices)
    pair_dists = []
    for i in range(n_prim):
        for j in range(i + 1, n_prim):
            pair_dists.append(float(np.linalg.norm(prim_coords[i] - prim_coords[j])))
    pair_dists_arr = np.array(pair_dists, dtype=np.float64)

    composite = np.concatenate([
        ratios * 3.5,
        pair_dists_arr * 2.0,
        weighted_anchors,
    ])

    norm = np.linalg.norm(composite)
    if norm > 1e-6:
        composite /= norm

    return composite


def compute_encoding(
    frame_bgr: NDArray[np.uint8],
    landmarker: FaceLandmarker,
) -> Optional[Encoding]:
    """Detect face in frame and compute aspect-invariant biometric signature."""
    h, w = frame_bgr.shape[:2]
    rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
    mp_image = mp.Image(
        image_format=mp.ImageFormat.SRGB,
        data=rgb,
    )
    result = landmarker.detect(mp_image)

    if not result.face_landmarks:
        return None

    landmarks = result.face_landmarks[0]
    coords = _normalize_landmarks_isotropic(landmarks, w, h)
    aligned_coords = _align_3d_landmarks(coords)
    return _build_feature_vector(aligned_coords)


def encoding_distance(a: Encoding, b: Encoding) -> float:
    """Cosine / normalized Euclidean distance between two biometric encodings."""
    a_flat = a.flatten()
    b_flat = b.flatten()
    if a_flat.shape != b_flat.shape:
        min_len = min(len(a_flat), len(b_flat))
        a_flat = a_flat[:min_len]
        b_flat = b_flat[:min_len]
        a_flat /= max(np.linalg.norm(a_flat), 1e-6)
        b_flat /= max(np.linalg.norm(b_flat), 1e-6)

    return float(np.linalg.norm(a_flat - b_flat))


def calculate_confidence(distance: float, tolerance: float = DEFAULT_TOLERANCE) -> float:
    """Calculate calibrated match confidence percentage (0.0 to 1.0)."""
    if distance <= 0.0:
        return 1.0
    if tolerance <= 1e-6:
        return 1.0 if distance <= 0.0 else 0.0

    ratio = distance / tolerance
    if ratio <= 1.0:
        score = 1.0 - 0.35 * (ratio ** 1.5)
    else:
        score = 0.65 * math.exp(-2.2 * (ratio - 1.0))

    return round(float(np.clip(score, 0.0, 1.0)), 3)


# ---------------------------------------------------------------------------
# Recognition Engine
# ---------------------------------------------------------------------------

class FaceRecognizer:
    """Continuous, hands-free face recognition with hysteresis, ambiguity margin, and passive liveness."""

    def __init__(
        self,
        roster: Sequence[PersonRecord],
        *,
        tolerance: float = DEFAULT_TOLERANCE,
        enter_streak: int = DEFAULT_ENTER_STREAK,
        exit_streak: int = DEFAULT_EXIT_STREAK,
        margin_threshold: float = 0.025,
        scan_interval_sec: float = DEFAULT_SCAN_INTERVAL,
        frame_scale: float = 0.65,
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
        self.margin_threshold: float = margin_threshold
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
        self.liveness_tracker = LivenessTracker()

    def _rebuild_lookup(self) -> None:
        self._known_encodings = []
        self._known_ids = []
        for person in self._roster:
            for enc in person.encodings:
                if len(enc) > 0:
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
        """Process a frame, detect face landmarks, compute EAR liveness, match identity, and bounding box."""
        if self._landmarker is None:
            return DetectionResult(matched_person_id=None, confidence=0.0, distance=999.0)

        h, w = frame.shape[:2]
        
        if self.frame_scale < 0.99:
            small = cv2.resize(frame, (0, 0), fx=self.frame_scale, fy=self.frame_scale)
        else:
            small = frame

        rgb = cv2.cvtColor(small, cv2.COLOR_BGR2RGB)
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        result = self._landmarker.detect(mp_image)

        if not result.face_landmarks:
            self.last_detection = None
            self.liveness_tracker.reset()
            return DetectionResult(matched_person_id=None, confidence=0.0, distance=999.0)

        landmarks = result.face_landmarks[0]

        # Calculate pixel bounding box on original frame
        xs = [int(lm.x * w) for lm in landmarks]
        ys = [int(lm.y * h) for lm in landmarks]
        pad = int(min(w, h) * 0.06)
        bbox = (
            max(0, min(xs) - pad),
            max(0, min(ys) - pad),
            min(w, max(xs) + pad),
            min(h, max(ys) + pad),
        )

        # Keypoints for visual overlay
        keypoints = [
            (int(landmarks[LM_RIGHT_EYE_INNER].x * w), int(landmarks[LM_RIGHT_EYE_INNER].y * h)),
            (int(landmarks[LM_LEFT_EYE_INNER].x * w), int(landmarks[LM_LEFT_EYE_INNER].y * h)),
            (int(landmarks[LM_NOSE_TIP].x * w), int(landmarks[LM_NOSE_TIP].y * h)),
            (int(landmarks[LM_MOUTH_RIGHT].x * w), int(landmarks[LM_MOUTH_RIGHT].y * h)),
            (int(landmarks[LM_MOUTH_LEFT].x * w), int(landmarks[LM_MOUTH_LEFT].y * h)),
        ]

        # Compute aspect-ratio-invariant isotropic coordinates & feature vector
        coords = _normalize_landmarks_isotropic(landmarks, w, h)
        aligned_coords = _align_3d_landmarks(coords)
        composite = _build_feature_vector(aligned_coords)

        # Raw normalized coords for frame quality & EAR calculation
        raw_coords = np.array([[lm.x, lm.y, lm.z] for lm in landmarks], dtype=np.float64)

        # Passive Liveness: Calculate Eye Aspect Ratio (EAR)
        _, _, avg_ear = calculate_eye_aspect_ratio(raw_coords)
        is_live, liveness_score, blink_count = self.liveness_tracker.update(avg_ear)

        if not self._known_encodings:
            det = DetectionResult(
                matched_person_id=None,
                confidence=0.0,
                distance=999.0,
                bbox=bbox,
                keypoints=keypoints,
                landmarks_3d=raw_coords,
                ear=round(avg_ear, 3),
                is_live=is_live,
                blink_count=blink_count,
                liveness_score=liveness_score,
            )
            self.last_detection = det
            return det

        # Compute minimum distance per registered person
        person_min_dists: Dict[str, float] = {}
        for known_enc, known_id in zip(self._known_encodings, self._known_ids):
            dist = encoding_distance(composite, known_enc)
            if known_id not in person_min_dists or dist < person_min_dists[known_id]:
                person_min_dists[known_id] = dist

        sorted_candidates = sorted(person_min_dists.items(), key=lambda item: item[1])
        best_id, best_dist = sorted_candidates[0]
        second_dist = sorted_candidates[1][1] if len(sorted_candidates) > 1 else float("inf")

        # Identity Hysteresis
        if self._confirmed_person and self._confirmed_person in person_min_dists:
            confirmed_dist = person_min_dists[self._confirmed_person]
            if confirmed_dist <= self.tolerance * 1.25:
                if best_id != self._confirmed_person and (confirmed_dist - best_dist) < 0.06:
                    best_id = self._confirmed_person
                    best_dist = confirmed_dist

        matched_id: Optional[str] = None
        if best_dist <= self.tolerance:
            if (
                not self._confirmed_person
                and len(sorted_candidates) > 1
                and (second_dist - best_dist) < self.margin_threshold
                and sorted_candidates[0][0] != sorted_candidates[1][0]
            ):
                matched_id = None
            else:
                matched_id = best_id

        conf = calculate_confidence(best_dist, self.tolerance)

        det = DetectionResult(
            matched_person_id=matched_id,
            confidence=conf if matched_id else min(conf, 0.45),
            distance=best_dist,
            bbox=bbox,
            keypoints=keypoints,
            landmarks_3d=raw_coords,
            ear=round(avg_ear, 3),
            is_live=is_live,
            blink_count=blink_count,
            liveness_score=liveness_score,
        )
        self.last_detection = det
        return det

    def _process_frame(self, frame: NDArray[np.uint8]) -> Optional[str]:
        det = self.process_frame_detailed(frame)
        return det.matched_person_id

    def _update_state(self, match_id: Optional[str]) -> None:
        """State machine with debounce, streak confirmation, and departure hold."""
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
                self._pending_person = None
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
