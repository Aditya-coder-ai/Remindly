import { useState, useEffect, useRef } from "react";
import ClockScreen from "./ClockScreen.jsx";
import RecognitionCard from "./RecognitionCard.jsx";
import { usePatientInteraction, STATES } from "../../hooks/usePatientInteraction.js";
import * as tts from "../../services/ttsService.js";
import * as stt from "../../services/sttService.js";

const FADE_MS = 700;

export default function PatientView({
  recognizedPerson = null,
  speakAloud = true,
  ttsSettings = {},
  interactionEnabled = true,
  autoListenEnabled = true,
}) {
  const [cardPerson, setCardPerson] = useState(null);
  const [cardActive, setCardActive] = useState(false);
  const unmountTimer = useRef(null);

  const clockActive = cardPerson === null || !cardActive;

  // Apply TTS and STT settings when they change
  useEffect(() => {
    if (ttsSettings) {
      tts.setConfig({
        rate: ttsSettings.rate,
        pitch: ttsSettings.pitch,
        volume: ttsSettings.volume,
        language: ttsSettings.language,
        voiceName: ttsSettings.voiceName,
        enabled: ttsSettings.ttsEnabled !== false && speakAloud !== false,
      });
      stt.setConfig({
        language: ttsSettings.language,
      });
    }
  }, [ttsSettings, speakAloud]);

  // Patient interaction state machine (TTS + STT + conversation loop)
  const {
    state: interactionState,
    systemResponse,
    patientTranscript,
  } = usePatientInteraction({
    recognizedPerson,
    ttsEnabled: speakAloud,
    interactionEnabled,
    autoListenEnabled,
  });

  // Card mount/unmount with fade animation
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

  // NOTE: The old inline speechSynthesis.speak() useEffect has been removed.
  // All TTS is now handled by the centralized usePatientInteraction hook
  // which uses ttsService.js for queued, non-overlapping speech.

  return (
    <section className="patient-view-wrapper">
      <div className="pv-root">
        <ClockScreen active={clockActive} />
        {cardPerson && (
          <RecognitionCard
            person={cardPerson}
            active={cardActive}
            interactionState={interactionState}
            systemResponse={systemResponse}
            patientTranscript={patientTranscript}
          />
        )}
      </div>
    </section>
  );
}
