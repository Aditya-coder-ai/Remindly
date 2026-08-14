"""
anchor_memory.repository
========================

Data-access layer for Anchor's people & memory-note storage.

Everything SQLite-specific lives here.  The public surface is:

    class MemoryRepository:
        get_person(person_id)  -> PersonRow | None
        list_people()          -> list[PersonRow]
        upsert_person(...)     -> PersonRow
        update_person_note(person_id, new_note) -> PersonRow   # <- the key op
        delete_person(person_id) -> bool

    @dataclass PersonRow:
        id, name, relationship, note, updated_at

To swap to Postgres later, re-implement this file against asyncpg /
psycopg and keep the same public signatures.  Nothing outside this
module knows about SQL.

Concurrency safety
------------------
SQLite serialises writes internally (WAL mode, journal_mode=WAL).  Two
near-simultaneous calls to update_person_note for the same person are
safe -- "last writer wins" is the correct semantic for Anchor.

Failure safety
--------------
Each write is a single-statement transaction.  If the write fails, the
previous row value is untouched -- SQLite will roll back automatically.
The caller sees an exception, never a half-written state.
"""

from __future__ import annotations

import logging
import sqlite3
import time
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional

logger = logging.getLogger(__name__)

# Default location -- sits alongside the existing data/roster.json
_DEFAULT_DB_PATH = Path(__file__).resolve().parent.parent / "data" / "anchor.db"


@dataclass
class PersonRow:
    """Read-only snapshot of a row in the ``people`` table."""

    id: str
    name: str
    relationship: str
    note: Optional[str]
    updated_at: str  # ISO-8601 timestamp of last note update

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "relationship": self.relationship,
            "note": self.note,
            "updated_at": self.updated_at,
        }


