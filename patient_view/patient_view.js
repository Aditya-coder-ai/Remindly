/**
 * patient_view.js
 * ===============
 *
 * Patient-facing display component for Anchor (Dementia-Care Assistant).
 *
 * Receives a single state input: `recognizedPerson` (object or null)
 * - Null / None: Displays the calm ClockScreen (time, date, reassurance)
 * - Object: Cross-fades to the RecognitionCard (large name, warm relationship,
 *   and latest meaningful interaction note)
 *
 * Zero buttons, zero patient effort, zero tech branding.
 */

export class PatientView {
  /**
   * @param {HTMLElement} container - DOM element to render inside
   * @param {Object} [options]
   * @param {boolean} [options.enableSpeech=false] - Read card aloud via browser SpeechSynthesis
   */
  constructor(container, { enableSpeech = false } = {}) {
    this.container = container;
    this.enableSpeech = enableSpeech;
    this.recognizedPerson = null;
    this._clockInterval = null;

    this._init();
  }

  _init() {
    this.container.innerHTML = `
      <div class="patient-view-container">
        <!-- Default State: Orientation & Clock -->
        <div class="clock-screen" id="pvClockScreen">
          <div class="clock-time" id="pvTime">--:--</div>
          <div class="clock-date" id="pvDate">Loading...</div>
          <div class="clock-comfort-message">You are home, safe and loved.</div>
        </div>

        <!-- Recognized State: Identity & Relationship Card -->
        <div class="recognition-card hidden" id="pvRecognitionCard">
          <div class="card-header">
            <div class="card-name" id="pvName"></div>
            <div class="card-relationship" id="pvRelationship"></div>
          </div>
          <div class="card-memory-section">
            <div class="card-memory-label">Last Time Together</div>
            <div class="card-memory-text" id="pvNote"></div>
          </div>
        </div>
      </div>
    `;

    this._clockScreen = this.container.querySelector("#pvClockScreen");
    this._cardScreen = this.container.querySelector("#pvRecognitionCard");
    this._timeEl = this.container.querySelector("#pvTime");
    this._dateEl = this.container.querySelector("#pvDate");
    this._nameEl = this.container.querySelector("#pvName");
    this._relEl = this.container.querySelector("#pvRelationship");
    this._noteEl = this.container.querySelector("#pvNote");

    this._startClock();
  }

  _startClock() {
    const update = () => {
      const now = new Date();
      this._timeEl.textContent = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
      this._dateEl.textContent = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
    };
    update();
    this._clockInterval = setInterval(update, 1000);
  }

  /**
   * Main state input. Set to a person object or null when no one is in frame.
   * @param {{ name: string, relationship?: string, note?: string } | null} person
   */
  setRecognizedPerson(person) {
    this.recognizedPerson = person;

    if (!person) {
      // Transition to Clock Screen
      this._cardScreen.classList.add("hidden");
      this._clockScreen.classList.remove("hidden");
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    // Warm phrasing defaults
    const name = person.name || "A visitor";
    const relationship = this._formatRelationship(person.relationship);
    const note = person.note ? `"${person.note}"` : "This is the start of your time together.";

    this._nameEl.textContent = name;
    this._relEl.textContent = relationship;
    this._noteEl.textContent = note;

    // Transition to Recognition Card
    this._clockScreen.classList.add("hidden");
    this._cardScreen.classList.remove("hidden");

    if (this.enableSpeech) {
      this._speakCard(name, relationship, note);
    }
  }

  _formatRelationship(rel) {
    if (!rel) return "Loved One";
    const clean = rel.trim();
    // Warm natural phrasing
    if (/^(daughter|son|grandson|granddaughter|sister|brother|husband|wife|friend|caregiver|nurse)/i.test(clean)) {
      return `Your ${clean.toLowerCase()}`;
    }
    return clean;
  }

  _speakCard(name, relationship, note) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const cleanNote = note.replace(/^"|"$/g, "");
    const utterance = new SpeechSynthesisUtterance(`${name}, ${relationship}. ${cleanNote}`);
    utterance.rate = 0.9; // gentle, unhurried pace
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }

  destroy() {
    if (this._clockInterval) {
      clearInterval(this._clockInterval);
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
}
