"""
backend.tests.test_memory
=========================

Tests for the Long-Term Memory and RAG embedding layer.
Uses synthetic data and checks vector search capabilities.
"""

import os
import sys
import asyncio
import uuid
import pytest

if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

from backend.app.services.embeddings import generate_embedding
from backend.app.storage.memory_storage import MemoryStorage
from backend.app.services.context import format_memories_for_llm

pytestmark = pytest.mark.asyncio

@pytest.fixture
def memory_db():
    # Use a test database if available, otherwise default
    db_url = os.environ.get("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/anchor")
    storage = MemoryStorage(db_url)
    return storage

async def test_embedding_dimension():
    # Test that embedding generation produces a valid 384-dim vector
    text = "Ananya is the patient's daughter."
    embedding = generate_embedding(text)
    
    assert isinstance(embedding, list)
    assert len(embedding) == 384
    assert isinstance(embedding[0], float)

async def test_empty_query_handling():
    # Generating an embedding for empty text should raise ValueError
    with pytest.raises(ValueError):
        generate_embedding("")
    
    with pytest.raises(ValueError):
        generate_embedding("   ")

async def test_memory_creation_and_search(memory_db):
    # This requires the database to be running with pgvector
    try:
        await memory_db.init_db()
    except Exception as e:
        print(f"Database error: {e}")
        raise

    patient_id = str(uuid.uuid4())
    
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
    # Expected result should prioritize "Ananya is the patient's daughter."
    top_result = results[0]
    assert top_result["content"] == "Ananya is the patient's daughter."
    assert "similarity" in top_result
    assert top_result["similarity"] > 0.0

    # 4. Test formatting context
    context_str = format_memories_for_llm(results)
    assert "Relevant patient memories:" in context_str
    assert "1. Ananya is the patient's daughter." in context_str

async def test_patient_isolation(memory_db):
    try:
        await memory_db.init_db()
    except Exception as e:
        print(f"Database error: {e}")
        raise

    patient_a = str(uuid.uuid4())
    patient_b = str(uuid.uuid4())
    
    await memory_db.add_memory(patient_a, "Ananya is the patient's daughter.", memory_type="fact")
    await memory_db.add_memory(patient_b, "Ananya is the patient's daughter.", memory_type="fact")
    
    results = await memory_db.search_memories(patient_a, "Who is Ananya?", limit=5)
    
    for r in results:
        assert r["patient_id"] == patient_a
