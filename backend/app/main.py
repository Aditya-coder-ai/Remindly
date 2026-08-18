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

import uvicorn
from fastapi import FastAPI, HTTPException, Request, Response, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles

from .config import (
    ALLOWED_GROQ_KEYS,
    ALLOWED_GROQ_ROLES,
    ALLOWED_ORIGINS,
    DEFAULT_GROQ_KEY,
    FRONTEND_DIST_DIR,
    STATIC_DIR,
    GROQ_ENDPOINT,
    HOST,
    PORT,
)
from .schemas.models import (
    GroqProxyInput,
    ProfileInput,
    RegisterFaceInput,
    SimulateInput,
    UpdateNoteInput,
    MemoryCreateInput,
    MemorySearchInput,
    MemorySearchResponse,
)
from .storage.roster_storage import RosterStorage
from .storage.memory_storage import memory_storage
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
    """Bi-directional WebSocket for instant arrival/departure events."""
    await websocket.accept()
    queue = recognition_service.register_subscriber()
    logger.info("WebSocket client connected. Active subscribers: %d", len(recognition_service._subscribers))

    try:
        while True:
            event = await queue.get()
            await websocket.send_text(json.dumps(event))
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
        "model": payload.get("model", "llama-3.3-70b-versatile"),
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


@app.get("/")
async def root_index():
    dist_index = FRONTEND_DIST_DIR / "index.html"
    if dist_index.exists():
        return FileResponse(str(dist_index))
    flow_wave_file = STATIC_DIR / "flow_wave.html"
    if flow_wave_file.exists():
        return FileResponse(str(flow_wave_file))
    return HTMLResponse(
        """
        <html>
            <head><title>Anchor Backend Server</title></head>
            <body style="font-family: sans-serif; padding: 40px; background: #121c17; color: #e0f0e8;">
                <h1>⚓ Anchor Companion Backend is Running</h1>
                <p>FastAPI server active on port 8000.</p>
                <p><a href="/flow-wave" style="color:#34e89a;">View Three.js Flow Wave Scene &rarr;</a></p>
                <p>To run the frontend dev server, run: <code>cd frontend && npm run dev</code></p>
            </body>
        </html>
        """
    )


if __name__ == "__main__":
    print(f"\n{'='*60}")
    print(f"  Anchor — Dementia Care Companion Backend")
    print(f"  Listening on http://localhost:{PORT}")
    print(f"{'='*60}\n")
    uvicorn.run(app, host=HOST, port=PORT)
