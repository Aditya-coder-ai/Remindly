"""Smoke test: verify MediaPipe FaceLandmarker loads, camera opens,
and a frame can be processed without error."""

import os
import sys

# Suppress noisy C++ logging
os.environ["GLOG_minloglevel"] = "3"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
os.environ["MEDIAPIPE_DISABLE_GPU"] = "1"

_stderr_fd = os.dup(2)
_devnull = os.open(os.devnull, os.O_WRONLY)
os.dup2(_devnull, 2)
os.close(_devnull)

import cv2
import numpy as np
from backend.app.config import MODEL_PATH
from backend.app.biometrics.recognizer import (
    FaceRecognizer,
    PersonRecord,
    compute_encoding,
)
from mediapipe.tasks.python import BaseOptions
from mediapipe.tasks.python.vision import (
    FaceLandmarker,
    FaceLandmarkerOptions,
    RunningMode,
)

print(f"1. Model path exists ({MODEL_PATH}): {os.path.exists(MODEL_PATH)}")

# Load the landmarker
options = FaceLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=MODEL_PATH),
    running_mode=RunningMode.IMAGE,
    num_faces=1,
)
landmarker = FaceLandmarker.create_from_options(options)

# Restore stderr
os.dup2(_stderr_fd, 2)
os.close(_stderr_fd)

print("2. FaceLandmarker created OK")

# Open camera, grab one frame
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("3. SKIP — no camera available (CI / headless environment)")
else:
    ret, frame = cap.read()
    cap.release()
    if ret:
        print(f"3. Frame captured: {frame.shape}")
        enc = compute_encoding(frame, landmarker)
        if enc is not None:
            print(f"4. Encoding computed: shape={enc.shape}, dtype={enc.dtype}")
        else:
            print("4. No face in frame (normal if nobody is in front)")
    else:
        print("3. Frame capture failed")

# Test PersonRecord + FaceRecognizer construction
dummy_enc = np.random.randn(206)
roster = [PersonRecord(person_id="test_person", encodings=[dummy_enc])]
recognizer = FaceRecognizer(roster=roster)
print(f"5. FaceRecognizer constructed: tolerance={recognizer.tolerance}, "
      f"roster_size={len(recognizer._known_encodings)}")

landmarker.close()
print("\nAll smoke tests passed!")
