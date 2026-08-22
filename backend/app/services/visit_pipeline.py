"""
backend.app.services.visit_pipeline
===================================

Pipeline for processing visit audio:
1. STT with OpenAI Whisper API
2. Diarization with pyannote.audio (merging with OpenAI segments)
3. Structured extraction via OpenAI GPT-4o
4. Summary generation via OpenAI GPT-4o
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
        from pyannote.audio import Pipeline
        import torch
        logger.info("Loading pyannote diarization pipeline...")
        hf_token = os.environ.get("HF_TOKEN")
        if not hf_token:
            logger.warning("HF_TOKEN not set. Diarization will be mocked.")
            return None
        try:
            _diarization_pipeline = Pipeline.from_pretrained(
                "pyannote/speaker-diarization-3.1",
                use_auth_token=hf_token
            )
            # if torch.cuda.is_available():
            #     _diarization_pipeline.to(torch.device("cuda"))
        except Exception as e:
            logger.error(f"Failed to load pyannote pipeline: {e}")
            return None
    return _diarization_pipeline


def _transcribe_and_diarize(audio_path: str) -> str:
    """
    Runs STT using OpenAI Whisper and Diarization locally, then returns a formatted transcript.
    """
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        logger.warning("OPENAI_API_KEY not set. Cannot transcribe.")
        return ""
        
    client = openai.OpenAI(api_key=api_key)
    
    logger.info("Transcribing audio with OpenAI Whisper...")
    with open(audio_path, "rb") as audio_file:
        transcript_response = client.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file,
            response_format="verbose_json",
            timestamp_granularities=["segment"]
        )
        
    segments = transcript_response.segments
    if not segments:
        return ""
        
    stt_segments = []
    for segment in segments:
        stt_segments.append({
            "start": segment["start"],
            "end": segment["end"],
            "text": segment["text"].strip()
        })
        
    diarization_pipeline = None
    if ENABLE_DIARIZATION:
        diarization_pipeline = _get_diarization_pipeline()
        
    if diarization_pipeline:
        logger.info("Running local pyannote diarization...")
        diarization = diarization_pipeline(audio_path)
        
        # Merge Diarization with STT
        for seg in stt_segments:
            midpoint = (seg["start"] + seg["end"]) / 2
            assigned_speaker = "Unknown"
            for turn, _, speaker in diarization.itertracks(yield_label=True):
                if turn.start <= midpoint <= turn.end:
                    assigned_speaker = speaker
                    break
            seg["speaker"] = assigned_speaker
    else:
        # Mock Diarization
        for seg in stt_segments:
            seg["speaker"] = "Speaker 1"
            
    # Format the final transcript
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
    """Call OpenAI API expecting a JSON object."""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY is not set.")
        
    client = openai.AsyncOpenAI(api_key=api_key)
    
    response = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.1,
        response_format={"type": "json_object"}
    )
    
    content = response.choices[0].message.content
    return json.loads(content)


async def _call_openai_text(prompt: str, max_tokens: int = 150) -> str:
    """Call OpenAI API expecting a plain text string."""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY is not set.")
        
    client = openai.AsyncOpenAI(api_key=api_key)
    
    response = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
        max_tokens=max_tokens
    )
    
    return response.choices[0].message.content.strip()


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
    # 1. Transcribe & Diarize
    loop = asyncio.get_running_loop()
    transcript = await loop.run_in_executor(None, _transcribe_and_diarize, audio_path)
    
    if not transcript.strip():
        transcript = "(No speech detected during this visit)"
        
    # 2. Extract structured JSON
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

Rules:
- topics: short noun phrases, no more than 6.
- events: only things that happened or were described as happening, not small talk.
- follow_ups: anything that implies a future action, appointment, or reminder.
- sentiment: judge from tone and content of the conversation as a whole.
- context: state who was present and the apparent purpose/occasion of the visit.

Transcript:
\"\"\"
{transcript}
\"\"\"
"""
    
    extracted_json = {"topics": [], "events": [], "follow_ups": [], "sentiment": {"overall": "neutral", "notes": ""}, "context": ""}
    if transcript.strip() != "(No speech detected during this visit)":
        try:
            extracted_json = await _call_openai_json(extraction_prompt)
            # Validate with Pydantic
            ValidatedExtraction = StructuredExtractionOutput(**extracted_json)
            extracted_json = ValidatedExtraction.model_dump()
        except Exception as e:
            logger.error(f"Failed to extract structured data from transcript: {e}")
            
    # 3. Generate Patient-Facing Summary
    summary_prompt = f"""
You are writing a gentle note for a dementia patient to remind them of a visit they just had.
Use the structured context below to write a short recap (1-3 sentences, max {MAX_SUMMARY_LENGTH} words).
Use plain language, a warm tone, and present tense where possible. Avoid dates/numbers unless essential.
NEVER use clinical or sentiment analysis language. DO NOT include "The patient" or "You", talk directly to the patient ("You had a nice visit...").

Structured Context:
{json.dumps(extracted_json, indent=2)}
"""
    
    patient_summary = "You had a nice visit today."
    if transcript.strip() != "(No speech detected during this visit)":
        try:
            patient_summary = await _call_openai_text(summary_prompt, max_tokens=60)
        except Exception as e:
            logger.error(f"Failed to generate patient summary: {e}")
            
    # 4. Construct VisitRecord
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
