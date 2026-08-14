import { useEffect, useState } from "react";

/**
 * ClockScreen — the default/ambient state of the patient display.
 *
 * Shows the current time and date, plus a single calm reassurance line.
 * Purely local: its own setInterval drives the clock; it never decides
 * who is recognized or when to switch away from it.
 *
 * @param {boolean} active — whether this layer is the visible one.
 */
export default function ClockScreen({ active = true }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`pv-layer pv-clock${active ? " is-active" : ""}`}>
      <div className="pv-clock-inner">
        <div className="pv-clock-time" aria-hidden="true">
          {time}
        </div>
        <div className="pv-clock-time-sr">{time}</div>
        <div className="pv-clock-date">{date}</div>
        <p className="pv-clock-reassure">You are home, safe and loved.</p>
      </div>
    </div>
  );
}