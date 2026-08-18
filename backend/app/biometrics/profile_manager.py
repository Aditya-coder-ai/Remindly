"""
backend.app.biometrics.profile_manager
=======================================

Coverage-aware face profile enrollment engine. Manages per-person face
samples organized into pose × lighting buckets, ensuring profiles grow
in diversity (not just volume) and remain bounded in size.

Privacy: Only embeddings and metadata are stored. Raw image crops are
optional and disabled by default (AUTO_ENROLL_STORE_CROPS).
"""

from __future__ import annotations

import json
import logging
import os
import shutil
import time
import uuid
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
from numpy.typing import NDArray

from ..config import (
    AUTO_ENROLL_MAX_TOTAL_SAMPLES,
    AUTO_ENROLL_NEAR_DUPLICATE_THRESHOLD,
    AUTO_ENROLL_SAMPLES_PER_BUCKET,
    AUTO_ENROLL_STORE_CROPS,
    DATA_DIR,
)
from ..storage.roster_storage import RosterStorage
from .frame_quality import LightingBucket, PoseBucket

logger = logging.getLogger(__name__)

PROFILES_FILE = DATA_DIR / "face_profiles.json"
CROPS_DIR = DATA_DIR / "face_crops"


# ---------------------------------------------------------------------------
# Data Model
# ---------------------------------------------------------------------------

@dataclass
class FaceSample:
    """A single face sample stored in a person's profile."""
    sample_id: str
    person_id: str
    embedding: List[float]
    pose_bucket: str
    lighting_bucket: str
    quality_score: float
    source_visit_id: Optional[str] = None
    captured_at: float = 0.0
    image_ref: Optional[str] = None  # path to stored crop, or None

    def to_dict(self) -> Dict[str, Any]:
        d = asdict(self)
        # Don't include the full embedding in API responses
        d.pop("embedding", None)
        return d


@dataclass
class FaceProfile:
    """Managed face profile with bucketed samples for a single person."""
    person_id: str
    samples: List[FaceSample] = field(default_factory=list)
    updated_at: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "person_id": self.person_id,
            "total_samples": len(self.samples),
            "updated_at": self.updated_at,
            "samples": [s.to_dict() for s in self.samples],
        }


# ---------------------------------------------------------------------------
# Profile Manager
# ---------------------------------------------------------------------------

