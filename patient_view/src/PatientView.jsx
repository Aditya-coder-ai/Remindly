import { useEffect, useRef, useState } from "react";
import ClockScreen from "./ClockScreen.jsx";
import RecognitionCard from "./RecognitionCard.jsx";
import { buildAnnouncement } from "./phrases.js";

/** Matches the CSS cross-fade duration in patientView.css. */
export const FADE_MS = 700;

/**
 * PatientView — the patient-facing display for Anchor.
 *
 * The single source of truth is the `recognizedPerson` prop:
 *   - `null`            -> calm clock/orientation screen (ClockScreen)
 *   - a person object   -> full-screen recognition card (RecognitionCard)
 *
 * This component never runs face recognition, never talks to an AI model,
 * and has no timers deciding who is recognized — that decision is made
 * upstream and passed in. It only renders, cross-fades between the two
 * states, and (optionally) reads the card aloud.
 *
 * @param {Object|null} recognizedPerson
 *   { name: string, relationship: string, note: string }
 * @param {boolean} speakAloud - read the card aloud via SpeechSynthesis.
 */
export default function PatientView({ recognizedPerson = null, speakAloud = true }) {
  const [cardPerson, setCardPerson] = useState(null);
  const [cardActive, setCardActive] = useState(false);
  const unmountTimer = useRef(null);

  const clockActive = cardPerson === null || !cardActive;

  useEffect(() => {
    if (unmountTimer.current) {
      clearTimeout(unmountTimer.current);
      unmountTimer.current = null;
    }

    if (recognizedPerson) {
      if (cardPerson === null) {
        // Mount the card hidden, then activate on the next frame so the
        // clock cross-fades out as the card cross-fades in.
        setCardPerson(recognizedPerson);
        setCardActive(false);
        requestAnimationFrame(() => setCardActive(true));
      } else {
        // Person changed (or re-arrived mid-fade-out): update content and
        // bring the card back to full visibility.
        setCardPerson(recognizedPerson);
        setCardActive(true);
      }
    } else if (cardPerson !== null) {
      // Person left: fade the card out, then unmount it so the clock is
      // revealed through the same gentle cross-fade.
      setCardActive(false);
      unmountTimer.current = setTimeout(() => {
        unmountTimer.current = null;
        setCardPerson(null);
      }, FADE_MS);
    }
  }, [recognizedPerson]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      if (unmountTimer.current) clearTimeout(unmountTimer.current);
    };
  }, []);

  // Optional: read the card aloud when it appears. Purely a display-layer
  // nicety — easy to disable via the `speakAloud` prop.
  useEffect(() => {
    const synth =
      typeof window !== "undefined" ? window.speechSynthesis : null;
    if (!synth) return;

    synth.cancel();

    if (recognizedPerson && speakAloud) {
      const text = buildAnnouncement(recognizedPerson);
      if (text) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = 0.95;
        synth.speak(msg);
      }
    }
  }, [recognizedPerson, speakAloud]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="pv-root">
      <ClockScreen active={clockActive} />
      {cardPerson && <RecognitionCard person={cardPerson} active={cardActive} />}
    </div>
  );
}