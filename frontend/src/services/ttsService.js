/**
 * ttsService.js — Centralized Text-to-Speech service for Anchor.
 *
 * Provides a sequential speech queue, configurable voice selection,
 * interrupt handling, and structured logging. All TTS goes through
 * this single service — components never call speechSynthesis directly.
 *
 * Interface:
 *   speak(text, options)   → Promise (resolves when utterance finishes)
 *   queueSpeech(text, opts)→ void   (add to sequential queue)
 *   stop()                 → void   (cancel current + clear queue)
 *   pause() / resume()     → void
 *   isSpeaking()           → boolean
 *   setConfig(config)      → void
 *   getConfig()            → object
 *   onSpeakingChange(cb)   → unsubscribe fn
 */

// ---------- Default TTS Configuration ----------

const DEFAULT_TTS_CONFIG = {
  rate: 0.85,
  pitch: 1.0,
  volume: 1.0,
  language: "en-US",
  voiceName: null, // null = auto-select best available
  enabled: true,
};

// ---------- Module State ----------

let _config = { ...DEFAULT_TTS_CONFIG };
let _queue = [];
let _currentUtterance = null;
let _isProcessingQueue = false;
let _speakingChangeListeners = [];

// ---------- Helpers ----------

function _getSynth() {
  if (typeof window === "undefined") return null;
  return window.speechSynthesis || null;
}

function _isAvailable() {
  return _getSynth() !== null;
}

function _log(event, detail = "") {
  console.log(`[TTS] ${event}${detail ? ": " + detail : ""}`);
}

/**
 * Voice selection utility.
 * Preference chain: exact voiceName match → English preferred voices → any English → default.
 */
function _selectVoice() {
  const synth = _getSynth();
  if (!synth) return null;

  const voices = synth.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Exact name match (caregiver-configured)
  if (_config.voiceName) {
    const exact = voices.find((v) => v.name === _config.voiceName);
    if (exact) return exact;
  }

  const lang = _config.language || "en-US";
  const langPrefix = lang.split("-")[0]; // "en"

  // 2. Preferred high-quality English voices
  const preferred = [
    "Google US English",
    "Google UK English Female",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Daniel",
    "Google हिन्दी", // Hindi
  ];

  for (const name of preferred) {
    const match = voices.find((v) => v.name.includes(name) && v.lang.startsWith(langPrefix));
    if (match) return match;
  }

  // 3. Any voice matching the exact language
  const langMatch = voices.find((v) => v.lang === lang);
  if (langMatch) return langMatch;

  // 4. Any voice matching the language prefix
  const prefixMatch = voices.find((v) => v.lang.startsWith(langPrefix));
  if (prefixMatch) return prefixMatch;

  // 5. First available voice (last resort)
  return voices[0] || null;
}

function _notifySpeakingChange(speaking) {
  for (const cb of _speakingChangeListeners) {
    try {
      cb(speaking);
    } catch (e) {
      console.error("[TTS] Speaking change listener error:", e);
    }
  }
}

// ---------- Core API ----------

/**
 * Speak a single text immediately, returning a Promise that resolves when done.
 * If TTS is unavailable or disabled, resolves immediately.
 */
export function speak(text, options = {}) {
  return new Promise((resolve) => {
    if (!_config.enabled || !_isAvailable() || !text || !text.trim()) {
      resolve();
      return;
    }

    const synth = _getSynth();

    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.rate = options.rate ?? _config.rate;
    utterance.pitch = options.pitch ?? _config.pitch;
    utterance.volume = options.volume ?? _config.volume;
    utterance.lang = options.language ?? _config.language;

    const voice = _selectVoice();
    if (voice) {
      utterance.voice = voice;
    }

    _currentUtterance = utterance;
    _notifySpeakingChange(true);
    _log("TTS_STARTED", text.substring(0, 60) + (text.length > 60 ? "..." : ""));

    utterance.onend = () => {
      _currentUtterance = null;
      _notifySpeakingChange(false);
      _log("TTS_COMPLETED");
      resolve();
    };

    utterance.onerror = (event) => {
      _currentUtterance = null;
      _notifySpeakingChange(false);
      // Don't crash — log and resolve
      if (event.error !== "interrupted" && event.error !== "canceled") {
        _log("TTS_ERROR", event.error);
      }
      resolve();
    };

    try {
      synth.speak(utterance);
    } catch (e) {
      _currentUtterance = null;
      _notifySpeakingChange(false);
      _log("TTS_ERROR", e.message);
      resolve();
    }
  });
}

/**
 * Add text to the sequential speech queue.
 * Items are spoken one after another — never overlapping.
 */
export function queueSpeech(text, options = {}) {
  if (!text || !text.trim()) return;
  _queue.push({ text, options });
  _processQueue();
}

async function _processQueue() {
  if (_isProcessingQueue) return;
  _isProcessingQueue = true;

  while (_queue.length > 0) {
    const { text, options } = _queue.shift();
    await speak(text, options);
  }

  _isProcessingQueue = false;
}

/**
 * Stop current speech and clear the entire queue.
 */
export function stop() {
  _queue = [];
  _isProcessingQueue = false;

  const synth = _getSynth();
  if (synth) {
    try {
      synth.cancel();
    } catch (e) {
      _log("TTS_ERROR", "cancel failed: " + e.message);
    }
  }

  if (_currentUtterance) {
    _currentUtterance = null;
    _notifySpeakingChange(false);
    _log("TTS_INTERRUPTED");
  }
}

/**
 * Pause the current utterance.
 */
export function pause() {
  const synth = _getSynth();
  if (synth && synth.speaking) {
    try {
      synth.pause();
    } catch (e) {
      // Some browsers don't support pause
    }
  }
}

/**
 * Resume a paused utterance.
 */
export function resume() {
  const synth = _getSynth();
  if (synth && synth.paused) {
    try {
      synth.resume();
    } catch (e) {
      // Some browsers don't support resume
    }
  }
}

/**
 * Returns whether TTS is currently speaking.
 */
export function isSpeaking() {
  const synth = _getSynth();
  return synth ? synth.speaking : false;
}

/**
 * Update TTS configuration. Partial updates supported.
 */
export function setConfig(config) {
  _config = { ..._config, ...config };
}

/**
 * Get current TTS configuration.
 */
export function getConfig() {
  return { ..._config };
}

/**
 * Register a callback for speaking state changes.
 * Returns an unsubscribe function.
 */
export function onSpeakingChange(callback) {
  _speakingChangeListeners.push(callback);
  return () => {
    _speakingChangeListeners = _speakingChangeListeners.filter((cb) => cb !== callback);
  };
}

/**
 * Get available voices (for caregiver settings UI).
 */
export function getAvailableVoices() {
  const synth = _getSynth();
  if (!synth) return [];
  return synth.getVoices().map((v) => ({
    name: v.name,
    lang: v.lang,
    default: v.default,
  }));
}

/**
 * Reset config to defaults.
 */
export function resetConfig() {
  _config = { ...DEFAULT_TTS_CONFIG };
}
