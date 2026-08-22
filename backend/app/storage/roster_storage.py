"""
backend.app.storage.roster_storage
==================================

Persistent storage and profile management for Anchor loved ones.
Stores profiles, relationship badges, latest memory notes,
visit histories, and face encodings in a local JSON database.
"""

from __future__ import annotations

import json
import logging
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional
import numpy as np

from ..config import DATA_DIR, ROSTER_FILE

logger = logging.getLogger(__name__)


@dataclass
class VisitRecord:
    timestamp: float
    date_str: str
    note: str
    transcript: str = ""


@dataclass
class PersonProfile:
    person_id: str
    name: str
    relationship: str
    avatar_color: str = "#2f6f4f"
    avatar_url: Optional[str] = None
    note: Optional[str] = None
    last_visited: Optional[str] = None
    history: List[Dict[str, Any]] = field(default_factory=list)
    encodings: List[List[float]] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "person_id": self.person_id,
            "name": self.name,
            "relationship": self.relationship,
            "avatar_color": self.avatar_color,
            "avatar_url": self.avatar_url,
            "note": self.note,
            "last_visited": self.last_visited,
            "history": self.history,
            "encodings_count": len(self.encodings),
        }

    def to_full_dict(self) -> Dict[str, Any]:
        return {
            "person_id": self.person_id,
            "name": self.name,
            "relationship": self.relationship,
            "avatar_color": self.avatar_color,
            "avatar_url": self.avatar_url,
            "note": self.note,
            "last_visited": self.last_visited,
            "history": self.history,
            "encodings": self.encodings,
        }


def _get_seed_profiles() -> List[PersonProfile]:
    now_str = time.strftime("%B %d, %Y")
    return [
        PersonProfile(
            person_id="priya",
            name="Priya Patel",
            relationship="Daughter",
            avatar_color="#2f6f4f",
            avatar_url="",
            note="Priya brought over fresh chamomile tea and you looked through photos from the lake house together.",
            last_visited=now_str,
            history=[
                {
                    "timestamp": time.time() - 86400 * 2,
                    "date_str": "2 days ago",
                    "note": "Priya brought over fresh chamomile tea and you looked through photos from the lake house together.",
                    "transcript": "Hi Dad, I brought that tea you love, let's look at the old photo album.",
                },
                {
                    "timestamp": time.time() - 86400 * 5,
                    "date_str": "Last Sunday",
                    "note": "Priya watered the balcony tomatoes with you and talked about her new painting class.",
                    "transcript": "The garden looks lovely today Dad, the tomatoes are growing so fast.",
                }
            ],
            encodings=[],
        ),
        PersonProfile(
            person_id="tom",
            name="Tom Evans",
            relationship="Grandson",
            avatar_color="#3b7a57",
            avatar_url="",
            note="Tom showed you his new bicycle and told you about his soccer game on Saturday.",
            last_visited="3 days ago",
            history=[
                {
                    "timestamp": time.time() - 86400 * 3,
                    "date_str": "3 days ago",
                    "note": "Tom showed you his new bicycle and told you about his soccer game on Saturday.",
                    "transcript": "Grandpa check out my new bike! We won our match 3 to 1 yesterday.",
                }
            ],
            encodings=[],
        ),
        PersonProfile(
            person_id="maya",
            name="Maya Sharma",
            relationship="Caregiver & Nurse",
            avatar_color="#436b95",
            avatar_url="",
            note="Maya checked your morning vitals, shared a funny story about her cat, and made warm oatmeal.",
            last_visited="This morning",
            history=[
                {
                    "timestamp": time.time() - 14400,
                    "date_str": "This morning",
                    "note": "Maya checked your morning vitals, shared a funny story about her cat, and made warm oatmeal.",
                    "transcript": "Good morning! Your blood pressure is great today. My cat Mittens tried to climb the bookshelf again.",
                }
            ],
            encodings=[],
        ),
    ]


