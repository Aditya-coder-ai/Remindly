"""
backend.app.biometrics.enrollment_logger
=========================================

Append-only audit log for every auto-enrollment decision. Each entry records
the full context of why a frame was accepted or rejected, making the system
fully explainable to caregivers and any regulatory review.

Log format: JSONL (one JSON object per line) at backend/data/enrollment_audit.jsonl
"""

from __future__ import annotations

import json
import logging
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

from ..config import DATA_DIR

logger = logging.getLogger(__name__)

DEFAULT_LOG_PATH = DATA_DIR / "enrollment_audit.jsonl"


class EnrollmentLogger:
    """Thread-safe, append-only JSONL logger for auto-enrollment decisions."""

    def __init__(self, log_path: Optional[Path] = None):
        self._log_path = log_path or DEFAULT_LOG_PATH
        self._lock = threading.Lock()
        self._log_path.parent.mkdir(parents=True, exist_ok=True)

    def log_decision(
        self,
        person_id: str,
        decision: str,  # "accepted" or "rejected"
        reason: str,
        *,
        visit_id: Optional[str] = None,
        quality_score: Optional[float] = None,
        pose_bucket: Optional[str] = None,
        lighting_bucket: Optional[str] = None,
        sharpness: Optional[float] = None,
        face_size_px: Optional[int] = None,
        yaw: Optional[float] = None,
        pitch: Optional[float] = None,
        roll: Optional[float] = None,
        brightness: Optional[float] = None,
        detection_score: Optional[float] = None,
        replaced_sample_id: Optional[str] = None,
        extra: Optional[Dict[str, Any]] = None,
    ) -> None:
        """Append one decision record to the audit log."""
        entry: Dict[str, Any] = {
            "timestamp": time.time(),
            "person_id": person_id,
            "decision": decision,
            "reason": reason,
        }

        if visit_id is not None:
            entry["visit_id"] = visit_id
        if quality_score is not None:
            entry["quality_score"] = round(quality_score, 4)
        if pose_bucket is not None:
            entry["pose_bucket"] = pose_bucket
        if lighting_bucket is not None:
            entry["lighting_bucket"] = lighting_bucket
        if sharpness is not None:
            entry["sharpness"] = round(sharpness, 1)
        if face_size_px is not None:
            entry["face_size_px"] = face_size_px
        if yaw is not None:
            entry["yaw"] = round(yaw, 1)
        if pitch is not None:
            entry["pitch"] = round(pitch, 1)
        if roll is not None:
            entry["roll"] = round(roll, 1)
        if brightness is not None:
            entry["brightness"] = round(brightness, 1)
        if detection_score is not None:
            entry["detection_score"] = round(detection_score, 3)
        if replaced_sample_id is not None:
            entry["replaced_sample_id"] = replaced_sample_id
        if extra:
            entry.update(extra)

        line = json.dumps(entry, ensure_ascii=False)

        with self._lock:
            try:
                with open(self._log_path, "a", encoding="utf-8") as f:
                    f.write(line + "\n")
            except Exception as e:
                logger.error("Failed to write enrollment audit log: %s", e)

    def get_recent_entries(
        self,
        limit: int = 100,
        person_id: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        """Read the most recent audit log entries, optionally filtered by person_id.

        Returns entries in reverse chronological order (newest first).
        """
        entries: List[Dict[str, Any]] = []

        if not self._log_path.exists():
            return entries

        try:
            with open(self._log_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        entry = json.loads(line)
                        if person_id and entry.get("person_id") != person_id:
                            continue
                        entries.append(entry)
                    except json.JSONDecodeError:
                        continue
        except Exception as e:
            logger.error("Failed to read enrollment audit log: %s", e)

        # Return newest first, limited
        entries.reverse()
        return entries[:limit]

    def delete_person_entries(self, person_id: str) -> int:
        """Remove all audit log entries for a specific person (right to erasure).

        Returns the number of entries removed.
        """
        if not self._log_path.exists():
            return 0

        kept: List[str] = []
        removed = 0

        with self._lock:
            try:
                with open(self._log_path, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line:
                            continue
                        try:
                            entry = json.loads(line)
                            if entry.get("person_id") == person_id:
                                removed += 1
                            else:
                                kept.append(line)
                        except json.JSONDecodeError:
                            kept.append(line)

                with open(self._log_path, "w", encoding="utf-8") as f:
                    for line in kept:
                        f.write(line + "\n")

            except Exception as e:
                logger.error("Failed to clean enrollment audit log for %s: %s", person_id, e)

        if removed:
            logger.info("Deleted %d enrollment audit entries for person %s", removed, person_id)

        return removed
