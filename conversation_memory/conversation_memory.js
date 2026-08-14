/**
 * conversation_memory.js
 * ======================
 *
 * Capture-and-remember for Anchor: while a recognised person is in frame,
 * this module accumulates their conversation via the browser Web Speech
 * API.  The moment they leave, the finished transcript is turned into one
 * short, warm sentence and becomes that person's new memory note.
 *
 * This module is purely driven by external events — it has no timer, never
 * runs in the background, and never captures for strangers or an empty
 * room.  The face-recognition module calls ``startCapture`` on its
 * "recognized" event and ``stopCaptureAndSummarize`` on its "person left"
 * event.
 */

import { summarizeConversation, displayName } from "./summarize.js";

export class ConversationMemory {
  /**
   * @param {{ onStatus?: (message: string) => void }} [options]
   *   ``onStatus`` receives human-readable status updates (for a demo
   *   status line / console).
   */
  constructor({ onStatus } = {}) {
    this._onStatus = onStatus || (() => {});
    this._recognition = null;
    this._transcript = [];
    this._capturing = false;
    this._visitName = "someone";
  }

  /** Whether the browser can run the Web Speech API (Chrome best). */
  static isSupported() {
    return (
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition)
    );
  }

  /** True while a visit's capture is live. */
  get isCapturing() {
    return this._capturing;
  }

  /** Name of the person currently being captured (demo convenience). */
  get visitName() {
    return this._visitName;
  }

  /** The transcript accumulated so far, as one joined string. */
  getTranscript() {
    return this._transcript.join(" ").trim();
  }

  /**
   * Test/demo hook: add a line to the accumulated transcript without the
   * microphone, so the module can be exercised with typed input.
   */
  appendTranscript(text) {
    const line = (text || "").trim();
    if (!line) return;
    this._transcript.push(line);
    this._status(`Transcript: "${line}"`);
  }

  /**
   * Test/demo hook: wipe the accumulated transcript (e.g. start a fresh
   * simulated visit in the demo).
   */
  resetTranscript() {
    this._transcript = [];
  }

  /**
   * Begin listening.  Call this when the recognition module confirms a
   * known person is in frame.
   *
   * Capture is strictly bounded: it runs only while this session is live
   * and only stops via stopCaptureAndSummarize / forceSummarizeNow — never
   * on a timer.
   */
  startCapture({ name } = {}) {
    if (this._capturing) {
      this._status("Capture already running.");
      return;
    }
    if (!ConversationMemory.isSupported()) {
      this._status(
        "Web Speech API unavailable — use Chrome over http://localhost or https."
      );
      return;
    }

    const Recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Recognition();
    recognition.lang = "en-US";
    recognition.interimResults = false; // only finalised utterances
    recognition.continuous = false; // we restart manually (see onend)
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          const utterance = result[0].transcript.trim();
          if (utterance) {
            this._transcript.push(utterance);
            this._status(`Heard: "${utterance}"`);
          }
        }
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "no-speech") {
        // Normal pause in conversation — onend will auto-resume below.
        this._status("No speech detected — still listening…");
      } else if (
        event.error === "not-allowed" ||
        event.error === "service-not-allowed"
      ) {
        this._capturing = false;
        this._status(`Microphone permission denied (${event.error}).`);
      } else {
        this._status(`Speech error (${event.error}).`);
      }
    };

    recognition.onend = () => {
      // The browser stops itself after a pause in speech.  Auto-resume so
      // a natural silence never truncates the visit's transcript.
      if (this._capturing) {
        try {
          recognition.start();
        } catch (err) {
          this._status(`Failed to resume capture: ${err.message}`);
        }
      }
    };

    this._recognition = recognition;
    this._capturing = true;
    this._visitName = name || "someone";

    try {
      recognition.start();
      this._status(`Listening — ${this._visitName} is here.`);
    } catch (err) {
      this._capturing = false;
      this._status(`Could not start capture: ${err.message}`);
    }
  }

  /**
   * Stop listening and, if the visit produced real speech, write the
   * person's new memory note.  Call this when the recognition module
   * fires its "person left" event.  Resolves to the new note, or ``null``
   * when the visit had no meaningful speech (prior note kept).
   */
  async stopCaptureAndSummarize(person) {
    this._stopListening();
    this._status("Visit ended — building the memory…");
    return this._finalize(person);
  }

  /**
   * Manual override / safety net: summarise whatever transcript has been
   * captured so far, in case the "person left" event never fires.  Also
   * stops listening so capture never continues in the background.
   */
  async forceSummarizeNow(person) {
    this._stopListening();
    this._status("Forcing summarization of the current transcript…");
    return this._finalize(person);
  }

  _stopListening() {
    // Must clear the flag BEFORE stop(): the browser fires onend on an
    // explicit stop, and we only auto-resume while _capturing is true.
    this._capturing = false;
    if (this._recognition) {
      try {
        this._recognition.stop();
      } catch {
        /* already stopped */
      }
      this._recognition = null;
    }
  }

  async _finalize(person) {
    const sentence = await summarizeConversation(person, this.getTranscript());
    this._transcript = [];
    if (sentence === null) {
      this._status("No meaningful speech this visit — previous note kept.");
    } else {
      this._status(`Memory updated for ${displayName(person)}: "${sentence}"`);
    }
    return sentence;
  }

  _status(message) {
    this._onStatus(message);
  }
}