import { useState, useRef } from "react";

/**
 * LovedOnesRoster — Management panel for registered loved ones with 1-click webcam face enrollment.
 */
export default function LovedOnesRoster({
  profiles,
  onAddPerson,
  onDeletePerson,
  onRegisterFace,
  onClearEncodings,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [personId, setPersonId] = useState("");
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [initialNote, setInitialNote] = useState("");
  const [enrollWebcamOnCreate, setEnrollWebcamOnCreate] = useState(true);

  const [busyPersonId, setBusyPersonId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("info"); // 'success' | 'error' | 'info'

  const fileInputRef = useRef({});

  const showToast = (msg, type = "info") => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleCaptureWebcam = async (pid, personName) => {
    setBusyPersonId(pid);
    showToast(`Scanning webcam frame for ${personName}…`, "info");
    try {
      const res = await onRegisterFace(pid, null);
      if (res.success) {
        showToast(`✅ ${res.message}`, "success");
      } else {
        showToast(`⚠️ ${res.error}`, "error");
      }
    } catch (err) {
      showToast(`❌ Error registering face: ${err.message}`, "error");
    } finally {
      setBusyPersonId(null);
    }
  };

  const handleFileUpload = async (pid, personName, file) => {
    if (!file) return;
    setBusyPersonId(pid);
    showToast(`Processing photo for ${personName}…`, "info");

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const base64 = e.target.result;
        const res = await onRegisterFace(pid, base64);
        if (res.success) {
          showToast(`✅ ${res.message}`, "success");
        } else {
          showToast(`⚠️ ${res.error}`, "error");
        }
      } catch (err) {
        showToast(`❌ Error: ${err.message}`, "error");
      } finally {
        setBusyPersonId(null);
      }
    };
    reader.readAsDataURL(file);
  };

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

      if (enrollWebcamOnCreate) {
        await handleCaptureWebcam(pid, name.trim());
      } else {
        showToast(`✅ Profile for ${name} created.`, "success");
      }

      setModalOpen(false);
      setPersonId("");
      setName("");
      setRelationship("");
      setInitialNote("");
    } catch (err) {
      showToast(`❌ Failed to save profile: ${err.message}`, "error");
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

      {/* Toast Feedback Alert */}
      {toastMessage && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: "var(--radius-sm)",
            marginBottom: "14px",
            fontSize: "13px",
            fontWeight: 500,
            background:
              toastType === "success"
                ? "#e6f4ea"
                : toastType === "error"
                ? "#fce8e6"
                : "#e8f0fe",
            color:
              toastType === "success"
                ? "#137333"
                : toastType === "error"
                ? "#c5221f"
                : "#1a73e8",
            border: `1px solid ${
              toastType === "success"
                ? "#ceead6"
                : toastType === "error"
                ? "#fad2cf"
                : "#d2e3fc"
            }`,
          }}
        >
          {toastMessage}
        </div>
      )}

      <div className="roster-grid">
        {profiles.map((p) => {
          const initial = (p.name || "A")[0].toUpperCase();
          const avatarColor = p.avatar_color || "var(--primary)";
          const count = p.encodings_count || 0;
          const isBusy = busyPersonId === p.person_id;

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

              {/* Face Enrollment Controls */}
              <div
                style={{
                  background: "var(--surface-raised)",
                  padding: "10px",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "10px",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                    fontSize: "12px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: count > 0 ? "#137333" : "var(--amber-warm)",
                    }}
                  >
                    {count > 0
                      ? `🟢 ${count} Face Snapshot${count > 1 ? "s" : ""} Enrolled`
                      : "⚠️ 0 Encodings (Webcam won't recognize)"}
                  </span>
                  {count > 0 && (
                    <button
                      type="button"
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--text-light)",
                        cursor: "pointer",
                        fontSize: "11px",
                        textDecoration: "underline",
                      }}
                      onClick={() => onClearEncodings(p.person_id)}
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="btn-row" style={{ gap: "6px" }}>
                  <button
                    className="btn btn-primary"
                    style={{ padding: "5px 10px", fontSize: "11px", flex: 1 }}
                    disabled={isBusy}
                    onClick={() => handleCaptureWebcam(p.person_id, p.name)}
                    title="Face the camera and click to record your face"
                  >
                    {isBusy ? "Scanning…" : "📸 Capture Face"}
                  </button>

                  <label
                    className="btn btn-secondary"
                    style={{
                      padding: "5px 10px",
                      fontSize: "11px",
                      cursor: "pointer",
                      margin: 0,
                    }}
                    title="Upload a clear photo with the person's face"
                  >
                    📁 Photo
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileUpload(p.person_id, p.name, e.target.files[0]);
                          e.target.value = "";
                        }
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="profile-card-actions">
                <span style={{ color: "var(--text-light)", fontSize: "11px" }}>
                  ID: {p.person_id}
                </span>
                <button
                  className="btn btn-secondary"
                  style={{ padding: "3px 8px", fontSize: "11px" }}
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

      {/* Register Loved One Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div
            className="panel-card"
            style={{ width: "100%", maxWidth: "480px", boxShadow: "var(--shadow-lg)" }}
          >
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

              <div
                style={{
                  background: "var(--primary-subtle)",
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "14px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={enrollWebcamOnCreate}
                    onChange={(e) => setEnrollWebcamOnCreate(e.target.checked)}
                  />
                  📸 Take face snapshot from webcam now
                </label>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                    paddingLeft: "22px",
                  }}
                >
                  Make sure the person is facing the camera when clicking Save.
                </p>
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
