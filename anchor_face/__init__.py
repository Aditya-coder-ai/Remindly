"""
Anchor — Real-Time Face Recognition Module
============================================

On-device, privacy-first face recognition for a dementia-care assistant.
Given a live camera feed and a roster of registered people, this module
continuously detects whether a known person is in frame and reports
**stable** enter / exit events (debounced, not raw per-frame noise).

Dependencies
------------
- opencv-python   — camera capture & frame manipulation
- face_recognition (dlib) — face detection, 128-d encoding, distance scoring
- numpy

NOTE: ``dlib`` requires CMake and a C++ compiler to build.
      On Windows, install Visual Studio Build Tools with the
      "Desktop development with C++" workload first.
      This is typically the trickiest part of the setup.
"""

from .recognizer import FaceRecognizer, PersonRecord

__all__ = ["FaceRecognizer", "PersonRecord"]
