/**
 * bootstrap.js — live-app entry point for PatientView.
 *
 * Mounts the React PatientView into the #patientViewRoot element of the
 * real Anchor app (static/index.html) and exposes a tiny global handle so
 * the existing vanilla static/app.js can drive it with the person that the
 * recognition system has confirmed:
 *
 *   window.AnchorPatientView.setPerson(person | null)
 *   window.AnchorPatientView.setSpeakAloud(boolean)
 */
import { createRoot } from "react-dom/client";
import PatientView from "./PatientView.jsx";
import "./patientView.css";

const rootEl = document.getElementById("patientViewRoot");

if (rootEl) {
  const root = createRoot(rootEl);
  let speakAloud = true;

  function render(person) {
    root.render(
      <PatientView recognizedPerson={person || null} speakAloud={speakAloud} />
    );
  }

  window.AnchorPatientView = {
    setPerson: render,
    setSpeakAloud(value) {
      speakAloud = Boolean(value);
    },
  };

  render(null);
} else {
  console.warn(
    "PatientView bootstrap: #patientViewRoot not found — skipping mount."
  );
}