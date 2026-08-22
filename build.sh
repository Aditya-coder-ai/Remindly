#!/usr/bin/env bash
# ============================================================================
# Anchor — Render Unified Build Script
# ============================================================================
set -o errexit

echo "==> 1. Installing Python dependencies with minimal RAM overhead..."
python -m pip install --upgrade pip
python -m pip install --no-cache-dir -r requirements.txt

echo "==> 2. Installing Node.js packages and building Vite frontend..."
cd frontend
npm install --no-audit --no-fund
npm run build
cd ..

echo "==> 3. Build completed successfully!"
