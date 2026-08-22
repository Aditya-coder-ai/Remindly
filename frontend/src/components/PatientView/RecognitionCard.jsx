/**
 * RecognitionCard — Full-screen card showing the confirmed visitor.
 * Displays visitor name, relationship badge, latest memory note,
 * and interaction state (listening, thinking, speaking indicators).
 */
import { STATES } from "../../hooks/usePatientInteraction.js";

export default function RecognitionCard({
  person,
  active,
  interactionState = STATES.RECOGNIZED,
  systemResponse = "",
  patientTranscript = "",
}) {
  if (!person) return null;

  const name = person.name || "A loved one";
  const rawRel = (person.relationship || "Loved One").trim();
  const relationship = /^(daughter|son|grandson|granddaughter|sister|brother|husband|wife|friend|caregiver|nurse)/i.test(rawRel)
    ? `Your ${rawRel.toLowerCase()} 🌿`
    : `${rawRel} 🌿`;

  const note = person.note
    ? `"${person.note}"`
    : "This is the start of your time together today.";

  const initial = (name[0] || "A").toUpperCase();
  const avatarColor = person.avatar_color || "var(--primary)";

  // Determine status indicator text and class
  let statusText = "Anchor is keeping watch";
  let statusSubtext = "Remembering your conversation gently.";
  let statusClass = "interaction-idle";

  switch (interactionState) {
    case STATES.INTRODUCING:
    case STATES.SPEAKING:
      statusText = "Anchor is speaking";
      statusSubtext = "";
      statusClass = "interaction-speaking";
      break;
    case STATES.LISTENING:
      statusText = "Anchor is listening";
      statusSubtext = "You can ask me anything.";
      statusClass = "interaction-listening";
      break;
    case STATES.THINKING:
      statusText = "Let me think";
      statusSubtext = "";
      statusClass = "interaction-thinking";
      break;
    default:
      statusText = "Anchor is listening with care";
      statusSubtext = "Remembering your conversation gently.";
      statusClass = "interaction-idle";
  }

  return (
    <div className={`recognition-card ${active ? "active" : ""}`} aria-live="assertive">
      <div className="visitor-header">
        <div className="visitor-avatar-large" style={{ background: avatarColor }}>
          {initial}
        </div>
        <div className="visitor-meta">
          <h2>{name}</h2>
          <div className="relationship-badge">{relationship}</div>
        </div>
      </div>

      <div className="memory-anchor-card">
        <div className="memory-header-row">
          <span>✨ Last Visit Memory</span>
        </div>
        <div className="memory-text">{note}</div>
      </div>

      {/* System response display (what Anchor said/is saying) */}
      {systemResponse && (
        <div className="system-response-card" aria-live="polite">
          <div className="system-response-text">{systemResponse}</div>
        </div>
      )}

      {/* Patient transcript display (what the patient said / is saying) */}
      {patientTranscript && (
        <div className="patient-transcript-card" aria-live="polite">
          <div className="patient-transcript-label">🗣️ You said:</div>
          <div className="patient-transcript-text">"{patientTranscript}"</div>
        </div>
      )}

      <div className={`listening-indicator-row ${statusClass}`}>
        <div className="listening-left">
          <div className="soundwave-anim">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <div className="listening-text">{statusText}</div>
            {statusSubtext && <div className="listening-subtext">{statusSubtext}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
