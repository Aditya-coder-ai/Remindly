"""
backend.app.biometrics.frame_quality
====================================

Frame-level quality filtering for the automatic face profile improvement
pipeline. Each check returns (pass, reason) so rejection reasons are
fully auditable by caregivers.

Privacy: All processing is 100% on-device and local.
"""

from __future__ import annotations

import enum
import logging
from typing import List, Optional, Tuple

import cv2
import numpy as np
from numpy.typing import NDArray

from ..config import (
    AUTO_ENROLL_MAX_BRIGHTNESS,
    AUTO_ENROLL_MAX_PITCH,
    AUTO_ENROLL_MAX_ROLL,
    AUTO_ENROLL_MAX_YAW,
    AUTO_ENROLL_MIN_BRIGHTNESS,
    AUTO_ENROLL_MIN_DETECTOR_CONFIDENCE,
    AUTO_ENROLL_MIN_FACE_SIZE_PX,
    AUTO_ENROLL_MIN_SHARPNESS,
)

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Enums for pose & lighting bucket classification
# ---------------------------------------------------------------------------

class PoseBucket(str, enum.Enum):
    FRONTAL = "frontal"
    LEFT_3Q = "left_3q"
    RIGHT_3Q = "right_3q"
    UP = "up"
    DOWN = "down"


class LightingBucket(str, enum.Enum):
    BRIGHT = "bright"
    DIM = "dim"
    SIDE = "side"
    BACK = "back"


# ---------------------------------------------------------------------------
# Head Pose Estimation from 3D Landmarks
# ---------------------------------------------------------------------------

# Key landmark indices (matching recognizer.py)
_LM_NOSE_TIP = 1
_LM_LEFT_EYE_OUTER = 263
_LM_LEFT_EYE_INNER = 362
_LM_RIGHT_EYE_OUTER = 33
_LM_RIGHT_EYE_INNER = 133
_LM_CHIN = 152
_LM_GLABELLA = 9
_LM_NOSE_TOP = 168
_LM_MOUTH_LEFT = 291
_LM_MOUTH_RIGHT = 61
_LM_LEFT_EYE_TOP = 386
_LM_LEFT_EYE_BOTTOM = 374
_LM_RIGHT_EYE_TOP = 159
_LM_RIGHT_EYE_BOTTOM = 145


def estimate_head_pose(
    landmarks_3d: NDArray[np.float64],
) -> Tuple[float, float, float]:
    """Estimate yaw, pitch, roll (in degrees) from MediaPipe 3D face landmarks.

    Uses the geometric relationship between eyes, nose, and chin to derive
    approximate Euler angles without a full solvePnP call.

    Returns:
        (yaw, pitch, roll) in degrees. Positive yaw = looking right,
        positive pitch = looking up, positive roll = head tilted clockwise.
    """
    left_eye = (landmarks_3d[_LM_LEFT_EYE_OUTER] + landmarks_3d[_LM_LEFT_EYE_INNER]) / 2.0
    right_eye = (landmarks_3d[_LM_RIGHT_EYE_OUTER] + landmarks_3d[_LM_RIGHT_EYE_INNER]) / 2.0
    eye_center = (left_eye + right_eye) / 2.0
    nose = landmarks_3d[_LM_NOSE_TIP]
    chin = landmarks_3d[_LM_CHIN]

    # Roll: angle of eye line relative to horizontal
    eye_vec = left_eye - right_eye
    roll_rad = np.arctan2(eye_vec[1], eye_vec[0])
    roll_deg = float(np.degrees(roll_rad))

    # Yaw: lateral offset of nose tip from eye center, normalized by inter-eye distance
    inter_eye_dist = max(float(np.linalg.norm(eye_vec[:2])), 1e-6)
    nose_offset_x = nose[0] - eye_center[0]
    yaw_ratio = nose_offset_x / inter_eye_dist
    yaw_deg = float(np.degrees(np.arcsin(np.clip(yaw_ratio * 2.0, -1.0, 1.0))))

    # Pitch: vertical offset of nose tip relative to eye-chin midline
    face_height = max(float(np.linalg.norm(chin[:2] - eye_center[:2])), 1e-6)
    expected_nose_y = eye_center[1] + face_height * 0.35
    nose_offset_y = nose[1] - expected_nose_y
    pitch_ratio = nose_offset_y / face_height
    pitch_deg = float(np.degrees(np.arcsin(np.clip(pitch_ratio * 3.0, -1.0, 1.0))))

    return yaw_deg, pitch_deg, roll_deg


