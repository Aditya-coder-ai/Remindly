/**
 * wearable-pairing.js
 * ====================
 *
 * Wearable capture-device pairing module for the Anchor compute device.
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
 * face recognition runs.  This is a genuine step back from "recognition never
 * leaves the camera device," traded for the ability to use wearable-form-factor
 * cameras that lack compute for on-device recognition.
 *
 *   - WebRTC is encrypted (DTLS-SRTP) and peer-to-peer (no cloud relay)
 *   - Limited to same-LAN only (no TURN server configured)
 *   - Revisit when on-device inference becomes viable for glasses-class hardware
 */

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let peer = null;
let activeCall = null;
let remoteStream = null;
let frameRelayInterval = null;
let peerIdValue = null;
let isConnected = false;

// Hidden video + canvas for frame extraction
let relayVideo = null;
let relayCanvas = null;
let relayCtx = null;

// Callbacks (set by the consumer in app.js)
let onStatusChange = null;
let onPeerIdReady = null;

// Frame relay settings
const FRAME_RELAY_FPS = 8;  // ~8 fps is enough for face recognition
const FRAME_QUALITY = 0.65; // JPEG quality (0-1)

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Start the pairing listener — generates a Peer ID, creates the PeerJS
 * connection, and waits for the capture device to call in.
 *
 * @param {Object} callbacks
 * @param {Function} callbacks.onStatusChange - (status: string, detail: string) => void
 * @param {Function} callbacks.onPeerIdReady  - (peerId: string) => void
 */
export function startPairing(callbacks = {}) {
  onStatusChange = callbacks.onStatusChange || (() => {});
  onPeerIdReady = callbacks.onPeerIdReady || (() => {});

  // Generate a short human-friendly peer ID
  peerIdValue = "anchor-" + Math.random().toString(36).slice(2, 8);

  _setStatus("initializing", "Setting up pairing…");

  // Clean up any previous peer
  if (peer && !peer.destroyed) {
    peer.destroy();
  }

  peer = new Peer(peerIdValue);

  peer.on("open", (id) => {
    console.log("[WearablePairing] Peer open with ID:", id);
    peerIdValue = id;
    _setStatus("waiting", "Waiting for capture device…");
    onPeerIdReady(id);
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
    // Try to reconnect to the signaling server (not the peer call)
    if (peer && !peer.destroyed) {
      setTimeout(() => {
        if (peer && !peer.destroyed) {
          peer.reconnect();
        }
      }, 2000);
    }
  });
}

/**
 * Stop pairing — tears down all connections and cleans up.
 */
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

/**
 * Get current pairing state.
 */
export function getStatus() {
  return {
    peerId: peerIdValue,
    isConnected,
    hasRemoteStream: !!remoteStream,
  };
}

// ---------------------------------------------------------------------------
// Internal — Call Handling
// ---------------------------------------------------------------------------

function _handleIncomingCall(call) {
  activeCall = call;

  // Answer with no stream (we only receive, not send)
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

  // Monitor WebRTC connection state for more reliable detection
  if (call.peerConnection) {
    call.peerConnection.addEventListener("connectionstatechange", () => {
      const state = call.peerConnection.connectionState;
      console.log("[WearablePairing] WebRTC state:", state);
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

  // The capture device will auto-reconnect, so we just keep listening.
  // PeerJS keeps the peer ID alive, so the capture device can call back.
}

// ---------------------------------------------------------------------------
// Internal — Frame Relay (remote video → canvas → JPEG → server)
// ---------------------------------------------------------------------------
// This is the bridge between the browser-side WebRTC stream and the
// Python recognition service.  We extract frames from the incoming
// MediaStream, encode them as JPEG, and POST to /api/remote_frame,
// where they're injected into the same frame buffer the local webcam
// writes to.  The recognition pipeline downstream is unchanged.

function _startFrameRelay(stream) {
  _stopFrameRelay();

  // Create hidden video element to play the remote stream
  relayVideo = document.createElement("video");
  relayVideo.srcObject = stream;
  relayVideo.autoplay = true;
  relayVideo.playsInline = true;
  relayVideo.muted = true;
  relayVideo.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;";
  document.body.appendChild(relayVideo);

  // Create canvas for frame extraction
  relayCanvas = document.createElement("canvas");
  relayCtx = relayCanvas.getContext("2d");

  // Wait for video to have dimensions, then start relay loop
  relayVideo.addEventListener("loadedmetadata", () => {
    relayCanvas.width = relayVideo.videoWidth || 640;
    relayCanvas.height = relayVideo.videoHeight || 480;
    console.log(`[WearablePairing] Frame relay started at ${relayCanvas.width}x${relayCanvas.height}, ${FRAME_RELAY_FPS} fps`);
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
    return; // Not ready yet
  }

  // Ensure canvas size matches video
  if (relayCanvas.width !== relayVideo.videoWidth && relayVideo.videoWidth > 0) {
    relayCanvas.width = relayVideo.videoWidth;
    relayCanvas.height = relayVideo.videoHeight;
  }

  // Draw current video frame to canvas
  relayCtx.drawImage(relayVideo, 0, 0);

  // Convert to JPEG blob
  try {
    const blob = await new Promise((resolve) => {
      relayCanvas.toBlob(resolve, "image/jpeg", FRAME_QUALITY);
    });

    if (!blob || blob.size < 100) return; // Skip empty/broken frames

    // POST raw JPEG bytes to the server
    // Fire-and-forget: we don't wait for the response to avoid
    // frame relay stalls if the server is briefly slow.
    fetch("/api/remote_frame", {
      method: "POST",
      headers: { "Content-Type": "image/jpeg" },
      body: blob,
    }).catch((err) => {
      // Network hiccup — frame dropped, not fatal
      console.warn("[WearablePairing] Frame relay POST failed:", err.message);
    });
  } catch (err) {
    console.warn("[WearablePairing] Frame extraction error:", err);
  }
}

// ---------------------------------------------------------------------------
// Internal — Status helper
// ---------------------------------------------------------------------------

function _setStatus(status, detail) {
  console.log(`[WearablePairing] Status: ${status} — ${detail}`);
  if (onStatusChange) {
    onStatusChange(status, detail);
  }
}
