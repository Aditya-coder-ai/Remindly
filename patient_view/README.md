# Anchor — Patient View Module

The patient-facing **display** layer of Anchor. It renders one of two calm,
full-screen states based on a single input — the person the recognition
system has confirmed is in frame:

- **`recognizedPerson = null`** → a quiet clock / orientation screen
  (`ClockScreen`): large time, date, and one reassuring line.
- **`recognizedPerson = { name, relationship, note }`** → a full-screen
  recognition card (`RecognitionCard`): who the person is, how they are
  related, and the most recent meaningful interaction between them —
  phrased warmly, not as a database dump.

The card appears and disappears **on its own**, cross-fading gently in and
out, purely in response to that state changing. The patient never has to tap,
scroll, or dismiss anything. Optionally, the card is read aloud using the
browser's native `SpeechSynthesis`.

This module does **no** face recognition, has **no** camera access, makes
**no** AI/network calls, and runs **no** timers deciding who is recognized.
It is a pure render layer driven by upstream events.

## Files

| File | Purpose |
| --- | --- |
| `src/PatientView.jsx` | Root component — accepts `recognizedPerson` (nullable) + `speakAloud`, owns the cross-fade and the text-to-speech announcement. |
| `src/ClockScreen.jsx` | Default state: live clock + date (own `setInterval`), no interaction. |
| `src/RecognitionCard.jsx` | Recognized state: name, relationship phrase, memory one-liner. Zero buttons/links. `role="status"` / `aria-live`. |
| `src/phrases.js` | Pure helpers: `relationshipPhrase`, `memorySentence`, `buildAnnouncement` (what gets spoken). |
| `src/patientView.css` | Self-contained, prefixed (`pv-`) styles: high-contrast, large type, layered opacity cross-fade, `prefers-reduced-motion` support. |
| `src/bootstrap.jsx` | Live-app entry: mounts into `#patientViewRoot` and exposes `window.AnchorPatientView`. |
| `src/bootstrapDemo.jsx` + `demo.html` | Standalone test harness with a mock data toggler. |
| `../vite.config.js`, `../package.json` | Build setup; outputs to `static/patient-view-dist/` for the Python server. |

## Running

The React code needs one build step. The Python server then serves everything
from `/static` as before — no server changes were required.

```powershell
# from the repo root
npm install
npm run build          # outputs to static/patient-view-dist/
python server.py       # or: python -m http.server 8000
```

Then open:

- **Demo harness (test this module standalone):**
  <http://localhost:8000/static/patient-view-dist/patient_view/demo.html>
  Click any name to simulate "person recognized" (including **Anna (no
  history)** to see the warm default), **Person leaves** to return to the
  clock, and toggle **Read the card aloud** to enable/disable TTS.
- **Live app:** <http://localhost:8000/> — the patient view tab now runs
  `PatientView`, driven by the real recognition events.

For React development, `npm run dev` serves the demo with hot reload at
<http://localhost:5173/patient_view/demo.html>.

## Using the component

```jsx
import PatientView from "./patient_view/src/PatientView.jsx";

<PatientView recognizedPerson={person || null} speakAloud={true} />
```

In the live vanilla app (`static/app.js`), the built entry exposes a tiny
global handle:

```js
// recognition module confirms a known person is in frame
window.AnchorPatientView.setPerson(person);   // { name, relationship, note }

// person leaves
window.AnchorPatientView.setPerson(null);

// turn audio off/on at any time
window.AnchorPatientView.setSpeakAloud(false);
```

## Behavior notes

- **No-history case** — a person with no `note` yet shows *"This is the
  start of your time together."* instead of a blank/`null` field.
- **No tech branding** — no logos, camera icons, "powered by", or
  monitoring language anywhere in the patient-facing UI.
- **Leave behavior change** — the card now fades out the moment the
  "person left" event fires (per this component's contract); the visit's
  summarization continues in the background either way.