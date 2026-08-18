"""
backend.app.storage.memory_storage
==================================

PostgreSQL storage service for Long-Term Memory and RAG using pgvector.
Handles connections using psycopg and pgvector.
"""

import logging
from typing import List, Dict, Any, Optional
from contextlib import asynccontextmanager

import psycopg
from psycopg.rows import dict_row
from pgvector.psycopg import register_vector_async

from ..config import DATABASE_URL
from ..services.embeddings import generate_embedding

logger = logging.getLogger(__name__)

# Minimum length for a memory to be considered non-trivial
MIN_MEMORY_LENGTH = 15

class MemoryStorage:
    def __init__(self, db_url: str = DATABASE_URL):
        self.db_url = db_url

    async def init_db(self):
        """
        Ensures the vector extension, memories table, and hnsw index exist.
        """
        logger.info("Initializing memory database and ensuring pgvector exists...")
        async with await psycopg.AsyncConnection.connect(self.db_url, autocommit=True) as conn:
            # Enable pgvector extension
            await conn.execute("CREATE EXTENSION IF NOT EXISTS vector;")
            
            # Create memories table
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS memories (
                    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                    patient_id text NOT NULL,
                    visit_id text,
                    memory_type text,
                    content text NOT NULL,
                    importance float,
                    confidence float,
                    embedding vector(384),
                    created_at timestamptz DEFAULT now(),
                    updated_at timestamptz DEFAULT now()
                );
            """)
            
            # Create index for patient_id
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS memories_patient_id_idx ON memories (patient_id);
            """)
            
            # Create HNSW index for vector cosine distance
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS memories_embedding_idx ON memories 
                USING hnsw (embedding vector_cosine_ops);
            """)
            logger.info("Memory database initialization complete.")

    @asynccontextmanager
    async def get_connection(self):
        async with await psycopg.AsyncConnection.connect(self.db_url, row_factory=dict_row) as conn:
            await register_vector_async(conn)
            yield conn

    async def add_memory(
        self, 
        patient_id: str, 
        content: str, 
        visit_id: Optional[str] = None, 
        memory_type: Optional[str] = None, 
        importance: float = 0.5, 
        confidence: float = 1.0
    ) -> Optional[Dict[str, Any]]:
        """
        Validates, embeds, and stores a new memory.
        Ignores trivial or low-confidence memories.
        """
        # Basic filtering: ignore empty, too short, or low confidence/importance
        content = content.strip()
        if not content or len(content) < MIN_MEMORY_LENGTH:
            logger.info("Memory ignored: too short or trivial.")
            return None
        
        if confidence < 0.5 or importance < 0.3:
            logger.info("Memory ignored: low confidence or importance.")
            return None

        # Generate embedding
        try:
            embedding = generate_embedding(content)
        except Exception as e:
            logger.error(f"Failed to embed memory: {e}")
            return None

        async with self.get_connection() as conn:
            # Insert into database
            res = await conn.execute(
                """
                INSERT INTO memories (patient_id, visit_id, memory_type, content, importance, confidence, embedding)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                RETURNING id, patient_id, visit_id, memory_type, content, importance, confidence, created_at;
                """,
                (patient_id, visit_id, memory_type, content, importance, confidence, embedding)
            )
            row = await res.fetchone()
            # Commit handled by context manager if no exception
            return row

    async def search_memories(
        self, 
        patient_id: str, 
        query: str, 
        limit: int = 5
    ) -> List[Dict[str, Any]]:
        """
        Generates an embedding for the query and retrieves the most semantically 
        relevant memories for a specific patient using vector cosine similarity.
        """
        if not query or not query.strip():
            return []

        # Generate query embedding
        try:
            query_embedding = generate_embedding(query)
        except Exception as e:
            logger.error(f"Failed to embed query: {e}")
            return []

        async with self.get_connection() as conn:
            # Query the database
            # PostgreSQL <=> operator is cosine distance, so similarity is 1 - distance
            res = await conn.execute(
                """
                SELECT
                    id,
                    patient_id,
                    visit_id,
                    memory_type,
                    content,
                    importance,
                    confidence,
                    created_at,
                    1 - (embedding <=> %s::vector) AS similarity
                FROM memories
                WHERE patient_id = %s
                ORDER BY embedding <=> %s::vector
                LIMIT %s;
                """,
                (query_embedding, patient_id, query_embedding, limit)
            )
            
            rows = await res.fetchall()
            return rows

# Singleton instance
memory_storage = MemoryStorage()
