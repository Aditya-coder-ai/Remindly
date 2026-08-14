import { useState } from "react";
import { ANCHOR_API_CONFIG } from "../../services/summarize.js";

/**
 * AiSettings — Configures Groq model parameters and optional client API key overrides.
 */
export default function AiSettings() {
  const [apiKey, setApiKey] = useState(ANCHOR_API_CONFIG.apiKey || "");
  const [model, setModel] = useState(ANCHOR_API_CONFIG.model || "llama-3.3-70b-versatile");

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

      <div className="status-pill" style={{ width: "100%", justifyContent: "center" }}>
        <span className="status-dot active"></span>
        <span>AI Summarizer Ready</span>
      </div>
    </div>
  );
}
