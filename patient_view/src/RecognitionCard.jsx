import { relationshipPhrase, memorySentence } from "./phrases.js";

/**
 * RecognitionCard — the full-screen card shown while a known person is in
 * frame. Driven entirely by its `person` prop; the patient does nothing to
 * summon or dismiss it, and there are no buttons, links, or scroll targets.
 *
 * @param {{ name: string, relationship: string, note: string }} person
 * @param {boolean} active — whether this layer is the visible one.
 */
export default function RecognitionCard({ person, active = true }) {
  const name = (person && person.name) || "";
  const relationship = relationshipPhrase(person);
  const memory = memorySentence(person);

  return (
    <div
      className={`pv-layer pv-card${active ? " is-active" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="pv-card-inner">
        <header className="pv-card-header">
          <h2 className="pv-card-name">{name}</h2>
          {relationship && (
            <div className="pv-card-relationship">{relationship}</div>
          )}
        </header>

        <div className="pv-card-memory">
          <div className="pv-card-memory-eyebrow">From last time</div>
          <p className="pv-card-memory-text">{memory}</p>
        </div>
      </div>
    </div>
  );
}