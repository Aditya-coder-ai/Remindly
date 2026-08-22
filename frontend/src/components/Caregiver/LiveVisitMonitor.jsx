import { useState, useRef, useEffect } from "react";

/**
 * LiveVisitMonitor — Displays real-time speech-to-text transcript, word count,
 * visit timer, live status indicator, mic toggle, and test dialogue injector.
 */
export default function LiveVisitMonitor({
  transcript,
  isCapturing,
  onToggleListening,
  onAppendSpeech,
  onClearSpeech,
  statusBadgeText,
  liveSegments = [],
  partialSegment = null,
  visitDuration = "00:00",
  statusState = "idle",
}) {
  const [typedInput, setTypedInput] = useState("");
  const transcriptContainerRef = useRef(null);
  const isAtBottomRef = useRef(true);

  // Parse word count from finalized segments
  const wordCount = liveSegments.reduce((acc, seg) => {
    return acc + (seg.text ? seg.text.split(/\s+/).filter(Boolean).length : 0);
  }, 0);

  // Monitor manual scroll to enable/disable auto-scroll
  const handleScroll = () => {
    const container = transcriptContainerRef.current;
    if (!container) return;
    const isAtBottom =
      Math.abs(container.scrollHeight - container.clientHeight - container.scrollTop) < 15;
    isAtBottomRef.current = isAtBottom;
  };

  // Perform auto-scroll to bottom if user is already at the bottom
  useEffect(() => {
    const container = transcriptContainerRef.current;
    if (container && isAtBottomRef.current) {
      container.scrollTop = container.scrollHeight;
    }
  }, [liveSegments, partialSegment]);

  const handleAddSpeech = () => {
    if (!typedInput.trim()) return;
    onAppendSpeech(typedInput);
    setTypedInput("");
  };

  const formatTime = (isoString) => {
    try {
      const d = new Date(isoString);
      return d.toTimeString().split(" ")[0];
    } catch (e) {
      return "";
    }
  };

  // Determine status badge class and label
  let statusBadgeClass = "badge-gray";
  let statusBadgeLabel = "Standby";

  if (isCapturing || statusState === "listening") {
    statusBadgeClass = "badge-green";
    statusBadgeLabel = "🟢 Live Mic Listening";
  } else if (statusState === "processing") {
    statusBadgeClass = "badge-yellow";
    statusBadgeLabel = "🟡 Transcribing Speech...";
  } else if (statusState === "disconnected") {
    statusBadgeClass = "badge-red";
    statusBadgeLabel = "🔴 Speech Reconnecting...";
  } else if (statusState === "denied") {
    statusBadgeClass = "badge-red";
    statusBadgeLabel = "🔴 Microphone Denied";
  }

  const hasTranscript = liveSegments.length > 0 || partialSegment !== null;

  return (
    <div className="panel-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <h2>
          <span>Live Visit Monitor</span>
          <span className={`badge ${statusBadgeClass}`} style={{ marginLeft: "8px" }}>
            {statusBadgeText || statusBadgeLabel}
          </span>
        </h2>

        {onToggleListening && (
          <button
            className={`btn ${isCapturing ? "btn-danger" : "btn-primary"}`}
            style={{ padding: "6px 12px", fontSize: "12px", borderRadius: "8px" }}
            onClick={onToggleListening}
          >
            {isCapturing ? "🛑 Stop Mic" : "🎙️ Enable Live Mic"}
          </button>
        )}
      </div>

      <div className="transcript-stats" style={{ display: "flex", gap: "16px", marginBottom: "10px", fontSize: "12px", color: "var(--text-muted)" }}>
        <span>Words Transcribed: <strong style={{ color: "var(--text)" }}>{wordCount}</strong></span>
        <span>Duration: <strong style={{ color: "var(--text)" }}>{visitDuration}</strong></span>
        <span>Engine: <strong style={{ color: "var(--primary-accent, #34d399)" }}>Dual (WebSpeech + Groq Whisper)</strong></span>
      </div>

      <label>Real-Time Speech Transcript</label>
      <div
        className="transcript-box"
        ref={transcriptContainerRef}
        onScroll={handleScroll}
        style={{
          scrollBehavior: "smooth",
          minHeight: "180px",
          maxHeight: "280px",
          overflowY: "auto",
          background: "var(--surface-raised, #18261f)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "14px",
        }}
      >
        {hasTranscript ? (
          <div className="transcript-list" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {liveSegments.map((seg) => (
              <div
                key={seg.segment_id}
                className="transcript-segment"
                style={{
                  background: "rgba(39, 82, 61, 0.2)",
                  borderLeft: "3px solid var(--primary-accent, #34d399)",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  lineHeight: "1.4",
                }}
              >
                {seg.timestamp && (
                  <span className="transcript-timestamp" style={{ fontSize: "10px", color: "var(--text-muted)", marginRight: "6px" }}>
                    [{formatTime(seg.timestamp)}]
                  </span>
                )}
                <span className="transcript-speaker" style={{ fontWeight: 600, color: "var(--primary-accent, #34d399)", marginRight: "6px" }}>
                  {seg.speaker}:
                </span>
                <span className="transcript-text" style={{ color: "var(--text)" }}>{seg.text}</span>
              </div>
            ))}
            {partialSegment && (
              <div
                key="partial"
                className="transcript-segment partial-line"
                style={{
                  background: "rgba(245, 158, 11, 0.15)",
                  borderLeft: "3px solid #f59e0b",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: "#fbbf24",
                }}
              >
                {partialSegment.timestamp && (
                  <span className="transcript-timestamp" style={{ fontSize: "10px", color: "var(--text-muted)", marginRight: "6px" }}>
                    [{formatTime(partialSegment.timestamp)}]
                  </span>
                )}
                <span className="transcript-speaker" style={{ fontWeight: 600, marginRight: "6px" }}>
                  {partialSegment.speaker}:
                </span>
                <span className="transcript-text partial-text">{partialSegment.text}…</span>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "140px", color: "var(--text-muted)", textAlign: "center", gap: "8px" }}>
            <span style={{ fontSize: "24px" }}>🎙️</span>
            <span className="transcript-empty" style={{ fontSize: "13px" }}>
              {isCapturing
                ? "Listening... Speak into your microphone now."
                : "Microphone is on standby. Speak or click 'Enable Live Mic' / simulate arrival above."}
            </span>
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="typedSpeechInput">Add Spoken Line (Demo &amp; Testing)</label>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            id="typedSpeechInput"
            type="text"
            value={typedInput}
            onChange={(e) => setTypedInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleAddSpeech(); }}
            placeholder="e.g. Priya: I brought some fresh strawberries from the farmer's market!"
            style={{
              flex: 1,
              padding: "9px 12px",
              background: "var(--bg, #0b120e)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--text)",
              fontSize: "13px",
              outline: "none",
            }}
          />
          <button className="btn btn-primary" style={{ padding: "8px 16px", whiteSpace: "nowrap" }} onClick={handleAddSpeech}>
            Add Line
          </button>
          <button className="btn btn-secondary" style={{ padding: "8px 12px" }} onClick={onClearSpeech}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
