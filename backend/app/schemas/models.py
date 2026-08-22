"""
backend.app.schemas.models
==========================

Pydantic validation models for Anchor backend requests and responses.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class ProfileInput(BaseModel):
    person_id: str = Field(..., description="Unique slug for the person")
    name: str = Field(..., description="Display name of the loved one")
    relationship: str = Field(..., description="Relationship to the patient")
    avatar_color: str = Field(default="#2f6f4f", description="Avatar accent color")
    avatar_url: Optional[str] = Field(default=None, description="Optional portrait photo URL")
    note: Optional[str] = Field(default=None, description="Current memory prompt / note")


class UpdateNoteInput(BaseModel):
    person_id: str
    note: str
    transcript: str = ""


class RegisterFaceInput(BaseModel):
    person_id: str
    image_base64: Optional[str] = None


class SimulateInput(BaseModel):
    action: str = Field(..., description="'arrive' or 'leave'")
    person_id: Optional[str] = Field(default=None, description="Person ID required for 'arrive'")


class CameraSelectInput(BaseModel):
    camera_index: int = Field(default=0, description="Webcam device index to switch to")


class GroqProxyInput(BaseModel):
    model: str = "llama-3.3-70b-versatile"
    messages: List[Dict[str, Any]]
    max_tokens: Optional[int] = 60
    temperature: Optional[float] = 0.7


class MemoryCreateInput(BaseModel):
    patient_id: str
    visit_id: Optional[str] = None
    memory_type: Optional[str] = None
    content: str
    importance: float = 0.5
    confidence: float = 1.0


class MemorySearchInput(BaseModel):
    patient_id: str
    query: str
    limit: int = 5


class MemorySearchResult(BaseModel):
    id: str
    content: str
    memory_type: Optional[str] = None
    importance: Optional[float] = None
    confidence: Optional[float] = None
    similarity: float


class MemorySearchResponse(BaseModel):
    results: List[MemorySearchResult]


class PatientAskInput(BaseModel):
    question: str = Field(..., description="The patient's transcribed spoken question")
    person_id: Optional[str] = Field(default=None, description="ID of the currently recognized visitor")
    patient_id: str = Field(default="00000000-0000-0000-0000-000000000001", description="Patient UUID")


class PatientAskResponse(BaseModel):
    answer: str = Field(..., description="Dementia-friendly response for TTS")
    memories_used: int = Field(default=0, description="Number of memories consulted")


class StructuredEvent(BaseModel):
    description: str
    who: str
    when_mentioned: str


class FollowUp(BaseModel):
    description: str
    due: Optional[str] = None
    owner: str = Field(..., description="'patient', 'caregiver', or 'family'")


class Sentiment(BaseModel):
    overall: str = Field(..., description="'positive', 'neutral', 'negative', or 'mixed'")
    notes: str


class StructuredExtractionOutput(BaseModel):
    topics: List[str]
    events: List[StructuredEvent]
    follow_ups: List[FollowUp]
    sentiment: Sentiment
    context: str


class Participant(BaseModel):
    name: str
    role: str


class VisitRecord(BaseModel):
    visit_id: str
    patient_id: str
    started_at: str
    ended_at: str
    participants: List[Participant]
    transcript_ref: str
    topics: List[str]
    events: List[StructuredEvent]
    follow_ups: List[FollowUp]
    sentiment: Sentiment
    context: str
    patient_summary: str


class TranscriptSegmentInput(BaseModel):
    segment_id: str
    text: str
    sequence: int
    timestamp: str
    speaker: Optional[str] = "unknown"
