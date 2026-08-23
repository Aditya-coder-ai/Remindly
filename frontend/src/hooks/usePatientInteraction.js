/**
 * usePatientInteraction.js — Patient interaction state machine for Anchor.
 *
 * Orchestrates the full TTS + STT + memory conversation loop:
 *   IDLE → RECOGNIZED → INTRODUCING → LISTENING → THINKING → SPEAKING → LISTENING (loop)
 *
 * Handles:
 *   - Greeting deduplication (don't re-greet same person within cooldown)
 *   - Echo prevention (mute STT during TTS + cooldown)
 *   - Interrupt on visitor change or departure
 *   - Graceful degradation if TTS/STT unavailable
 */

import { useState, useEffect, useRef, useCallback } from "react";
import * as tts from "../services/ttsService.js";
import * as stt from "../services/sttService.js";
import { detectIntent } from "../services/intentDetector.js";
import { apiUrl } from "../config/api.js";

// ---------- Interaction States ----------

export const STATES = {
  IDLE: "IDLE",
  RECOGNIZED: "RECOGNIZED",
  INTRODUCING: "INTRODUCING",
  LISTENING: "LISTENING",
  THINKING: "THINKING",
  SPEAKING: "SPEAKING",
  VISITOR_LEFT: "VISITOR_LEFT",
};

// ---------- Configuration ----------

const GREETING_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const ECHO_COOLDOWN_MS = 500; // 500ms silence after TTS before STT resumes
const LISTEN_TIMEOUT_MS = 15000; // Stop listening after 15s of no speech
const MAX_CONVERSATION_TURNS = 20; // Safety: don't loop forever

// ---------- Hook ----------

/**
 * @param {object} params
 * @param {object|null}  params.recognizedPerson   - Currently recognized person from WebSocket
 * @param {boolean}      params.ttsEnabled         - Whether TTS is enabled (caregiver setting)
 * @param {boolean}      params.interactionEnabled  - Whether voice interaction is enabled
 * @param {boolean}      params.autoListenEnabled   - Whether auto-listening is enabled
 */
