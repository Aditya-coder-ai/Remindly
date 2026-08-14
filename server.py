"""
server.py
=========

Anchor Unified Server — FastAPI backend with WebSockets, Groq proxy,
and real-time event streaming for Anchor dementia-care companion.

Usage:
    python server.py
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import urllib.error
import urllib.request
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, Dict, List, Optional

import uvicorn
from fastapi import FastAPI, HTTPException, Request, Response, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from anchor_face.service import RecognitionService
from anchor_face.storage import RosterStorage
from anchor_memory import MemoryRepository

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(name)s: %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("anchor.server")

GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"
DEFAULT_GROQ_KEY = os.environ.get("GROQ_API_KEY", "")
PORT = 8000
HOST = "0.0.0.0"

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "dist"
STATIC_DIR = BASE_DIR / "static"
CONV_DIR = BASE_DIR / "conversation_memory"
PATIENT_DIR = BASE_DIR / "patient_view"

# Persistent storage & recognition coordinator
storage = RosterStorage()
recognition_service = RecognitionService(storage=storage)

# SQLite-backed memory persistence (durable across restarts)
memory_repo = MemoryRepository()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Set event loop for thread-safe websocket broadcasts
    loop = asyncio.get_running_loop()
    recognition_service.set_event_loop(loop)
    # Launch recognition thread
    recognition_service.start()
    logger.info("Anchor backend initialized. Face recognition service running.")
    yield
    # Shutdown recognition
    recognition_service.stop()
    logger.info("Anchor backend shutdown complete.")


app = FastAPI(title="Anchor Care Companion Server", lifespan=lifespan)

# Enable CORS for local dev / cross-origin harnesses
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class ProfileInput(BaseModel):
    person_id: str
    name: str
    relationship: str
    avatar_color: Optional[str] = "#2f6f4f"
    avatar_url: Optional[str] = None
    note: Optional[str] = None


class NoteUpdateInput(BaseModel):
    person_id: str
    note: str
    transcript: Optional[str] = ""


class PatchNoteBody(BaseModel):
    """Body for PATCH /people/{id}/note — just the new note text."""
    note: str


class FaceRegisterInput(BaseModel):
    person_id: str
    image_base64: Optional[str] = None


class SimulateInput(BaseModel):
    action: str = Field(..., description="'arrive' or 'leave'")
    person_id: Optional[str] = None


# ---------------------------------------------------------------------------
# WebSocket Endpoint
# ---------------------------------------------------------------------------

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    queue = recognition_service.register_subscriber()
    logger.info("New WebSocket client connected.")

    try:
        # Loop reading from the subscriber queue and receiving commands from client
        async def send_events():
            while True:
                event = await queue.get()
                await websocket.send_text(json.dumps(event))

        async def receive_commands():
            while True:
                data = await websocket.receive_text()
                try:
                    payload = json.loads(data)
                    cmd = payload.get("command")
                    if cmd == "ping":
                        await websocket.send_text(json.dumps({"type": "pong", "time": payload.get("time")}))
                    elif cmd == "get_status":
                        await websocket.send_text(json.dumps({
                            "type": "status",
                            "data": recognition_service.get_status(),
                        }))
                except Exception as e:
                    logger.warning("Error processing WS command: %s", e)

        await asyncio.gather(send_events(), receive_commands())
    except (WebSocketDisconnect, asyncio.CancelledError):
        logger.info("WebSocket client disconnected.")
    finally:
        recognition_service.unregister_subscriber(queue)


# ---------------------------------------------------------------------------
# REST API Endpoints
# ---------------------------------------------------------------------------

@app.get("/api/status")
async def get_status():
    """Return backend status & camera telemetry."""
    return recognition_service.get_status()


@app.get("/video_feed")
async def video_feed():
    """Stream live webcam frames with recognition overlays as MJPEG."""
    async def frame_stream():
        while True:
            jpeg = recognition_service.get_latest_frame_jpeg()
            yield (b"--frame\r\n"
                   b"Content-Type: image/jpeg\r\n\r\n" + jpeg + b"\r\n")
            await asyncio.sleep(0.06)

    return StreamingResponse(frame_stream(), media_type="multipart/x-mixed-replace; boundary=frame")


@app.get("/camera_snapshot")
async def camera_snapshot():
    """Return a single live JPEG snapshot from the webcam stream."""
    jpeg = recognition_service.get_latest_frame_jpeg()
    return Response(
        content=jpeg,
        media_type="image/jpeg",
        headers={"Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache", "Expires": "0"},
    )


@app.get("/api/roster")
async def get_roster():
    """Return all registered loved ones and their current memory notes."""
    return storage.list_profiles()


@app.get("/api/roster/{person_id}")
async def get_profile(person_id: str):
    p = storage.get_profile(person_id)
    if not p:
        raise HTTPException(status_code=404, detail="Person not found")
    return p.to_full_dict()


@app.post("/api/roster")
async def upsert_profile(data: ProfileInput):
    p = storage.upsert_profile(
        person_id=data.person_id.strip().lower().replace(" ", "_"),
        name=data.name.strip(),
        relationship=data.relationship.strip(),
        avatar_color=data.avatar_color or "#2f6f4f",
        avatar_url=data.avatar_url,
        note=data.note,
    )
    recognition_service.reload_roster()
    return {"success": True, "person": p.to_dict()}


@app.delete("/api/roster/{person_id}")
async def delete_profile(person_id: str):
    deleted = storage.delete_profile(person_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Person not found")
    recognition_service.reload_roster()
    return {"success": True}


@app.post("/api/update_note")
async def update_note(data: NoteUpdateInput):
    """Save the newly summarized memory note and append visit history."""
    p = storage.update_note(
        person_id=data.person_id,
        note=data.note,
        transcript=data.transcript or "",
    )
    if not p:
        raise HTTPException(status_code=404, detail="Person not found")

    # ---- Persist to durable SQLite store (automatic, no caregiver action) ----
    try:
        _sync_note_to_sqlite(data.person_id, data.note, p.name, p.relationship)
    except Exception as e:
        # Log loudly but don't fail the request — JSON store already saved.
        logger.error("SQLite sync failed for '%s': %s", data.person_id, e)

    # Broadcast updated note event to all active clients
    recognition_service.broadcast_event({
        "type": "memory_updated",
        "person": p.to_dict(),
    })
    return {"success": True, "person": p.to_dict()}


# ---------------------------------------------------------------------------
# Memory Persistence — SQLite endpoints  (PATCH / GET)
# ---------------------------------------------------------------------------

def _sync_note_to_sqlite(
    person_id: str,
    note: str,
    name: str = "",
    relationship: str = "Loved One",
) -> None:
    """
    Internal helper called by *both* the automatic summarize pipeline and
    the manual PATCH endpoint.  One code path, two triggers.

    Ensures the person row exists (upsert) then atomically replaces the
    current note.  If the write fails, the previous note stays intact
    (SQLite auto-rollback) and the exception propagates to the caller.
    """
    # Ensure the person exists in the SQLite store
    existing = memory_repo.get_person(person_id)
    if not existing:
        memory_repo.upsert_person(
            person_id=person_id,
            name=name or person_id.replace("_", " ").title(),
            relationship=relationship,
        )
    # Atomically replace the note
    memory_repo.update_person_note(person_id, note)


@app.patch("/people/{person_id}/note")
async def patch_person_note(person_id: str, body: PatchNoteBody):
    """
    Replace the person's current memory note with a new one.

    This is THE single update operation that both the automatic
    post-summarize pipeline and a manual caregiver action call.
    Returns the saved record so the frontend can reflect the change
    immediately without a separate re-fetch.
    """
    note_text = (body.note or "").strip()
    if not note_text:
        raise HTTPException(status_code=422, detail="Note must not be blank.")

    # 1. Persist to SQLite (the durable source of truth)
    try:
        person = memory_repo.get_person(person_id)
        if not person:
            raise HTTPException(status_code=404, detail=f"Person '{person_id}' not found")
        saved = memory_repo.update_person_note(person_id, note_text)
    except KeyError:
        raise HTTPException(status_code=404, detail=f"Person '{person_id}' not found")
    except ValueError as ve:
        raise HTTPException(status_code=422, detail=str(ve))

    # 2. Keep the JSON roster in sync so existing views stay current
    storage.update_note(person_id=person_id, note=note_text)

    # 3. Broadcast to live WebSocket clients
    recognition_service.broadcast_event({
        "type": "memory_updated",
        "person": saved.to_dict(),
    })

    return {"success": True, "person": saved.to_dict()}


@app.get("/people/{person_id}")
async def get_person(person_id: str):
    """
    Fetch a person's current record from the durable SQLite store.
    Useful for confirming the note actually changed after an update.
    """
    person = memory_repo.get_person(person_id)
    if not person:
        raise HTTPException(status_code=404, detail=f"Person '{person_id}' not found")
    return person.to_dict()


@app.get("/people")
async def list_all_people():
    """List every person in the durable SQLite store."""
    return [p.to_dict() for p in memory_repo.list_people()]


@app.post("/api/register_face")
async def register_face(data: FaceRegisterInput):
    """Calculate landmark face encoding from image snapshot or webcam frame."""
    result = recognition_service.capture_and_register_face(
        person_id=data.person_id,
        image_base64=data.image_base64,
    )
    return result


@app.post("/api/clear_encodings/{person_id}")
async def clear_encodings(person_id: str):
    res = storage.clear_encodings(person_id)
    if not res:
        raise HTTPException(status_code=404, detail="Person not found")
    recognition_service.reload_roster()
    return {"success": True, "message": f"Cleared face encodings for {person_id}"}


@app.post("/api/simulate")
async def simulate_event(data: SimulateInput):
    """Synthetic visit simulation for demos and manual testing."""
    if data.action == "arrive":
        pid = data.person_id or "priya"
        recognition_service.simulate_recognized(pid)
        return {"success": True, "simulated": f"arrive: {pid}"}
    elif data.action == "leave":
        recognition_service.simulate_unrecognized()
        return {"success": True, "simulated": "leave"}
    else:
        raise HTTPException(status_code=400, detail="Invalid action, must be 'arrive' or 'leave'")


@app.post("/api/groq")
async def proxy_groq(request: Request):
    """Forward Groq LLM API calls securely with server-side authentication."""
    body = await request.body()
    auth_header = request.headers.get("Authorization")

    # Use client auth header if provided; otherwise fallback to backend server key
    if not auth_header or not auth_header.strip().startswith("Bearer gsk_"):
        auth_header = f"Bearer {DEFAULT_GROQ_KEY}"

    req = urllib.request.Request(
        GROQ_ENDPOINT,
        data=body,
        headers={
            "Content-Type": "application/json",
            "Authorization": auth_header,
            "User-Agent": "Anchor-Companion/1.0",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            resp_body = resp.read()
            return Response(content=resp_body, media_type="application/json", status_code=resp.status)
    except urllib.error.HTTPError as e:
        err_body = e.read()
        return Response(content=err_body, media_type="application/json", status_code=e.code)
    except Exception as e:
        logger.error("Groq proxy error: %s", e)
        return JSONResponse(status_code=502, content={"error": f"Groq proxy failure: {str(e)}"})


# ---------------------------------------------------------------------------
# Static File Mounts
# ---------------------------------------------------------------------------

if (DIST_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(DIST_DIR / "assets")), name="assets")

if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

if CONV_DIR.exists():
    app.mount("/conversation_memory", StaticFiles(directory=str(CONV_DIR)), name="conversation_memory")

if PATIENT_DIR.exists():
    app.mount("/patient_view", StaticFiles(directory=str(PATIENT_DIR)), name="patient_view")


@app.get("/")
async def root_index():
    dist_index = DIST_DIR / "index.html"
    if dist_index.exists():
        return FileResponse(str(dist_index))
    static_index = STATIC_DIR / "index.html"
    if static_index.exists():
        return FileResponse(str(static_index))
    return HTMLResponse("<h1>Anchor Dementia-Care Companion Server is Running</h1>")


if __name__ == "__main__":
    print(f"\n{'='*60}")
    print(f"  Anchor — Dementia Care Companion Server")
    print(f"  Listening on http://localhost:{PORT}")
    print(f"  Open in Google Chrome for Speech API & Face Recognition")
    print(f"{'='*60}\n")
    uvicorn.run(app, host="127.0.0.1", port=PORT)
