"""
backend.app.storage.visit_storage
=================================

PostgreSQL storage service for recording structured VisitRecords.
"""

import json
import logging
from typing import List, Dict, Any, Optional
from contextlib import asynccontextmanager

import psycopg
from psycopg.rows import dict_row

from ..config import DATABASE_URL
from ..schemas.models import VisitRecord

logger = logging.getLogger(__name__)

class VisitStorage:
    def __init__(self, db_url: str = DATABASE_URL):
        self.db_url = db_url

    async def init_db(self):
        """
        Ensures the visits and follow_ups tables exist.
        """
        logger.info("Initializing visit database...")
        async with await psycopg.AsyncConnection.connect(self.db_url, autocommit=True) as conn:
            # Create visits table
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS visits (
                    visit_id text PRIMARY KEY,
                    patient_id text NOT NULL,
                    started_at text,
                    ended_at text,
                    participants jsonb,
                    transcript_ref text,
                    topics jsonb,
                    events jsonb,
                    sentiment jsonb,
                    context text,
                    patient_summary text,
                    created_at timestamptz DEFAULT now()
                );
            """)
            
            # Create follow_ups table
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS visit_follow_ups (
                    id serial PRIMARY KEY,
                    visit_id text REFERENCES visits(visit_id) ON DELETE CASCADE,
                    patient_id text NOT NULL,
                    description text NOT NULL,
                    due text,
                    owner text,
                    created_at timestamptz DEFAULT now()
                );
            """)
            
            # Create indexes
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS visits_patient_id_idx ON visits (patient_id);
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS follow_ups_patient_id_idx ON visit_follow_ups (patient_id);
            """)

            # Create visit_transcripts table
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS visit_transcripts (
                    visit_id text NOT NULL,
                    segment_id text NOT NULL,
                    text text NOT NULL,
                    speaker text,
                    sequence integer NOT NULL,
                    timestamp text NOT NULL,
                    PRIMARY KEY (visit_id, segment_id)
                );
            """)
            
            # Create index for transcripts
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS visit_transcripts_visit_id_idx ON visit_transcripts (visit_id);
            """)
            logger.info("Visit database initialization complete.")

    @asynccontextmanager
    async def get_connection(self):
        async with await psycopg.AsyncConnection.connect(self.db_url, row_factory=dict_row) as conn:
            yield conn

    async def add_visit(self, record: VisitRecord) -> bool:
        """
        Stores a complete VisitRecord and its extracted follow-ups.
        """
        try:
            async with self.get_connection() as conn:
                # Use a transaction
                async with conn.transaction():
                    # Insert into visits
                    await conn.execute(
                        """
                        INSERT INTO visits (
                            visit_id, patient_id, started_at, ended_at, participants,
                            transcript_ref, topics, events, sentiment, context, patient_summary
                        )
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                        """,
                        (
                            record.visit_id,
                            record.patient_id,
                            record.started_at,
                            record.ended_at,
                            json.dumps([p.model_dump() for p in record.participants]),
                            record.transcript_ref,
                            json.dumps(record.topics),
                            json.dumps([e.model_dump() for e in record.events]),
                            json.dumps(record.sentiment.model_dump()),
                            record.context,
                            record.patient_summary
                        )
                    )
                    
                    # Insert follow ups
                    for fu in record.follow_ups:
                        await conn.execute(
                            """
                            INSERT INTO visit_follow_ups (
                                visit_id, patient_id, description, due, owner
                            )
                            VALUES (%s, %s, %s, %s, %s)
                            """,
                            (
                                record.visit_id,
                                record.patient_id,
                                fu.description,
                                fu.due,
                                fu.owner
                            )
                        )
            return True
        except Exception as e:
            logger.error(f"Failed to save visit record: {e}")
            return False

    async def get_visit(self, visit_id: str) -> Optional[Dict[str, Any]]:
        async with self.get_connection() as conn:
            res = await conn.execute("SELECT * FROM visits WHERE visit_id = %s", (visit_id,))
            row = await res.fetchone()
            if row:
                fu_res = await conn.execute("SELECT * FROM visit_follow_ups WHERE visit_id = %s", (visit_id,))
                row["follow_ups"] = await fu_res.fetchall()
            return row

    async def add_transcript_segment(
        self,
        visit_id: str,
        segment_id: str,
        text: str,
        speaker: str,
        sequence: int,
        timestamp: str
    ) -> bool:
        """
        Stores a finalized transcript segment. Idempotent.
        """
        try:
            async with self.get_connection() as conn:
                await conn.execute(
                    """
                    INSERT INTO visit_transcripts (visit_id, segment_id, text, speaker, sequence, timestamp)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    ON CONFLICT (visit_id, segment_id) DO NOTHING
                    """,
                    (visit_id, segment_id, text, speaker, sequence, timestamp)
                )
            return True
        except Exception as e:
            logger.error(f"Failed to save transcript segment: {e}")
            return False

    async def get_transcript_segments(self, visit_id: str) -> List[Dict[str, Any]]:
        """
        Retrieves all finalized segments for a specific visit sorted by sequence.
        """
        try:
            async with self.get_connection() as conn:
                res = await conn.execute(
                    """
                    SELECT segment_id, text, speaker, sequence, timestamp
                    FROM visit_transcripts
                    WHERE visit_id = %s
                    ORDER BY sequence ASC
                    """,
                    (visit_id,)
                )
                return await res.fetchall()
        except Exception as e:
            logger.error(f"Failed to fetch transcript segments: {e}")
            return []

# Singleton instance
visit_storage = VisitStorage()
