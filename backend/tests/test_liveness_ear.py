"""
backend.tests.test_liveness_ear
===============================

Unit and integration tests for:
- Eye Aspect Ratio (EAR) calculation
- LivenessTracker blink state machine and passive liveness verification
- Multi-camera device listing and hot-switching API endpoints
"""

import sys
import time
from pathlib import Path

# Add project root to sys.path
ROOT_DIR = Path(__file__).resolve().parent.parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

import numpy as np
import pytest
from fastapi.testclient import TestClient

from backend.app.biometrics.recognizer import (
    calculate_eye_aspect_ratio,
    LivenessTracker,
    LM_LEFT_EYE_OUTER,
    LM_LEFT_EYE_INNER,
    LM_LEFT_EYE_TOP,
    LM_LEFT_EYE_BOTTOM,
    LM_LEFT_EYE_TOP_2,
    LM_LEFT_EYE_BOTTOM_2,
    LM_RIGHT_EYE_OUTER,
    LM_RIGHT_EYE_INNER,
    LM_RIGHT_EYE_TOP,
    LM_RIGHT_EYE_BOTTOM,
    LM_RIGHT_EYE_TOP_2,
    LM_RIGHT_EYE_BOTTOM_2,
)
from backend.app.main import app


def _create_synthetic_eye_landmarks(is_closed: bool = False) -> np.ndarray:
    """Create a 468x3 landmark coordinate array with open or closed eye positions."""
    coords = np.zeros((478, 3), dtype=np.float64)

    # Left eye outer (263) and inner (362), 40 units apart
    coords[LM_LEFT_EYE_OUTER] = [100.0, 100.0, 0.0]
    coords[LM_LEFT_EYE_INNER] = [140.0, 100.0, 0.0]

    # Right eye outer (33) and inner (133), 40 units apart
    coords[LM_RIGHT_EYE_OUTER] = [60.0, 100.0, 0.0]
    coords[LM_RIGHT_EYE_INNER] = [20.0, 100.0, 0.0]

    if is_closed:
        # Lids touching (distance ~ 1-2 units) -> EAR ~ 0.05
        coords[LM_LEFT_EYE_TOP] = [120.0, 100.5, 0.0]
        coords[LM_LEFT_EYE_BOTTOM] = [120.0, 99.5, 0.0]
        coords[LM_LEFT_EYE_TOP_2] = [130.0, 100.5, 0.0]
        coords[LM_LEFT_EYE_BOTTOM_2] = [130.0, 99.5, 0.0]

        coords[LM_RIGHT_EYE_TOP] = [40.0, 100.5, 0.0]
        coords[LM_RIGHT_EYE_BOTTOM] = [40.0, 99.5, 0.0]
        coords[LM_RIGHT_EYE_TOP_2] = [30.0, 100.5, 0.0]
        coords[LM_RIGHT_EYE_BOTTOM_2] = [30.0, 99.5, 0.0]
    else:
        # Open eyes (vertical distance ~ 12 units) -> EAR ~ 0.30
        coords[LM_LEFT_EYE_TOP] = [120.0, 106.0, 0.0]
        coords[LM_LEFT_EYE_BOTTOM] = [120.0, 94.0, 0.0]
        coords[LM_LEFT_EYE_TOP_2] = [130.0, 106.0, 0.0]
        coords[LM_LEFT_EYE_BOTTOM_2] = [130.0, 94.0, 0.0]

        coords[LM_RIGHT_EYE_TOP] = [40.0, 106.0, 0.0]
        coords[LM_RIGHT_EYE_BOTTOM] = [40.0, 94.0, 0.0]
        coords[LM_RIGHT_EYE_TOP_2] = [30.0, 106.0, 0.0]
        coords[LM_RIGHT_EYE_BOTTOM_2] = [30.0, 94.0, 0.0]

    return coords


def test_calculate_eye_aspect_ratio():
    """Verify EAR correctly discriminates open eyes from closed eyes."""
    open_coords = _create_synthetic_eye_landmarks(is_closed=False)
    left_ear, right_ear, avg_ear = calculate_eye_aspect_ratio(open_coords)
    assert avg_ear > 0.22, f"Expected open eye EAR > 0.22, got {avg_ear}"

    closed_coords = _create_synthetic_eye_landmarks(is_closed=True)
    c_left, c_right, c_avg = calculate_eye_aspect_ratio(closed_coords)
    assert c_avg < 0.15, f"Expected closed eye EAR < 0.15, got {c_avg}"


def test_liveness_tracker_blink_cycle():
    """Verify LivenessTracker state machine registers a valid natural blink."""
    tracker = LivenessTracker()

    # 1. Start with open eyes
    for _ in range(5):
        is_live, score, blinks = tracker.update(0.30)
    assert blinks == 0
    assert not is_live

    # 2. Eye closes (blink start) for 2 frames
    tracker.update(0.12)
    tracker.update(0.10)

    # 3. Eye re-opens
    is_live, score, blinks = tracker.update(0.28)
    assert blinks == 1, f"Expected 1 blink, got {blinks}"
    assert is_live is True, "Expected liveness to be verified after natural blink"
    assert score >= 0.5


def test_camera_api_endpoints():
    """Verify GET /api/cameras and POST /api/camera_select endpoints."""
    client = TestClient(app)

    # 1. GET /api/cameras
    res = client.get("/api/cameras")
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert "cameras" in data
    assert isinstance(data["cameras"], list)
    assert len(data["cameras"]) >= 1

    # 2. POST /api/camera_select
    res = client.post("/api/camera_select", json={"camera_index": 0})
    assert res.status_code == 200
    select_data = res.json()
    assert select_data["success"] is True
    assert select_data["active_camera"] == 0
