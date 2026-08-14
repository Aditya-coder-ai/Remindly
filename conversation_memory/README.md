# Anchor — Conversation Memory Module

The **listen → summarize → remember** piece of Anchor. While a recognised,
known person is in frame, this module accumulates their conversation
locally via the browser Web Speech API. The moment they leave, the finished
transcript is turned into **one short, warm sentence** by the Groq API,
and that sentence becomes the person's new memory note.

This module does **not** do face recognition and renders **no** UI — it is
driven by events from the recognition module and writes its output into the
`person.note` field that the patient view reads from.

## Files

| File                        | Purpose                                                      |
| --------------------------- | ------------------------------------------------------------ |
| `summarize.js`              | `summarizeConversation(person, transcript)` — isolated Groq API call, fallback, and empty-transcript guard. Swap the model/provider here without touching capture logic. |
| `conversation_memory.js`    | `ConversationMemory` class — bounded start/stop capture, auto-resume, summarize-on-leave, manual override. |
| `demo.html`                 | Test harness: buttons that simulate "person arrives" / "person leaves" + typed transcript input. |

## Running the demo

The Web Speech API only works in a secure context (Chrome over
`http://localhost` or `https`), so serve the repo root over HTTP:

```powershell
# from the repo root
python -m http.server 8000
```

Then open <http://localhost:8000/conversation_memory/demo.html> in Chrome.

Demo flow:

1. **Groq API key** — paste a key into the field, or leave it empty to
   exercise the built-in fallback sentence.
2. **Who is visiting?** — pick Priya or Tom (in-memory person records).
3. Either click **Person arrives** to start the real microphone, and/or
   type a fake conversation into the box and press **Add typed text**.
4. Click **Person leaves (stop & summarize)** — the module stops capture
   and writes the new one-sentence memory to `person.note`.

**Force summarize now** is the safety net: it summarises whatever transcript
exists so far and stops capture, for when the real "person left" event
misbehaves.

## API

```js
import { ConversationMemory } from "./conversation_memory.js";
import { ANCHOR_API_CONFIG, summarizeConversation } from "./summarize.js";

const memory = new ConversationMemory({ onStatus: console.log });

// recognition module: "recognized" event → begin capture
memory.startCapture({ name: "Priya" });

// recognition module: "person left" event → stop + remember
await memory.stopCaptureAndSummarize(person);   // sets person.note

// manual override when the left-event never fires
await memory.forceSummarizeNow(person);
```

### `summarizeConversation(person, transcript)`

Returns the new note (a single sentence) or `null` when the transcript had
no real speech — in that case the prior `person.note` is left untouched.
Never throws: any AI failure (no key, network, HTTP error) falls back to
`You had a visit with {name}.`

## Design guarantees

- **Strictly bounded capture** — no timers; listening runs only between
  `startCapture()` and a stop call. Never for strangers or empty rooms.
- **Accumulate, don't stream** — one summarization call per completed
  visit, over the finished transcript only.
- **Auto-resume** — the browser stops the recognizer after pauses in
  speech; `onend` restarts it so a natural silence never truncates the
  transcript.
- **One warm sentence** — the prompt demands a single 15–25 word gentle
  reminder (never a recap/list/meeting notes) and only that sentence back.
- **Overwrite, don't append** — `person.note` always holds the latest visit.

## Security note (important)

Calling the Groq API directly from client-side JS exposes the API key in
the browser. That is **acceptable for a hackathon demo only**. In
production, `summarizeConversation` should call a small backend proxy that
holds the key server-side — the function is isolated precisely so that swap
does not touch any capture code. See the comment at the top of
`summarize.js`.