import json
import os
import tempfile
from pathlib import Path

import cv2
import numpy as np
import pytest

from backend.app.biometrics.enrollment_logger import EnrollmentLogger
from backend.app.biometrics.frame_quality import (
    LightingBucket,
    PoseBucket,
    check_detector_confidence,
    check_exposure,
    check_face_size,
    check_pose,
    check_sharpness,
    classify_lighting_bucket,
    classify_pose_bucket,
    compute_quality_score,
)
from backend.app.biometrics.profile_manager import FaceSample, ProfileManager
from backend.app.storage.roster_storage import RosterStorage


@pytest.fixture
def temp_roster():
    with tempfile.NamedTemporaryFile(delete=False, suffix=".json") as f:
        path = Path(f.name)
    storage = RosterStorage(file_path=path)
    storage.upsert_profile("test_user", "Test User", "Visitor")
    yield storage
    if path.exists():
        os.remove(path)


@pytest.fixture
def temp_profiles(temp_roster):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".json") as f:
        path = Path(f.name)
    manager = ProfileManager(storage=temp_roster, profiles_path=path)
    yield manager
    if path.exists():
        os.remove(path)


@pytest.fixture
def temp_logger():
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jsonl") as f:
        path = Path(f.name)
    logger_instance = EnrollmentLogger(log_path=path)
    yield logger_instance
    if path.exists():
        os.remove(path)


# ---------------------------------------------------------------------------
# frame_quality.py tests
# ---------------------------------------------------------------------------

def test_check_detector_confidence():
    ok, reason = check_detector_confidence(0.7, threshold=0.65)
    assert ok
    ok, reason = check_detector_confidence(0.6, threshold=0.65)
    assert not ok
    assert "detector_confidence_too_low" in reason


def test_check_sharpness():
    # Create a dummy image (e.g., solid gray, which is very blurry/0 variance)
    blurry_img = np.ones((100, 100, 3), dtype=np.uint8) * 128
    ok, val = check_sharpness(blurry_img, threshold=80.0)
    assert not ok
    assert val == 0.0

    # Create a sharp image (checkerboard)
    sharp_img = np.zeros((100, 100, 3), dtype=np.uint8)
    sharp_img[::2, ::2] = 255
    sharp_img[1::2, 1::2] = 255
    ok, val = check_sharpness(sharp_img, threshold=80.0)
    assert ok
    assert val > 80.0


def test_check_face_size():
    ok, reason = check_face_size((10, 10, 100, 100), threshold=80)
    assert ok
    ok, reason = check_face_size((10, 10, 50, 50), threshold=80)
    assert not ok
    assert "face_too_small" in reason


def test_check_pose():
    ok, reason = check_pose(10.0, 10.0, 10.0, 45.0, 30.0, 25.0)
    assert ok
    ok, reason = check_pose(50.0, 0.0, 0.0, 45.0, 30.0, 25.0)
    assert not ok
    assert "yaw_too_extreme" in reason


def test_classify_pose_bucket():
    assert classify_pose_bucket(0, 0) == PoseBucket.FRONTAL
    assert classify_pose_bucket(-20, 0) == PoseBucket.LEFT_3Q
    assert classify_pose_bucket(20, 0) == PoseBucket.RIGHT_3Q
    assert classify_pose_bucket(0, -20) == PoseBucket.UP
    assert classify_pose_bucket(0, 20) == PoseBucket.DOWN


def test_classify_lighting_bucket():
    # Bright image
    bright = np.ones((100, 100, 3), dtype=np.uint8) * 128
    assert classify_lighting_bucket(bright) == LightingBucket.BRIGHT

    # Dim image
    dim = np.ones((100, 100, 3), dtype=np.uint8) * 40
    assert classify_lighting_bucket(dim) == LightingBucket.DIM

    # Side-lit image
    side = np.ones((100, 100, 3), dtype=np.uint8) * 128
    side[:, :50] = 40  # Dark left side
    assert classify_lighting_bucket(side) == LightingBucket.SIDE


def test_compute_quality_score():
    # Perfect score inputs
    score = compute_quality_score(500.0, 250, 1.0, 130.0)
    assert 0.95 <= score <= 1.0

    # Low score inputs
    score = compute_quality_score(50.0, 50, 0.5, 40.0)
    assert score < 0.5


# ---------------------------------------------------------------------------
# profile_manager.py tests
# ---------------------------------------------------------------------------

def test_profile_manager_is_near_duplicate(temp_profiles):
    a = [0.1] * 384
    b = [0.1] * 384
    c = [-0.1] * 384
    
    assert temp_profiles.is_near_duplicate(a, [b], threshold=0.99)
    assert not temp_profiles.is_near_duplicate(a, [c], threshold=0.99)


