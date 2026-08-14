import { useState, useRef, useCallback, useEffect } from "react";
import { summarizeConversation } from "../services/summarize.js";

/**
 * useConversationMemory — Captures speech via Web Speech API and summarizes on leave.
 */
export function useConversationMemory() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [statusMessage, setStatusMessage] = useState("Ready");

  const recognitionRef = useRef(null);
  const transcriptLinesRef = useRef([]);
  const isCapturingRef = useRef(false);

  const updateTranscriptState = useCallback(() => {
    setTranscript(transcriptLinesRef.current.join(" ").trim());
  }, []);

  const appendTranscript = useCallback((text) => {
    const line = (text || "").trim();
    if (!line) return;
    transcriptLinesRef.current.push(line);
    updateTranscriptState();
    setStatusMessage(`Transcript: "${line}"`);
  }, [updateTranscriptState]);

  const resetTranscript = useCallback(() => {
    transcriptLinesRef.current = [];
    updateTranscriptState();
  }, [updateTranscriptState]);

  const stopListening = useCallback(() => {
    isCapturingRef.current = false;
    setIsCapturing(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* already stopped */
      }
      recognitionRef.current = null;
    }
  }, []);

  const startCapture = useCallback(({ name } = {}) => {
    if (isCapturingRef.current) {
      return;
    }

    if (
      typeof window === "undefined" ||
      !(window.SpeechRecognition || window.webkitSpeechRecognition)
    ) {
      setStatusMessage("Web Speech API not available — use Chrome over http://localhost or https.");
      return;
    }

    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Recognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          const utterance = result[0].transcript.trim();
          if (utterance) {
            transcriptLinesRef.current.push(utterance);
            updateTranscriptState();
            setStatusMessage(`Heard: "${utterance}"`);
          }
        }
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "no-speech") {
        setStatusMessage("No speech detected — still listening…");
      } else if (
        event.error === "not-allowed" ||
        event.error === "service-not-allowed"
      ) {
        stopListening();
        setStatusMessage(`Microphone permission denied (${event.error}).`);
      } else {
        setStatusMessage(`Speech error (${event.error}).`);
      }
    };

    recognition.onend = () => {
      if (isCapturingRef.current) {
        try {
          recognition.start();
        } catch (err) {
          setStatusMessage(`Failed to resume capture: ${err.message}`);
        }
      }
    };

    recognitionRef.current = recognition;
    isCapturingRef.current = true;
    setIsCapturing(true);

    try {
      recognition.start();
      setStatusMessage(`Listening — ${name || "visitor"} is here.`);
    } catch (err) {
      isCapturingRef.current = false;
      setIsCapturing(false);
      setStatusMessage(`Could not start capture: ${err.message}`);
    }
  }, [stopListening, updateTranscriptState]);

  const stopCaptureAndSummarize = useCallback(async (person) => {
    stopListening();
    setStatusMessage("Visit ended — building memory note…");
    const currentFullTranscript = transcriptLinesRef.current.join(" ").trim();
    const summary = await summarizeConversation(person, currentFullTranscript);
    
    transcriptLinesRef.current = [];
    updateTranscriptState();

    if (summary) {
      setStatusMessage(`Memory updated for ${person?.name || "visitor"}: "${summary}"`);
    } else {
      setStatusMessage("No meaningful speech this visit — previous note kept.");
    }
    return summary;
  }, [stopListening, updateTranscriptState]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  return {
    isCapturing,
    transcript,
    statusMessage,
    startCapture,
    stopCaptureAndSummarize,
    appendTranscript,
    resetTranscript,
  };
}
