/**
 * useTTS.js — React hook wrapper around the centralized ttsService.
 *
 * Provides reactive state (isSpeaking) and stable function references
 * for component integration. All TTS calls go through the centralized
 * service — never through direct speechSynthesis access.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import * as tts from "../services/ttsService.js";

/**
 * @param {object} config  - TTS configuration overrides
 * @returns {{ speak, stop, pause, resume, isSpeaking, queueSpeech, setConfig }}
 */
export function useTTS(config = {}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const configApplied = useRef(false);

  // Apply config once on mount and when it changes
  useEffect(() => {
    if (config && Object.keys(config).length > 0) {
      tts.setConfig(config);
      configApplied.current = true;
    }
  }, [config]);

  // Subscribe to speaking state changes
  useEffect(() => {
    const unsub = tts.onSpeakingChange((speaking) => {
      setIsSpeaking(speaking);
    });
    return unsub;
  }, []);

  // Stable function references
  const speak = useCallback((text, opts) => tts.speak(text, opts), []);
  const queueSpeech = useCallback((text, opts) => tts.queueSpeech(text, opts), []);
  const stop = useCallback(() => tts.stop(), []);
  const pause = useCallback(() => tts.pause(), []);
  const resume = useCallback(() => tts.resume(), []);
  const setTTSConfig = useCallback((cfg) => tts.setConfig(cfg), []);

  return {
    speak,
    queueSpeech,
    stop,
    pause,
    resume,
    isSpeaking,
    setConfig: setTTSConfig,
  };
}
