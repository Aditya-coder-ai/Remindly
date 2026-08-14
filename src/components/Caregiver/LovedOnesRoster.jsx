import { useState } from "react";

/**
 * LovedOnesRoster — Management panel for registered loved ones and memories.
 */
export default function LovedOnesRoster({ profiles, onAddPerson, onDeletePerson }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [personId, setPersonId] = useState("");
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [initialNote, setInitialNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const pid = (personId || name).trim().toLowerCase().replace(/\s+/g, "_");
    try {
      await onAddPerson({
        person_id: pid,
        name: name.trim(),
        relationship: relationship.trim() || "Loved One",
        note: initialNote.trim() || null,
      });
      setModalOpen(false);
      setPersonId("");
      setName("");
      setRelationship("");
      setInitialNote("");
    } catch (err) {
      alert("Failed to save profile: " + err.message);
    }
  };

  return (
    <div className="panel-card">
      <h2>
        <span>Registered Loved Ones</span>
        <button
          className="btn btn-primary"
          style={{ padding: "5px 12px", fontSize: "12px" }}
          onClick={() => setModalOpen(true)}
        >
          + Add Person
        </button>
      </h2>

      <div className="roster-grid">
        {profiles.map((p) => {
          const initial = (p.name || "A")[0].toUpperCase();
          const avatarColor = p.avatar_color || "var(--primary)";

          return (
            <div key={p.person_id} className="profile-card">
              <div className="profile-card-header">
                <div className="profile-avatar" style={{ background: avatarColor }}>
                  {initial}
                </div>
                <div className="profile-info">
                  <h3>{p.name}</h3>
                  <p>{p.relationship}</p>
                </div>
              </div>
              <div className="profile-note-preview">
                "{p.note || "No memory recorded yet."}"
              </div>
              <div className="profile-card-actions">
                <span style={{ color: "var(--text-light)" }}>
                  {p.encodings_count || 0} Face Encodings
                </span>
                <button
                  className="btn btn-secondary"
                  style={{ padding: "4px 8px", fontSize: "11px" }}
                  onClick={() => {
                    if (confirm(`Remove ${p.name} from the loved ones roster?`)) {
                      onDeletePerson(p.person_id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="panel-card" style={{ width: "100%", maxWidth: "480px", boxShadow: "var(--shadow-lg)" }}>
            <h2>Register Loved One</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inpPersonId">Unique ID (e.g. sarah)</label>
                <input
                  type="text"
                  id="inpPersonId"
                  value={personId}
                  onChange={(e) => setPersonId(e.target.value)}
                  placeholder="sarah"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inpName">Full Name</label>
                <input
                  type="text"
                  id="inpName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inpRelationship">Relationship to Patient</label>
                <input
                  type="text"
                  id="inpRelationship"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder="Sister / Niece / Neighbor"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inpInitialNote">Initial Memory Note (Optional)</label>
                <textarea
                  id="inpInitialNote"
                  value={initialNote}
                  onChange={(e) => setInitialNote(e.target.value)}
                  placeholder="Sarah came over for lunch and brought blueberry muffins."
                />
              </div>
              <div className="btn-row" style={{ justifyContent: "flex-end", marginTop: "18px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