# ---------------------------------------------------------------------------
# Quality Check Functions
# ---------------------------------------------------------------------------

def check_detector_confidence(
    detection_score: float,
    threshold: float = AUTO_ENROLL_MIN_DETECTOR_CONFIDENCE,
) -> Tuple[bool, str]:
    """Check if the face detection confidence meets the minimum threshold."""
    if detection_score >= threshold:
        return True, "ok"
    return False, f"detector_confidence_too_low ({detection_score:.2f} < {threshold:.2f})"


def check_sharpness(
    face_crop_bgr: NDArray[np.uint8],
    threshold: float = AUTO_ENROLL_MIN_SHARPNESS,
) -> Tuple[bool, float]:
    """Compute Laplacian variance as a focus/sharpness measure.

    Returns (passes, sharpness_value).
    """
    gray = cv2.cvtColor(face_crop_bgr, cv2.COLOR_BGR2GRAY)
    laplacian = cv2.Laplacian(gray, cv2.CV_64F)
    sharpness = float(laplacian.var())
    if sharpness >= threshold:
        return True, sharpness
    return False, sharpness


def check_face_size(
    bbox: Tuple[int, int, int, int],
    threshold: int = AUTO_ENROLL_MIN_FACE_SIZE_PX,
) -> Tuple[bool, str]:
    """Check if face bounding box is large enough for reliable embeddings.

    bbox: (xmin, ymin, xmax, ymax) in pixels.
    """
    xmin, ymin, xmax, ymax = bbox
    width = xmax - xmin
    height = ymax - ymin
    min_side = min(width, height)
    if min_side >= threshold:
        return True, "ok"
    return False, f"face_too_small ({min_side}px < {threshold}px)"


def check_pose(
    yaw: float,
    pitch: float,
    roll: float,
    max_yaw: float = AUTO_ENROLL_MAX_YAW,
    max_pitch: float = AUTO_ENROLL_MAX_PITCH,
    max_roll: float = AUTO_ENROLL_MAX_ROLL,
) -> Tuple[bool, str]:
    """Check if head pose angles are within acceptable range."""
    if abs(yaw) > max_yaw:
        return False, f"yaw_too_extreme ({yaw:.1f}° > ±{max_yaw:.0f}°)"
    if abs(pitch) > max_pitch:
        return False, f"pitch_too_extreme ({pitch:.1f}° > ±{max_pitch:.0f}°)"
    if abs(roll) > max_roll:
        return False, f"roll_too_extreme ({roll:.1f}° > ±{max_roll:.0f}°)"
    return True, "ok"


