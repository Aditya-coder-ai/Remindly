import { useState, useCallback, useRef } from "react";
import PatientView from "./components/PatientView/PatientView.jsx";
import CaregiverDashboard from "./components/Caregiver/CaregiverDashboard.jsx";
import FlowWave from "./components/FlowWave/FlowWave.jsx";
import { useWebSocket } from "./hooks/useWebSocket.js";
import { useConversationMemory } from "./hooks/useConversationMemory.js";
import { useRoster } from "./hooks/useRoster.js";

export default function App() {
  const [activeTab, setActiveTab] = useState("patient");
  const [activePerson, setActivePerson] = useState(null);
  const activePersonRef = useRef(null);

  const {
    profiles,
    addProfile,
    deleteProfile,
    registerFace,
    clearFaceEncodings,
    saveUpdatedNote,
    reload: reloadRoster,
  } = useRoster();

  const {
    isCapturing,
    transcript,
    startCapture,
    stopCaptureAndSummarize,
    appendTranscript,
    resetTranscript,
  } = useConversationMemory();

  const handlePersonArrived = useCallback((person) => {
    const match = profiles.find((p) => p.person_id === person.person_id) || person;
    activePersonRef.current = match;
    setActivePerson(match);

    resetTranscript();
    startCapture({ name: match.name });
  }, [profiles, resetTranscript, startCapture]);

  const handlePersonLeft = useCallback(async () => {
    const leaving = activePersonRef.current;
    if (!leaving) return;

    activePersonRef.current = null;
    setActivePerson(null);

    const summary = await stopCaptureAndSummarize(leaving);
    if (summary) {
      await saveUpdatedNote(leaving.person_id, summary, transcript);
    }
  }, [stopCaptureAndSummarize, saveUpdatedNote, transcript]);

  const handleServerEvent = useCallback((event) => {
    switch (event.type) {
      case "recognized":
        handlePersonArrived(event.person);
        break;
      case "unrecognized":
        handlePersonLeft();
        break;
      case "memory_updated":
        reloadRoster();
        break;
      default:
        break;
    }
  }, [handlePersonArrived, handlePersonLeft, reloadRoster]);

  const { connectionStatus } = useWebSocket(handleServerEvent);

  // Simulation triggers
  const handleSimulateArrive = async (personId) => {
    try {
      await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "arrive", person_id: personId }),
      });
    } catch (err) {
      console.error("Simulation error:", err);
    }
  };

  const handleSimulateLeave = async () => {
    try {
      await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "leave" }),
      });
    } catch (err) {
      console.error("Simulation error:", err);
    }
  };

  const handleForceSummarize = async () => {
    if (activePersonRef.current) {
      await handlePersonLeft();
    }
  };

  return (
    <>
      {/* Three.js Flow Wave Background */}
      <FlowWave />

      {/* Top Bar Navigation */}
      <header className="top-nav">
        <div className="brand-wrapper">
          <div className="brand-icon">⚓</div>
          <div className="brand-text">
            <h1>Anchor</h1>
            <p>Dementia Care Companion</p>
          </div>
        </div>

        <div className="nav-controls">
          <div className="status-pill">
            <span
              className={`status-dot ${
                connectionStatus === "connected"
                  ? "active"
                  : connectionStatus === "connecting"
                  ? "idle"
                  : "warn"
              }`}
            ></span>
            <span>
              {connectionStatus === "connected"
                ? "Live Connected"
                : connectionStatus === "connecting"
                ? "Connecting..."
                : "Disconnected"}
            </span>
          </div>

          <div className="mode-tab-group">
            <button
              className={`mode-tab ${activeTab === "patient" ? "active" : ""}`}
              onClick={() => setActiveTab("patient")}
            >
              Patient View
            </button>
            <button
              className={`mode-tab ${activeTab === "caregiver" ? "active" : ""}`}
              onClick={() => setActiveTab("caregiver")}
            >
              Caregiver &amp; Controls
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="app-container">
        {activeTab === "patient" ? (
          <PatientView recognizedPerson={activePerson} speakAloud={true} />
        ) : (
          <CaregiverDashboard
            isVisitorPresent={Boolean(activePerson)}
            activePerson={activePerson}
            transcript={transcript}
            isCapturing={isCapturing}
            onAppendSpeech={appendTranscript}
            onClearSpeech={resetTranscript}
            onSimulateArrive={handleSimulateArrive}
            onSimulateLeave={handleSimulateLeave}
            onForceSummarize={handleForceSummarize}
            profiles={profiles}
            onAddPerson={addProfile}
            onDeletePerson={deleteProfile}
            onRegisterFace={registerFace}
            onClearEncodings={clearFaceEncodings}
          />
        )}
      </main>
    </>
  );
}
