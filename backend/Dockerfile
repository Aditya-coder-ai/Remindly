# ============================================================================
# Anchor — Self-Contained Backend Dockerfile
# ============================================================================
FROM python:3.11-slim

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

# Copy all backend code, models, static files, and data
COPY . .

# Default network settings
ENV PORT=8000
ENV HOST=0.0.0.0
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

# Start FastAPI application using Gunicorn + Uvicorn workers
CMD gunicorn app.main:app -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT --workers 1 --threads 4 --timeout 120