def check_occlusion(
    landmarks_3d: NDArray[np.float64],
    bbox: Tuple[int, int, int, int],
    frame_w: int,
    frame_h: int,
) -> Tuple[bool, str]:
    """Heuristic occlusion check: verify key landmark groups are within the face bbox.

    Checks that eyes, nose, and mouth landmarks have valid, non-degenerate positions.
    """
    xmin, ymin, xmax, ymax = bbox
    # Normalize bbox to 0-1 range
    nx_min = xmin / max(frame_w, 1)
    ny_min = ymin / max(frame_h, 1)
    nx_max = xmax / max(frame_w, 1)
    ny_max = ymax / max(frame_h, 1)

    # Key landmark groups to verify
    eye_indices = [_LM_LEFT_EYE_OUTER, _LM_LEFT_EYE_INNER, _LM_RIGHT_EYE_OUTER, _LM_RIGHT_EYE_INNER]
    nose_indices = [_LM_NOSE_TIP, _LM_NOSE_TOP]
    mouth_indices = [_LM_MOUTH_LEFT, _LM_MOUTH_RIGHT]

    margin = 0.15  # allow landmarks slightly outside bbox due to padding

    for group_name, indices in [("eyes", eye_indices), ("nose", nose_indices), ("mouth", mouth_indices)]:
        for idx in indices:
            lm = landmarks_3d[idx]
            x, y = lm[0], lm[1]
            if (x < nx_min - margin or x > nx_max + margin or
                    y < ny_min - margin or y > ny_max + margin):
                return False, f"occlusion_detected ({group_name} landmark {idx} outside face region)"

    # Check that eye openings aren't collapsed (potential closed eyes or occlusion)
    left_eye_h = abs(landmarks_3d[_LM_LEFT_EYE_TOP][1] - landmarks_3d[_LM_LEFT_EYE_BOTTOM][1])
    right_eye_h = abs(landmarks_3d[_LM_RIGHT_EYE_TOP][1] - landmarks_3d[_LM_RIGHT_EYE_BOTTOM][1])
    inter_eye = max(float(np.linalg.norm(
        landmarks_3d[_LM_LEFT_EYE_OUTER][:2] - landmarks_3d[_LM_RIGHT_EYE_OUTER][:2]
    )), 1e-6)

    # If both eyes are extremely narrow relative to face, likely occluded or closed
    if (left_eye_h / inter_eye < 0.02) and (right_eye_h / inter_eye < 0.02):
        return False, "occlusion_detected (both eyes appear closed or occluded)"

    return True, "ok"


def check_exposure(
    face_crop_bgr: NDArray[np.uint8],
    min_brightness: int = AUTO_ENROLL_MIN_BRIGHTNESS,
    max_brightness: int = AUTO_ENROLL_MAX_BRIGHTNESS,
) -> Tuple[bool, float]:
    """Check mean brightness of face crop for over/under exposure.

    Returns (passes, mean_brightness).
    """
    gray = cv2.cvtColor(face_crop_bgr, cv2.COLOR_BGR2GRAY)
    mean_val = float(np.mean(gray))
    if mean_val < min_brightness:
        return False, mean_val
    if mean_val > max_brightness:
        return False, mean_val
    return True, mean_val


# ---------------------------------------------------------------------------
# Full Quality Pipeline
# ---------------------------------------------------------------------------

def run_quality_checks(
    frame_bgr: NDArray[np.uint8],
    landmarks_3d: NDArray[np.float64],
    detection_score: float,
    bbox: Tuple[int, int, int, int],
) -> Tuple[bool, str, dict]:
    """Run all quality checks in order, stopping at first failure.

    Returns:
        (passed, reason, metrics) where metrics contains all measured values
        for audit logging regardless of pass/fail.
    """
    h, w = frame_bgr.shape[:2]
    xmin, ymin, xmax, ymax = bbox

    # Extract face crop for image-based checks
    crop_xmin = max(0, xmin)
    crop_ymin = max(0, ymin)
    crop_xmax = min(w, xmax)
    crop_ymax = min(h, ymax)
    face_crop = frame_bgr[crop_ymin:crop_ymax, crop_xmin:crop_xmax]

    metrics: dict = {}

    # 1. Detection confidence
    metrics["detection_score"] = detection_score
    ok, reason = check_detector_confidence(detection_score)
    if not ok:
        return False, reason, metrics

    # 2. Sharpness
    if face_crop.size > 0:
        ok, sharpness = check_sharpness(face_crop)
        metrics["sharpness"] = sharpness
        if not ok:
            return False, f"blur_too_low (sharpness={sharpness:.1f})", metrics
    else:
        metrics["sharpness"] = 0.0
        return False, "invalid_face_crop", metrics

    # 3. Face size
    metrics["face_width"] = xmax - xmin
    metrics["face_height"] = ymax - ymin
    metrics["face_min_side"] = min(xmax - xmin, ymax - ymin)
    ok, reason = check_face_size(bbox)
    if not ok:
        return False, reason, metrics

    # 4. Head pose
    yaw, pitch, roll = estimate_head_pose(landmarks_3d)
    metrics["yaw"] = yaw
    metrics["pitch"] = pitch
    metrics["roll"] = roll
    ok, reason = check_pose(yaw, pitch, roll)
    if not ok:
        return False, reason, metrics

    # 5. Occlusion
    ok, reason = check_occlusion(landmarks_3d, bbox, w, h)
    if not ok:
        return False, reason, metrics

    # 6. Exposure
    if face_crop.size > 0:
        ok, brightness = check_exposure(face_crop)
        metrics["brightness"] = brightness
        if not ok:
            if brightness < AUTO_ENROLL_MIN_BRIGHTNESS:
                return False, f"underexposed (brightness={brightness:.0f})", metrics
            else:
                return False, f"overexposed (brightness={brightness:.0f})", metrics
    else:
        metrics["brightness"] = 0.0

    return True, "all_checks_passed", metrics


