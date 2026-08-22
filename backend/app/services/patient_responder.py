"""
backend.app.services.patient_responder
======================================

Generates dementia-friendly, patient-facing responses to spoken questions.
Combines memory retrieval (pgvector) with LLM generation (Groq proxy)
to produce short, warm, non-technical answers.

Privacy: receives ONLY text (question, person name, relationship, memory snippets).
Never receives camera frames, face embeddings, or biometric data.
"""

import json
import logging
import os
import urllib.error
import urllib.request
from typing import List, Optional

from ..config import GROQ_ENDPOINT, DEFAULT_GROQ_KEY

logger = logging.getLogger(__name__)


def _system_prompt() -> str:
    return (
        "You are the voice of Anchor, a gentle dementia-care companion. "
        "A patient has asked a question about someone who is visiting them. "
        "You answer in 1–2 short, warm sentences using simple words. "
        "Never mention AI, confidence scores, face recognition, or anything technical. "
        "Never make medical diagnoses. Never say 'I don't know' — if you lack information, "
        "gently redirect with what you do know. Speak as if talking directly to a kind elderly person."
    )


def _build_user_prompt(
    question: str,
    person_name: str,
    relationship: str,
    relevant_memories: List[str],
    recent_note: Optional[str] = None,
) -> str:
    parts = [
        f"The patient is asking: \"{question}\"",
        "",
        f"Person present: {person_name}",
        f"Relationship: {relationship}",
    ]

    if recent_note:
        parts.append(f"Latest visit note: {recent_note}")

    if relevant_memories:
        parts.append("")
        parts.append("Relevant memories:")
        for i, mem in enumerate(relevant_memories[:5], 1):
            parts.append(f"  {i}. {mem}")

    parts.extend([
        "",
        "Write a short, warm answer (1–2 sentences, max 25 words). "
        "Talk directly to the patient. Use present tense where possible. "
        "Respond with ONLY the answer — no quotes, no prefixes, no explanations.",
    ])

    return "\n".join(parts)


def _deterministic_fallback(
    person_name: str,
    relationship: str,
    recent_note: Optional[str] = None,
) -> str:
    """Fallback response when LLM is unavailable."""
    base = f"{person_name} is here."
    if relationship and relationship.lower() not in ("visitor", "loved one", "unknown"):
        base += f" They are your {relationship.lower()}."
    if recent_note:
        base += f" {recent_note}"
    return base


async def generate_patient_response(
    question: str,
    person_name: str,
    relationship: str,
    relevant_memories: List[str],
    recent_note: Optional[str] = None,
) -> str:
    """
    Generate a dementia-friendly response to a patient's spoken question.

    Args:
        question: The patient's transcribed question.
        person_name: Name of the currently recognized visitor.
        relationship: Relationship to the patient (e.g., "daughter").
        relevant_memories: List of relevant memory content strings from pgvector search.
        recent_note: The most recent visit note for this person.

    Returns:
        A short, warm response string (1–2 sentences).
    """
    if not question or not question.strip():
        return _deterministic_fallback(person_name, relationship, recent_note)

    api_key = DEFAULT_GROQ_KEY
    if not api_key:
        logger.warning("GROQ_API_KEY not set — using deterministic fallback for patient response.")
        return _deterministic_fallback(person_name, relationship, recent_note)

    user_prompt = _build_user_prompt(
        question=question,
        person_name=person_name,
        relationship=relationship,
        relevant_memories=relevant_memories,
        recent_note=recent_note,
    )

    payload = {
        "model": "llama-3.3-70b-versatile",
        "messages": [
            {"role": "system", "content": _system_prompt()},
            {"role": "user", "content": user_prompt},
        ],
        "max_tokens": 60,
        "temperature": 0.7,
    }

    try:
        req = urllib.request.Request(
            GROQ_ENDPOINT,
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
                "User-Agent": "Anchor-Companion/1.0",
            },
            method="POST",
        )

        with urllib.request.urlopen(req, timeout=12) as resp:
            body = json.loads(resp.read().decode("utf-8"))

        choices = body.get("choices", [])
        if not choices:
            logger.warning("Groq returned empty choices for patient response.")
            return _deterministic_fallback(person_name, relationship, recent_note)

        text = (choices[0].get("message", {}).get("content", "")).strip()

        # Clean up: remove surrounding quotes if present
        if (text.startswith('"') and text.endswith('"')) or \
           (text.startswith("'") and text.endswith("'")):
            text = text[1:-1].strip()

        if not text:
            return _deterministic_fallback(person_name, relationship, recent_note)

        logger.info("LLM_RESPONSE: Generated patient response (%d chars)", len(text))
        return text

    except urllib.error.HTTPError as e:
        logger.error("Groq API HTTP error for patient response: %s", e)
        return _deterministic_fallback(person_name, relationship, recent_note)
    except Exception as e:
        logger.error("Failed to generate patient response: %s", e)
        return _deterministic_fallback(person_name, relationship, recent_note)
