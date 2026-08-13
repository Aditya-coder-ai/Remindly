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

NOTE: ``dlib`` (a transitive dependency via ``face_recognition``)
requires CMake and a C++ compiler.  On Windows, install Visual Studio
Build Tools with the "Desktop development with C++" workload.
"""

from __future__ import annotations

import logging
import sys
import time

import cv2
import face_recognition
import numpy as np

from .recognizer import FaceRecognizer, PersonRecord

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

        cv2.imshow("Register — SPACE to capture, Q to skip", frame)
        key = cv2.waitKey(1) & 0xFF

        if key == ord("q"):
            cv2.destroyAllWindows()
            return None

        if key == ord(" "):
            cv2.destroyAllWindows()
            break

    # Convert BGR → RGB for face_recognition.
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    locations = face_recognition.face_locations(rgb)

    if not locations:
        print("⚠️  No face detected in that frame — try again with better "
              "lighting and face the camera directly.")
        return None

    encodings = face_recognition.face_encodings(rgb, locations)
    if not encodings:
        print("⚠️  Could not compute a face encoding — try again.")
        return None

    name = input("Enter a name / ID for this person: ").strip()
    if not name:
        print("⚠️  Empty name — skipping registration.")
        return None

    person = PersonRecord(person_id=name, encodings=[encodings[0]])
    print(f"✅  Registered '{name}' with 1 face encoding.")
    return person


# ---------------------------------------------------------------------------
# Event callbacks for the demo
# ---------------------------------------------------------------------------

def _on_recognized(person_id: str) -> None:
    """Called when a known person's presence is confirmed."""
    print(f"\n🟢  Recognized: {person_id}")


def _on_unrecognized() -> None:
    """Called when the confirmed person has left the frame."""
    print(f"\n🔴  Person left frame.")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    print("\n" + "="*60)
    print("   Anchor — Face Recognition Demo")
    print("="*60)

    # Open the camera once for registration snapshots.
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("❌  Cannot open the default camera (index 0).")
        print("    Make sure a webcam is connected and not locked by another app.")
        sys.exit(1)

    roster: list[PersonRecord] = []

    # Register up to 2 people interactively.
    for i in range(1, 3):
        person = _capture_and_register(
            cap,
            prompt=f"Registration {i}/2 — look at the camera",
        )
        if person is not None:
            roster.append(person)

        if i == 1 and person is not None:
            more = input("Register another person? [y/N]: ").strip().lower()
            if more != "y":
                break

    # Release the camera so FaceRecognizer can claim it.
    cap.release()
    cv2.destroyAllWindows()

    if not roster:
        print("\n⚠️  No people registered — nothing to recognize. Exiting.")
        sys.exit(0)

    print(f"\n📋  Roster: {[p.person_id for p in roster]}")
    print("    Starting recognition loop…  Press Ctrl-C to stop.\n")

    # Give the user a moment to read.
    time.sleep(1.0)

    recognizer = FaceRecognizer(
        roster=roster,
        tolerance=0.5,
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
