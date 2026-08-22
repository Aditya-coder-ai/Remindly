/**
 * intentDetector.js — Lightweight client-side intent classifier for Anchor.
 *
 * Classifies patient speech into intents using keyword/regex matching.
 * This is NOT an LLM call — keeps latency near zero.
 *
 * Interface:
 *   detectIntent(transcript, currentPerson) → { intent, entities }
 */

// ---------- Intent Types ----------

export const INTENTS = {
  IDENTITY: "IDENTITY",
  LAST_CONVERSATION: "LAST_CONVERSATION",
  MEMORY_QUERY: "MEMORY_QUERY",
  RELATIONSHIP: "RELATIONSHIP",
  REMINDER: "REMINDER",
  GENERAL: "GENERAL",
  UNKNOWN: "UNKNOWN",
};

// ---------- Pattern Definitions ----------

const INTENT_PATTERNS = [
  {
    intent: INTENTS.IDENTITY,
    patterns: [
      /who\s+is\s+(this|here|that)/i,
      /who('s| is)\s+this/i,
      /who\s+are\s+you/i,
      /do\s+i\s+know\s+(you|them|this)/i,
      /what('s| is)\s+(your|their|his|her)\s+name/i,
    ],
  },
  {
    intent: INTENTS.LAST_CONVERSATION,
    patterns: [
      /what\s+did\s+\w+\s+tell\s+me/i,
      /what\s+did\s+we\s+talk\s+about/i,
      /what\s+did\s+(she|he|they)\s+(say|tell|mention)/i,
      /last\s+time/i,
      /last\s+visit/i,
      /what\s+happened\s+(last|before)/i,
      /what\s+were\s+we\s+(talking|discussing)/i,
    ],
  },
  {
    intent: INTENTS.MEMORY_QUERY,
    patterns: [
      /when\s+did\s+i\s+(last\s+)?(see|meet|talk)/i,
      /tell\s+me\s+about/i,
      /what\s+about/i,
      /what\s+do\s+i\s+know\s+about/i,
      /do\s+you\s+(know|remember)\s+about/i,
    ],
  },
  {
    intent: INTENTS.RELATIONSHIP,
    patterns: [
      /how\s+do\s+i\s+know/i,
      /is\s+\w+\s+my/i,
      /are\s+(they|you)\s+my/i,
      /what('s| is)\s+(my|our)\s+relationship/i,
      /(my|our)\s+(daughter|son|wife|husband|friend|sister|brother)/i,
    ],
  },
  {
    intent: INTENTS.REMINDER,
    patterns: [
      /remind\s+me/i,
      /what('s| is)\s+next/i,
      /when\s+is/i,
      /what\s+do\s+i\s+(need|have)\s+to\s+do/i,
      /any\s+(plans|appointments)/i,
    ],
  },
];

// ---------- Core API ----------

/**
 * Classify patient speech into an intent.
 *
 * @param {string} transcript     - The patient's transcribed speech
 * @param {object} currentPerson  - Currently recognized person { name, person_id, relationship }
 * @returns {{ intent: string, entities: object }}
 */
export function detectIntent(transcript, currentPerson = null) {
  if (!transcript || !transcript.trim()) {
    return { intent: INTENTS.UNKNOWN, entities: {} };
  }

  const text = transcript.trim().toLowerCase();

  // Check each intent pattern
  for (const { intent, patterns } of INTENT_PATTERNS) {
    for (const pattern of patterns) {
      if (pattern.test(text)) {
        return {
          intent,
          entities: _extractEntities(text, currentPerson),
        };
      }
    }
  }

  // No specific intent matched — treat as general conversation
  // If the text is very short (< 3 words), mark as unknown
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount < 2) {
    return { intent: INTENTS.UNKNOWN, entities: {} };
  }

  return {
    intent: INTENTS.GENERAL,
    entities: _extractEntities(text, currentPerson),
  };
}

/**
 * Extract entities (person name, topic) from the transcript.
 */
function _extractEntities(text, currentPerson) {
  const entities = {};

  if (currentPerson && currentPerson.name) {
    const nameLC = currentPerson.name.toLowerCase();
    if (text.includes(nameLC)) {
      entities.personName = currentPerson.name;
      entities.personId = currentPerson.person_id;
    }
  }

  return entities;
}
