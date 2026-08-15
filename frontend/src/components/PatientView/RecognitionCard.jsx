/**
 * RecognitionCard — Full-screen card showing the confirmed visitor.
 * Displays visitor name, relationship badge, and latest memory note.
 */
export default function RecognitionCard({ person, active }) {
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

      <div className="listening-indicator-row">
        <div className="listening-left">
          <div className="soundwave-anim">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <div className="listening-text">Anchor is listening with care</div>
            <div className="listening-subtext">Remembering your conversation gently.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
