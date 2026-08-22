"""
backend.tests.test_memory
=========================

Tests for Anchor's memory systems:
1. SQLite MemoryRepository (standalone data-access layer for loved-ones' memory notes)
2. Long-Term Memory and RAG vector embedding layer with PostgreSQL / pgvector
"""

from __future__ import annotations

import os
import sys
import asyncio
import tempfile
import uuid
from pathlib import Path
import pytest

if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

from anchor_memory.repository import MemoryRepository
from backend.app.services.embeddings import generate_embedding
from backend.app.storage.memory_storage import MemoryStorage
from backend.app.services.context import format_memories_for_llm


# ---------------------------------------------------------------------------
# 1. Unit test: MemoryRepository (SQLite standalone layer)
# ---------------------------------------------------------------------------

def test_sqlite_memory_repository_standalone():
    """Exercises the SQLite layer directly in an isolated temporary database."""
    with tempfile.TemporaryDirectory() as tmpdir:
        db = Path(tmpdir) / "test.db"
        repo = MemoryRepository(db_path=db)

        # --- Create ---
        person = repo.upsert_person("alice", "Alice Chen", "Daughter")
        assert person.id == "alice"
        assert person.name == "Alice Chen"
        assert person.note is None  # no note yet

        # --- Update note ---
        updated = repo.update_person_note("alice", "Alice brought fresh flowers.")
        assert updated.note == "Alice brought fresh flowers."

        # --- Replace, not append ---
        replaced = repo.update_person_note(
            "alice", "Alice and you watched old home movies together."
        )
        assert replaced.note == "Alice and you watched old home movies together."
        assert "flowers" not in replaced.note  # old note gone from current

        # --- History log kept old note ---
        history = repo.get_note_history("alice")
        assert len(history) >= 1
        assert any("flowers" in h["note"] for h in history)

        # --- Reject blank note (never lose data) ---
        with pytest.raises(ValueError):
            repo.update_person_note("alice", "   ")
        # Confirm previous note survived
        check = repo.get_person("alice")
        assert check.note == "Alice and you watched old home movies together."

        # --- KeyError for unknown person ---
        with pytest.raises(KeyError):
            repo.update_person_note("nonexistent", "some note")

        # --- Rapid-fire / overlapping updates (last writer wins) ---
        for i in range(5):
            repo.update_person_note("alice", f"Update number {i}")
        final = repo.get_person("alice")
        assert final.note == "Update number 4"

        # --- Delete ---
        assert repo.delete_person("alice") is True
        assert repo.get_person("alice") is None


# ---------------------------------------------------------------------------
# 2. Long-Term Memory & RAG Vector Layer (pgvector)
# ---------------------------------------------------------------------------

@pytest.fixture
def memory_db():
    db_url = os.environ.get("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/anchor")
    storage = MemoryStorage(db_url)
    return storage


@pytest.mark.asyncio
async def test_embedding_dimension():
    # Test that embedding generation produces a valid 384-dim vector
    text = "Ananya is the patient's daughter."
    embedding = generate_embedding(text)
    
    assert isinstance(embedding, list)
    assert len(embedding) == 384
    assert isinstance(embedding[0], float)


@pytest.mark.asyncio
async def test_empty_query_handling():
    # Generating an embedding for empty text should raise ValueError
    with pytest.raises(ValueError):
        generate_embedding("")
    
    with pytest.raises(ValueError):
        generate_embedding("   ")


@pytest.mark.asyncio
async def test_memory_creation_and_search(memory_db):
    try:
        await memory_db.init_db()
    except Exception as e:
        print(f"Database error: {e}")
        raise

    patient_id = str(uuid.uuid4())
    
    # Ensure patient exists in patients table so FK constraint is satisfied
    async with memory_db.get_connection() as conn:
        try:
            await conn.execute(
                "INSERT INTO patients (id, name) VALUES (%s, %s) ON CONFLICT (id) DO NOTHING;",
                (patient_id, "Test Patient")
            )
        except Exception:
            pass

    try:
        # 1. Add valid memories
        mem1 = await memory_db.add_memory(
            patient_id=patient_id,
            memory_type="fact",
            content="Ananya is the patient's daughter.",
            importance=0.9,
            confidence=0.98
        )
        assert mem1 is not None
        assert mem1["content"] == "Ananya is the patient's daughter."

        mem2 = await memory_db.add_memory(
            patient_id=patient_id,
            memory_type="fact",
            content="Ananya lives in Delhi.",
            importance=0.8,
            confidence=0.95
        )
        
        mem3 = await memory_db.add_memory(
            patient_id=patient_id,
            memory_type="preference",
            content="Patient enjoys talking about cricket.",
            importance=0.7,
            confidence=1.0
        )

        mem4 = await memory_db.add_memory(
            patient_id=patient_id,
            memory_type="event",
            content="Patient has a doctor's appointment next Friday.",
            importance=0.95,
            confidence=1.0
        )

        # 2. Test trivial memory rejection
        trivial = await memory_db.add_memory(
            patient_id=patient_id,
            memory_type="filler",
            content="Okay.",
            importance=0.1,
            confidence=0.9
        )
        assert trivial is None

        # 3. Test semantic search
        query = "Who is the patient's daughter?"
        results = await memory_db.search_memories(patient_id=patient_id, query=query, limit=3)
        
        assert len(results) > 0
        top_result = results[0]
        assert top_result["content"] == "Ananya is the patient's daughter."
        assert "similarity" in top_result
        assert top_result["similarity"] > 0.0

        # 4. Test formatting context
        context_str = format_memories_for_llm(results)
        assert "Relevant patient memories:" in context_str
        assert "1. Ananya is the patient's daughter." in context_str

    finally:
        # Cleanup
        async with memory_db.get_connection() as conn:
            try:
                await conn.execute("DELETE FROM memories WHERE patient_id = %s;", (patient_id,))
                await conn.execute("DELETE FROM patients WHERE id = %s;", (patient_id,))
            except Exception:
                pass


@pytest.mark.asyncio
async def test_patient_isolation(memory_db):
    try:
        await memory_db.init_db()
    except Exception as e:
        print(f"Database error: {e}")
        raise

    patient_a = str(uuid.uuid4())
    patient_b = str(uuid.uuid4())

    async with memory_db.get_connection() as conn:
        try:
            await conn.execute(
                "INSERT INTO patients (id, name) VALUES (%s, %s) ON CONFLICT (id) DO NOTHING;",
                (patient_a, "Patient A")
            )
            await conn.execute(
                "INSERT INTO patients (id, name) VALUES (%s, %s) ON CONFLICT (id) DO NOTHING;",
                (patient_b, "Patient B")
            )
        except Exception:
            pass

    try:
        await memory_db.add_memory(patient_a, "Ananya is the patient's daughter.", memory_type="fact")
        await memory_db.add_memory(patient_b, "Ananya is the patient's daughter.", memory_type="fact")
        
        results = await memory_db.search_memories(patient_a, "Who is Ananya?", limit=5)
        
        for r in results:
            assert str(r["patient_id"]) == patient_a

    finally:
        async with memory_db.get_connection() as conn:
            try:
                await conn.execute("DELETE FROM memories WHERE patient_id IN (%s, %s);", (patient_a, patient_b))
                await conn.execute("DELETE FROM patients WHERE id IN (%s, %s);", (patient_a, patient_b))
            except Exception:
                pass
