import { useState, useRef, useCallback, useEffect } from "react";

/**
 * useConversationMemory — Captures audio via MediaRecorder and uploads to backend on leave.
 */
export function useConversationMemory() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Ready");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);
  const visitStartTimeRef = useRef(null);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        console.error("Error stopping media recorder", e);
      }
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    setIsCapturing(false);
  }, []);

  const startCapture = useCallback(async ({ name } = {}) => {
    if (isCapturing) return;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setStatusMessage("Audio capture not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      visitStartTimeRef.current = new Date().toISOString();

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start(1000); // collect data every second
      setIsCapturing(true);
      setStatusMessage(`Recording audio — ${name || "visitor"} is here.`);
    } catch (err) {
      setIsCapturing(false);
      setStatusMessage(`Could not start audio capture: ${err.message}`);
    }
  }, [isCapturing]);

  const stopCaptureAndSummarize = useCallback(async (person) => {
    if (!mediaRecorderRef.current) return null;
    
    setStatusMessage("Visit ended — processing audio...");
    
    return new Promise((resolve) => {
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        audioChunksRef.current = [];
        
        if (audioBlob.size === 0) {
          setStatusMessage("No audio captured.");
          resolve(null);
          return;
        }

        const formData = new FormData();
        formData.append("audio", audioBlob, "visit_audio.webm");
        formData.append("person_id", person?.person_id || "unknown");
        formData.append("started_at", visitStartTimeRef.current);
        formData.append("ended_at", new Date().toISOString());

        try {
          const response = await fetch("/api/visits/audio", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            setStatusMessage(`Audio uploaded successfully for processing.`);
            resolve("Processing audio...");
          } else {
            const err = await response.text();
            setStatusMessage(`Upload failed: ${err}`);
            resolve(null);
          }
        } catch (error) {
          setStatusMessage(`Network error during upload: ${error.message}`);
          resolve(null);
        }
      };
      
      stopListening();
    });
  }, [stopListening]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  return {
    isCapturing,
    transcript: "(Transcribing in backend...)",
    statusMessage,
    startCapture,
    stopCaptureAndSummarize,
    appendTranscript: () => {},
    resetTranscript: () => {},
  };
}
