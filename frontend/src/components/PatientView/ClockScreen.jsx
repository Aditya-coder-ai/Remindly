import { useState, useEffect } from "react";

/**
 * ClockScreen — Default orientation screen for the patient.
 * Shows high-contrast local time, date, and reassuring message.
 */
export default function ClockScreen({ active }) {
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
      setDateStr(now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`clock-screen ${active ? "active" : ""}`} aria-live="polite">
      <div className="clock-time">{timeStr}</div>
      <div className="clock-date">{dateStr}</div>
      <div className="clock-comfort-card">
        <div className="clock-comfort-title">You are home, safe and loved.</div>
        <div className="clock-comfort-subtitle">
          Anchor is keeping watch. When a loved one walks in, we will remind you who they are.
        </div>
        <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(39,82,61,0.25)", border: "1px solid rgba(52,211,153,0.35)", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", color: "var(--primary-accent, #34d399)", fontWeight: 500 }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }}></span>
          🎙️ Voice &amp; Vision Ready
        </div>
      </div>
    </div>
  );
}
