import { useState, useCallback, useRef, useEffect } from "react";
import PatientView from "./components/PatientView/PatientView.jsx";
import CaregiverDashboard from "./components/Caregiver/CaregiverDashboard.jsx";
import FlowWave from "./components/FlowWave/FlowWave.jsx";
import { useWebSocket } from "./hooks/useWebSocket.js";
import { useConversationMemory } from "./hooks/useConversationMemory.js";
import { useRoster } from "./hooks/useRoster.js";
import { apiUrl } from "./config/api.js";

// Helper to generate a unique visit UUID
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Default TTS / interaction settings (caregiver-configurable)
const DEFAULT_TTS_SETTINGS = {
  ttsEnabled: true,
  interactionEnabled: true,
  autoListenEnabled: true,
  rate: 0.85,
  pitch: 1.0,
  volume: 1.0,
  language: "en-US",
  voiceName: null,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("patient");
  const [activePerson, setActivePerson] = useState(null);
  const activePersonRef = useRef(null);
  const [activeVisitId, setActiveVisitId] = useState(null);
  const [ttsSettings, setTtsSettings] = useState(DEFAULT_TTS_SETTINGS);
  
  const sendCommandRef = useRef(null);

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
    stopListening,
    stopCaptureAndSummarize,
    appendTranscript,
    resetTranscript,
    liveSegments,
    partialSegment,
    visitDuration,
    statusState,
    handleLiveTranscriptEvent,
    catchUpTranscript,
    setStatusState,
  } = useConversationMemory();

  const handlePersonArrived = useCallback((person) => {
    const match = profiles.find((p) => p.person_id === person.person_id) || person;
    activePersonRef.current = match;
    setActivePerson(match);

    resetTranscript();
    const visitId = generateUUID();
    setActiveVisitId(visitId);
    
    startCapture({
      name: match.name,
      visitId,
      language: ttsSettings.language,
      sendCommand: sendCommandRef.current,
    });
  }, [profiles, resetTranscript, startCapture, ttsSettings.language]);

  const handlePersonLeft = useCallback(async () => {
    const leaving = activePersonRef.current;
    if (!leaving) return;

    activePersonRef.current = null;
    setActivePerson(null);
    setActiveVisitId(null);

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
      case "transcript_partial":
      case "transcript_final":
        handleLiveTranscriptEvent(event);
        break;
      default:
        break;
    }
  }, [handlePersonArrived, handlePersonLeft, reloadRoster, handleLiveTranscriptEvent]);

  const { connectionStatus, sendCommand } = useWebSocket(handleServerEvent);
  sendCommandRef.current = sendCommand;

  // Sync connection status to conversation memory hook
  useEffect(() => {
    if (connectionStatus === "disconnected") {
      setStatusState("disconnected");
    } else if (connectionStatus === "connected") {
      if (isCapturing) {
        setStatusState("listening");
      } else {
        setStatusState("idle");
      }
    }
  }, [connectionStatus, isCapturing, setStatusState]);

  // Catch up on missed segments when reconnected/connected
  useEffect(() => {
    if (connectionStatus === "connected" && activeVisitId) {
      catchUpTranscript(activeVisitId);
    }
  }, [connectionStatus, activeVisitId, catchUpTranscript]);

  // Simulation triggers
  const handleSimulateArrive = async (personId) => {
    try {
      await fetch(apiUrl("/api/simulate"), {
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
      await fetch(apiUrl("/api/simulate"), {
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
          <PatientView
            recognizedPerson={activePerson}
            speakAloud={ttsSettings.ttsEnabled}
            ttsSettings={ttsSettings}
            interactionEnabled={ttsSettings.interactionEnabled}
            autoListenEnabled={ttsSettings.autoListenEnabled}
          />
        ) : (
          <CaregiverDashboard
            isVisitorPresent={Boolean(activePerson)}
            activePerson={activePerson}
            transcript={transcript}
            isCapturing={isCapturing}
            onToggleListening={() => {
              if (isCapturing) {
                stopListening();
              } else {
                startCapture({
                  name: activePerson?.name || "Caregiver/Visitor",
                  language: ttsSettings.language,
                  sendCommand: sendCommandRef.current,
                });
              }
            }}
            onAppendSpeech={(text) => appendTranscript(text, sendCommandRef.current)}
            onClearSpeech={resetTranscript}
            onSimulateArrive={handleSimulateArrive}
            onSimulateLeave={handleSimulateLeave}
            onForceSummarize={handleForceSummarize}
            profiles={profiles}
            onAddPerson={addProfile}
            onDeletePerson={deleteProfile}
            onRegisterFace={registerFace}
            onClearEncodings={clearFaceEncodings}
            ttsSettings={ttsSettings}
            onTtsSettingsChange={setTtsSettings}
            liveSegments={liveSegments}
            partialSegment={partialSegment}
            visitDuration={visitDuration}
            statusState={statusState}
          />
        )}
      </main>
    </>
  );
}
