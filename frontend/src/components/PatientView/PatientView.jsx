import { useState, useEffect, useRef } from "react";
import ClockScreen from "./ClockScreen.jsx";
import RecognitionCard from "./RecognitionCard.jsx";

const FADE_MS = 700;

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
        setCardPerson(recognizedPerson);
        setCardActive(false);
        requestAnimationFrame(() => setCardActive(true));
      } else {
        setCardPerson(recognizedPerson);
        setCardActive(true);
      }
    } else if (cardPerson !== null) {
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

  // Optional TTS read-aloud
  useEffect(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    if (!synth) return;

    synth.cancel();

    if (recognizedPerson && speakAloud) {
      const name = recognizedPerson.name || "A loved one";
      const rel = recognizedPerson.relationship || "Loved One";
      const note = recognizedPerson.note || "This is the start of your time together.";
      const text = `${name}, your ${rel.toLowerCase()}. ${note}`;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      synth.speak(utterance);
    }
  }, [recognizedPerson, speakAloud]);

  return (
    <section className="patient-view-wrapper">
      <div className="pv-root">
        <ClockScreen active={clockActive} />
        {cardPerson && <RecognitionCard person={cardPerson} active={cardActive} />}
      </div>
    </section>
  );
}
