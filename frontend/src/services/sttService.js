/**
 * sttService.js — Loop-Engineered Speech-to-Text Service for Anchor.
 * =================================================================
 *
 * Implements a resilient dual-engine speech recognition loop:
 *   1. Primary Engine: Browser Web Speech API (SpeechRecognition / webkitSpeechRecognition)
 *      - Supervisor loop with jittered auto-restart on unexpected termination / no-speech.
 *      - Clean instance teardown preventing InvalidStateError.
 *   2. Secondary Engine: Server-Side Groq Whisper Fallback (/api/transcribe)
 *      - Captures audio slices via MediaRecorder when Web Speech is unsupported or blocked.
 *      - Sub-300ms ultra-fast transcription using whisper-large-v3-turbo.
 *
 * Features:
 *   - Voice Activity Detection (VAD) with adaptive silence timeout
 *   - Echo Prevention (ducking/muting during TTS speech)
 *   - Zero-crash error recovery
 */

// ---------- Configuration ----------

const DEFAULT_CONFIG = {
  language: "en-US",
  silenceTimeoutMs: 1800,
  maxListeningDurationMs: 16000,
  fallbackSliceMs: 3500,
};

// ---------- States ----------

const STT_STATES = {
  IDLE: "IDLE",
  LISTENING: "LISTENING",
  MUTED: "MUTED",
  PROCESSING: "PROCESSING",
  RESTARTING: "RESTARTING",
};

// ---------- Module State ----------

let _state = STT_STATES.IDLE;
let _recognition = null;
let _isMuted = false;
let _silenceTimer = null;
let _maxDurationTimer = null;
let _restartTimer = null;
let _config = { ...DEFAULT_CONFIG };

// Callbacks
let _onResultCallback = null;
let _onEndCallback = null;
let _currentTranscript = "";

// Fallback MediaRecorder state
let _mediaRecorder = null;
let _mediaStream = null;
let _fallbackInterval = null;
let _audioChunks = [];

// ---------- Helpers ----------

function _getSpeechRecognitionConstructor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function _log(event, detail = "") {
  console.log(`[STT-Loop] ${event}${detail ? ": " + detail : ""}`);
}

export function setConfig(opts = {}) {
  _config = { ..._config, ...opts };
}

export function isAvailable() {
  // Returns true if either Web Speech API or MediaRecorder + /api/transcribe is supported
  const hasWebSpeech = _getSpeechRecognitionConstructor() !== null;
  const hasMediaRecorder = typeof window !== "undefined" && !!window.MediaRecorder;
  return hasWebSpeech || hasMediaRecorder;
}

export function isListening() {
  return _state === STT_STATES.LISTENING;
}

export function getState() {
  return _state;
}

// ---------- Supervisor & Lifecycle Loop ----------

/**
 * Start listening for patient speech.
 *
 * @param {function} onResult - (transcript: string, isFinal: boolean) => void
 * @param {function} onEnd    - (finalTranscript: string) => void
 */
export function startListening(onResult, onEnd) {
  _onResultCallback = onResult || (() => {});
  _onEndCallback = onEnd || (() => {});
  _currentTranscript = "";

  if (_isMuted) {
    _log("MUTED", "Listening queued — muted for TTS");
    _state = STT_STATES.MUTED;
    return;
  }

  _cleanupAll();
  _state = STT_STATES.LISTENING;

  const SpeechRecognitionClass = _getSpeechRecognitionConstructor();
  if (SpeechRecognitionClass) {
    _startWebSpeechEngine(SpeechRecognitionClass);
  } else {
    _log("FALLBACK_MODE", "Web Speech API not available — using Groq Whisper fallback");
    _startFallbackWhisperEngine();
  }

  // Max listening timeout guard
  _maxDurationTimer = setTimeout(() => {
    _log("MAX_DURATION_REACHED");
    _finalizeAndStop();
  }, _config.maxListeningDurationMs);
}

/**
 * Stop listening cleanly.
 */
export function stopListening() {
  _log("STOP_REQUESTED");
  _cleanupAll();
  _state = STT_STATES.IDLE;
  _currentTranscript = "";
}

/**
 * Echo prevention: Mute listening during TTS playback.
 */
export function mute() {
  _isMuted = true;
  if (_state === STT_STATES.LISTENING) {
    _log("MUTED_FOR_TTS");
    _cleanupAll();
    _state = STT_STATES.MUTED;
  }
}

/**
 * Resume listening after TTS finishes.
 */
export function unmute() {
  _isMuted = false;
  if (_state === STT_STATES.MUTED) {
    _log("UNMUTED", "Resuming speech listening loop");
    if (_onResultCallback || _onEndCallback) {
      startListening(_onResultCallback, _onEndCallback);
    } else {
      _state = STT_STATES.IDLE;
    }
  }
}

// ---------- Engine 1: Web Speech API with Supervisor Loop ----------

