/**
 * phrases.js
 * ==========
 *
 * Pure text helpers that turn a recognized person record into the warm,
 * human phrasing shown (and optionally spoken) on the patient display.
 * Kept as pure functions so they are trivially testable and shared by
 * the RecognitionCard and the text-to-speech announcement.
 */

/**
 * Turn a raw relationship label into a gentle phrase.
 *   "Daughter"           -> "Your daughter"
 *   "Grandson"           -> "Your grandson"
 *   "Caregiver & Nurse"  -> "Your caregiver & nurse"
 *   "Your daughter"      -> "Your daughter" (already phrased)
 *   ""                   -> ""
 */
export function relationshipPhrase(person) {
  const raw = (person && person.relationship) || "";
  const relationship = String(raw).trim();
  if (!relationship) return "";
  if (/^your\b/i.test(relationship)) return relationship;
  return `Your ${relationship.toLowerCase()}`;
}

/**
 * Turn the latest memory note into a spoken-warm one-liner.
 * The note arrives as a full sentence ("Priya brought over chamomile tea…"),
 * so we wrap it: "Last time, <note>."
 *
 * A person with no note yet (newly registered, no visit history) gets a
 * warm default instead of a blank field or placeholder text.
 */
export function memorySentence(person) {
  const raw = (person && person.note) || "";
  const note = String(raw).trim();
  if (!note) return "This is the start of your time together.";
  return `Last time, ${note.replace(/[.!?]+\s*$/, "")}.`;
}

/**
 * The sentence read aloud when the card appears, e.g.
 *   "This is Priya. Your daughter. Last time, Priya brought over fresh
 *    chamomile tea and you looked through photos from the lake house."
 */
export function buildAnnouncement(person) {
  if (!person) return "";
  const name = String((person && person.name) || "").trim() || "your visitor";
  const parts = [`This is ${name}.`];
  const rel = relationshipPhrase(person);
  if (rel) parts.push(`${rel}.`);
  parts.push(memorySentence(person));
  return parts.join(" ");
}