class MemoryRepository:
    """
    SQLite-backed repository for people and their current memory notes.

    Thread-safe: each public method acquires its own connection/cursor
    (SQLite handles write serialisation internally via WAL mode).
    """

    def __init__(self, db_path: Optional[Path] = None):
        self._db_path = str(db_path or _DEFAULT_DB_PATH)
        # Ensure parent directory exists
        Path(self._db_path).parent.mkdir(parents=True, exist_ok=True)
        self._ensure_schema()

    # ------------------------------------------------------------------
    # Schema bootstrap
    # ------------------------------------------------------------------

    def _ensure_schema(self) -> None:
        """Create the ``people`` and ``note_history`` tables if absent."""
        con = self._connect()
        try:
            con.executescript(
                """
                CREATE TABLE IF NOT EXISTS people (
                    id           TEXT PRIMARY KEY,
                    name         TEXT NOT NULL,
                    relationship TEXT NOT NULL DEFAULT 'Loved One',
                    note         TEXT,
                    updated_at   TEXT NOT NULL DEFAULT (datetime('now'))
                );

                CREATE TABLE IF NOT EXISTS note_history (
                    rowid        INTEGER PRIMARY KEY AUTOINCREMENT,
                    person_id    TEXT NOT NULL REFERENCES people(id) ON DELETE CASCADE,
                    note         TEXT NOT NULL,
                    recorded_at  TEXT NOT NULL DEFAULT (datetime('now'))
                );

                CREATE INDEX IF NOT EXISTS idx_history_person
                    ON note_history(person_id, recorded_at DESC);
                """
            )
            con.commit()
            logger.info("SQLite schema ensured at %s", self._db_path)
        finally:
            con.close()

    # ------------------------------------------------------------------
    # Connection helper
    # ------------------------------------------------------------------

    def _connect(self) -> sqlite3.Connection:
        con = sqlite3.connect(self._db_path, timeout=5)
        con.execute("PRAGMA journal_mode=WAL")
        con.execute("PRAGMA foreign_keys=ON")
        con.row_factory = sqlite3.Row
        return con

    @staticmethod
    def _row_to_person(row: sqlite3.Row) -> PersonRow:
        return PersonRow(
            id=row["id"],
            name=row["name"],
            relationship=row["relationship"],
            note=row["note"],
            updated_at=row["updated_at"],
        )

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def get_person(self, person_id: str) -> Optional[PersonRow]:
        """Fetch a single person by ID.  Returns ``None`` if not found."""
        con = self._connect()
        try:
            cur = con.execute("SELECT * FROM people WHERE id = ?", (person_id,))
            row = cur.fetchone()
            return self._row_to_person(row) if row else None
        finally:
            con.close()

    def list_people(self) -> List[PersonRow]:
        """Return every person in the roster, ordered by name."""
        con = self._connect()
        try:
            cur = con.execute("SELECT * FROM people ORDER BY name")
            return [self._row_to_person(r) for r in cur.fetchall()]
        finally:
            con.close()

    def upsert_person(
        self,
        person_id: str,
        name: str,
        relationship: str = "Loved One",
        note: Optional[str] = None,
    ) -> PersonRow:
        """
        Insert a new person or update an existing one.

        Returns the resulting row (always a fresh read, never stale).
        """
        now = _iso_now()
        con = self._connect()
        try:
            con.execute(
                """
                INSERT INTO people (id, name, relationship, note, updated_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET
                    name         = excluded.name,
                    relationship = excluded.relationship,
                    note         = COALESCE(excluded.note, people.note),
                    updated_at   = excluded.updated_at
                """,
                (person_id, name, relationship, note, now),
            )
            con.commit()
            logger.info("Upserted person '%s'", person_id)
            return self.get_person(person_id)  # type: ignore[return-value]
        except Exception:
            con.rollback()
            logger.exception("Failed to upsert person '%s'", person_id)
            raise
        finally:
            con.close()

    def update_person_note(self, person_id: str, new_note: str) -> PersonRow:
        """
        **The core operation.**

        Replace the person's current note with *new_note* and record the
        old value in ``note_history`` for auditability.

        Raises ``KeyError`` if *person_id* does not exist.
        Raises on any I/O failure -- the previous note remains intact
        (single-statement transaction, auto-rolled-back by SQLite).
        """
        if not new_note or not new_note.strip():
            raise ValueError("Refusing to save a blank note -- previous note preserved.")

        now = _iso_now()
        con = self._connect()
        try:
            # Verify person exists and grab old note for history
            cur = con.execute(
                "SELECT id, note FROM people WHERE id = ?", (person_id,)
            )
            row = cur.fetchone()
            if row is None:
                raise KeyError(f"Person '{person_id}' not found")

            old_note = row["note"]

            # Archive the outgoing note (if one existed)
            if old_note:
                con.execute(
                    """
                    INSERT INTO note_history (person_id, note, recorded_at)
                    VALUES (?, ?, ?)
                    """,
                    (person_id, old_note, now),
                )

            # Replace with the new note
            con.execute(
                """
                UPDATE people
                   SET note = ?, updated_at = ?
                 WHERE id = ?
                """,
                (new_note.strip(), now, person_id),
            )
            con.commit()
            logger.info(
                "Updated note for '%s' -- %d chars", person_id, len(new_note.strip())
            )

            # Return the saved row so the caller can confirm
            return self.get_person(person_id)  # type: ignore[return-value]

        except Exception:
            con.rollback()
            logger.exception(
                "Note update FAILED for '%s' -- previous note preserved", person_id
            )
            raise
        finally:
            con.close()

    def delete_person(self, person_id: str) -> bool:
        """Delete a person and their history.  Returns True if a row was removed."""
        con = self._connect()
        try:
            cur = con.execute("DELETE FROM people WHERE id = ?", (person_id,))
            con.commit()
            deleted = cur.rowcount > 0
            if deleted:
                logger.info("Deleted person '%s'", person_id)
            return deleted
        finally:
            con.close()

    def get_note_history(
        self, person_id: str, limit: int = 20
    ) -> List[dict]:
        """Return past notes for a person, most recent first."""
        con = self._connect()
        try:
            cur = con.execute(
                """
                SELECT note, recorded_at
                  FROM note_history
                 WHERE person_id = ?
                 ORDER BY recorded_at DESC
                 LIMIT ?
                """,
                (person_id, limit),
            )
            return [{"note": r["note"], "recorded_at": r["recorded_at"]} for r in cur.fetchall()]
        finally:
            con.close()


def _iso_now() -> str:
    """Current UTC time as an ISO-8601 string."""
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