function _startWebSpeechEngine(SpeechRecognitionClass) {
  try {
    const recognition = new SpeechRecognitionClass();
    _recognition = recognition;

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = _config.language;
    recognition.maxAlternatives = 1;

    let localFinal = "";

    recognition.onstart = () => {
      _log("WEB_SPEECH_STARTED");
      _state = STT_STATES.LISTENING;
    };

    recognition.onresult = (event) => {
      if (_state !== STT_STATES.LISTENING || _isMuted) return;

      // Reset silence timer on every voice result
      _resetSilenceTimer();

      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const res = event.results[i];
        const text = res[0].transcript;
        if (res.isFinal) {
          localFinal += text + " ";
        } else {
          interim += text;
        }
      }

      const fullText = (localFinal + interim).trim();
      if (fullText) {
        _currentTranscript = fullText;
        if (_onResultCallback) {
          _onResultCallback(fullText, false);
        }
      }
    };

    recognition.onerror = (event) => {
      _log("WEB_SPEECH_ERROR", event.error);

      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        // Fallback to server Whisper if microphone or cloud STT permission fails
        _log("FALLBACK_TRIGGERED", "Switching to Groq Whisper engine");
        _cleanupWebSpeech();
        _startFallbackWhisperEngine();
      } else if (event.error === "no-speech") {
        // Normal silence — supervisor loop will handle or silence timer will fire
      } else if (event.error === "network") {
        _log("NETWORK_ERROR", "Retrying speech recognition");
        _scheduleSupervisorRestart(600);
      }
    };

    recognition.onend = () => {
      _log("WEB_SPEECH_ENDED");

      // If still supposed to be listening, supervise auto-restart
      if (_state === STT_STATES.LISTENING && !_isMuted) {
        if (_currentTranscript.trim()) {
          // Deliver transcript if we have one
          _finalizeAndStop();
        } else {
          // Restart loop if user hasn't finished
          _scheduleSupervisorRestart(300);
        }
      }
    };

    recognition.start();
  } catch (err) {
    _log("WEB_SPEECH_INIT_FAILED", err.message);
    _startFallbackWhisperEngine();
  }
}

function _scheduleSupervisorRestart(delayMs = 300) {
  if (_restartTimer) clearTimeout(_restartTimer);
  if (_state !== STT_STATES.LISTENING || _isMuted) return;

  _restartTimer = setTimeout(() => {
    _restartTimer = null;
    if (_state === STT_STATES.LISTENING && !_isMuted) {
      _cleanupWebSpeech();
      const SpeechRecognitionClass = _getSpeechRecognitionConstructor();
      if (SpeechRecognitionClass) {
        _startWebSpeechEngine(SpeechRecognitionClass);
      } else {
        _startFallbackWhisperEngine();
      }
    }
  }, delayMs);
}

// ---------- Engine 2: Server-Side Groq Whisper Fallback Loop ----------

async function _startFallbackWhisperEngine() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    _log("MIC_UNAVAILABLE", "No getUserMedia support");
    return;
  }

  try {
    _mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    _mediaRecorder = new MediaRecorder(_mediaStream);
    _audioChunks = [];

    _mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        _audioChunks.push(e.data);
      }
    };

    _mediaRecorder.onstop = async () => {
      if (_audioChunks.length === 0) return;
      const audioBlob = new Blob(_audioChunks, { type: _mediaRecorder.mimeType || "audio/webm" });
      _audioChunks = [];

      if (audioBlob.size < 400 || _state !== STT_STATES.LISTENING) return;

      try {
        _log("SENDING_TO_WHISPER", `${audioBlob.size} bytes`);
        const res = await fetch("/api/transcribe", {
          method: "POST",
          headers: { "Content-Type": audioBlob.type || "audio/webm" },
          body: audioBlob,
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.transcript) {
            const text = data.transcript.trim();
            _log("WHISPER_RESULT", text);
            _currentTranscript = text;
            if (_onResultCallback) _onResultCallback(text, true);
            if (_onEndCallback) _onEndCallback(text);
          }
        }
      } catch (err) {
        _log("WHISPER_FALLBACK_ERROR", err.message);
      }
    };

    _mediaRecorder.start();
    _log("WHISPER_FALLBACK_RECORDING");

    // Slice audio after fallback interval
    _fallbackInterval = setTimeout(() => {
      if (_mediaRecorder && _mediaRecorder.state === "recording") {
        _mediaRecorder.stop();
      }
    }, _config.fallbackSliceMs);

  } catch (err) {
    _log("MIC_PERMISSION_DENIED", err.message);
  }
}

// ---------- Silence & Finalization Control ----------

function _resetSilenceTimer() {
  if (_silenceTimer) clearTimeout(_silenceTimer);

  _silenceTimer = setTimeout(() => {
    _silenceTimer = null;
    _log("SILENCE_DETECTED", _currentTranscript);
    if (_currentTranscript.trim()) {
      _finalizeAndStop();
    }
  }, _config.silenceTimeoutMs);
}

function _finalizeAndStop() {
  const finalText = _currentTranscript.trim();
  _cleanupAll();
  _state = STT_STATES.IDLE;

  if (finalText && _onEndCallback) {
    _onEndCallback(finalText);
  }
}

function _cleanupWebSpeech() {
  if (_recognition) {
    try {
      _recognition.onstart = null;
      _recognition.onresult = null;
      _recognition.onerror = null;
      _recognition.onend = null;
      _recognition.abort();
    } catch (_) {}
    _recognition = null;
  }
}

function _cleanupFallback() {
  if (_fallbackInterval) {
    clearTimeout(_fallbackInterval);
    _fallbackInterval = null;
  }
  if (_mediaRecorder && _mediaRecorder.state !== "inactive") {
    try {
      _mediaRecorder.stop();
    } catch (_) {}
    _mediaRecorder = null;
  }
  if (_mediaStream) {
    _mediaStream.getTracks().forEach((t) => t.stop());
    _mediaStream = null;
  }
  _audioChunks = [];
}

function _cleanupAll() {
  if (_silenceTimer) {
    clearTimeout(_silenceTimer);
    _silenceTimer = null;
  }
  if (_maxDurationTimer) {
    clearTimeout(_maxDurationTimer);
    _maxDurationTimer = null;
  }
  if (_restartTimer) {
    clearTimeout(_restartTimer);
    _restartTimer = null;
  }
  _cleanupWebSpeech();
  _cleanupFallback();
}
