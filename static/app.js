/**
 * Anchor — Frontend Coordinator
 * Connects WebSocket face recognition events, Web Speech STT capture,
 * Groq AI visit summarization, and compassionate patient UI.
 */

import { ConversationMemory } from "/conversation_memory/conversation_memory.js";
import { ANCHOR_API_CONFIG } from "/conversation_memory/summarize.js";
import { startPairing, stopPairing, getStatus as getWearableStatus } from "/static/wearable-pairing.js";

// State
let ws = null;
let activePerson = null;
let rosterMap = new Map();
let isVisitActive = false;

// DOM Selectors
const $ = (id) => document.getElementById(id);

const els = {
  tabPatient: $("tabPatient"),
  tabCaregiver: $("tabCaregiver"),
  viewPatient: $("viewPatient"),
  viewCaregiver: $("viewCaregiver"),
  
  wsStatusPill: $("wsStatusPill"),
  wsStatusDot: $("wsStatusDot"),
  wsStatusText: $("wsStatusText"),

  monitorBadge: $("monitorBadge"),
  liveTranscriptBox: $("liveTranscriptBox"),
  typedSpeechInput: $("typedSpeechInput"),
  btnAddSpeech: $("btnAddSpeech"),
  btnClearSpeech: $("btnClearSpeech"),

  simPriya: $("simPriya"),
  simTom: $("simTom"),
  simMaya: $("simMaya"),
  simLeave: $("simLeave"),
  simForce: $("simForce"),

  rosterGrid: $("rosterGrid"),
  btnOpenAddPerson: $("btnOpenAddPerson"),
  addPersonModal: $("addPersonModal"),
  btnCloseAddPerson: $("btnCloseAddPerson"),
  formAddPerson: $("formAddPerson"),

  cfgApiKey: $("cfgApiKey"),
  cfgModel: $("cfgModel"),

  cameraStatusBadge: $("cameraStatusBadge"),
  wearableBadge: $("wearableBadge"),
  wearablePreConnect: $("wearablePreConnect"),
  wearablePairing: $("wearablePairing"),
  wearableConnected: $("wearableConnected"),
  btnStartPairing: $("btnStartPairing"),
  btnStopPairing: $("btnStopPairing"),
  btnDisconnectWearable: $("btnDisconnectWearable"),
  qrCanvas: $("qrCanvas"),
  pairingCodeText: $("pairingCodeText"),
  wearableStatusRow: $("wearableStatusRow"),
  wearableStatusDot: $("wearableStatusDot"),
  wearableStatusText: $("wearableStatusText"),
};

// Initialize Conversation Memory
const memory = new ConversationMemory({
  onStatus: (msg) => {
    updateTranscriptBox();
  },
});

// ---------------------------------------------------------------------------
// 1. View Tab Switching
// ---------------------------------------------------------------------------
els.tabPatient.addEventListener("click", () => {
  els.tabPatient.classList.add("active");
  els.tabCaregiver.classList.remove("active");
  els.viewPatient.classList.remove("hidden");
  els.viewCaregiver.classList.add("hidden");
});

els.tabCaregiver.addEventListener("click", () => {
  els.tabCaregiver.classList.add("active");
  els.tabPatient.classList.remove("active");
  els.viewCaregiver.classList.remove("hidden");
  els.viewPatient.classList.add("hidden");
});

// ---------------------------------------------------------------------------
// 3. WebSocket Real-Time Bridge
// ---------------------------------------------------------------------------
function connectWebSocket() {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const wsUrl = `${protocol}//${window.location.host}/ws`;

  els.wsStatusText.textContent = "Connecting...";
  els.wsStatusDot.className = "status-dot idle";

  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    els.wsStatusText.textContent = "Live Connected";
    els.wsStatusDot.className = "status-dot active";
  };

  ws.onmessage = async (event) => {
    try {
      const payload = JSON.parse(event.data);
      handleServerEvent(payload);
    } catch (e) {
      console.error("WS Parse error:", e);
    }
  };

  ws.onclose = () => {
    els.wsStatusText.textContent = "Disconnected — Retrying";
    els.wsStatusDot.className = "status-dot warn";
    setTimeout(connectWebSocket, 2500);
  };

  ws.onerror = () => {
    ws.close();
  };
}

async function handleServerEvent(payload) {
  switch (payload.type) {
    case "status":
      if (payload.data?.remote_active) {
        els.cameraStatusBadge.textContent = "Wearable Stream";
        els.cameraStatusBadge.style.background = "var(--primary)";
        els.cameraStatusBadge.style.color = "white";
      } else {
        els.cameraStatusBadge.textContent = "Webcam Stream";
        els.cameraStatusBadge.style.background = "";
        els.cameraStatusBadge.style.color = "";
      }
      break;

    case "recognized":
      await onPersonArrived(payload.person);
      break;

    case "unrecognized":
      await onPersonLeft();
      break;

    case "memory_updated":
      await loadRoster();
      break;
  }
}

