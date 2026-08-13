"""
Anchor — Real-Time Face Recognition Module
============================================

On-device, privacy-first face recognition for a dementia-care assistant.
Given a live camera feed and a roster of registered people, this module
continuously detects whether a known person is in frame and reports
**stable** enter / exit events (debounced, not raw per-frame noise).

Backend: MediaPipe FaceLandmarker (no dlib/C++ compiler required).
"""

from .recognizer import FaceRecognizer, PersonRecord, compute_encoding

__all__ = ["FaceRecognizer", "PersonRecord", "compute_encoding"]
