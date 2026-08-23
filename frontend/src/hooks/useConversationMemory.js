import { useState, useRef, useCallback, useEffect } from "react";
import { summarizeConversation } from "../services/summarize.js";
import { apiUrl } from "../config/api.js";

/**
 * useConversationMemory — Loop-Engineered continuous visit audio capture,
 * live real-time SpeechRecognition streaming, and Groq Whisper fallback loop.
 */
export function useConversationMemory({ sendCommand: initialSendCommand, connectionStatus } = {}) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Ready");
  const [liveSegments, setLiveSegments] = useState([]);
  const [partialSegment, setPartialSegment] = useState(null);
  const [visitDuration, setVisitDuration] = useState("00:00");
  const [statusState, setStatusState] = useState("idle"); // idle, listening, processing, disconnected, denied

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);
  const visitStartTimeRef = useRef(null);
  const whisperSliceTimerRef = useRef(null);
  const lastWebSpeechTimeRef = useRef(0);

  const activeVisitIdRef = useRef(null);
  const isCapturingRef = useRef(false);
  const recognitionRef = useRef(null);
  const isRecognitionRunningRef = useRef(false);
  const nextSeqNumRef = useRef(0);
  const segmentBufferRef = useRef({});
  const sendCommandRef = useRef(initialSendCommand);
  const liveSegmentsRef = useRef([]);

  useEffect(() => {
    liveSegmentsRef.current = liveSegments;
  }, [liveSegments]);

  // Helper: Persist segment to backend database
  const saveSegmentToBackend = async (visitId, segment) => {
    try {
      await fetch(apiUrl(`/api/visits/${visitId}/transcript`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          segment_id: segment.segment_id,
          text: segment.text,
          sequence: segment.sequence,
          timestamp: segment.timestamp,
          speaker: segment.speaker,
        }),
      });
    } catch (err) {
      console.warn("Failed to persist transcript segment:", err);
    }
  };

  // Handler: Process incoming WebSocket or local transcript events
  const handleLiveTranscriptEvent = useCallback((event) => {
    if (activeVisitIdRef.current && event.visit_id && event.visit_id !== activeVisitIdRef.current) {
      return;
    }

    if (event.type === "transcript_partial") {
      setPartialSegment({
        segment_id: event.segment_id,
        text: event.text,
        speaker: event.speaker || "Speaker",
        timestamp: event.timestamp,
        sequence: event.sequence,
      });
      setStatusState("processing");
    } else if (event.type === "transcript_final") {
      setPartialSegment(null);
      setStatusState("listening");

      setLiveSegments((prev) => {
        if (prev.some((s) => s.segment_id === event.segment_id)) {
          return prev.map((s) => s.segment_id === event.segment_id ? event : s);
        }
        return [...prev, event];
      });
    }
  }, []);

  const stopListening = useCallback(() => {
    isCapturingRef.current = false;
    isRecognitionRunningRef.current = false;

    if (whisperSliceTimerRef.current) {
      clearInterval(whisperSliceTimerRef.current);
      whisperSliceTimerRef.current = null;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
      } catch (e) {}
      recognitionRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    setIsCapturing(false);
    setStatusState("idle");
    setPartialSegment(null);
  }, []);

  const startCapture = useCallback(async ({ name, visitId, language = "en-US", sendCommand } = {}) => {
    if (isCapturingRef.current) return;

    if (sendCommand) {
      sendCommandRef.current = sendCommand;
    }

    const currentVisitId = visitId || `visit-${Date.now()}`;
    activeVisitIdRef.current = currentVisitId;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setStatusMessage("Audio capture not supported in this browser.");
      setStatusState("denied");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      visitStartTimeRef.current = new Date().toISOString();

      isCapturingRef.current = true;
      setIsCapturing(true);
      setStatusState("listening");
      setStatusMessage(`Listening to live speech — ${name || "Visitor"} is active.`);

      let recentSliceChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          recentSliceChunks.push(event.data);
        }
      };

      mediaRecorder.start(1000);

      // Groq Whisper periodic fallback loop: Every 4.5s, if Web Speech produced no text, transcribe audio slice
      whisperSliceTimerRef.current = setInterval(async () => {
        if (!isCapturingRef.current) return;
        const now = Date.now();
        const timeSinceWebSpeech = now - lastWebSpeechTimeRef.current;

        // Only run Whisper fallback if Web Speech has been silent for 4+ seconds and we have audio
        if (timeSinceWebSpeech > 4000 && recentSliceChunks.length > 0) {
          const sliceBlob = new Blob(recentSliceChunks, { type: mediaRecorder.mimeType || "audio/webm" });
          recentSliceChunks = [];

          if (sliceBlob.size > 1500) {
            try {
              const res = await fetch(apiUrl("/api/transcribe"), {
                method: "POST",
                headers: { "Content-Type": sliceBlob.type || "audio/webm" },
                body: sliceBlob,
              });
              if (res.ok) {
                const data = await res.json();
                if (data.success && data.transcript && data.transcript.trim()) {
                  const text = data.transcript.trim();
                  const seq = nextSeqNumRef.current++;
                  const seg = {
                    type: "transcript_final",
                    visit_id: currentVisitId,
                    segment_id: `${currentVisitId}-whisper-${seq}`,
                    text: text,
                    is_final: true,
                    speaker: "Speaker",
                    sequence: seq,
                    timestamp: new Date().toISOString(),
                  };
                  handleLiveTranscriptEvent(seg);
                  saveSegmentToBackend(currentVisitId, seg);
                  const activeSend = sendCommandRef.current || initialSendCommand;
                  if (activeSend) activeSend("broadcast_transcript", seg);
                }
              }
            } catch (e) {
              console.warn("Whisper fallback slice error:", e);
            }
          }
        } else {
          recentSliceChunks = [];
        }
      }, 4500);

      // Continuous browser SpeechRecognition with supervisor loop
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
      if (SpeechRecognition) {
        const startRecognitionInstance = () => {
          if (!isCapturingRef.current) return;
          try {
            if (recognitionRef.current) {
              try {
                recognitionRef.current.onstart = null;
                recognitionRef.current.onresult = null;
                recognitionRef.current.onerror = null;
                recognitionRef.current.onend = null;
                recognitionRef.current.abort();
              } catch (_) {}
            }

            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = language;
            recognitionRef.current = recognition;
            isRecognitionRunningRef.current = true;

            recognition.onstart = () => {
              setStatusState("listening");
            };

            recognition.onresult = (event) => {
              lastWebSpeechTimeRef.current = Date.now();
              setStatusState("processing");

              for (let i = event.resultIndex; i < event.results.length; i++) {
                const res = event.results[i];
                const text = res[0].transcript.trim();
                if (!text) continue;

                const segmentId = `${currentVisitId}-${i}`;
                const isFinal = res.isFinal;

                const payload = {
                  type: isFinal ? "transcript_final" : "transcript_partial",
                  visit_id: currentVisitId,
                  segment_id: segmentId,
                  text: text,
                  is_final: isFinal,
                  speaker: "Speaker",
                  sequence: i,
                  timestamp: new Date().toISOString(),
                };

                // Update local state immediately (0ms lag!)
                if (isFinal) {
                  setPartialSegment(null);
                  setLiveSegments((prev) => {
                    if (prev.some((s) => s.segment_id === segmentId)) {
                      return prev.map((s) => s.segment_id === segmentId ? payload : s);
                    }
                    return [...prev, payload];
                  });
                  setStatusState("listening");
                  saveSegmentToBackend(currentVisitId, payload);
                } else {
                  setPartialSegment(payload);
                }

                const activeSend = sendCommandRef.current || initialSendCommand;
                if (activeSend) {
                  activeSend("broadcast_transcript", payload);
                }
              }
            };

            recognition.onend = () => {
              if (isCapturingRef.current && isRecognitionRunningRef.current) {
                setTimeout(() => {
                  if (isCapturingRef.current && isRecognitionRunningRef.current) {
                    startRecognitionInstance();
                  }
                }, 250);
              }
            };

            recognition.onerror = (e) => {
              if (e.error === "not-allowed") {
                setStatusState("denied");
                setStatusMessage("Microphone permission required");
              }
            };

            recognition.start();
          } catch (err) {
            console.warn("SpeechRecognition start exception:", err);
          }
        };

        startRecognitionInstance();
      }
    } catch (err) {
      setIsCapturing(false);
      setStatusState("denied");
      setStatusMessage(`Could not start audio capture: ${err.message}`);
    }
  }, [initialSendCommand, handleLiveTranscriptEvent]);

  const stopCaptureAndSummarize = useCallback((person) => {
    if (!mediaRecorderRef.current) return Promise.resolve(null);

    setStatusMessage("Visit ended — summarizing memory with Groq...");

    return new Promise((resolve) => {
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        audioChunksRef.current = [];

        const currentSegments = liveSegmentsRef.current || [];
        const finalTranscript = currentSegments
          .map((seg) => `${seg.speaker}: ${seg.text}`)
          .join("\n");

        if (audioBlob.size > 100) {
          const formData = new FormData();
          formData.append("audio", audioBlob, "visit_audio.webm");
          formData.append("person_id", person?.person_id || "unknown");
          formData.append("started_at", visitStartTimeRef.current || new Date().toISOString());
          formData.append("ended_at", new Date().toISOString());
          formData.append("visit_id", activeVisitIdRef.current || "");

          fetch(apiUrl("/api/visits/audio"), {
            method: "POST",
            body: formData,
          }).catch((err) => console.warn("Background audio upload warning:", err));
        }

        // Generate warm patient memory summary via Groq
        if (finalTranscript && finalTranscript.trim().length > 6) {
          try {
            const warmSummary = await summarizeConversation(person, finalTranscript);
            if (warmSummary && warmSummary.trim() && !warmSummary.toLowerCase().includes("processing")) {
              setStatusMessage(`Memory summarized: "${warmSummary}"`);
              resolve(warmSummary.trim());
              return;
            }
          } catch (e) {
            console.warn("Groq visit summarization failed:", e);
          }
        }

        resolve(null);
      };

      stopListening();
    });
  }, [stopListening]);

  // Handle manual typed input for demo & testing
  const appendTranscript = useCallback((inputText, sendCommand) => {
    if (!inputText || !inputText.trim()) return;

    if (!activeVisitIdRef.current) {
      activeVisitIdRef.current = `session-${Date.now()}`;
    }
    const visitId = activeVisitIdRef.current;

    if (sendCommand) {
      sendCommandRef.current = sendCommand;
    }

    let speaker = "Speaker";
    let text = inputText.trim();

    const colonIdx = inputText.indexOf(":");
    if (colonIdx > 0 && colonIdx < 20) {
      speaker = inputText.substring(0, colonIdx).trim();
      text = inputText.substring(colonIdx + 1).trim();
    }

    const seq = nextSeqNumRef.current++;
    const segmentId = `${visitId}-manual-${seq}-${Date.now()}`;

    const segment = {
      type: "transcript_final",
      visit_id: visitId,
      segment_id: segmentId,
      text: text,
      is_final: true,
      speaker: speaker,
      sequence: seq,
      timestamp: new Date().toISOString(),
    };

    // Update locally immediately
    setLiveSegments((prev) => [...prev, segment]);
    setStatusState("listening");

    const activeSend = sendCommandRef.current || initialSendCommand;
    if (activeSend) {
      activeSend("broadcast_transcript", segment);
    }

    saveSegmentToBackend(visitId, segment);
  }, [initialSendCommand]);

  const resetTranscript = useCallback(() => {
    setLiveSegments([]);
    setPartialSegment(null);
    segmentBufferRef.current = {};
    nextSeqNumRef.current = 0;
  }, []);

  const catchUpTranscript = useCallback((visitId) => {
    if (!visitId) return;
    activeVisitIdRef.current = visitId;
    fetch(apiUrl(`/api/visits/${visitId}/transcript`))
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.segments) {
          setLiveSegments(data.segments);
          const maxSeq = data.segments.reduce((max, seg) => Math.max(max, seg.sequence), -1);
          nextSeqNumRef.current = maxSeq + 1;
        }
      })
      .catch((err) => console.warn("Error catching up on segments:", err));
  }, []);

  // Duration Timer
  useEffect(() => {
    if (!isCapturing || !visitStartTimeRef.current) {
      setVisitDuration("00:00");
      return;
    }
    const interval = setInterval(() => {
      const diffMs = Date.now() - new Date(visitStartTimeRef.current).getTime();
      const diffSecs = Math.max(0, Math.floor(diffMs / 1000));
      const mins = String(Math.floor(diffSecs / 60)).padStart(2, "0");
      const secs = String(diffSecs % 60).padStart(2, "0");
      setVisitDuration(`${mins}:${secs}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCapturing]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  const fullTextTranscript = liveSegments.map((seg) => `${seg.speaker}: ${seg.text}`).join("\n");

  return {
    isCapturing,
    transcript: fullTextTranscript,
    statusMessage,
    startCapture,
    stopListening,
    stopCaptureAndSummarize,
    appendTranscript,
    resetTranscript,
    liveSegments,
    partialSegment,
    visitDuration,
    statusState,
    handleLiveTranscriptEvent,
    catchUpTranscript,
    setStatusState,
  };
}
