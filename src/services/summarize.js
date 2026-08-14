/**
 * summarize.js — AI Summarization Service
 * Condenses a visit conversation into ONE warm, gentle sentence.
 */

export const ANCHOR_API_CONFIG = {
  apiKey: "",
  endpoint: "/api/groq",
  model: "llama-3.3-70b-versatile",
  maxTokens: 60,
  temperature: 0.7,
};

export const MIN_TRANSCRIPT_WORDS = 3;

export function countWords(text) {
  const words = (text || "").trim().match(/\S+/g);
  return words ? words.length : 0;
}

export function displayName(person) {
  return (person && (person.name || person.person_id)) || "someone";
}

function fallbackSentence(person) {
  return `You had a visit with ${displayName(person)}.`;
}

function systemPrompt() {
  return (
    "You are the memory writer for Anchor, a dementia-care companion. " +
    "You write a single warm, gentle sentence that reminds the patient of " +
    "the visit they just had. You never write clinical notes, meeting " +
    "minutes, bullet lists, or evaluations, and you never mention that " +
    "you are an AI."
  );
}

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

function extractSentence(responseBody) {
  if (
    !responseBody ||
    !Array.isArray(responseBody.choices) ||
    responseBody.choices.length === 0
  )
    return "";

  const text = (responseBody.choices[0].message?.content || "").trim();

  let sentence = text;
  if (
    (sentence.startsWith('"') && sentence.endsWith('"')) ||
    (sentence.startsWith("'") && sentence.endsWith("'"))
  ) {
    sentence = sentence.slice(1, -1).trim();
  }
  const match = sentence.match(/^[^.!?]*[.!?]["']?/);
  if (match) sentence = match[0];
  return sentence.trim().replace(/^["']+|["']+$/g, "");
}

async function callGroq(person, transcript) {
  const { apiKey, endpoint, model, maxTokens, temperature } = ANCHOR_API_CONFIG;

  const headers = {
    "Content-Type": "application/json",
  };
  if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  let response;
  try {
    response = await fetch(endpoint || "/api/groq", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: model || "llama-3.3-70b-versatile",
        max_tokens: maxTokens || 60,
        temperature: temperature ?? 0.7,
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

export async function summarizeConversation(person, transcript) {
  const cleanTranscript = (transcript || "").trim();

  if (countWords(cleanTranscript) < MIN_TRANSCRIPT_WORDS) {
    return null;
  }

  const sentence = await callGroq(person, cleanTranscript);
  return sentence || fallbackSentence(person);
}
