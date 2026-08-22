/**
 * summarize.js
 * ============
 *
 * The AI summarization piece of Anchor's conversation memory module.
 *
 * ``summarizeConversation(person, transcript)`` takes a finished visit
 * transcript and turns it into ONE short, warm sentence that becomes that
 * person's new memory note.  The Groq API call is isolated here so the
 * model / provider can be swapped without touching any capture logic.
 *
 * SECURITY NOTE (hackathon demo only):
 *   Calling the Groq API directly from client-side JS exposes your API
 *   key in the browser.  That is acceptable for a local demo, but NOT for
 *   production.  In production this call should go through a small backend
 *   proxy that holds the key server-side.
 */

// Single place to configure the AI call — swap the model/provider here
// without touching any capture code.
export const ANCHOR_API_CONFIG = {
  apiKey: "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",
  endpoint: "https://api.groq.com/openai/v1/chat/completions",
  // Fast, free-tier-friendly model; plenty for a one-sentence summary.
  model: "llama-3.3-70b-versatile",
  maxTokens: 60,
  temperature: 0.7,
};

// Minimum real speech required before a visit's transcript is worth
// summarising.  Below this we skip the AI call entirely and keep the
// prior note intact.
export const MIN_TRANSCRIPT_WORDS = 3;

/** Count whitespace-separated words in *text* (0 when empty). */
export function countWords(text) {
  const words = (text || "").trim().match(/\S+/g);
  return words ? words.length : 0;
}

/** A display name for *person*: ``name``, else ``person_id``, else generic. */
export function displayName(person) {
  return (person && (person.name || person.person_id)) || "someone";
}

/** Generic fallback used whenever the AI call cannot complete. */
function fallbackSentence(person) {
  return `You had a visit with ${displayName(person)}.`;
}

/** System prompt: role + the hard "one warm sentence only" rule. */
function systemPrompt() {
  return (
    "You are the memory writer for Anchor, a dementia-care companion. " +
    "You write a single warm, gentle sentence that reminds the patient of " +
    "the visit they just had. You never write clinical notes, meeting " +
    "minutes, bullet lists, or evaluations, and you never mention that " +
    "you are an AI."
  );
}

/** User prompt: the transcript plus explicit one-sentence instructions. */
function userPrompt(person, transcript) {
  return [
    `${displayName(person)} just finished a visit with the patient. ` +
    "Here is a rough, imperfect speech-to-text transcript of their conversation:",
    "",
    `"""`,
    transcript,
    `"""`,
    "",
    "Write ONE short, warm sentence (roughly 15-25 words) that gently " +
    "reminds the patient of this visit — what they did or talked about " +
    "together. It should feel like a caring note from the visit, not a " +
    "recap, a report, or a list.",
    "Respond with ONLY that single sentence. No quotes, no prefixes, no " +
    "explanations, no extra text.",
  ].join("\n");
}

/** Pull a clean single sentence out of an OpenAI-compatible chat response. */
function extractSentence(responseBody) {
  if (
    !responseBody ||
    !Array.isArray(responseBody.choices) ||
    responseBody.choices.length === 0
  )
    return "";

  const text = (responseBody.choices[0].message?.content || "").trim();

  let sentence = text;
  // Strip an outer pair of quotes the model may have added.
  if (
    (sentence.startsWith('"') && sentence.endsWith('"')) ||
    (sentence.startsWith("'") && sentence.endsWith("'"))
  ) {
    sentence = sentence.slice(1, -1).trim();
  }
  // If the model rambled, keep only the first sentence (up to and including
  // its terminator, tolerating a trailing quote: …together." More).
  const match = sentence.match(/^[^.!?]*[.!?]["']?/);
  if (match) sentence = match[0];
  // Drop any stray leading/trailing quote characters.
  return sentence.trim().replace(/^["']+|["']+$/g, "");
}

/**
 * Call the Groq API for one summary sentence.  Returns "" on any
 * failure (no key, network error, HTTP error, bad payload) — the caller
 * degrades to the generic fallback.  Never throws.
 */
async function callGroq(person, transcript) {
  const { apiKey, endpoint, model, maxTokens, temperature } = ANCHOR_API_CONFIG;

  if (!apiKey) return "";

  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        temperature,
        messages: [
          { role: "system", content: systemPrompt() },
          { role: "user", content: userPrompt(person, transcript) },
        ],
      }),
    });
  } catch {
    return "";
  }

  if (!response.ok) return "";

  let body;
  try {
    body = await response.json();
  } catch {
    return "";
  }

  return extractSentence(body);
}

/**
 * Turn a finished visit transcript into the person's new memory note.
 *
 * - Overwrites ``person.note`` with the fresh summary.
 * - Returns ``null`` when the transcript had no real speech — in that
 *   case the prior ``person.note`` is left untouched and no AI call is
 *   made.
 * - Never throws: any AI failure degrades to a generic fallback sentence
 *   so the note is never left blank.
 */
export async function summarizeConversation(person, transcript) {
  const cleanTranscript = (transcript || "").trim();

  // Requirement: graceful on empty / near-empty transcript.  Skip the
  // AI call entirely and keep whatever note already exists.
  if (countWords(cleanTranscript) < MIN_TRANSCRIPT_WORDS) {
    return null;
  }

  const sentence = await callGroq(person, cleanTranscript);
  person.note = sentence || fallbackSentence(person);
  return person.note;
}