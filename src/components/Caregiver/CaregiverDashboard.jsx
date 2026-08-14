import LiveCameraFeed from "./LiveCameraFeed.jsx";
import LiveVisitMonitor from "./LiveVisitMonitor.jsx";
import VisitSimulator from "./VisitSimulator.jsx";
import LovedOnesRoster from "./LovedOnesRoster.jsx";
import AiSettings from "./AiSettings.jsx";

export default function CaregiverDashboard({
  isVisitorPresent,
  activePerson,
  transcript,
  isCapturing,
  onAppendSpeech,
  onClearSpeech,
  onSimulateArrive,
  onSimulateLeave,
  onForceSummarize,
  profiles,
  onAddPerson,
  onDeletePerson,
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
          onAppendSpeech={onAppendSpeech}
          onClearSpeech={onClearSpeech}
          statusBadgeText={isVisitorPresent ? `In Visit with ${visitorName}` : null}
        />

        <VisitSimulator
          onSimulateArrive={onSimulateArrive}
          onSimulateLeave={onSimulateLeave}
          onForceSummarize={onForceSummarize}
        />
      </div>

      {/* Right Column: Roster & AI Settings */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <LovedOnesRoster
          profiles={profiles}
          onAddPerson={onAddPerson}
          onDeletePerson={onDeletePerson}
        />

        <AiSettings />
      </div>
    </section>
  );
}
