#!/usr/bin/env bash
# ============================================================================
# Anchor — Render Unified Build Script
# ============================================================================
set -o errexit

echo "==> 1. Upgrading pip and installing Python dependencies..."
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo "==> 2. Installing Node.js packages and building Vite frontend..."
cd frontend
npm install
npm run build
cd ..

echo "==> 3. Build completed successfully!"
