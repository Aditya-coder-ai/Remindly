/**
 * bootstrapDemo.jsx — standalone test harness for PatientView.
 *
 * Renders the patient display full-screen and adds a clearly-labelled dev
 * control bar that simulates the upstream recognition module:
 *   - "person recognized"  -> calls setPerson({name, relationship, note})
 *   - "person left"        -> calls setPerson(null)
 *
 * No face recognition, no camera, no AI calls — the same mock objects the
 * real module would pass in.
 */
import { useState } from "react";
import { createRoot } from "react-dom/client";
import PatientView from "./PatientView.jsx";
import "./patientView.css";

/** Mock recognized-person records (shape mirrors the real roster objects). */
const MOCK_PEOPLE = [
  {
    person_id: "priya",
    name: "Priya Patel",
    relationship: "Daughter",
    note: "Priya brought over fresh chamomile tea and you looked through photos from the lake house together.",
  },
  {
    person_id: "tom",
    name: "Tom Evans",
    relationship: "Grandson",
    note: "Tom showed you his new bicycle and told you about his soccer game on Saturday.",
  },
  {
    person_id: "maya",
    name: "Maya Sharma",
    relationship: "Caregiver & Nurse",
    note: "Maya checked your morning vitals, shared a funny story about her cat, and made warm oatmeal.",
  },
  {
    person_id: "anna",
    name: "Anna Jenkins",
    relationship: "Grandmother",
    note: "", // newly registered, no prior interaction yet
  },
];

function DemoApp() {
  const [person, setPerson] = useState(null);
  const [speakAloud, setSpeakAloud] = useState(true);

  return (
    <div className="pv-demo">
      <div className="pv-demo-view">
        <PatientView recognizedPerson={person} speakAloud={speakAloud} />
      </div>

      <aside className="pv-demo-bar" aria-label="Demo controls">
        <div className="pv-demo-bar-title">Demo controls</div>
        <div className="pv-demo-buttons">
          {MOCK_PEOPLE.map((p) => (
            <button
              key={p.person_id}
              type="button"
              onClick={() => setPerson(p)}
              className={person && person.person_id === p.person_id ? "on" : ""}
            >
              {p.name}
              {!p.note ? " (no history)" : ""}
            </button>
          ))}
          <button
            type="button"
            className="pv-demo-leave"
            onClick={() => setPerson(null)}
          >
            Person leaves
          </button>
        </div>
        <label className="pv-demo-tts">
          <input
            type="checkbox"
            checked={speakAloud}
            onChange={(e) => setSpeakAloud(e.target.checked)}
          />
          Read the card aloud
        </label>
        <div className="pv-demo-state">
          {person
            ? `Recognized: ${person.name}`
            : "No one recognized — clock screen shown"}
        </div>
      </aside>
    </div>
  );
}

const rootEl = document.getElementById("demoRoot");
if (rootEl) {
  createRoot(rootEl).render(<DemoApp />);
} else {
  console.warn("bootstrapDemo: #demoRoot not found — skipping mount.");
}