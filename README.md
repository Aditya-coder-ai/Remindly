# Anchor — Dementia Care Companion

Anchor is a real-time dementia-care companion that integrates private, on-device biometric face recognition, patient-facing calm displays, caregiver management dashboards, and AI-assisted conversation memory synthesis.

---

## Project Architecture

The project is structured into separated **Frontend** and **Backend** modules for security, maintainability, and clean dependency management:

```
Anchor/
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI server, WebSockets, Groq proxy
│   │   ├── config.py                # Environment configs, paths & privacy settings
│   │   ├── biometrics/              # On-device biometric recognition engine
│   │   │   ├── recognizer.py        # 3D landmark alignment & geometric feature extractor
│   │   │   ├── service.py           # Threaded camera manager & event broadcaster
│   │   │   └── models/
│   │   │       └── face_landmarker.task
│   │   ├── storage/                 # Persistent local JSON data management
│   │   │   └── roster_storage.py
│   │   └── schemas/                 # Pydantic request/response validation schemas
│   │       └── models.py
│   ├── data/                        # Local database storage (roster.json)
│   ├── tests/                       # Automated backend test suite
│   │   ├── test_smoke.py
│   │   └── test_integration.py
│   └── requirements.txt             # Python backend dependencies
│
└── frontend/
    ├── src/                         # React UI application
    │   ├── components/
    │   │   ├── Caregiver/           # Caregiver dashboard, live monitor, roster
    │   │   └── PatientView/         # Calm patient-facing clock & visit cards
    │   ├── hooks/                   # Custom React hooks (WebSockets, speech, roster)
    │   ├── services/                # API and speech recognition clients
    │   ├── App.jsx                  # Main view container & navigation
    │   ├── main.jsx                 # Entry point
    │   └── index.css                # Polished design system & styling
    ├── index.html                   # HTML template
    ├── vite.config.js               # Vite configuration & backend proxy
    └── package.json                 # Frontend dependencies
```

---

## Getting Started

### 1. Backend Setup & Run

1. Navigate to the project root and install Python dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```

2. (Optional) Set your Groq API key for AI visit note synthesis:
   ```bash
   # PowerShell
   $env:GROQ_API_KEY="your-groq-api-key"

   # Bash
   export GROQ_API_KEY="your-groq-api-key"
   ```

3. Run the backend server:
   ```bash
   python -m backend.app.main
   ```
   *The backend starts at `http://localhost:8000`.*

4. Run backend tests:
   ```bash
   python -m backend.tests.test_integration
   python -m backend.tests.test_smoke
   ```

---

### 2. Frontend Setup & Run

1. Navigate into the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install Node dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend starts at `http://localhost:3000` with automatic API proxying to `http://localhost:8000`.*

4. Build for production:
   ```bash
   npm run build
   ```

---

## Key Features & Security Guarantees

- **100% On-Device Biometrics**: Face detection, landmark extraction, and matching run entirely local on the CPU/GPU using MediaPipe FaceLandmarker. No video frames or biometric vectors are ever sent to any remote server.
- **Privacy Whitelist Enforcement**: The `/api/groq` proxy strictly strips and rejects any media, non-text, or unauthorized payload fields.
- **Identity Locking & Hysteresis**: Multi-snapshot biometric indexing with calibrated thresholds prevents flickering or switching identities during visits.
