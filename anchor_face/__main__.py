"""
anchor_face.__main__
====================

Standalone demo — run with:

    python -m anchor_face

The demo:
1. Opens the default webcam.
2. Lets you register 1-2 people by capturing a live frame and typing
   a name in the terminal.
3. Starts the recognition loop and prints enter / exit events to the
   console so you can verify the module works before wiring it into the
   rest of Anchor.

Press Ctrl-C to stop.

This version uses MediaPipe FaceLandmarker for face detection and
geometric landmark-based encodings for matching.  No dlib or C++
compiler required.
"""

from __future__ import annotations

import logging
import os
import sys
import time
from pathlib import Path

import cv2

from .recognizer import (
    FaceRecognizer,
    PersonRecord,
    compute_encoding,
    _MODEL_PATH,
)

# Pretty console output for the demo.
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Registration helper
# ---------------------------------------------------------------------------

def _capture_and_register(
    cap: cv2.VideoCapture,
    landmarker,
    prompt: str,
) -> PersonRecord | None:
    """Show a live preview, wait for SPACE to snapshot, then ask for a name.

    Returns a ``PersonRecord`` with one encoding, or ``None`` if the user
    presses 'q' or no face is found in the snapshot.
    """
    print(f"\n{'='*60}")
    print(f"  {prompt}")
    print(f"  Press SPACE to capture, or Q to skip.")
    print(f"{'='*60}\n")

    while True:
        ret, frame = cap.read()
        if not ret:
            logger.error("Cannot read from camera.")
            return None

        cv2.imshow("Register - SPACE to capture, Q to skip", frame)
        key = cv2.waitKey(1) & 0xFF

        if key == ord("q"):
            cv2.destroyAllWindows()
            return None

        if key == ord(" "):
            cv2.destroyAllWindows()
            break

    # Compute the geometric encoding via MediaPipe.
    enc = compute_encoding(frame, landmarker)

    if enc is None:
        print("!! No face detected in that frame — try again with better "
              "lighting and face the camera directly.")
        return None

    name = input("Enter a name / ID for this person: ").strip()
    if not name:
        print("!! Empty name — skipping registration.")
        return None

    person = PersonRecord(person_id=name, encodings=[enc])
    print(f">> Registered '{name}' with 1 face encoding "
          f"({len(enc)}-dim landmark vector).")
    return person


# ---------------------------------------------------------------------------
# Event callbacks for the demo
# ---------------------------------------------------------------------------

def _on_recognized(person_id: str) -> None:
    """Called when a known person's presence is confirmed."""
    print(f"\n>> Recognized: {person_id}")


def _on_unrecognized() -> None:
    """Called when the confirmed person has left the frame."""
    print(f"\n>> Person left frame.")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    print("\n" + "="*60)
    print("   Anchor — Face Recognition Demo")
    print("   (MediaPipe FaceLandmarker backend)")
    print("="*60)

    # Verify the model file exists.
    if not os.path.exists(_MODEL_PATH):
        print(f"!! FaceLandmarker model not found at:\n   {_MODEL_PATH}")
        print("   Download it with:")
        print("   python -c \"import urllib.request; "
              "urllib.request.urlretrieve("
              "'https://storage.googleapis.com/mediapipe-models/"
              "face_landmarker/face_landmarker/float16/latest/"
              "face_landmarker.task', "
              f"'{_MODEL_PATH}')\"")
        sys.exit(1)

    # Create a shared landmarker for registration snapshots.
    from mediapipe.tasks.python import BaseOptions
    from mediapipe.tasks.python.vision import (
        FaceLandmarker,
        FaceLandmarkerOptions,
        RunningMode,
    )

    options = FaceLandmarkerOptions(
        base_options=BaseOptions(model_asset_path=_MODEL_PATH),
        running_mode=RunningMode.IMAGE,
        num_faces=1,
    )
    landmarker = FaceLandmarker.create_from_options(options)

    # Open the camera once for registration snapshots.
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    if not cap.isOpened():
        cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("!! Cannot open the default camera (index 0).")
        print("   Make sure a webcam is connected and not locked by another app.")
        sys.exit(1)

    roster: list[PersonRecord] = []

    # Register up to 2 people interactively.
    for i in range(1, 3):
        person = _capture_and_register(
            cap,
            landmarker,
            prompt=f"Registration {i}/2 — look at the camera",
        )
        if person is not None:
            roster.append(person)

        if i == 1 and person is not None:
            more = input("Register another person? [y/N]: ").strip().lower()
            if more != "y":
                break

    # Release the camera and landmarker so FaceRecognizer can claim them.
    cap.release()
    landmarker.close()
    cv2.destroyAllWindows()

    if not roster:
        print("\n!! No people registered — nothing to recognize. Exiting.")
        sys.exit(0)

    print(f"\n>> Roster: {[p.person_id for p in roster]}")
    print("   Starting recognition loop…  Press Ctrl-C to stop.\n")

    # Give the user a moment to read.
    time.sleep(1.0)

    recognizer = FaceRecognizer(
        roster=roster,
        tolerance=0.45,
        enter_streak=3,
        exit_streak=4,
        scan_interval_sec=0.5,
        frame_scale=0.5,
        camera_index=0,
        on_recognized=_on_recognized,
        on_unrecognized=_on_unrecognized,
    )

    recognizer.start()


if __name__ == "__main__":
    main()
