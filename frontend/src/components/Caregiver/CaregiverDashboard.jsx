import LiveCameraFeed from "./LiveCameraFeed.jsx";
import LiveVisitMonitor from "./LiveVisitMonitor.jsx";
import VisitSimulator from "./VisitSimulator.jsx";
import LovedOnesRoster from "./LovedOnesRoster.jsx";
import AiSettings from "./AiSettings.jsx";
import WearableCamera from "./WearableCamera.jsx";

export default function CaregiverDashboard({
  isVisitorPresent,
  activePerson,
  transcript,
  isCapturing,
  onToggleListening,
  onAppendSpeech,
  onClearSpeech,
  onSimulateArrive,
  onSimulateLeave,
  onForceSummarize,
  profiles,
  onAddPerson,
  onDeletePerson,
  onRegisterFace,
  onClearEncodings,
  ttsSettings,
  onTtsSettingsChange,
  liveSegments = [],
  partialSegment = null,
  visitDuration = "00:00",
  statusState = "idle",
}) {
  const visitorName = activePerson?.name || "None";

  return (
    <section className="caregiver-view">
      {/* Left Column: Camera Preview, Speech Monitor & Simulator */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <LiveCameraFeed isVisitorPresent={isVisitorPresent} visitorName={visitorName} />

        <LiveVisitMonitor
          transcript={transcript}
          isCapturing={isCapturing}
          onToggleListening={onToggleListening}
          onAppendSpeech={onAppendSpeech}
          onClearSpeech={onClearSpeech}
          statusBadgeText={isVisitorPresent ? `In Visit with ${visitorName}` : null}
          liveSegments={liveSegments}
          partialSegment={partialSegment}
          visitDuration={visitDuration}
          statusState={statusState}
        />

        <VisitSimulator
          onSimulateArrive={onSimulateArrive}
          onSimulateLeave={onSimulateLeave}
          onForceSummarize={onForceSummarize}
        />
      </div>

      {/* Right Column: Roster, Wearable Camera & AI Settings */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <LovedOnesRoster
          profiles={profiles}
          onAddPerson={onAddPerson}
          onDeletePerson={onDeletePerson}
          onRegisterFace={onRegisterFace}
          onClearEncodings={onClearEncodings}
        />

        <WearableCamera />

        <AiSettings ttsSettings={ttsSettings} onTtsSettingsChange={onTtsSettingsChange} />
      </div>
    </section>
  );
}
