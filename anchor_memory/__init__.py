"""
anchor_memory
=============

SQLite-backed persistence layer for Anchor's memory notes.
Provides durable, immediately-consistent storage for the "current note"
each recognised person will hear, plus an optional append-only history log.

Designed behind a small repository interface so swapping SQLite for
Postgres (or any other backend) later requires touching only this module.
"""

from .repository import MemoryRepository, PersonRow

__all__ = ["MemoryRepository", "PersonRow"]
