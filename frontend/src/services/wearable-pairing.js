/**
 * wearable-pairing.js
 * ====================
 *
 * Wearable capture-device pairing service for the Anchor compute device.
 *
 * Manages the PeerJS connection on the receiving end:
 *   1. Creates a PeerJS peer with a unique ID
 *   2. Exposes the ID for QR / text display so the capture device can connect
 *   3. Listens for incoming calls, receives the remote MediaStream
 *   4. Runs a frame-extraction loop: remote video → canvas → JPEG → POST /api/remote_frame
 *   5. Handles reconnection automatically
 *
 * PRIVACY TRADEOFF — Capture Device Pairing
 * ==========================================
 * With this feature enabled, raw camera video leaves the capture device and
 * travels peer-to-peer over the local network to this compute device BEFORE
 * face recognition runs.
 */

let peer = null;
let activeCall = null;
let remoteStream = null;
let frameRelayInterval = null;
let peerIdValue = null;
let isConnected = false;

let relayVideo = null;
let relayCanvas = null;
let relayCtx = null;

let onStatusChange = null;
let onPeerIdReady = null;

const FRAME_RELAY_FPS = 8;
const FRAME_QUALITY = 0.65;

function getPeerConstructor() {
  if (typeof window !== "undefined" && window.Peer) {
    return window.Peer;
  }
  return null;
}

export function startPairing(callbacks = {}) {
  onStatusChange = callbacks.onStatusChange || (() => {});
  onPeerIdReady = callbacks.onPeerIdReady || (() => {});

  peerIdValue = "anchor-" + Math.random().toString(36).slice(2, 8);
  _setStatus("initializing", "Setting up pairing…");

  if (peer && !peer.destroyed) {
    peer.destroy();
  }

  const PeerClass = getPeerConstructor();
  if (!PeerClass) {
    // Dynamic import fallback or CDN check
    const script = document.createElement("script");
    script.src = "https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js";
    script.onload = () => {
      _initPeerInstance(peerIdValue);
    };
    script.onerror = () => {
      _setStatus("error", "Failed to load PeerJS library");
    };
    document.head.appendChild(script);
    return;
  }

  _initPeerInstance(peerIdValue);
}

function _initPeerInstance(id) {
  const PeerClass = getPeerConstructor();
  if (!PeerClass) {
    _setStatus("error", "PeerJS unavailable");
    return;
  }

  peer = new PeerClass(id);

  peer.on("open", (openedId) => {
    console.log("[WearablePairing] Peer open with ID:", openedId);
    peerIdValue = openedId;
    _setStatus("waiting", "Waiting for capture device…");
    onPeerIdReady(openedId);
  });

  peer.on("call", (call) => {
    console.log("[WearablePairing] Incoming call from:", call.peer);
    _handleIncomingCall(call);
  });

  peer.on("error", (err) => {
    console.error("[WearablePairing] Peer error:", err);
    if (err.type === "network") {
      _setStatus("error", "Network error — will retry");
    } else {
      _setStatus("error", `Error: ${err.type}`);
    }
  });

  peer.on("disconnected", () => {
    console.log("[WearablePairing] Disconnected from signaling server");
    if (peer && !peer.destroyed) {
      setTimeout(() => {
        if (peer && !peer.destroyed) {
          peer.reconnect();
        }
      }, 2000);
    }
  });
}

export function stopPairing() {
  _stopFrameRelay();

  if (activeCall) {
    activeCall.close();
    activeCall = null;
  }

  if (peer && !peer.destroyed) {
    peer.destroy();
  }
  peer = null;

  remoteStream = null;
  isConnected = false;
  peerIdValue = null;

  _cleanupRelayElements();
  _setStatus("idle", "Pairing stopped");
}

export function getStatus() {
  return {
    peerId: peerIdValue,
    isConnected,
    hasRemoteStream: !!remoteStream,
  };
}

function _handleIncomingCall(call) {
  activeCall = call;
  call.answer();

  call.on("stream", (stream) => {
    console.log("[WearablePairing] Received remote media stream");
    remoteStream = stream;
    isConnected = true;
    _setStatus("connected", "Wearable camera connected ✓");
    _startFrameRelay(stream);
  });

  call.on("close", () => {
    console.log("[WearablePairing] Call closed");
    _onCallEnded();
  });

  call.on("error", (err) => {
    console.error("[WearablePairing] Call error:", err);
    _onCallEnded();
  });

  if (call.peerConnection) {
    call.peerConnection.addEventListener("connectionstatechange", () => {
      const state = call.peerConnection.connectionState;
      if (state === "disconnected" || state === "failed") {
        _onCallEnded();
      }
    });
  }
}

function _onCallEnded() {
  _stopFrameRelay();
  isConnected = false;
  remoteStream = null;
  activeCall = null;
  _setStatus("waiting", "Capture device disconnected — waiting for reconnect…");
}

function _startFrameRelay(stream) {
  _stopFrameRelay();

  relayVideo = document.createElement("video");
  relayVideo.srcObject = stream;
  relayVideo.autoplay = true;
  relayVideo.playsInline = true;
  relayVideo.muted = true;
  relayVideo.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;";
  document.body.appendChild(relayVideo);

  relayCanvas = document.createElement("canvas");
  relayCtx = relayCanvas.getContext("2d");

  relayVideo.addEventListener("loadedmetadata", () => {
    relayCanvas.width = relayVideo.videoWidth || 640;
    relayCanvas.height = relayVideo.videoHeight || 480;
  });

  const intervalMs = Math.round(1000 / FRAME_RELAY_FPS);
  frameRelayInterval = setInterval(() => _relayOneFrame(), intervalMs);
}

function _stopFrameRelay() {
  if (frameRelayInterval) {
    clearInterval(frameRelayInterval);
    frameRelayInterval = null;
  }
  _cleanupRelayElements();
}

function _cleanupRelayElements() {
  if (relayVideo) {
    relayVideo.srcObject = null;
    relayVideo.remove();
    relayVideo = null;
  }
  relayCanvas = null;
  relayCtx = null;
}

async function _relayOneFrame() {
  if (!relayVideo || relayVideo.readyState < 2 || !relayCtx) {
    return;
  }

  if (relayCanvas.width !== relayVideo.videoWidth && relayVideo.videoWidth > 0) {
    relayCanvas.width = relayVideo.videoWidth;
    relayCanvas.height = relayVideo.videoHeight;
  }

  relayCtx.drawImage(relayVideo, 0, 0);

  try {
    const blob = await new Promise((resolve) => {
      relayCanvas.toBlob(resolve, "image/jpeg", FRAME_QUALITY);
    });

    if (!blob || blob.size < 100) return;

    fetch("/api/remote_frame", {
      method: "POST",
      headers: { "Content-Type": "image/jpeg" },
      body: blob,
    }).catch((err) => {
      console.warn("[WearablePairing] Frame relay POST failed:", err.message);
    });
  } catch (err) {
    console.warn("[WearablePairing] Frame extraction error:", err);
  }
}

function _setStatus(status, detail) {
  console.log(`[WearablePairing] Status: ${status} — ${detail}`);
  if (onStatusChange) {
    onStatusChange(status, detail);
  }
}