export function usePatientInteraction({
  recognizedPerson = null,
  ttsEnabled = true,
  interactionEnabled = true,
  autoListenEnabled = true,
} = {}) {
  const [state, setState] = useState(STATES.IDLE);
  const [systemResponse, setSystemResponse] = useState("");
  const [patientTranscript, setPatientTranscript] = useState("");

  // Greeting deduplication
  const lastGreetingRef = useRef({ personId: null, timestamp: 0 });
  // Conversation turn counter (safety)
  const turnCountRef = useRef(0);
  // Listen timeout
  const listenTimeoutRef = useRef(null);
  // Echo cooldown timer
  const echoCooldownRef = useRef(null);
  // Mounted guard
  const mountedRef = useRef(true);
  // Current person ref for async callbacks
  const personRef = useRef(null);

  useEffect(() => {
    personRef.current = recognizedPerson;
  }, [recognizedPerson]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      tts.stop();
      stt.stopListening();
      stt.unmute();
      _clearTimers();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function _clearTimers() {
    if (listenTimeoutRef.current) {
      clearTimeout(listenTimeoutRef.current);
      listenTimeoutRef.current = null;
    }
    if (echoCooldownRef.current) {
      clearTimeout(echoCooldownRef.current);
      echoCooldownRef.current = null;
    }
  }

  // -----------------------------------------------------------------------
  // State transition: Person recognized
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!recognizedPerson) {
      // Visitor left
      if (state !== STATES.IDLE) {
        _handleVisitorLeft();
      }
      return;
    }

    // Person arrived or changed
    const personKey = (recognizedPerson.person_id || recognizedPerson.name || "").toLowerCase();
    const personName = (recognizedPerson.name || "").toLowerCase();
    const lastGreeting = lastGreetingRef.current;

    // Check if we already greeted this person recently (5-min cooldown)
    const isSamePerson =
      lastGreeting.key &&
      (lastGreeting.key === personKey ||
       lastGreeting.name === personName ||
       lastGreeting.key === personName);

    const isWithinCooldown = Date.now() - lastGreeting.timestamp < GREETING_COOLDOWN_MS;

    if (isSamePerson && isWithinCooldown) {
      // Already greeted — stay in recognized state but don't re-greet
      if (state === STATES.IDLE) {
        setState(STATES.RECOGNIZED);
      }
      return;
    }

    // Record greeting timestamp immediately to lock out double-triggers
    lastGreetingRef.current = {
      key: personKey,
      name: personName,
      timestamp: Date.now(),
    };

    // New person or cooldown expired — start introduction
    if (state === STATES.INTRODUCING || state === STATES.SPEAKING) {
      tts.stop();
      stt.stopListening();
    }

    setState(STATES.RECOGNIZED);
    turnCountRef.current = 0;

    if (ttsEnabled) {
      _introduceVisitor(recognizedPerson);
    }
  }, [recognizedPerson]); // eslint-disable-line react-hooks/exhaustive-deps

  // -----------------------------------------------------------------------
  // Introduction: TTS greeting + memory
  // -----------------------------------------------------------------------
  async function _introduceVisitor(person) {
    if (!mountedRef.current) return;

    setState(STATES.INTRODUCING);

    // Mute STT during TTS (echo prevention)
    stt.mute();

    const name = person.name || "A loved one";
    const rawRel = (person.relationship || "").trim().toLowerCase();
    const note = person.note || null;

    // Build greeting
    let greeting;
    if (rawRel && rawRel !== "visitor" && rawRel !== "loved one") {
      greeting = `${name} is here. They are your ${rawRel}.`;
    } else {
      greeting = `${name} is here.`;
    }

    setSystemResponse(greeting);

    // Speak greeting
    await tts.speak(greeting);

    if (!mountedRef.current || personRef.current?.person_id !== person.person_id) return;

    // Speak memory note if available (filter out any placeholder text)
    if (
      note &&
      !note.toLowerCase().includes("processing audio") &&
      !note.toLowerCase().includes("no speech detected") &&
      !note.toLowerCase().includes("no audio captured")
    ) {
      const memoryText = note.length > 120 ? note.substring(0, 120) + "." : note;
      setSystemResponse(memoryText);
      await tts.speak(memoryText);
    }

    if (!mountedRef.current || personRef.current?.person_id !== person.person_id) return;

    // After introduction, start listening (if enabled)
    _startEchoCooldownThenListen();
  }

  // -----------------------------------------------------------------------
  // Echo prevention: cooldown after TTS before enabling STT
  // -----------------------------------------------------------------------
  function _startEchoCooldownThenListen() {
    if (!interactionEnabled || !autoListenEnabled) {
      setState(STATES.RECOGNIZED);
      stt.unmute();
      return;
    }

    echoCooldownRef.current = setTimeout(() => {
      echoCooldownRef.current = null;
      if (mountedRef.current && personRef.current) {
        stt.unmute();
        _startListening();
      }
    }, ECHO_COOLDOWN_MS);
  }

  // -----------------------------------------------------------------------
  // Listening: STT for patient questions
  // -----------------------------------------------------------------------
  function _startListening() {
    if (!mountedRef.current || !personRef.current) return;
    if (!stt.isAvailable()) {
      setState(STATES.RECOGNIZED);
      return;
    }
    if (turnCountRef.current >= MAX_CONVERSATION_TURNS) {
      setState(STATES.RECOGNIZED);
      return;
    }

    setState(STATES.LISTENING);
    setPatientTranscript("");
    setSystemResponse("");

    // Set a max listening timeout
    listenTimeoutRef.current = setTimeout(() => {
      listenTimeoutRef.current = null;
      if (mountedRef.current && state === STATES.LISTENING) {
        stt.stopListening();
        setState(STATES.RECOGNIZED);
      }
    }, LISTEN_TIMEOUT_MS);

    stt.startListening(
      // onResult: interim updates
      (transcript, _isFinal) => {
        if (mountedRef.current) {
          setPatientTranscript(transcript);
        }
      },
      // onEnd: final transcript
      (finalTranscript) => {
        if (listenTimeoutRef.current) {
          clearTimeout(listenTimeoutRef.current);
          listenTimeoutRef.current = null;
        }
        if (mountedRef.current && finalTranscript && personRef.current) {
          _handlePatientQuestion(finalTranscript, personRef.current);
        } else if (mountedRef.current) {
          setState(STATES.RECOGNIZED);
        }
      }
    );
  }

  // -----------------------------------------------------------------------
  // Process patient question: intent → memory → LLM → TTS
  // -----------------------------------------------------------------------
  async function _handlePatientQuestion(transcript, person) {
    if (!mountedRef.current) return;

    setState(STATES.THINKING);
    setPatientTranscript(transcript);
    turnCountRef.current++;

    const { intent } = detectIntent(transcript, person);
    console.log(`[Interaction] PATIENT_QUERY: "${transcript}" → intent: ${intent}`);

    try {
      const response = await fetch(apiUrl("/api/patient/ask"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: transcript,
          person_id: person.person_id,
          patient_id: "00000000-0000-0000-0000-000000000001",
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const answer = data.answer || _fallbackResponse(person);

      if (!mountedRef.current || !personRef.current) return;

      // Speak the answer
      setState(STATES.SPEAKING);
      setSystemResponse(answer);
      stt.mute(); // Echo prevention

      await tts.speak(answer);

      if (!mountedRef.current || !personRef.current) return;

      // After speaking, listen again
      _startEchoCooldownThenListen();
    } catch (error) {
      console.error("[Interaction] Error processing patient question:", error);

      if (!mountedRef.current || !personRef.current) return;

      // LLM failed → use deterministic fallback
      const fallback = _fallbackResponse(person);
      setState(STATES.SPEAKING);
      setSystemResponse(fallback);
      stt.mute();

      await tts.speak(fallback);

      if (!mountedRef.current || !personRef.current) return;

      _startEchoCooldownThenListen();
    }
  }

  function _fallbackResponse(person) {
    const name = person?.name || "Your visitor";
    const rel = person?.relationship || "";
    if (rel && rel.toLowerCase() !== "visitor" && rel.toLowerCase() !== "loved one") {
      return `${name} is here. They are your ${rel.toLowerCase()}.`;
    }
    return `${name} is here with you.`;
  }

  // -----------------------------------------------------------------------
  // Visitor departure
  // -----------------------------------------------------------------------
  function _handleVisitorLeft() {
    _clearTimers();
    tts.stop();
    stt.stopListening();
    stt.unmute();

    setState(STATES.VISITOR_LEFT);
    setSystemResponse("");
    setPatientTranscript("");
    turnCountRef.current = 0;

    // Brief transition, then return to IDLE
    setTimeout(() => {
      if (mountedRef.current) {
        setState(STATES.IDLE);
      }
    }, 500);
  }

  // -----------------------------------------------------------------------
  // Manual controls (for caregiver override)
  // -----------------------------------------------------------------------
  const stopInteraction = useCallback(() => {
    _clearTimers();
    tts.stop();
    stt.stopListening();
    stt.unmute();
    setState(STATES.RECOGNIZED);
    setSystemResponse("");
    setPatientTranscript("");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    state,
    systemResponse,
    patientTranscript,
    stopInteraction,
  };
}
