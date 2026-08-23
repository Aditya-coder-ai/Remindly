"""
backend.app.main
================

Anchor Unified Server — FastAPI backend with WebSockets, Groq proxy,
and real-time event streaming for Anchor dementia-care companion.
"""

from __future__ import annotations

import asyncio
import sys

# Fix psycopg async compatibility on Windows
if sys.platform == "win32":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

import json
import logging
import os
import urllib.error
import urllib.request
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, Dict, List, Optional
import openai

import uvicorn
from fastapi import FastAPI, HTTPException, Request, Response, WebSocket, WebSocketDisconnect, UploadFile, File, Form, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
import uuid
import datetime

from .config import (
    ALLOWED_GROQ_KEYS,
    ALLOWED_GROQ_ROLES,
    ALLOWED_ORIGINS,
    DEFAULT_GROQ_KEY,
    FRONTEND_DIST_DIR,
    STATIC_DIR,
    DATA_DIR,
    GROQ_ENDPOINT,
    HOST,
    PORT,
)
from .schemas.models import (
    GroqProxyInput,
    ProfileInput,
    RegisterFaceInput,
    SimulateInput,
    CameraSelectInput,
    UpdateNoteInput,
    MemoryCreateInput,
    MemorySearchInput,
    MemorySearchResponse,
    PatientAskInput,
    PatientAskResponse,
    TranscriptSegmentInput,
)
from .storage.roster_storage import RosterStorage
from .storage.memory_storage import memory_storage
from .storage.visit_storage import visit_storage
from .biometrics.service import RecognitionService

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(name)s: %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("anchor.backend")

# Persistent storage & recognition coordinator
storage = RosterStorage()
recognition_service = RecognitionService(storage=storage)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize long-term memory database (pgvector)
    try:
        await memory_storage.init_db()
        await visit_storage.init_db()
    except Exception as e:
        logger.error(f"Failed to initialize memory storage: {e}")

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

# Enable CORS for local Anchor UI origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# API Endpoints
# ---------------------------------------------------------------------------

@app.get("/api/roster")
def get_roster():
    """Return all known loved-one profiles with notes, history, and status."""
    return storage.list_profiles()


@app.post("/api/roster")
def upsert_profile(payload: ProfileInput):
    """Add or update a loved one's profile."""
    profile = storage.upsert_profile(
        person_id=payload.person_id,
        name=payload.name,
        relationship=payload.relationship,
        avatar_color=payload.avatar_color,
        avatar_url=payload.avatar_url,
        note=payload.note,
    )
    recognition_service.reload_roster()
    return {"success": True, "person": profile.to_dict()}


