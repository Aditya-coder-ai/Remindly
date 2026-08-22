/**
 * sttService.js — Browser-side Speech-to-Text service for Anchor.
 *
 * Uses the Web Speech API (SpeechRecognition) for real-time patient
 * question transcription. This is the LIVE STT path — distinct from
 * the existing MediaRecorder → backend Whisper path used for full
 * visit archival.
 *
 * Interface:
 *   startListening(onResult, onEnd)  → void
 *   stopListening()                  → void
 *   isListening()                    → boolean
 *   mute()                           → void (echo prevention: abort during TTS)
 *   unmute()                         → void (resume after TTS)
 *   isAvailable()                    → boolean
 */

// ---------- Configuration ----------

const DEFAULT_STT_CONFIG = {
  language: "en-US",
  silenceTimeoutMs: 2000,  // Wait 2s of silence before finalizing
  continuous: false,
  interimResults: true,
};

// ---------- Module State ----------

let _recognition = null;
let _isMuted = false;
let _isActive = false;
let _silenceTimer = null;
let _config = { ...DEFAULT_STT_CONFIG };

// ---------- Helpers ----------

function _getSpeechRecognition() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function _log(event, detail = "") {
  console.log(`[STT] ${event}${detail ? ": " + detail : ""}`);
}

// ---------- Core API ----------

/**
 * Check if browser supports Web Speech API.
 */
export function isAvailable() {
  return _getSpeechRecognition() !== null;
}

/**
 * Start listening for patient speech.
 *
 * @param {function} onResult  - Called with (transcript, isFinal) for each result
 * @param {function} onEnd     - Called with (finalTranscript) when speech ends
 */
export function startListening(onResult, onEnd) {
  if (_isMuted) {
    _log("STT_BLOCKED", "Muted (echo prevention active)");
    return;
  }

  if (_isActive && _recognition) {
    // Already listening — don't start a second instance
    return;
  }

  const SpeechRecognition = _getSpeechRecognition();
  if (!SpeechRecognition) {
    _log("STT_ERROR", "Web Speech API not available in this browser");
    return;
  }

  try {
    _recognition = new SpeechRecognition();
    _recognition.lang = _config.language;
    _recognition.continuous = _config.continuous;
    _recognition.interimResults = _config.interimResults;
    _recognition.maxAlternatives = 1;

    let finalTranscript = "";

    _recognition.onstart = () => {
      _isActive = true;
      _log("STT_STARTED");
    };

    _recognition.onresult = (event) => {
      // Clear silence timer on each new result
      if (_silenceTimer) {
        clearTimeout(_silenceTimer);
        _silenceTimer = null;
      }

      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interim += result[0].transcript;
        }
      }

      if (onResult) {
        onResult(finalTranscript + interim, false);
      }

      // Set silence timer — if no more results come in, consider speech done
      _silenceTimer = setTimeout(() => {
        _silenceTimer = null;
        if (_isActive) {
          _log("STT_SILENCE_TIMEOUT");
          stopListening();
          if (onEnd && finalTranscript.trim()) {
            onEnd(finalTranscript.trim());
          }
        }
      }, _config.silenceTimeoutMs);
    };

    _recognition.onend = () => {
      _isActive = false;

      // Clear any pending silence timer
      if (_silenceTimer) {
        clearTimeout(_silenceTimer);
        _silenceTimer = null;
      }

      // If we have a final transcript, deliver it
      if (finalTranscript.trim() && onEnd) {
        _log("STT_COMPLETED", finalTranscript.trim().substring(0, 60));
        onEnd(finalTranscript.trim());
      } else {
        _log("STT_ENDED", "No speech detected");
        // Don't bother the patient with "I didn't hear you"
      }

      _recognition = null;
    };

    _recognition.onerror = (event) => {
      // These are non-fatal — don't crash
      if (event.error === "no-speech") {
        _log("STT_NO_SPEECH");
      } else if (event.error === "aborted") {
        _log("STT_ABORTED", "Muted or stopped");
      } else if (event.error === "not-allowed") {
        _log("STT_ERROR", "Microphone permission denied");
      } else {
        _log("STT_ERROR", event.error);
      }
    };

    _recognition.start();
  } catch (e) {
    _isActive = false;
    _recognition = null;
    _log("STT_ERROR", e.message);
  }
}

/**
 * Stop listening and clean up.
 */
export function stopListening() {
  if (_silenceTimer) {
    clearTimeout(_silenceTimer);
    _silenceTimer = null;
  }

  if (_recognition) {
    try {
      _recognition.abort();
    } catch (e) {
      // Already stopped
    }
    _recognition = null;
  }

  _isActive = false;
}

/**
 * Returns whether STT is actively listening.
 */
export function isListening() {
  return _isActive;
}

/**
 * Mute STT (echo prevention) — aborts any active recognition.
 * Call this when TTS starts speaking.
 */
export function mute() {
  _isMuted = true;
  if (_isActive) {
    stopListening();
  }
  _log("STT_MUTED", "Echo prevention active");
}

/**
 * Unmute STT — allows startListening() to work again.
 * Call this after TTS finishes + cooldown.
 */
export function unmute() {
  _isMuted = false;
  _log("STT_UNMUTED", "Ready to listen");
}

/**
 * Returns whether STT is currently muted.
 */
export function isMuted() {
  return _isMuted;
}

/**
 * Update STT configuration.
 */
export function setConfig(config) {
  _config = { ..._config, ...config };
}
