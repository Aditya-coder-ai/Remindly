import { useState, useEffect } from "react";
import { ANCHOR_API_CONFIG } from "../../services/summarize.js";
import { getAvailableVoices } from "../../services/ttsService.js";

/**
 * AiSettings — Configures Groq model parameters, TTS voice settings,
 * and patient interaction controls for caregivers.
 */
export default function AiSettings({ ttsSettings = {}, onTtsSettingsChange }) {
  const [apiKey, setApiKey] = useState(ANCHOR_API_CONFIG.apiKey || "");
  const [model, setModel] = useState(ANCHOR_API_CONFIG.model || "llama-3.3-70b-versatile");
  const [voices, setVoices] = useState([]);

  // Load available voices (browser-dependent)
  useEffect(() => {
    const loadVoices = () => {
      const available = getAvailableVoices();
      setVoices(available);
    };
    loadVoices();
    // Voices may load asynchronously in some browsers
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleApiKeyChange = (e) => {
    const val = e.target.value;
    setApiKey(val);
    ANCHOR_API_CONFIG.apiKey = val.trim();
  };

  const handleModelChange = (e) => {
    const val = e.target.value;
    setModel(val);
    ANCHOR_API_CONFIG.model = val;
  };

  const updateSetting = (key, value) => {
    if (onTtsSettingsChange) {
      onTtsSettingsChange((prev) => ({ ...prev, [key]: value }));
    }
  };

  return (
    <div className="panel-card">
      <h2>
        <span>AI Summarizer Settings</span>
        <span className="badge">Groq LLaMA 3.3</span>
      </h2>

      <div className="form-group">
        <label htmlFor="cfgApiKey">Custom Groq API Key (Optional)</label>
        <input
          type="password"
          id="cfgApiKey"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="Leave empty to use server-side backend key"
        />
        <p style={{ fontSize: "11px", color: "var(--text-light)", marginTop: "4px" }}>
          Server has a built-in proxy key. Entering a key here overrides it for this browser.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="cfgModel">Summarizer Model</label>
        <select id="cfgModel" value={model} onChange={handleModelChange}>
          <option value="llama-3.3-70b-versatile">LLaMA 3.3 70B Versatile (Recommended)</option>
          <option value="llama-3.1-8b-instant">LLaMA 3.1 8B Instant (Ultra Fast)</option>
          <option value="mixtral-8x7b-32768">Mixtral 8x7B</option>
        </select>
      </div>

      {/* ================================================================ */}
      {/* TTS & Patient Interaction Settings                               */}
      {/* ================================================================ */}

      <h2 style={{ marginTop: "24px" }}>
        <span>Voice & Interaction</span>
        <span className="badge">Patient TTS</span>
      </h2>

      {/* TTS Enabled Toggle */}
      <div className="form-group">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={ttsSettings.ttsEnabled !== false}
            onChange={(e) => updateSetting("ttsEnabled", e.target.checked)}
          />
          <span>Text-to-Speech Enabled</span>
        </label>
        <p style={{ fontSize: "11px", color: "var(--text-light)", marginTop: "4px" }}>
          When enabled, Anchor speaks visitor introductions and answers aloud.
        </p>
      </div>

      {/* Voice Interaction Toggle */}
      <div className="form-group">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={ttsSettings.interactionEnabled !== false}
            onChange={(e) => updateSetting("interactionEnabled", e.target.checked)}
          />
          <span>Patient Voice Interaction</span>
        </label>
        <p style={{ fontSize: "11px", color: "var(--text-light)", marginTop: "4px" }}>
          Allow the patient to ask questions using their voice.
        </p>
      </div>

      {/* Auto-Listen Toggle */}
      <div className="form-group">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={ttsSettings.autoListenEnabled !== false}
            onChange={(e) => updateSetting("autoListenEnabled", e.target.checked)}
          />
          <span>Auto-Listen After Speaking</span>
        </label>
        <p style={{ fontSize: "11px", color: "var(--text-light)", marginTop: "4px" }}>
          Automatically listen for patient questions after Anchor speaks.
        </p>
      </div>

      {/* Speech Rate */}
      <div className="form-group">
        <label htmlFor="cfgRate">Speech Speed: {(ttsSettings.rate || 0.85).toFixed(2)}×</label>
        <input
          type="range"
          id="cfgRate"
          min="0.5"
          max="1.5"
          step="0.05"
          value={ttsSettings.rate || 0.85}
          onChange={(e) => updateSetting("rate", parseFloat(e.target.value))}
        />
      </div>

      {/* Volume */}
      <div className="form-group">
        <label htmlFor="cfgVolume">Volume: {Math.round((ttsSettings.volume || 1.0) * 100)}%</label>
        <input
          type="range"
          id="cfgVolume"
          min="0.1"
          max="1.0"
          step="0.05"
          value={ttsSettings.volume || 1.0}
          onChange={(e) => updateSetting("volume", parseFloat(e.target.value))}
        />
      </div>

      {/* Pitch */}
      <div className="form-group">
        <label htmlFor="cfgPitch">Pitch: {(ttsSettings.pitch || 1.0).toFixed(2)}</label>
        <input
          type="range"
          id="cfgPitch"
          min="0.5"
          max="1.5"
          step="0.05"
          value={ttsSettings.pitch || 1.0}
          onChange={(e) => updateSetting("pitch", parseFloat(e.target.value))}
        />
      </div>

      {/* Language */}
      <div className="form-group">
        <label htmlFor="cfgLanguage">Language</label>
        <select
          id="cfgLanguage"
          value={ttsSettings.language || "en-US"}
          onChange={(e) => updateSetting("language", e.target.value)}
        >
          <option value="en-US">English (US)</option>
          <option value="en-GB">English (UK)</option>
          <option value="en-IN">English (India)</option>
          <option value="hi-IN">Hindi (हिन्दी)</option>
        </select>
      </div>

      {/* Voice Selection */}
      {voices.length > 0 && (
        <div className="form-group">
          <label htmlFor="cfgVoice">Voice</label>
          <select
            id="cfgVoice"
            value={ttsSettings.voiceName || ""}
            onChange={(e) => updateSetting("voiceName", e.target.value || null)}
          >
            <option value="">Auto-select best voice</option>
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.lang}){v.default ? " ★" : ""}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="status-pill" style={{ width: "100%", justifyContent: "center" }}>
        <span className="status-dot active"></span>
        <span>AI Summarizer Ready</span>
      </div>
    </div>
  );
}