class RosterStorage:
    """JSON-backed persistent store for loved ones' profiles and memories."""

    def __init__(self, file_path: Optional[Path] = None):
        self.file_path = file_path or ROSTER_FILE
        self._profiles: Dict[str, PersonProfile] = {}
        self._load()

    def _load(self) -> None:
        self.file_path.parent.mkdir(parents=True, exist_ok=True)
        if not self.file_path.exists():
            logger.info("Initializing roster store with seed profiles at %s", self.file_path)
            for p in _get_seed_profiles():
                self._profiles[p.person_id] = p
            self._save()
            return

        try:
            with open(self.file_path, "r", encoding="utf-8") as f:
                raw = json.load(f)
            self._profiles = {}
            for item in raw:
                p = PersonProfile(
                    person_id=item["person_id"],
                    name=item["name"],
                    relationship=item.get("relationship", "Loved One"),
                    avatar_color=item.get("avatar_color", "#2f6f4f"),
                    avatar_url=item.get("avatar_url"),
                    note=item.get("note"),
                    last_visited=item.get("last_visited"),
                    history=item.get("history", []),
                    encodings=item.get("encodings", []),
                )
                self._profiles[p.person_id] = p
            logger.info("Loaded %d profiles from %s", len(self._profiles), self.file_path)
        except Exception as e:
            logger.error("Failed to load roster file, falling back to seed: %s", e)
            for p in _get_seed_profiles():
                self._profiles[p.person_id] = p
            self._save()

    def _save(self) -> None:
        try:
            self.file_path.parent.mkdir(parents=True, exist_ok=True)
            data = [p.to_full_dict() for p in self._profiles.values()]
            with open(self.file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
        except Exception as e:
            logger.error("Failed to save roster to %s: %s", self.file_path, e)

    def list_profiles(self) -> List[Dict[str, Any]]:
        return [p.to_dict() for p in self._profiles.values()]

    def get_profile(self, person_id: str) -> Optional[PersonProfile]:
        return self._profiles.get(person_id)

    def upsert_profile(
        self,
        person_id: str,
        name: str,
        relationship: str,
        avatar_color: str = "#2f6f4f",
        avatar_url: Optional[str] = None,
        note: Optional[str] = None,
    ) -> PersonProfile:
        if person_id in self._profiles:
            p = self._profiles[person_id]
            p.name = name
            p.relationship = relationship
            if avatar_color:
                p.avatar_color = avatar_color
            if avatar_url is not None:
                p.avatar_url = avatar_url
            if note is not None:
                p.note = note
        else:
            p = PersonProfile(
                person_id=person_id,
                name=name,
                relationship=relationship,
                avatar_color=avatar_color,
                avatar_url=avatar_url,
                note=note,
            )
            self._profiles[person_id] = p
        self._save()
        return p

    def update_note(
        self,
        person_id: str,
        note: str,
        transcript: str = "",
    ) -> Optional[PersonProfile]:
        clean_note = (note or "").strip()
        # Protect memory note from being corrupted with temporary placeholders
        if clean_note.lower() in [
            "processing audio...",
            "no audio captured.",
            "no speech detected during this visit",
            "idle",
            "",
        ]:
            logger.info("Ignoring placeholder note '%s' for %s", clean_note, person_id)
            return self._profiles.get(person_id)

        p = self._profiles.get(person_id)
        if not p:
            # Auto-create if not present
            p = PersonProfile(
                person_id=person_id,
                name=person_id.capitalize(),
                relationship="Visitor",
            )
            self._profiles[person_id] = p

        p.note = note
        p.last_visited = time.strftime("%B %d, %Y, %I:%M %p")
        history_entry = {
            "timestamp": time.time(),
            "date_str": p.last_visited,
            "note": note,
            "transcript": transcript,
        }
        p.history.insert(0, history_entry)
        # Keep up to last 20 visits in history
        p.history = p.history[:20]
        self._save()
        return p

    def add_encoding(self, person_id: str, encoding: np.ndarray) -> bool:
        p = self._profiles.get(person_id)
        if not p:
            return False
        p.encodings.append(encoding.tolist())
        self._save()
        return True

    def clear_encodings(self, person_id: str) -> bool:
        p = self._profiles.get(person_id)
        if not p:
            return False
        p.encodings = []
        self._save()
        return True

    def delete_profile(self, person_id: str) -> bool:
        if person_id in self._profiles:
            del self._profiles[person_id]
            self._save()
            return True
        return False

    def replace_encoding(self, person_id: str, old_index: int, new_encoding: np.ndarray) -> bool:
        """Replace a specific encoding at the given index with a new one."""
        p = self._profiles.get(person_id)
        if not p:
            return False
        if old_index < 0 or old_index >= len(p.encodings):
            return False
        p.encodings[old_index] = new_encoding.tolist()
        self._save()
        return True

    def get_encoding_count(self, person_id: str) -> int:
        """Return the number of face encodings stored for a person."""
        p = self._profiles.get(person_id)
        if not p:
            return 0
        return len(p.encodings)

