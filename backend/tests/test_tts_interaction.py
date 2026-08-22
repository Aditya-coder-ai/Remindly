"""
Tests for the patient TTS interaction endpoint and patient_responder service.
"""

import pytest
from unittest.mock import patch, AsyncMock, MagicMock


# ---------------------------------------------------------------------------
# patient_responder unit tests
# ---------------------------------------------------------------------------

class TestDeterministicFallback:
    """Test the deterministic fallback when LLM is unavailable."""

    def test_fallback_with_relationship(self):
        from backend.app.services.patient_responder import _deterministic_fallback
        result = _deterministic_fallback("Sarah", "daughter", None)
        assert "Sarah is here" in result
        assert "daughter" in result

    def test_fallback_with_note(self):
        from backend.app.services.patient_responder import _deterministic_fallback
        result = _deterministic_fallback("Sarah", "daughter", "You talked about her new job.")
        assert "Sarah is here" in result
        assert "new job" in result

    def test_fallback_generic_relationship(self):
        from backend.app.services.patient_responder import _deterministic_fallback
        result = _deterministic_fallback("Someone", "Visitor", None)
        assert "Someone is here" in result
        # "Visitor" is a generic relationship, should not add "your visitor"
        assert "your visitor" not in result

    def test_fallback_empty_note(self):
        from backend.app.services.patient_responder import _deterministic_fallback
        result = _deterministic_fallback("Rahul", "son", None)
        assert "Rahul is here" in result
        assert "son" in result


class TestBuildUserPrompt:
    """Test prompt construction for LLM calls."""

    def test_prompt_includes_question(self):
        from backend.app.services.patient_responder import _build_user_prompt
        prompt = _build_user_prompt(
            question="What did Sarah tell me?",
            person_name="Sarah",
            relationship="daughter",
            relevant_memories=["Started a new job"],
            recent_note="You talked about her new job.",
        )
        assert "What did Sarah tell me?" in prompt
        assert "Sarah" in prompt
        assert "daughter" in prompt
        assert "new job" in prompt

    def test_prompt_without_memories(self):
        from backend.app.services.patient_responder import _build_user_prompt
        prompt = _build_user_prompt(
            question="Who is this?",
            person_name="Rahul",
            relationship="son",
            relevant_memories=[],
            recent_note=None,
        )
        assert "Who is this?" in prompt
        assert "Rahul" in prompt
        assert "Relevant memories" not in prompt

    def test_prompt_limits_memories(self):
        from backend.app.services.patient_responder import _build_user_prompt
        # Pass more than 5 memories — should only include first 5
        memories = [f"Memory {i}" for i in range(10)]
        prompt = _build_user_prompt(
            question="Tell me about Sarah",
            person_name="Sarah",
            relationship="daughter",
            relevant_memories=memories,
        )
        assert "Memory 0" in prompt
        assert "Memory 4" in prompt
        assert "Memory 5" not in prompt


class TestSystemPrompt:
    """Test system prompt content."""

    def test_system_prompt_is_dementia_friendly(self):
        from backend.app.services.patient_responder import _system_prompt
        prompt = _system_prompt()
        assert "dementia" in prompt.lower()
        assert "warm" in prompt.lower()
        assert "technical" in prompt.lower()


@pytest.mark.asyncio
class TestGeneratePatientResponse:
    """Test the main response generation function."""

    async def test_empty_question_returns_fallback(self):
        from backend.app.services.patient_responder import generate_patient_response
        result = await generate_patient_response(
            question="",
            person_name="Sarah",
            relationship="daughter",
            relevant_memories=[],
        )
        assert "Sarah" in result

    async def test_no_groq_key_returns_fallback(self):
        from backend.app.services.patient_responder import generate_patient_response
        with patch("backend.app.services.patient_responder.DEFAULT_GROQ_KEY", ""):
            result = await generate_patient_response(
                question="Who is this?",
                person_name="Sarah",
                relationship="daughter",
                relevant_memories=[],
            )
            assert "Sarah" in result

    async def test_groq_http_error_returns_fallback(self):
        from backend.app.services.patient_responder import generate_patient_response
        import urllib.error
        with patch("backend.app.services.patient_responder.DEFAULT_GROQ_KEY", "test-key"):
            with patch("urllib.request.urlopen", side_effect=urllib.error.HTTPError(
                url="", code=500, msg="error", hdrs=None, fp=None
            )):
                result = await generate_patient_response(
                    question="Who is this?",
                    person_name="Sarah",
                    relationship="daughter",
                    relevant_memories=[],
                )
                assert "Sarah" in result

    async def test_groq_network_error_returns_fallback(self):
        from backend.app.services.patient_responder import generate_patient_response
        with patch("backend.app.services.patient_responder.DEFAULT_GROQ_KEY", "test-key"):
            with patch("urllib.request.urlopen", side_effect=ConnectionError("no network")):
                result = await generate_patient_response(
                    question="What did she tell me?",
                    person_name="Sarah",
                    relationship="daughter",
                    relevant_memories=["Started a new job"],
                )
                assert "Sarah" in result


# ---------------------------------------------------------------------------
# PatientAskInput schema tests
# ---------------------------------------------------------------------------

class TestPatientAskSchema:
    """Test Pydantic schema validation."""

    def test_valid_input(self):
        from backend.app.schemas.models import PatientAskInput
        inp = PatientAskInput(question="Who is this?", person_id="sarah")
        assert inp.question == "Who is this?"
        assert inp.person_id == "sarah"
        assert inp.patient_id == "00000000-0000-0000-0000-000000000001"

    def test_default_patient_id(self):
        from backend.app.schemas.models import PatientAskInput
        inp = PatientAskInput(question="Hello")
        assert inp.patient_id == "00000000-0000-0000-0000-000000000001"
        assert inp.person_id is None

    def test_missing_question_fails(self):
        from backend.app.schemas.models import PatientAskInput
        from pydantic import ValidationError
        with pytest.raises(ValidationError):
            PatientAskInput()


class TestPatientAskResponse:
    """Test response schema."""

    def test_valid_response(self):
        from backend.app.schemas.models import PatientAskResponse
        resp = PatientAskResponse(answer="Sarah told you about her new job.", memories_used=2)
        assert resp.answer == "Sarah told you about her new job."
        assert resp.memories_used == 2

    def test_default_memories_used(self):
        from backend.app.schemas.models import PatientAskResponse
        resp = PatientAskResponse(answer="Hello there.")
        assert resp.memories_used == 0