// ---------------------------------------------------------------------------
// 4. Visit Lifecycle (Arrive -> Listen -> Leave -> Summarize)
// ---------------------------------------------------------------------------
async function onPersonArrived(person) {
  activePerson = person;
  isVisitActive = true;

  // Refresh latest data from local roster if available
  const refreshed = rosterMap.get(person.person_id) || person;
  activePerson = refreshed;

  // Update Patient Companion UI — the React PatientView cross-fades from
  // the clock screen to the recognition card, driven purely by this state.
  window.AnchorPatientView?.setPerson(activePerson);

  // Update Caregiver Monitor
  els.monitorBadge.textContent = `In Visit with ${activePerson.name}`;
  els.monitorBadge.style.background = "var(--amber-soft)";
  els.monitorBadge.style.color = "var(--amber-warm)";

  // Start Speech-to-Text Listening
  memory.resetTranscript();
  memory.startCapture({ name: activePerson.name });
  updateTranscriptBox();
}

async function onPersonLeft() {
  if (!isVisitActive || !activePerson) {
    return;
  }

  const leavingPerson = activePerson;
  isVisitActive = false;
  activePerson = null;

  // The recognition card fades away on its own the moment the person leaves —
  // PatientView cross-fades back to the clock screen, driven by this null.
  window.AnchorPatientView?.setPerson(null);

  // Caregiver monitor back to idle
  els.monitorBadge.textContent = "Idle";
  els.monitorBadge.style.background = "var(--primary-subtle)";
  els.monitorBadge.style.color = "var(--primary)";

  // Summarize conversation via Groq (runs in the background)
  const rawTranscript = memory.getTranscript();
  const summarySentence = await memory.stopCaptureAndSummarize(leavingPerson);

  if (summarySentence) {
    try {
      await fetch("/api/update_note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          person_id: leavingPerson.person_id,
          note: summarySentence,
          transcript: rawTranscript,
        }),
      });
      await loadRoster();
    } catch (err) {
      console.error("Failed to save updated memory note:", err);
    }
  }

  updateTranscriptBox();
}

// ---------------------------------------------------------------------------
// 5. Speech & Transcript Handling
// ---------------------------------------------------------------------------
function updateTranscriptBox() {
  const t = memory.getTranscript();
  if (t) {
    els.liveTranscriptBox.innerHTML = `<strong>Transcript:</strong> ${escapeHtml(t)}`;
  } else {
    els.liveTranscriptBox.innerHTML = `<span class="transcript-empty">${
      memory.isCapturing ? "Listening for speech..." : "Speech will appear here automatically when a visitor arrives..."
    }</span>`;
  }
}

els.btnAddSpeech.addEventListener("click", () => {
  const text = els.typedSpeechInput.value.trim();
  if (!text) return;
  memory.appendTranscript(text);
  els.typedSpeechInput.value = "";
  updateTranscriptBox();
});

els.btnClearSpeech.addEventListener("click", () => {
  memory.resetTranscript();
  updateTranscriptBox();
});

// ---------------------------------------------------------------------------
// 6. Simulation Triggers
// ---------------------------------------------------------------------------
async function triggerSimulation(action, personId = null) {
  try {
    await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, person_id: personId }),
    });
  } catch (err) {
    console.error("Simulation error:", err);
  }
}

els.simPriya.addEventListener("click", () => triggerSimulation("arrive", "priya"));
els.simTom.addEventListener("click", () => triggerSimulation("arrive", "tom"));
els.simMaya.addEventListener("click", () => triggerSimulation("arrive", "maya"));
els.simLeave.addEventListener("click", () => triggerSimulation("leave"));
els.simForce.addEventListener("click", async () => {
  if (activePerson) {
    await onPersonLeft();
  }
});

// ---------------------------------------------------------------------------
// 7. Roster & Profile Management
// ---------------------------------------------------------------------------
async function loadRoster() {
  try {
    const res = await fetch("/api/roster");
    if (!res.ok) return;
    const list = await res.json();
    rosterMap.clear();
    list.forEach((p) => rosterMap.set(p.person_id, p));

    renderRosterCards(list);
  } catch (e) {
    console.error("Failed to load roster:", e);
  }
}