@app.delete("/api/roster/{person_id}")
def delete_profile(person_id: str):
    """Remove a profile from the roster."""
    deleted = storage.delete_profile(person_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Person not found")
    recognition_service.reload_roster()
    return {"success": True, "person_id": person_id}


@app.post("/api/register_face")
def register_face(payload: RegisterFaceInput):
    """Compute and store face embedding from uploaded image or webcam frame."""
    result = recognition_service.capture_and_register_face(
        person_id=payload.person_id,
        image_base64=payload.image_base64,
    )
    if not result.get("success"):
        raise HTTPException(status_code=400, detail=result.get("error", "Registration failed"))
    return result


@app.post("/api/clear_encodings/{person_id}")
def clear_encodings(person_id: str):
    """Clear all face encodings for a specific person."""
    cleared = storage.clear_encodings(person_id)
    if not cleared:
        raise HTTPException(status_code=404, detail="Person not found")
    recognition_service.reload_roster()
    return {"success": True, "person_id": person_id, "encodings_count": 0}


@app.get("/api/face_profile/{person_id}")
def get_face_profile_coverage(person_id: str):
    """Return bucket coverage report for a person's auto-enrolled face profile."""
    report = recognition_service._profile_manager.get_coverage_report(person_id)
    if report["total_samples"] == 0 and not storage.get_profile(person_id):
        raise HTTPException(status_code=404, detail="Person not found")
    return {"success": True, "report": report}


@app.delete("/api/face_profile/{person_id}")
def delete_face_profile(person_id: str):
    """Complete profile erasure (right to erasure)."""
    # Delete managed samples and encodings
    deleted = recognition_service._profile_manager.delete_profile(person_id)
    # Also delete audit log entries
    logs_removed = recognition_service._enrollment_logger.delete_person_entries(person_id)
    
    if not deleted and logs_removed == 0:
        raise HTTPException(status_code=404, detail="Person face profile not found")
        
    recognition_service.reload_roster()
    return {"success": True, "person_id": person_id, "samples_deleted": True, "audit_entries_removed": logs_removed}


@app.get("/api/enrollment_log")
def get_enrollment_log(person_id: Optional[str] = None, limit: int = 100):
    """Return recent auto-enrollment audit log entries."""
    entries = recognition_service._enrollment_logger.get_recent_entries(limit=limit, person_id=person_id)
    return {"success": True, "entries": entries}


@app.post("/api/update_note")
def update_note(payload: UpdateNoteInput):
    """Save synthesized memory note after a visit completes."""
    profile = storage.update_note(
        person_id=payload.person_id,
        note=payload.note,
        transcript=payload.transcript,
    )
    if not profile:
        raise HTTPException(status_code=404, detail="Person not found")

    recognition_service.broadcast_event({
        "type": "memory_updated",
        "person": profile.to_dict(),
        "note": payload.note,
    })
    return {"success": True, "person": profile.to_dict()}


@app.get("/api/status")
def get_system_status():
    """Health check and live recognition service status."""
    return recognition_service.get_status()


@app.get("/api/cameras")
def get_cameras():
    """Discover available video devices and return active device index."""
    cameras = recognition_service.get_available_cameras()
    return {
        "success": True,
        "cameras": cameras,
        "active_camera": recognition_service.camera_index,
        "remote_active": recognition_service._remote_active,
    }


@app.post("/api/camera_select")
def select_camera(payload: CameraSelectInput):
    """Hot-switch active webcam on the fly."""
    success = recognition_service.set_camera_index(payload.camera_index)
    return {
        "success": success,
        "active_camera": recognition_service.camera_index,
        "message": f"Switched to Camera #{payload.camera_index}",
    }


@app.post("/api/simulate")
def simulate_event(payload: SimulateInput):
    """Testing endpoint to simulate person arrival or departure."""
    if payload.action == "arrive":
        if not payload.person_id:
            raise HTTPException(status_code=400, detail="person_id required for 'arrive'")
        recognition_service.simulate_recognized(payload.person_id)
        return {"success": True, "simulated": "arrive", "person_id": payload.person_id}
    elif payload.action == "leave":
        recognition_service.simulate_unrecognized()
        return {"success": True, "simulated": "leave"}
    else:
        raise HTTPException(status_code=400, detail="Invalid action; use 'arrive' or 'leave'")


@app.post("/api/memories")
async def create_memory(payload: MemoryCreateInput):
    """Generate embedding and store a long-term memory."""
    try:
        mem = await memory_storage.add_memory(
            patient_id=payload.patient_id,
            visit_id=payload.visit_id,
            memory_type=payload.memory_type,
            content=payload.content,
            importance=payload.importance,
            confidence=payload.confidence,
        )
        if not mem:
            return JSONResponse(
                status_code=400, 
                content={"success": False, "error": "Memory rejected (too short, trivial, or low confidence)."}
            )
        # Convert UUID to string for JSON serialization
        mem["id"] = str(mem["id"])
        if mem.get("created_at"):
            mem["created_at"] = mem["created_at"].isoformat()
            
        return {"success": True, "memory": mem}
    except Exception as e:
        logger.error(f"Error creating memory: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/memories/search", response_model=MemorySearchResponse)
async def search_memories(payload: MemorySearchInput):
    """Retrieve semantically relevant memories via vector search."""
    try:
        results = await memory_storage.search_memories(
            patient_id=payload.patient_id,
            query=payload.query,
            limit=payload.limit
        )
        formatted_results = []
        for r in results:
            formatted_results.append({
                "id": str(r["id"]),
                "content": r["content"],
                "memory_type": r["memory_type"],
                "importance": r["importance"],
                "confidence": r["confidence"],
                "similarity": r["similarity"]
            })
        return MemorySearchResponse(results=formatted_results)
    except Exception as e:
        logger.error(f"Error searching memories: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/patient/ask", response_model=PatientAskResponse)
async def patient_ask(payload: PatientAskInput):
    """Answer a patient's spoken question using memory retrieval + LLM.

    Privacy: receives ONLY text (question, person_id, patient_id).
    No camera frames, face embeddings, or biometric data.
    """
    from .services.patient_responder import generate_patient_response

    person_name = "your visitor"
    relationship = "visitor"
    recent_note = None

    if payload.person_id:
        profile = storage.get_profile(payload.person_id)
        if profile:
            person_name = profile.name or person_name
            relationship = profile.relationship or relationship
            recent_note = profile.note

    # Retrieve relevant memories via semantic search
    relevant_memories = []
    memories_used = 0
    try:
        results = await memory_storage.search_memories(
            patient_id=payload.patient_id,
            query=payload.question,
            limit=3,
        )
        relevant_memories = [r["content"] for r in results if r.get("content")]
        memories_used = len(relevant_memories)
    except Exception as e:
        logger.warning(f"Memory search failed for patient question (non-fatal): {e}")

    answer = await generate_patient_response(
        question=payload.question,
        person_name=person_name,
        relationship=relationship,
        relevant_memories=relevant_memories,
        recent_note=recent_note,
    )

    logger.info("PATIENT_QUERY: '%s' -> '%s' (memories=%d)", payload.question, answer, memories_used)
    return PatientAskResponse(answer=answer, memories_used=memories_used)


# ---------------------------------------------------------------------------
# Structured Conversation Memory Audio Upload
# ---------------------------------------------------------------------------

async def background_process_visit(
    visit_id: str,
    temp_audio_path: str,
    person_id: str,
    started_at: str,
    ended_at: str
):
    from .services.visit_pipeline import process_visit_audio
    from .storage.visit_storage import visit_storage
    from .storage.roster_storage import RosterStorage
    
    try:
        logger.info(f"Starting background processing for visit {visit_id}...")
        # Process the audio to generate a VisitRecord
        record = await process_visit_audio(
            visit_id=visit_id,
            audio_path=temp_audio_path,
            visitor_id=person_id,
            started_at=started_at,
            ended_at=ended_at
        )
        
        # Save to database
        success = await visit_storage.add_visit(record)
        if success:
            logger.info(f"Successfully processed and stored visit {visit_id}.")
            # Also update the roster profile note with the new patient-facing summary
            storage = RosterStorage()
            profile = storage.get_profile(person_id)
            if profile:
                profile = storage.update_note(person_id, record.patient_summary, "")
                # Broadcast memory updated so UI refreshes
                from .biometrics.service import RecognitionService
                # Recognition service singleton is bound to main, but we can't easily import the instance here due to circular deps if we aren't careful,
                # but since we are in main.py, we can just use the global `recognition_service` directly.
                recognition_service.broadcast_event({
                    "type": "memory_updated",
                    "person": profile.to_dict(),
                    "note": record.patient_summary,
                })
        else:
            logger.error(f"Failed to save visit record {visit_id} to database.")
            
    except Exception as e:
        logger.error(f"Error in background processing for visit {visit_id}: {e}")
    finally:
        # Retention Policy: Delete raw audio immediately after processing (RETENTION_AUDIO_DAYS = 0)
        from .config import RETENTION_AUDIO_DAYS
        if RETENTION_AUDIO_DAYS <= 0:
            try:
                if os.path.exists(temp_audio_path):
                    os.remove(temp_audio_path)
                    logger.info(f"Deleted raw audio file for visit {visit_id}")
            except Exception as e:
                logger.error(f"Failed to delete temp audio file: {e}")

@app.post("/api/visits/audio")
async def upload_visit_audio(
    background_tasks: BackgroundTasks,
    audio: UploadFile = File(...),
    person_id: str = Form(...),
    started_at: str = Form(...),
    ended_at: str = Form(...),
    visit_id: Optional[str] = Form(None)
):
    """Receive visit audio, start async processing, and return immediately."""
    if not visit_id:
        visit_id = str(uuid.uuid4())
    temp_dir = Path(os.environ.get("TEMP", "/tmp")) / "anchor_visits"
    temp_dir.mkdir(parents=True, exist_ok=True)
    temp_audio_path = temp_dir / f"{visit_id}_{audio.filename}"
    
    try:
        with open(temp_audio_path, "wb") as buffer:
            buffer.write(await audio.read())
    except Exception as e:
        logger.error(f"Failed to save uploaded audio: {e}")
        raise HTTPException(status_code=500, detail="Failed to save audio file")
        
    background_tasks.add_task(
        background_process_visit,
        visit_id=visit_id,
        temp_audio_path=str(temp_audio_path),
        person_id=person_id,
        started_at=started_at,
        ended_at=ended_at
    )
    
    return {"success": True, "visit_id": visit_id, "status": "processing"}


@app.post("/api/visits/{visit_id}/transcript")
async def add_transcript_segment(visit_id: str, payload: TranscriptSegmentInput):
    """Save a finalized transcript segment. Idempotent based on visit_id + segment_id."""
    success = await visit_storage.add_transcript_segment(
        visit_id=visit_id,
        segment_id=payload.segment_id,
        text=payload.text,
        speaker=payload.speaker or "unknown",
        sequence=payload.sequence,
        timestamp=payload.timestamp
    )
    if not success:
        raise HTTPException(status_code=500, detail="Failed to save transcript segment")
    return {"success": True, "segment_id": payload.segment_id}


@app.post("/api/transcribe")
async def transcribe_audio_chunk(request: Request, audio: Optional[UploadFile] = File(None)):
    """Transcribe a live audio slice using Groq Whisper (fallback to OpenAI Whisper).

    Accepts raw audio bytes (audio/webm, audio/wav, audio/ogg) or multipart upload.
    Ultra-low-latency speech recognition (<300ms) for reliable fallback when Web Speech API fails.
    """
    groq_key = os.environ.get("GROQ_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")

    if not groq_key and not openai_key:
        raise HTTPException(status_code=503, detail="No STT API key configured (GROQ_API_KEY or OPENAI_API_KEY).")

    audio_bytes = b""
    filename = "audio_chunk.webm"
    if audio:
        audio_bytes = await audio.read()
        filename = audio.filename or "audio_chunk.webm"
    else:
        audio_bytes = await request.body()
        content_type = request.headers.get("content-type", "")
        if "wav" in content_type:
            filename = "audio_chunk.wav"
        elif "ogg" in content_type:
            filename = "audio_chunk.ogg"
        elif "mp4" in content_type:
            filename = "audio_chunk.mp4"

    if not audio_bytes or len(audio_bytes) < 100:
        return {"success": True, "transcript": "", "words": 0}

    temp_dir = Path(os.environ.get("TEMP", "/tmp")) / "anchor_stt"
    temp_dir.mkdir(parents=True, exist_ok=True)
    temp_file = temp_dir / f"{uuid.uuid4()}_{filename}"

    try:
        with open(temp_file, "wb") as f:
            f.write(audio_bytes)

        transcript_text = ""

        # 1. Try Groq Whisper (sub-300ms)
        if groq_key:
            try:
                groq_client = openai.OpenAI(
                    api_key=groq_key,
                    base_url="https://api.groq.com/openai/v1"
                )
                with open(temp_file, "rb") as af:
                    res = groq_client.audio.transcriptions.create(
                        model="whisper-large-v3-turbo",
                        file=af,
                        response_format="json",
                        language="en"
                    )
                    transcript_text = getattr(res, "text", "") or (res.get("text", "") if isinstance(res, dict) else "")
            except Exception as e:
                logger.warning(f"Groq /api/transcribe failed: {e}")

        # 2. Fallback to OpenAI Whisper
        if not transcript_text and openai_key:
            try:
                client = openai.OpenAI(api_key=openai_key)
                with open(temp_file, "rb") as af:
                    res = client.audio.transcriptions.create(
                        model="whisper-1",
                        file=af,
                        response_format="json",
                        language="en"
                    )
                    transcript_text = getattr(res, "text", "") or (res.get("text", "") if isinstance(res, dict) else "")
            except Exception as e:
                logger.error(f"OpenAI /api/transcribe failed: {e}")

        text = transcript_text.strip()
        words = len(text.split()) if text else 0
        return {"success": True, "transcript": text, "words": words}

    finally:
        if temp_file.exists():
            try:
                temp_file.unlink()
            except Exception:
                pass


@app.get("/api/visits/{visit_id}/transcript")
async def get_transcript_segments(visit_id: str):
    """Retrieve all finalized segments for a specific visit sorted by sequence."""
    segments = await visit_storage.get_transcript_segments(visit_id)
    formatted = []
    for s in segments:
        formatted.append({
            "segment_id": s["segment_id"],
            "text": s["text"],
            "speaker": s.get("speaker") or "unknown",
            "sequence": s["sequence"],
            "timestamp": s["timestamp"]
        })
    return {"success": True, "visit_id": visit_id, "segments": formatted}


# ---------------------------------------------------------------------------
# Live MJPEG Video Stream
# ---------------------------------------------------------------------------

@app.get("/video_feed")
async def video_feed():
    """Live MJPEG video stream with bounding boxes and biometric overlays."""
    async def generate():
        while True:
            frame_bytes = recognition_service.get_latest_frame_jpeg()
            if frame_bytes:
                yield (
                    b"--frame\r\n"
                    b"Content-Type: image/jpeg\r\n\r\n" + frame_bytes + b"\r\n"
                )
            await asyncio.sleep(0.06)

    return StreamingResponse(
        generate(),
        media_type="multipart/x-mixed-replace; boundary=frame",
    )


@app.get("/api/camera_snapshot")
def camera_snapshot():
    """Return a single JPEG frame from the live camera feed."""
    frame_bytes = recognition_service.get_latest_frame_jpeg()
    if not frame_bytes:
        raise HTTPException(status_code=503, detail="No camera frame available")
    return Response(content=frame_bytes, media_type="image/jpeg")


# ---------------------------------------------------------------------------
# Remote Capture-Device Frame Injection (WebRTC Source Swap)
# ---------------------------------------------------------------------------
# PRIVACY TRADEOFF — Capture Device Pairing
# This endpoint accepts raw JPEG frames from the browser-side WebRTC relay.
# Raw video travels peer-to-peer over the LAN from the capture device to
# this compute device BEFORE face recognition runs.
# ---------------------------------------------------------------------------

@app.post("/api/remote_frame")
async def receive_remote_frame(request: Request):
    """Accept a JPEG frame from the browser-side WebRTC relay.

    The browser receives a MediaStream from the capture device via WebRTC,
    draws each frame to a canvas, encodes it as JPEG, and POSTs the raw
    bytes here.  We hand the bytes to the recognition service, which
    writes them into the same shared frame buffer the local webcam would
    use — completing the source swap.
    """
    jpeg_bytes = await request.body()
    if not jpeg_bytes:
        raise HTTPException(status_code=400, detail="Empty body — expected raw JPEG bytes")

    ok = recognition_service.inject_remote_frame(jpeg_bytes)
    if not ok:
        raise HTTPException(status_code=422, detail="Could not decode JPEG frame")

    return {"ok": True}


@app.websocket("/ws/remote_frame")
async def websocket_remote_frame(websocket: WebSocket):
    """Ultra-low-latency persistent binary WebSocket channel for mobile camera streaming.

    Eliminates HTTP connection handshake overhead and TCP queue bloat.
    """
    await websocket.accept()
    logger.info("Mobile camera ultra-low-latency WebSocket connected.")
    try:
        while True:
            data = await websocket.receive_bytes()
            if data:
                recognition_service.inject_remote_frame(data)
    except (WebSocketDisconnect, asyncio.CancelledError):
        logger.info("Mobile camera WebSocket disconnected.")
    except Exception as e:
        logger.warning(f"Mobile camera WebSocket closed: {e}")


@app.get("/capture")
async def capture_page():
    """Serve the standalone capture-device page (phone / future glasses)."""
    base_dir = Path(__file__).resolve().parent.parent.parent
    capture_file = base_dir / "capture.html"
    if capture_file.exists():
        return FileResponse(str(capture_file))
    static_capture = STATIC_DIR / "capture.html"
    if static_capture.exists():
        return FileResponse(str(static_capture))
    raise HTTPException(status_code=404, detail="capture.html not found")


# ---------------------------------------------------------------------------
# Real-Time WebSocket Channel
# ---------------------------------------------------------------------------

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """Bi-directional WebSocket for instant arrival/departure events and transcript streaming."""
    await websocket.accept()
    queue = recognition_service.register_subscriber()
    logger.info("WebSocket client connected. Active subscribers: %d", len(recognition_service._subscribers))

    async def receive_messages():
        try:
            while True:
                data = await websocket.receive_text()
                try:
                    payload = json.loads(data)
                    if payload.get("type") in ("transcript_partial", "transcript_final"):
                        recognition_service.broadcast_event(payload)
                except Exception as e:
                    logger.warning(f"Error handling websocket message: {e}")
        except WebSocketDisconnect:
            pass

    async def send_messages():
        try:
            while True:
                event = await queue.get()
                await websocket.send_text(json.dumps(event))
        except WebSocketDisconnect:
            pass

    try:
        await asyncio.gather(receive_messages(), send_messages())
    except (WebSocketDisconnect, asyncio.CancelledError):
        logger.info("WebSocket client disconnected.")
    finally:
        recognition_service.unregister_subscriber(queue)


# ---------------------------------------------------------------------------
# Privacy-Preserving Groq LLM Proxy
# ---------------------------------------------------------------------------

@app.post("/api/groq")
async def groq_proxy(request: Request):
    """Proxy chat-completion requests to Groq, enforcing text-only payload rules."""
    auth_header = request.headers.get("Authorization") or (
        f"Bearer {DEFAULT_GROQ_KEY}" if DEFAULT_GROQ_KEY else None
    )
    if not auth_header:
        raise HTTPException(
            status_code=401,
            detail="Missing Groq API Key. Set GROQ_API_KEY environment variable or pass Authorization header.",
        )

    try:
        body = await request.body()
        payload = json.loads(body.decode("utf-8"))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid JSON payload: {e}")

    extra_keys = set(payload.keys()) - ALLOWED_GROQ_KEYS
    if extra_keys:
        raise HTTPException(
            status_code=400,
            detail=f"Privacy policy violation: disallowed fields {sorted(extra_keys)} in Groq request.",
        )

    messages = payload.get("messages")
    if not isinstance(messages, list) or not messages:
        raise HTTPException(status_code=400, detail="'messages' must be a non-empty list.")

    sanitized_messages = []
    for msg in messages:
        if not isinstance(msg, dict):
            raise HTTPException(status_code=400, detail="Each message must be an object.")
        role = msg.get("role")
        content = msg.get("content")
        if role not in ALLOWED_GROQ_ROLES:
            raise HTTPException(status_code=400, detail=f"Invalid message role '{role}'.")
        if not isinstance(content, str):
            raise HTTPException(
                status_code=400,
                detail="Privacy violation: message content must be plain text string.",
            )
        sanitized_messages.append({"role": role, "content": content})

    clean_payload = {
        "model": payload.get("model", "groq/compound-mini"),
        "messages": sanitized_messages,
        "max_tokens": min(int(payload.get("max_tokens", 60)), 512),
        "temperature": float(payload.get("temperature", 0.7)),
    }

    req = urllib.request.Request(
        GROQ_ENDPOINT,
        data=json.dumps(clean_payload).encode("utf-8"),
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
# Static & Production Frontend Mounts
# ---------------------------------------------------------------------------

if (FRONTEND_DIST_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(FRONTEND_DIST_DIR / "assets")), name="assets")

if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


@app.get("/flow-wave")
@app.get("/flow_wave")
async def flow_wave():
    """Serve the Three.js Flow Wave scene directly from backend."""
    flow_wave_file = STATIC_DIR / "flow_wave.html"
    if flow_wave_file.exists():
        return FileResponse(str(flow_wave_file))
    raise HTTPException(status_code=404, detail="flow_wave.html not found")


@app.get("/health")
@app.get("/api/health")
def health_check():
    """Lightweight health check endpoint for Render/Cloud monitoring."""
    return {"status": "healthy", "service": "anchor-backend", "version": "1.0.0"}


@app.get("/")
@app.get("/{full_path:path}")
async def serve_spa_or_index(full_path: str = ""):
    # If a specific static file in dist was requested
    if full_path:
        requested_file = FRONTEND_DIST_DIR / full_path
        if requested_file.exists() and requested_file.is_file():
            return FileResponse(str(requested_file))
        
    # Serve React SPA index.html
    dist_index = FRONTEND_DIST_DIR / "index.html"
    if dist_index.exists():
        return FileResponse(str(dist_index))

    # Fallback to standalone flow-wave visual scene
    flow_wave_file = STATIC_DIR / "flow_wave.html"
    if flow_wave_file.exists():
        return FileResponse(str(flow_wave_file))

    return HTMLResponse(
        """
        <html>
            <head><title>Anchor Backend Server</title></head>
            <body style="font-family: sans-serif; padding: 40px; background: #121c17; color: #e0f0e8;">
                <h1>⚓ Anchor Companion Backend is Running</h1>
                <p>FastAPI server is live and healthy.</p>
                <p><a href="/flow-wave" style="color:#34e89a;">View Three.js Flow Wave Scene &rarr;</a></p>
            </body>
        </html>
        """
    )


if __name__ == "__main__":
    import selectors
    selector = selectors.SelectSelector()
    loop = asyncio.SelectorEventLoop(selector)
    asyncio.set_event_loop(loop)

    cert_dir = DATA_DIR / "ssl"
    cert_file, key_file = None, None
    try:
        from .ssl_helper import get_or_create_ssl_cert
        cert_file, key_file = get_or_create_ssl_cert(cert_dir)
    except Exception as e:
        logger.warning(f"Could not generate SSL certs for HTTPS: {e}")

    print(f"\n{'='*65}")
    print(f"  Anchor - Dementia Care Companion Backend")
    print(f"  HTTP Server (PC / Dev)   : http://localhost:{PORT}")
    if cert_file and key_file:
        print(f"  HTTPS Server (Mobile Cam): https://192.168.137.42:8443/capture")
    print(f"{'='*65}\n")

    http_config = uvicorn.Config(app=app, host=HOST, port=PORT, loop="asyncio")
    http_server = uvicorn.Server(http_config)

    if cert_file and key_file:
        https_config = uvicorn.Config(
            app=app,
            host=HOST,
            port=8443,
            ssl_certfile=cert_file,
            ssl_keyfile=key_file,
            loop="asyncio",
        )
        https_server = uvicorn.Server(https_config)
        loop.run_until_complete(asyncio.gather(http_server.serve(), https_server.serve()))
    else:
        loop.run_until_complete(http_server.serve())
