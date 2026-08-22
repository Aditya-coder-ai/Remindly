# ============================================================================
# Anchor — Multi-Stage Production Dockerfile for Render / Cloud
# ============================================================================

# ---------- Stage 1: Build Frontend (Node.js 20) ----------
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install --no-audit --no-fund

COPY frontend/ ./
RUN npm run build

# ---------- Stage 2: Python Backend Runtime (Python 3.11 Slim) ----------
FROM python:3.11-slim AS runner

WORKDIR /app

# Install minimal system utilities required for audio/video processing
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy backend code, models, static assets, and top-level aliases
COPY backend/ ./backend/
COPY app/ ./app/
COPY main.py .
COPY capture.html .

# Copy pre-built frontend from stage 1
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Default network settings
ENV PORT=8000
ENV HOST=0.0.0.0
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

# Start FastAPI application using Gunicorn + Uvicorn workers
CMD gunicorn app.main:app -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT --workers 1 --threads 4 --timeout 120
