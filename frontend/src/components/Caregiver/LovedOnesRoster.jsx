import { useState, useRef } from "react";

/**
 * LovedOnesRoster — Management panel for registered loved ones with 1-click webcam face enrollment.
 */
export default function LovedOnesRoster({
  profiles = [],
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
  const [enrollMethod, setEnrollMethod] = useState("webcam"); // 'webcam' | 'upload' | 'none'
  const [uploadedBase64, setUploadedBase64] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState(null);

  const [busyPersonId, setBusyPersonId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("info"); // 'success' | 'error' | 'info'

  const showToast = (msg, type = "info") => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  // Helper to capture a frame from the in-browser webcam or direct getUserMedia
  const captureWebcamSnapshot = async () => {
    // 1. Check if LiveCameraFeed has an active live stream
    if (typeof window !== "undefined" && typeof window.__captureCurrentWebcamFrame === "function") {
      const activeFrame = window.__captureCurrentWebcamFrame();
      if (activeFrame) return activeFrame;
    }

    // 2. Otherwise, request a temporary camera frame directly
    if (typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia) {
      let tempStream = null;
      try {
        tempStream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });
        const tempVideo = document.createElement("video");
        tempVideo.srcObject = tempStream;
        tempVideo.muted = true;
        tempVideo.playsInline = true;
        await tempVideo.play();

        // Brief delay for sensor exposure
        await new Promise((r) => setTimeout(r, 200));

        const canvas = document.createElement("canvas");
        canvas.width = tempVideo.videoWidth || 640;
        canvas.height = tempVideo.videoHeight || 480;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/jpeg", 0.92);
      } catch (err) {
        console.warn("Direct webcam acquisition failed, falling back to server buffer:", err);
      } finally {
        if (tempStream) {
          tempStream.getTracks().forEach((t) => t.stop());
        }
      }
    }
    return null;
  };

  // 1-Click capture from card
  const handleCaptureWebcam = async (pid, personName) => {
    setBusyPersonId(pid);
    showToast(`Scanning face snapshot for ${personName}…`, "info");
    try {
      const base64Image = await captureWebcamSnapshot();
      const res = await onRegisterFace(pid, base64Image);
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

  // File upload from card
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

  // Modal file picker change
  const handleModalFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedBase64(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Auto-generate Unique ID from Full Name as user types
  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    if (!personId || personId === name.trim().toLowerCase().replace(/\s+/g, "_")) {
      setPersonId(val.trim().toLowerCase().replace(/[^a-z0-9]/g, "_"));
    }
  };

  const handleOpenModal = () => {
    setModalError(null);
    setPersonId("");
    setName("");
    setRelationship("");
    setInitialNote("");
    setEnrollMethod("webcam");
    setUploadedBase64(null);
    setUploadedFileName("");
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setModalError("Please enter a full name.");
      return;
    }

    const pid = (personId || name)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "_");

    setIsSubmitting(true);
    setModalError(null);

    try {
      // 1. Create Profile
      await onAddPerson({
        person_id: pid,
        name: name.trim(),
        relationship: relationship.trim() || "Loved One",
        note: initialNote.trim() || null,
      });

      // 2. Face Enrollment
      let faceSuccessMsg = null;
      let faceWarningMsg = null;

      if (enrollMethod === "upload" && uploadedBase64) {
        const res = await onRegisterFace(pid, uploadedBase64);
        if (res.success) {
          faceSuccessMsg = res.message;
        } else {
          faceWarningMsg = res.error;
        }
      } else if (enrollMethod === "webcam") {
        const base64Image = await captureWebcamSnapshot();
        const res = await onRegisterFace(pid, base64Image);
        if (res.success) {
          faceSuccessMsg = res.message;
        } else {
          faceWarningMsg = res.error;
        }
      }

      setModalOpen(false);

      if (faceSuccessMsg) {
        showToast(`✅ Profile created & face enrolled for ${name}!`, "success");
      } else if (faceWarningMsg) {
        showToast(
          `✅ Profile for ${name} saved. ⚠️ Face registration note: ${faceWarningMsg}`,
          "info"
        );
      } else {
        showToast(`✅ Profile for ${name} created.`, "success");
      }
    } catch (err) {
      console.error("Profile registration error:", err);
      setModalError(err.message || "Failed to save profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="panel-card" style={{ position: "relative" }}>
      {/* Global Floating Toast HUD */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 10000,
            maxWidth: "420px",
            padding: "12px 18px",
            borderRadius: "var(--radius-sm)",
            fontSize: "13px",
            fontWeight: 600,
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            background:
              toastType === "success"
                ? "#137333"
                : toastType === "error"
                ? "#c5221f"
                : "#1e293b",
            color: "#ffffff",
            border: `1px solid ${
              toastType === "success"
                ? "#34d399"
                : toastType === "error"
                ? "#f87171"
                : "#475569"
            }`,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              fontSize: "14px",
              marginLeft: "auto",
            }}
          >
            ✕
          </button>
        </div>
      )}

      <h2>
        <span>Registered Loved Ones</span>
        <button
          type="button"
          className="btn btn-primary"
          style={{ padding: "5px 12px", fontSize: "12px" }}
          onClick={handleOpenModal}
        >
          + Add Person
        </button>
      </h2>

      <div className="roster-grid">
        {profiles.map((p) => {
          const initial = (p.name || "A")[0].toUpperCase();
          const avatarColor = p.avatar_color || "var(--primary)";
          const count = p.encodings_count || 0;
          const isBusy = busyPersonId === p.person_id;

          return (
            <div key={p.person_id} className="profile-card">
              <div className="profile-card-header">
                <div
                  className="profile-avatar"
                  style={{
                    backgroundColor: avatarColor,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {initial}
                </div>
                <div>
                  <div className="profile-name">{p.name}</div>
                  <div className="profile-rel">{p.relationship}</div>
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
                    type="button"
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
                  type="button"
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

            {modalError && (
              <div
                style={{
                  background: "#fce8e6",
                  color: "#c5221f",
                  border: "1px solid #fad2cf",
                  borderRadius: "var(--radius-sm)",
                  padding: "8px 12px",
                  marginBottom: "14px",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                ⚠️ {modalError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inpName">Full Name *</label>
                <input
                  type="text"
                  id="inpName"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Sarah Jenkins"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="inpRelationship">Relationship to Patient *</label>
                <input
                  type="text"
                  id="inpRelationship"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder="Sister / Daughter / Neighbor"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inpPersonId">
                  Unique ID <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 400 }}>(Auto-generated)</span>
                </label>
                <input
                  type="text"
                  id="inpPersonId"
                  value={personId}
                  onChange={(e) => setPersonId(e.target.value)}
                  placeholder="sarah_jenkins"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inpInitialNote">Initial Memory Note (Optional)</label>
                <textarea
                  id="inpInitialNote"
                  value={initialNote}
                  onChange={(e) => setInitialNote(e.target.value)}
                  placeholder="Sarah brought fresh chamomile tea and talked about gardening."
                  rows={2}
                />
              </div>

              {/* Face Enrollment Mode Selector */}
              <div
                style={{
                  background: "var(--surface-raised)",
                  padding: "12px",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "16px",
                  border: "1px solid var(--border)",
                }}
              >
                <label style={{ fontSize: "12px", fontWeight: 600, display: "block", marginBottom: "8px" }}>
                  Face Biometrics Registration
                </label>

                <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setEnrollMethod("webcam")}
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      borderRadius: "var(--radius-sm)",
                      border: enrollMethod === "webcam" ? "1px solid var(--primary)" : "1px solid var(--border)",
                      background: enrollMethod === "webcam" ? "var(--primary)" : "var(--surface)",
                      color: enrollMethod === "webcam" ? "#0a1f14" : "var(--text)",
                      cursor: "pointer",
                    }}
                  >
                    📸 Webcam Snap
                  </button>

                  <button
                    type="button"
                    onClick={() => setEnrollMethod("upload")}
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      borderRadius: "var(--radius-sm)",
                      border: enrollMethod === "upload" ? "1px solid var(--primary)" : "1px solid var(--border)",
                      background: enrollMethod === "upload" ? "var(--primary)" : "var(--surface)",
                      color: enrollMethod === "upload" ? "#0a1f14" : "var(--text)",
                      cursor: "pointer",
                    }}
                  >
                    📁 Upload Photo
                  </button>

                  <button
                    type="button"
                    onClick={() => setEnrollMethod("none")}
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      fontSize: "11px",
                      fontWeight: 600,
                      borderRadius: "var(--radius-sm)",
                      border: enrollMethod === "none" ? "1px solid var(--primary)" : "1px solid var(--border)",
                      background: enrollMethod === "none" ? "var(--primary)" : "var(--surface)",
                      color: enrollMethod === "none" ? "#0a1f14" : "var(--text)",
                      cursor: "pointer",
                    }}
                  >
                    ⏭️ Skip for now
                  </button>
                </div>

                {enrollMethod === "webcam" && (
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>
                    💡 When you click Save, a high-resolution face snapshot will be captured from your active camera.
                  </p>
                )}

                {enrollMethod === "upload" && (
                  <div>
                    <input
                      type="file"
                      id="modalPhotoInput"
                      accept="image/*"
                      onChange={handleModalFileChange}
                      style={{ fontSize: "11px", width: "100%" }}
                    />
                    {uploadedFileName && (
                      <p style={{ fontSize: "11px", color: "#34d399", marginTop: "4px", fontWeight: 600 }}>
                        ✓ Photo selected: {uploadedFileName}
                      </p>
                    )}
                  </div>
                )}

                {enrollMethod === "none" && (
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>
                    Profile will be created without face encodings. You can record face snapshots anytime later.
                  </p>
                )}
              </div>

              <div className="btn-row" style={{ justifyContent: "flex-end", marginTop: "18px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Saving & Enrolling…" : "Save Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