function renderRosterCards(list) {
  els.rosterGrid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
      <div class="profile-card-header">
        <div class="profile-avatar" style="background: ${p.avatar_color || '#27523d'}">
          ${(p.name || "A")[0].toUpperCase()}
        </div>
        <div class="profile-info">
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.relationship)}</p>
        </div>
      </div>
      <div class="profile-note-preview">
        "${escapeHtml(p.note || 'No memory recorded yet.')}"
      </div>
      <div class="profile-card-actions">
        <span style="color:var(--text-light)">${p.encodings_count || 0} Face Encodings</span>
        <button class="btn btn-secondary" style="padding:4px 8px; font-size:11px;" data-del="${p.person_id}">Delete</button>
      </div>
    `;

    card.querySelector(`[data-del="${p.person_id}"]`).addEventListener("click", async () => {
      if (confirm(`Remove ${p.name} from the loved ones roster?`)) {
        await fetch(`/api/roster/${p.person_id}`, { method: "DELETE" });
        await loadRoster();
      }
    });

    els.rosterGrid.appendChild(card);
  });
}

// Modal handling
els.btnOpenAddPerson.addEventListener("click", () => {
  els.addPersonModal.classList.remove("hidden");
});

els.btnCloseAddPerson.addEventListener("click", () => {
  els.addPersonModal.classList.add("hidden");
});

els.formAddPerson.addEventListener("submit", async (e) => {
  e.preventDefault();
  const person_id = $("inpPersonId").value.trim();
  const name = $("inpName").value.trim();
  const relationship = $("inpRelationship").value.trim();
  const note = $("inpInitialNote").value.trim() || null;

  try {
    const res = await fetch("/api/roster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person_id, name, relationship, note }),
    });
    if (res.ok) {
      els.addPersonModal.classList.add("hidden");
      els.formAddPerson.reset();
      await loadRoster();
    }
  } catch (err) {
    alert("Failed to save person: " + err.message);
  }
});

// ---------------------------------------------------------------------------
// 8. AI Settings Overrides
// ---------------------------------------------------------------------------
els.cfgApiKey.addEventListener("input", (e) => {
  ANCHOR_API_CONFIG.apiKey = e.target.value.trim();
});

els.cfgModel.addEventListener("change", (e) => {
  ANCHOR_API_CONFIG.model = e.target.value;
});

// Helper
function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------------------------------------------------------------------
// 9. Wearable Capture-Device Pairing (Phone / Future Glasses Stream)
// ---------------------------------------------------------------------------
// PRIVACY TRADEOFF — Capture Device Pairing
// When paired, video streams from the wearable device over the LAN before
// recognition. Video frames are relayed from the WebRTC MediaStream into
// the Python recognition pipeline via /api/remote_frame.

function updateWearableUIState(state, detail) {
  switch (state) {
    case "idle":
      els.wearableBadge.textContent = "Not Connected";
      els.wearableBadge.className = "badge";
      els.wearableBadge.style.background = "";
      els.wearableBadge.style.color = "";
      els.wearablePreConnect.classList.remove("hidden");
      els.wearablePairing.classList.add("hidden");
      els.wearableConnected.classList.add("hidden");
      break;

    case "initializing":
    case "waiting":
      els.wearableBadge.textContent = "Pairing...";
      els.wearableBadge.className = "badge";
      els.wearableBadge.style.background = "";
      els.wearableBadge.style.color = "";
      els.wearablePreConnect.classList.add("hidden");
      els.wearablePairing.classList.remove("hidden");
      els.wearableConnected.classList.add("hidden");
      els.wearableStatusDot.className = "wearable-status-dot waiting";
      els.wearableStatusText.textContent = detail || "Waiting for capture device…";
      break;

    case "connected":
      els.wearableBadge.textContent = "Connected ✓";
      els.wearableBadge.style.background = "var(--primary)";
      els.wearableBadge.style.color = "white";
      els.wearablePreConnect.classList.add("hidden");
      els.wearablePairing.classList.add("hidden");
      els.wearableConnected.classList.remove("hidden");
      els.cameraStatusBadge.textContent = "Wearable Stream";
      els.cameraStatusBadge.style.background = "var(--primary)";
      els.cameraStatusBadge.style.color = "white";
      break;

    case "error":
      els.wearableStatusDot.className = "wearable-status-dot error";
      els.wearableStatusText.textContent = detail || "Pairing error";
      break;
  }
}

function initWearablePairing() {
  if (!els.btnStartPairing) return;

  els.btnStartPairing.addEventListener("click", () => {
    startPairing({
      onPeerIdReady: (peerId) => {
        els.pairingCodeText.textContent = peerId;
        if (window.QRCode && els.qrCanvas) {
          QRCode.toCanvas(els.qrCanvas, peerId, {
            width: 160,
            margin: 2,
            color: {
              dark: "#163024",
              light: "#ffffff",
            },
          }, (err) => {
            if (err) console.error("QR Code generation error:", err);
          });
        }
      },
      onStatusChange: (status, detail) => {
        updateWearableUIState(status, detail);
      },
    });
  });

  els.btnStopPairing.addEventListener("click", () => {
    stopPairing();
    updateWearableUIState("idle");
  });

  els.btnDisconnectWearable.addEventListener("click", () => {
    stopPairing();
    updateWearableUIState("idle");
    els.cameraStatusBadge.textContent = "Webcam Stream";
    els.cameraStatusBadge.style.background = "";
    els.cameraStatusBadge.style.color = "";
  });
}

// Initialization
connectWebSocket();
loadRoster();
initWearablePairing();
