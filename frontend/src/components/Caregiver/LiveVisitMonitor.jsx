import { useState } from "react";

/**
 * LiveVisitMonitor — Displays real-time speech-to-text transcript and typed dialogue tester.
 */
export default function LiveVisitMonitor({
  transcript,
  isCapturing,
  onAppendSpeech,
  onClearSpeech,
  statusBadgeText,
}) {
  const [typedInput, setTypedInput] = useState("");

  const handleAddSpeech = () => {
    if (!typedInput.trim()) return;
    onAppendSpeech(typedInput);
    setTypedInput("");
  };

  return (
    <div className="panel-card">
      <h2>
        <span>Live Visit Monitor</span>
        <span className="badge">{statusBadgeText || (isCapturing ? "Listening" : "Idle")}</span>
      </h2>

      <label>Real-Time Speech Transcript</label>
      <div className="transcript-box">
        {transcript ? (
          <span><strong>Transcript:</strong> {transcript}</span>
        ) : (
          <span className="transcript-empty">
            {isCapturing
              ? "Listening for speech..."
              : "Speech will appear here automatically when a visitor arrives..."}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="typedSpeechInput">Add Typed Dialogue (Demo &amp; Testing)</label>
        <textarea
          id="typedSpeechInput"
          value={typedInput}
          onChange={(e) => setTypedInput(e.target.value)}
          placeholder="e.g. Priya: I brought some fresh strawberries from the farmer market, let's have them with breakfast!"
        />
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={handleAddSpeech}>
          Add Speech
        </button>
        <button className="btn btn-secondary" onClick={onClearSpeech}>
          Clear
        </button>
      </div>
    </div>
  );
}