def test_profile_manager_should_enroll(temp_profiles, monkeypatch):
    person_id = "test_user"
    
    # Mock config thresholds for predictable tests
    import backend.app.biometrics.profile_manager as pm
    monkeypatch.setattr(pm, "AUTO_ENROLL_SAMPLES_PER_BUCKET", 2)
    monkeypatch.setattr(pm, "AUTO_ENROLL_MAX_TOTAL_SAMPLES", 5)

    def get_vec():
        # Return a random vector so we don't accidentally hit near-duplicate logic
        return np.random.randn(384).tolist()

    # 1. New person should always enroll
    emb1 = get_vec()
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb1, "frontal", "bright", 0.5)
    assert enroll
    assert reason == "new_person_first_sample"
    
    # Actually enroll it
    temp_profiles.enroll_sample(person_id, emb1, "frontal", "bright", 0.5)
    
    # 2. Near duplicate should be rejected
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb1, "frontal", "bright", 0.6)
    assert not enroll
    assert reason == "near_duplicate"
    
    # 3. New embedding in same bucket, bucket not full
    emb2 = get_vec()
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb2, "frontal", "bright", 0.6)
    assert enroll
    assert reason == "new_bucket_coverage"
    temp_profiles.enroll_sample(person_id, emb2, "frontal", "bright", 0.6)
    
    # 4. Bucket full, but no quality improvement
    emb3 = get_vec()
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb3, "frontal", "bright", 0.5)
    assert not enroll
    assert reason == "bucket_full_no_improvement"
    
    # 5. Bucket full, significant quality improvement
    emb4 = get_vec()
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb4, "frontal", "bright", 0.9)
    assert enroll
    assert reason == "replaced_weaker_sample"
    assert rep_id is not None
    
    temp_profiles.enroll_sample(person_id, emb4, "frontal", "bright", 0.9, replace_sample_id=rep_id)
    assert len(temp_profiles.get_bucket_samples(person_id, "frontal", "bright")) == 2

    # 6. Fill to max capacity across other buckets
    temp_profiles.enroll_sample(person_id, get_vec(), "up", "bright", 0.5)
    temp_profiles.enroll_sample(person_id, get_vec(), "up", "bright", 0.5)
    temp_profiles.enroll_sample(person_id, get_vec(), "down", "bright", 0.5)
    # Now has 5 total samples (max capacity)
    
    emb_extra = get_vec()
    # Trying to add to a new bucket should fail because total capacity is reached
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb_extra, "left_3q", "bright", 0.5)
    assert not enroll
    assert reason == "max_total_samples_reached"
    
    # But can still replace a weak sample in an existing bucket
    enroll, reason, rep_id = temp_profiles.should_enroll(person_id, emb_extra, "up", "bright", 0.9)
    assert enroll
    assert reason == "replaced_weaker_at_max_cap"


def test_coverage_report(temp_profiles):
    person_id = "test_user"
    temp_profiles.enroll_sample(person_id, [0.1]*384, "frontal", "bright", 0.5)
    report = temp_profiles.get_coverage_report(person_id)
    
    assert report["person_id"] == person_id
    assert report["total_samples"] == 1
    assert "frontal/bright" in report["buckets"]
    assert report["buckets"]["frontal/bright"]["count"] == 1


# ---------------------------------------------------------------------------
# enrollment_logger.py tests
# ---------------------------------------------------------------------------

def test_enrollment_logger(temp_logger):
    person_id = "test_user"
    temp_logger.log_decision(
        person_id=person_id,
        decision="accepted",
        reason="new_bucket_coverage",
        quality_score=0.85,
        pose_bucket="frontal",
        lighting_bucket="bright"
    )
    
    entries = temp_logger.get_recent_entries()
    assert len(entries) == 1
    assert entries[0]["decision"] == "accepted"
    assert entries[0]["reason"] == "new_bucket_coverage"
    assert entries[0]["quality_score"] == 0.85
    
    temp_logger.log_decision(
        person_id="other_user",
        decision="rejected",
        reason="near_duplicate"
    )
    
    # Filter by person
    user_entries = temp_logger.get_recent_entries(person_id=person_id)
    assert len(user_entries) == 1
    
    # Erasure
    removed = temp_logger.delete_person_entries(person_id)
    assert removed == 1
    assert len(temp_logger.get_recent_entries(person_id=person_id)) == 0
    assert len(temp_logger.get_recent_entries()) == 1  # other_user still exists
