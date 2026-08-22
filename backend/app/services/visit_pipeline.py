"""
backend.app.services.visit_pipeline
===================================

Pipeline for processing visit audio:
1. STT with Groq / OpenAI Whisper API
2. Diarization with pyannote.audio (merging with segments)
3. Structured extraction via Groq / OpenAI
4. Summary generation via Groq / OpenAI
"""

import os
import json
import logging
import asyncio
from typing import List, Dict, Any, Optional

from pydantic import ValidationError
import openai

from ..config import (
    MAX_SUMMARY_LENGTH,
    ENABLE_DIARIZATION,
    PATIENT_DEFAULT_UUID,
)
from ..schemas.models import (
    VisitRecord,
    Participant,
    StructuredExtractionOutput,
)

logger = logging.getLogger(__name__)

_diarization_pipeline = None

def _get_diarization_pipeline():
    global _diarization_pipeline
    if _diarization_pipeline is None:
        hf_token = os.environ.get("HF_TOKEN")
        if not hf_token:
            return None
        try:
            from pyannote.audio import Pipeline
            import torch
            logger.info("Loading pyannote diarization pipeline...")
            _diarization_pipeline = Pipeline.from_pretrained(
                "pyannote/speaker-diarization-3.1",
                use_auth_token=hf_token
            )
        except Exception as e:
            logger.warning(f"Pyannote diarization not available, defaulting to standard STT: {e}")
            return None
    return _diarization_pipeline


def _transcribe_and_diarize(audio_path: str) -> str:
    """Runs STT using Groq Whisper (fallback to OpenAI) and formats transcript."""
    groq_key = os.environ.get("GROQ_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")

    transcript_response = None

    # Try Groq Whisper first (high speed, generous free tier)
    if groq_key:
        try:
            groq_client = openai.OpenAI(
                api_key=groq_key,
                base_url="https://api.groq.com/openai/v1"
            )
            logger.info("Transcribing visit audio with Groq Whisper (whisper-large-v3-turbo)...")
            with open(audio_path, "rb") as audio_file:
                transcript_response = groq_client.audio.transcriptions.create(
                    model="whisper-large-v3-turbo",
                    file=audio_file,
                    response_format="verbose_json",
                )
        except Exception as e:
            logger.warning(f"Groq Whisper transcription failed, trying OpenAI: {e}")

    # Fallback to OpenAI Whisper if Groq failed or not set
    if transcript_response is None and openai_key:
        try:
            client = openai.OpenAI(api_key=openai_key)
            logger.info("Transcribing audio with OpenAI Whisper...")
            with open(audio_path, "rb") as audio_file:
                transcript_response = client.audio.transcriptions.create(
                    model="whisper-1",
                    file=audio_file,
                    response_format="verbose_json",
                )
        except Exception as e:
            logger.error(f"OpenAI Whisper transcription failed: {e}")
            return ""

    if transcript_response is None:
        return ""

    segments = getattr(transcript_response, "segments", None)
    if not segments:
        text = getattr(transcript_response, "text", "")
        return text.strip() if text else ""

    stt_segments = []
    for segment in segments:
        start_val = getattr(segment, "start", segment.get("start", 0) if isinstance(segment, dict) else 0)
        end_val = getattr(segment, "end", segment.get("end", 0) if isinstance(segment, dict) else 0)
        text_val = getattr(segment, "text", segment.get("text", "") if isinstance(segment, dict) else "")
        stt_segments.append({
            "start": start_val,
            "end": end_val,
            "text": str(text_val).strip()
        })

    diarization_pipeline = None
    if ENABLE_DIARIZATION:
        diarization_pipeline = _get_diarization_pipeline()

    if diarization_pipeline:
        try:
            logger.info("Running local pyannote diarization...")
            diarization = diarization_pipeline(audio_path)
            for seg in stt_segments:
                midpoint = (seg["start"] + seg["end"]) / 2
                assigned_speaker = "Unknown"
                for turn, _, speaker in diarization.itertracks(yield_label=True):
                    if turn.start <= midpoint <= turn.end:
                        assigned_speaker = speaker
                        break
                seg["speaker"] = assigned_speaker
        except Exception as e:
            logger.warning(f"Diarization failed: {e}")
            for seg in stt_segments:
                seg["speaker"] = "Speaker"
    else:
        for seg in stt_segments:
            seg["speaker"] = "Speaker"

    transcript_lines = []
    current_speaker = None
    current_text = []

    for seg in stt_segments:
        if seg["speaker"] != current_speaker:
            if current_speaker is not None:
                transcript_lines.append(f"{current_speaker}: {' '.join(current_text)}")
            current_speaker = seg["speaker"]
            current_text = [seg["text"]]
        else:
            current_text.append(seg["text"])

    if current_speaker is not None:
        transcript_lines.append(f"{current_speaker}: {' '.join(current_text)}")

    return "\n".join(transcript_lines)