# ---------------------------------------------------------------------------
# Bucket Classification
# ---------------------------------------------------------------------------

def classify_pose_bucket(yaw: float, pitch: float) -> PoseBucket:
    """Classify head pose into one of five pose buckets."""
    # Pitch-dominant buckets first
    if pitch < -15.0:
        return PoseBucket.UP
    if pitch > 15.0:
        return PoseBucket.DOWN

    # Yaw-dominant buckets
    if yaw < -15.0:
        return PoseBucket.LEFT_3Q
    if yaw > 15.0:
        return PoseBucket.RIGHT_3Q

    return PoseBucket.FRONTAL


def classify_lighting_bucket(face_crop_bgr: NDArray[np.uint8]) -> LightingBucket:
    """Classify lighting condition from the face crop's brightness histogram.

    Uses mean brightness and left-right brightness asymmetry to distinguish:
    - BRIGHT: well-lit, even illumination
    - DIM: low overall brightness
    - SIDE: strong left-right brightness asymmetry
    - BACK: bright edges, dark center (backlit silhouette)
    """
    gray = cv2.cvtColor(face_crop_bgr, cv2.COLOR_BGR2GRAY)
    h, w = gray.shape[:2]
    mean_val = float(np.mean(gray))

    # DIM check
    if mean_val < 70:
        return LightingBucket.DIM

    # Side-lighting: compare left and right halves
    mid_x = w // 2
    if mid_x > 0:
        left_mean = float(np.mean(gray[:, :mid_x]))
        right_mean = float(np.mean(gray[:, mid_x:]))
        asymmetry = abs(left_mean - right_mean) / max(mean_val, 1.0)
        if asymmetry > 0.25:
            return LightingBucket.SIDE

    # Backlight: bright edges, dark center
    border_margin = max(1, min(h, w) // 5)
    center = gray[border_margin:h - border_margin, border_margin:w - border_margin]
    if center.size > 0:
        center_mean = float(np.mean(center))
        edge_mean = (mean_val * gray.size - center_mean * center.size) / max(gray.size - center.size, 1)
        if edge_mean > center_mean * 1.4 and center_mean < 100:
            return LightingBucket.BACK

    return LightingBucket.BRIGHT


def compute_quality_score(
    sharpness: float,
    face_size_px: int,
    detection_confidence: float,
    brightness: float,
) -> float:
    """Compute a composite quality score (0.0 to 1.0) for ranking samples within a bucket.

    Higher is better. Used to decide whether a new candidate should replace
    the weakest existing sample in a full bucket.
    """
    # Normalize each component to roughly 0-1 range
    sharp_score = min(sharpness / 500.0, 1.0)  # 500+ laplacian variance = very sharp
    size_score = min(face_size_px / 250.0, 1.0)  # 250px face = excellent size
    conf_score = detection_confidence  # already 0-1
    # Brightness: best around 120-140, penalize extremes
    brightness_score = max(0.0, 1.0 - abs(brightness - 130.0) / 130.0)

    # Weighted composite
    score = (
        sharp_score * 0.35 +
        size_score * 0.25 +
        conf_score * 0.25 +
        brightness_score * 0.15
    )
    return round(min(max(score, 0.0), 1.0), 4)