class ProfileManager:
    """Coverage-aware enrollment engine for automatic face profile improvement."""

    def __init__(self, storage: RosterStorage, profiles_path: Optional[Path] = None):
        self._storage = storage
        self._profiles_path = profiles_path or PROFILES_FILE
        self._profiles: Dict[str, FaceProfile] = {}
        self._load()

    # -----------------------------------------------------------------------
    # Persistence
    # -----------------------------------------------------------------------

    def _load(self) -> None:
        """Load managed face profiles from JSON."""
        self._profiles_path.parent.mkdir(parents=True, exist_ok=True)
        if not self._profiles_path.exists():
            self._profiles = {}
            return

        try:
            with open(self._profiles_path, "r", encoding="utf-8") as f:
                raw = json.load(f)
            self._profiles = {}
            for person_id, data in raw.items():
                samples = []
                for s in data.get("samples", []):
                    samples.append(FaceSample(
                        sample_id=s["sample_id"],
                        person_id=s["person_id"],
                        embedding=s["embedding"],
                        pose_bucket=s["pose_bucket"],
                        lighting_bucket=s["lighting_bucket"],
                        quality_score=s["quality_score"],
                        source_visit_id=s.get("source_visit_id"),
                        captured_at=s.get("captured_at", 0.0),
                        image_ref=s.get("image_ref"),
                    ))
                self._profiles[person_id] = FaceProfile(
                    person_id=person_id,
                    samples=samples,
                    updated_at=data.get("updated_at", 0.0),
                )
            logger.info("Loaded face profiles for %d persons", len(self._profiles))
        except Exception as e:
            logger.error("Failed to load face profiles: %s", e)
            self._profiles = {}

    def _save(self) -> None:
        """Persist face profiles to JSON."""
        try:
            self._profiles_path.parent.mkdir(parents=True, exist_ok=True)
            data = {}
            for person_id, profile in self._profiles.items():
                data[person_id] = {
                    "updated_at": profile.updated_at,
                    "samples": [asdict(s) for s in profile.samples],
                }
            with open(self._profiles_path, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
        except Exception as e:
            logger.error("Failed to save face profiles: %s", e)

    # -----------------------------------------------------------------------
    # Duplicate Detection
    # -----------------------------------------------------------------------

    @staticmethod
    def cosine_similarity(a: List[float], b: List[float]) -> float:
        """Compute cosine similarity between two embedding vectors."""
        a_arr = np.array(a, dtype=np.float64)
        b_arr = np.array(b, dtype=np.float64)

        # Handle dimension mismatch gracefully
        if a_arr.shape != b_arr.shape:
            min_len = min(len(a_arr), len(b_arr))
            a_arr = a_arr[:min_len]
            b_arr = b_arr[:min_len]

        norm_a = np.linalg.norm(a_arr)
        norm_b = np.linalg.norm(b_arr)
        if norm_a < 1e-8 or norm_b < 1e-8:
            return 0.0
        return float(np.dot(a_arr, b_arr) / (norm_a * norm_b))

    def is_near_duplicate(
        self,
        embedding: List[float],
        existing_embeddings: List[List[float]],
        threshold: float = AUTO_ENROLL_NEAR_DUPLICATE_THRESHOLD,
    ) -> bool:
        """Check if embedding is a near-duplicate of any existing embedding."""
        for existing in existing_embeddings:
            sim = self.cosine_similarity(embedding, existing)
            if sim >= threshold:
                return True
        return False

    # -----------------------------------------------------------------------
    # Bucket Queries
    # -----------------------------------------------------------------------

    def get_bucket_samples(
        self,
        person_id: str,
        pose: str,
        lighting: str,
    ) -> List[FaceSample]:
        """Get all samples in a specific pose × lighting bucket for a person."""
        profile = self._profiles.get(person_id)
        if not profile:
            return []
        return [
            s for s in profile.samples
            if s.pose_bucket == pose and s.lighting_bucket == lighting
        ]

    def get_all_embeddings(self, person_id: str) -> List[List[float]]:
        """Get all stored embeddings for a person."""
        profile = self._profiles.get(person_id)
        if not profile:
            return []
        return [s.embedding for s in profile.samples]

    # -----------------------------------------------------------------------
    # Enrollment Decision
    # -----------------------------------------------------------------------

    def should_enroll(
        self,
        person_id: str,
        embedding: List[float],
        pose_bucket: str,
        lighting_bucket: str,
        quality_score: float,
    ) -> Tuple[bool, str, Optional[str]]:
        """Decide whether a candidate frame should be enrolled.

        Returns:
            (should_enroll, reason, replace_sample_id_or_None)
        """
        profile = self._profiles.get(person_id)

        # New person — always enroll
        if not profile:
            return True, "new_person_first_sample", None

        # Hard cap on total samples
        if len(profile.samples) >= AUTO_ENROLL_MAX_TOTAL_SAMPLES:
            # Can still replace a weaker sample in the same bucket
            bucket_samples = self.get_bucket_samples(person_id, pose_bucket, lighting_bucket)
            if bucket_samples:
                weakest = min(bucket_samples, key=lambda s: s.quality_score)
                if quality_score > weakest.quality_score * 1.1:  # 10% improvement required
                    return True, "replaced_weaker_at_max_cap", weakest.sample_id
            return False, "max_total_samples_reached", None

        # Check near-duplicate against all existing embeddings
        all_embeddings = self.get_all_embeddings(person_id)
        if self.is_near_duplicate(embedding, all_embeddings):
            return False, "near_duplicate", None

        # Check bucket fill level
        bucket_samples = self.get_bucket_samples(person_id, pose_bucket, lighting_bucket)

        if len(bucket_samples) < AUTO_ENROLL_SAMPLES_PER_BUCKET:
            return True, "new_bucket_coverage", None

        # Bucket is full — check if candidate is better than weakest
        weakest = min(bucket_samples, key=lambda s: s.quality_score)
        if quality_score > weakest.quality_score * 1.1:
            return True, "replaced_weaker_sample", weakest.sample_id

        return False, "bucket_full_no_improvement", None

    # -----------------------------------------------------------------------
    # Enrollment Execution
    # -----------------------------------------------------------------------

    def enroll_sample(
        self,
        person_id: str,
        embedding: List[float],
        pose_bucket: str,
        lighting_bucket: str,
        quality_score: float,
        visit_id: Optional[str] = None,
        face_crop_bgr: Optional[NDArray[np.uint8]] = None,
        replace_sample_id: Optional[str] = None,
    ) -> FaceSample:
        """Create and persist a new face sample, optionally replacing an old one.

        Also syncs the updated embedding list back to RosterStorage so the
        recognizer uses the new/improved encodings.
        """
        import cv2  # local import to avoid circular issues

        # Ensure profile exists
        if person_id not in self._profiles:
            self._profiles[person_id] = FaceProfile(
                person_id=person_id,
                samples=[],
                updated_at=time.time(),
            )

        profile = self._profiles[person_id]

        # Remove replaced sample if specified
        if replace_sample_id:
            old_sample = next((s for s in profile.samples if s.sample_id == replace_sample_id), None)
            if old_sample:
                # Delete stored crop if it exists
                if old_sample.image_ref and os.path.exists(old_sample.image_ref):
                    try:
                        os.remove(old_sample.image_ref)
                    except OSError:
                        pass
                profile.samples = [s for s in profile.samples if s.sample_id != replace_sample_id]

        # Create new sample
        sample_id = str(uuid.uuid4())[:12]
        image_ref = None

        # Optionally store face crop
        if AUTO_ENROLL_STORE_CROPS and face_crop_bgr is not None and face_crop_bgr.size > 0:
            crops_dir = CROPS_DIR / person_id
            crops_dir.mkdir(parents=True, exist_ok=True)
            crop_path = crops_dir / f"{sample_id}.jpg"
            cv2.imwrite(str(crop_path), face_crop_bgr, [int(cv2.IMWRITE_JPEG_QUALITY), 85])
            image_ref = str(crop_path)

        sample = FaceSample(
            sample_id=sample_id,
            person_id=person_id,
            embedding=embedding,
            pose_bucket=pose_bucket,
            lighting_bucket=lighting_bucket,
            quality_score=quality_score,
            source_visit_id=visit_id,
            captured_at=time.time(),
            image_ref=image_ref,
        )

        profile.samples.append(sample)
        profile.updated_at = time.time()
        self._save()

        # Sync all managed embeddings back to RosterStorage
        self._sync_to_roster(person_id)

        logger.info(
            "Auto-enrolled sample %s for %s [%s/%s] (quality=%.3f, total=%d)",
            sample_id, person_id, pose_bucket, lighting_bucket,
            quality_score, len(profile.samples),
        )

        return sample

    def _sync_to_roster(self, person_id: str) -> None:
        """Sync all managed sample embeddings to the roster storage encodings list."""
        profile = self._profiles.get(person_id)
        if not profile:
            return

        roster_profile = self._storage.get_profile(person_id)
        if not roster_profile:
            return

        # Replace roster encodings with all managed sample embeddings
        roster_profile.encodings = [s.embedding for s in profile.samples]
        self._storage._save()

    # -----------------------------------------------------------------------
    # Profile Queries
    # -----------------------------------------------------------------------

    def get_coverage_report(self, person_id: str) -> Dict[str, Any]:
        """Generate a bucket coverage report for a person's face profile.

        Returns fill levels for each pose × lighting bucket, suitable for
        displaying to caregivers.
        """
        profile = self._profiles.get(person_id)
        total_samples = len(profile.samples) if profile else 0

        buckets: Dict[str, Dict[str, int]] = {}
        for pose in PoseBucket:
            for lighting in LightingBucket:
                key = f"{pose.value}/{lighting.value}"
                count = len(self.get_bucket_samples(person_id, pose.value, lighting.value))
                buckets[key] = {
                    "count": count,
                    "target": AUTO_ENROLL_SAMPLES_PER_BUCKET,
                    "filled": count >= AUTO_ENROLL_SAMPLES_PER_BUCKET,
                }

        # Calculate overall coverage percentage
        total_buckets = len(buckets)
        filled_buckets = sum(1 for b in buckets.values() if b["filled"])
        total_capacity = total_buckets * AUTO_ENROLL_SAMPLES_PER_BUCKET
        coverage_pct = (total_samples / total_capacity * 100) if total_capacity > 0 else 0.0

        return {
            "person_id": person_id,
            "total_samples": total_samples,
            "max_samples": AUTO_ENROLL_MAX_TOTAL_SAMPLES,
            "filled_buckets": filled_buckets,
            "total_buckets": total_buckets,
            "coverage_percentage": round(coverage_pct, 1),
            "buckets": buckets,
            "updated_at": profile.updated_at if profile else None,
        }

    def get_profile(self, person_id: str) -> Optional[FaceProfile]:
        """Get the full managed face profile for a person."""
        return self._profiles.get(person_id)

    # -----------------------------------------------------------------------
    # Erasure
    # -----------------------------------------------------------------------

    def delete_profile(self, person_id: str) -> bool:
        """Delete all managed face profile data for a person (right to erasure).

        Removes samples, embeddings from roster, and stored crops.
        """
        if person_id not in self._profiles:
            return False

        profile = self._profiles[person_id]

        # Delete stored crops
        for sample in profile.samples:
            if sample.image_ref and os.path.exists(sample.image_ref):
                try:
                    os.remove(sample.image_ref)
                except OSError:
                    pass

        # Remove crops directory if it exists
        crops_dir = CROPS_DIR / person_id
        if crops_dir.exists():
            try:
                shutil.rmtree(str(crops_dir))
            except OSError:
                pass

        # Remove from managed profiles
        del self._profiles[person_id]
        self._save()

        # Clear encodings from roster storage
        self._storage.clear_encodings(person_id)

        logger.info("Deleted face profile for %s (%d samples removed)", person_id, len(profile.samples))
        return True
