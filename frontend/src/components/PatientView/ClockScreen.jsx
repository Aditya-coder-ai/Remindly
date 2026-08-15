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
      </div>
    </div>
  );
}