async def _call_openai_json(prompt: str) -> Dict[str, Any]:
    """Call Groq / OpenAI API expecting a JSON object."""
    groq_key = os.environ.get("GROQ_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")

    if groq_key:
        try:
            client = openai.AsyncOpenAI(
                api_key=groq_key,
                base_url="https://api.groq.com/openai/v1"
            )
            response = await client.chat.completions.create(
                model="groq/compound-mini",
                messages=[{"role": "user", "content": prompt}],
                temperature=0.1,
                response_format={"type": "json_object"}
            )
            content = response.choices[0].message.content
            return json.loads(content)
        except Exception as e:
            logger.warning(f"Groq structured extraction failed: {e}")

    if openai_key:
        client = openai.AsyncOpenAI(api_key=openai_key)
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
            response_format={"type": "json_object"}
        )
        content = response.choices[0].message.content
        return json.loads(content)

    raise ValueError("Neither GROQ_API_KEY nor OPENAI_API_KEY is available.")


async def _call_openai_text(prompt: str, max_tokens: int = 150) -> str:
    """Call Groq / OpenAI API expecting a plain text string."""
    groq_key = os.environ.get("GROQ_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")

    if groq_key:
        try:
            client = openai.AsyncOpenAI(
                api_key=groq_key,
                base_url="https://api.groq.com/openai/v1"
            )
            response = await client.chat.completions.create(
                model="groq/compound-mini",
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                max_tokens=max_tokens
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            logger.warning(f"Groq summary generation failed: {e}")

    if openai_key:
        client = openai.AsyncOpenAI(api_key=openai_key)
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=max_tokens
        )
        return response.choices[0].message.content.strip()

    raise ValueError("Neither GROQ_API_KEY nor OPENAI_API_KEY is available.")


async def process_visit_audio(
    visit_id: str, 
    audio_path: str, 
    visitor_id: str, 
    started_at: str, 
    ended_at: str
) -> VisitRecord:
    """
    Main pipeline:
    1. Transcribe audio
    2. Extract JSON structured memory
    3. Generate patient-facing summary
    4. Return constructed VisitRecord
    """
    from ..storage.visit_storage import visit_storage

    segments = await visit_storage.get_transcript_segments(visit_id)
    if segments:
        logger.info("Assembling transcript from %d real-time segments for visit %s", len(segments), visit_id)
        transcript_lines = []
        for seg in segments:
            speaker = seg.get("speaker") or "Speaker"
            if speaker.lower() == "unknown":
                speaker = "Speaker"
            transcript_lines.append(f"{speaker}: {seg['text']}")
        transcript = "\n".join(transcript_lines)
    else:
        logger.info("No real-time segments found. Falling back to offline audio file transcription...")
        loop = asyncio.get_running_loop()
        transcript = await loop.run_in_executor(None, _transcribe_and_diarize, audio_path)

    if not transcript.strip():
        transcript = "(No speech detected during this visit)"

    extraction_prompt = f"""
You are extracting structured notes from a transcript of a visit with a person who has dementia.
Read the transcript and return ONLY valid JSON matching this exact schema:

{{
  "topics": ["string"],
  "events": [
    {{"description": "string", "who": "string", "when_mentioned": "string"}}
  ],
  "follow_ups": [
    {{"description": "string", "due": "string or null", "owner": "patient|caregiver|family"}}
  ],
  "sentiment": {{
    "overall": "positive|neutral|negative|mixed",
    "notes": "string"
  }},
  "context": "string (1-2 sentences of situational context, e.g. who visited, occasion)"
}}

Transcript:
\"\"\"
{transcript}
\"\"\"
"""

    extracted_json = {"topics": [], "events": [], "follow_ups": [], "sentiment": {"overall": "neutral", "notes": ""}, "context": ""}
    if transcript.strip() != "(No speech detected during this visit)":
        try:
            extracted_json = await _call_openai_json(extraction_prompt)
            ValidatedExtraction = StructuredExtractionOutput(**extracted_json)
            extracted_json = ValidatedExtraction.model_dump()
        except Exception as e:
            logger.error(f"Failed to extract structured data from transcript: {e}")

    summary_prompt = f"""
You are writing a gentle note for a dementia patient to remind them of a visit they just had.
Use the structured context below to write a short recap (1-3 sentences, max {MAX_SUMMARY_LENGTH} words).
Use plain language, a warm tone, and present tense where possible. Avoid dates/numbers unless essential.
NEVER use clinical or sentiment analysis language. Talk directly to the patient ("You had a nice visit...").

Structured Context:
{json.dumps(extracted_json, indent=2)}
"""

    patient_summary = "You had a nice visit today."
    if transcript.strip() != "(No speech detected during this visit)":
        try:
            patient_summary = await _call_openai_text(summary_prompt, max_tokens=60)
        except Exception as e:
            logger.error(f"Failed to generate patient summary: {e}")

    record = VisitRecord(
        visit_id=visit_id,
        patient_id=PATIENT_DEFAULT_UUID,
        started_at=started_at,
        ended_at=ended_at,
        participants=[Participant(name=visitor_id, role="Visitor")],
        transcript_ref=transcript,
        topics=extracted_json.get("topics", []),
        events=extracted_json.get("events", []),
        follow_ups=extracted_json.get("follow_ups", []),
        sentiment=extracted_json.get("sentiment", {"overall": "neutral", "notes": ""}),
        context=extracted_json.get("context", ""),
        patient_summary=patient_summary
    )

    return record
