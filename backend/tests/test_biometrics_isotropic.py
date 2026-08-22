"""
backend.tests.test_biometrics_isotropic
=======================================

Unit tests for isotropic landmark extraction, 3D pose alignment,
feature vector building, and loop engineering lifecycle.
"""

import time
import numpy as np
import pytest

from backend.app.biometrics.recognizer import (
    _normalize_landmarks_isotropic,
    _align_3d_landmarks,
    _extract_biometric_ratios,
    _build_feature_vector,
    encoding_distance,
    calculate_confidence,
    LM_LEFT_EYE_OUTER,
    LM_RIGHT_EYE_OUTER,
    LM_NOSE_TIP,
    LM_CHIN,
    LM_GLABELLA,
)
from backend.app.biometrics.service import RecognitionService
from backend.app.storage.roster_storage import RosterStorage
from backend.app.config import DEFAULT_TOLERANCE


class DummyLandmark:
    def __init__(self, x: float, y: float, z: float = 0.0):
        self.x = x
        self.y = y
        self.z = z


def test_isotropic_normalization_aspect_ratio():
    """Verify that landmark distances in physical pixel space are preserved regardless of frame dimensions."""
    # Suppose a face in 640x480 pixel space has eye outer corners at (280, 240) and (360, 240) (80px apart)
    # In normalized coords:
    # 640x480 (4:3):
    # lm1: x = 280/640 = 0.4375, y = 240/480 = 0.5
    # lm2: x = 360/640 = 0.5625, y = 240/480 = 0.5
    lm1_43 = DummyLandmark(280 / 640, 240 / 480, 0.0)
    lm2_43 = DummyLandmark(360 / 640, 240 / 480, 0.0)

    # In 1280x720 (16:9) frame where the same face is scaled by 2 (160px apart at (560, 360) and (720, 360)):
    # lm1: x = 560/1280 = 0.4375, y = 360/720 = 0.5
    # lm2: x = 720/1280 = 0.5625, y = 360/720 = 0.5
    lm1_169 = DummyLandmark(560 / 1280, 360 / 720, 0.0)
    lm2_169 = DummyLandmark(720 / 1280, 360 / 720, 0.0)

    iso_43 = _normalize_landmarks_isotropic([lm1_43, lm2_43], 640, 480)
    iso_169 = _normalize_landmarks_isotropic([lm1_169, lm2_169], 1280, 720)

    dist_43 = np.linalg.norm(iso_43[0] - iso_43[1])
    dist_169 = np.linalg.norm(iso_169[0] - iso_169[1])

    assert np.isclose(dist_43, dist_169, atol=1e-5)


def test_confidence_calibration():
    """Verify confidence values across exact match, tolerance boundary, and non-matches."""
    tol = DEFAULT_TOLERANCE  # 0.38
    assert calculate_confidence(0.0, tol) == 1.0
    
    half_tol_conf = calculate_confidence(tol * 0.5, tol)
    assert 0.80 <= half_tol_conf <= 0.95

    boundary_conf = calculate_confidence(tol, tol)
    assert 0.60 <= boundary_conf <= 0.70

    imposter_conf = calculate_confidence(tol * 1.5, tol)
    assert imposter_conf < 0.25


def test_loop_engineered_service_lifecycle(tmp_path):
    """Verify RecognitionService starts and stops cleanly with producer-consumer threads."""
    roster_file = tmp_path / "roster.json"
    storage = RosterStorage(file_path=roster_file)
    service = RecognitionService(storage=storage)

    assert not service._running
    service.start()
    assert service._running
    assert service._capture_thread is not None
    assert service._inference_thread is not None

    time.sleep(0.2)

    status = service.get_status()
    assert "active" in status
    assert status["active"] is True

    service.stop()
    assert not service._running
    assert service._capture_thread is None
    assert service._inference_thread is None
