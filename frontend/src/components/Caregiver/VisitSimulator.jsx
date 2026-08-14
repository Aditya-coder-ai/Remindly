/**
 * VisitSimulator — Instant simulation panel for testing arrivals/departures without webcam.
 */
export default function VisitSimulator({ onSimulateArrive, onSimulateLeave, onForceSummarize }) {
  return (
    <div className="panel-card">
      <h2>
        <span>Visit Simulator</span>
        <span className="badge">Demo Mode</span>
      </h2>
      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "14px" }}>
        Simulate face detection events instantly without requiring a physical camera.
      </p>

      <div className="btn-row" style={{ marginBottom: "12px" }}>
        <button className="btn btn-primary" onClick={() => onSimulateArrive("priya")}>
          Simulate Priya Arriving
        </button>
        <button className="btn btn-secondary" onClick={() => onSimulateArrive("tom")}>
          Simulate Tom Arriving
        </button>
        <button className="btn btn-secondary" onClick={() => onSimulateArrive("maya")}>
          Simulate Maya Arriving
        </button>
      </div>

      <div className="btn-row" style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
        <button className="btn btn-amber" onClick={onSimulateLeave}>
          Person Leaves (Summarize &amp; Save)
        </button>
        <button className="btn btn-secondary" onClick={onForceSummarize}>
          Force Summarize Now
        </button>
      </div>
    </div>
  );
}
