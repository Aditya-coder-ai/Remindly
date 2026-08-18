"""
backend.app.config
==================

Central configuration, paths, and security constraints for Anchor backend.
"""

from __future__ import annotations

import os
from pathlib import Path
from dotenv import load_dotenv

# Base directory for backend
BACKEND_DIR = Path(__file__).resolve().parent.parent
APP_DIR = Path(__file__).resolve().parent
ROOT_DIR = BACKEND_DIR.parent

# Load environment variables from .env if present
load_dotenv(ROOT_DIR / ".env")

# Data and Model paths
DATA_DIR = Path(os.environ.get("ANCHOR_DATA_DIR", BACKEND_DIR / "data"))
ROSTER_FILE = DATA_DIR / "roster.json"
MODEL_PATH = str(APP_DIR / "biometrics" / "models" / "face_landmarker.task")

# Frontend production distribution path
FRONTEND_DIST_DIR = ROOT_DIR / "frontend" / "dist"
STATIC_DIR = APP_DIR / "static"

# Database Settings
DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/anchor")

# Server Network Settings
PORT = int(os.environ.get("PORT", 8000))
HOST = os.environ.get("HOST", "0.0.0.0")

# Security & CORS: Restrict API access strictly to local companion clients
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]

# External AI Proxy Settings (Groq)
GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"
DEFAULT_GROQ_KEY = os.environ.get("GROQ_API_KEY", "")

# Strict privacy whitelist for outbound AI calls (text transcript only)
ALLOWED_GROQ_KEYS = {"model", "max_tokens", "temperature", "messages"}
ALLOWED_GROQ_ROLES = {"system", "user", "assistant"}

# Biometric Recognition Parameters
DEFAULT_TOLERANCE = 0.22
DEFAULT_ENTER_STREAK = 3
DEFAULT_EXIT_STREAK = 5
DEFAULT_SCAN_INTERVAL = 0.35
