/**
 * config/api.js — Centralized API and WebSocket Endpoint Manager
 *
 * Automatically connects to local backend during development and
 * to the live Render backend when deployed on Vercel or cloud hosts.
 */

export const RENDER_BACKEND_URL = "https://remindly-2-tqcx.onrender.com";

export function getBackendUrl() {
  if (typeof window === "undefined") return RENDER_BACKEND_URL;

  // Local development: if running on any frontend dev server (port 3000, 3001, 5173, etc.), target FastAPI on 8000
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    if (window.location.port !== "8000") {
      return `http://${window.location.hostname}:8000`;
    }
    return window.location.origin;
  }

  // Vercel deployment: target live Render backend
  if (window.location.hostname.includes("vercel.app")) {
    return RENDER_BACKEND_URL;
  }

  return window.location.origin;
}

export function getWebSocketUrl() {
  const backend = getBackendUrl();
  const protocol = backend.startsWith("https") ? "wss:" : "ws:";
  const cleanHost = backend.replace(/^https?:\/\//, "");
  return `${protocol}//${cleanHost}/ws`;
}

export function getRemoteFrameWebSocketUrl() {
  const backend = getBackendUrl();
  const protocol = backend.startsWith("https") ? "wss:" : "ws:";
  const cleanHost = backend.replace(/^https?:\/\//, "");
  return `${protocol}//${cleanHost}/ws/remote_frame`;
}

export function apiUrl(path) {
  const base = getBackendUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined" && window.location.origin === base) {
    return cleanPath;
  }
  return `${base}${cleanPath}`;
}
