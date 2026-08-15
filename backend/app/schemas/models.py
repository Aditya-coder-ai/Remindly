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


class GroqProxyInput(BaseModel):
    model: str = "llama-3.3-70b-versatile"
    messages: List[Dict[str, Any]]
    max_tokens: Optional[int] = 60
    temperature: Optional[float] = 0.7
