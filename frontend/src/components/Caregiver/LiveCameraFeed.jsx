import { useState, useEffect, useRef, useCallback } from "react";
import { apiUrl, getRemoteFrameWebSocketUrl } from "../../config/api.js";

/**
 * LiveCameraFeed — Streams webcam feed with face recognition overlays,
 * passive liveness indicators (EAR & blinks), and dynamic multi-camera device selection.
 * Also includes instant In-Browser WebCam Streaming for cloud deployments (Vercel + Render).
 */
export default function LiveCameraFeed({ isVisitorPresent, visitorName }) {
  const [streamMode, setStreamMode] = useState("mjpeg"); // 'mjpeg' | 'snapshot' | 'browser'
  const [streamKey, setStreamKey] = useState(Date.now());
  const [snapshotUrl, setSnapshotUrl] = useState(apiUrl(`/api/camera_snapshot?t=${Date.now()}`));
  const [isConnected, setIsConnected] = useState(true);
  const [hasError, setHasError] = useState(false);

  // In-Browser Webcam Streaming state
  const [isBrowserStreaming, setIsBrowserStreaming] = useState(false);
  const [browserStreamFps, setBrowserStreamFps] = useState(0);
  const videoElementRef = useRef(null);
  const canvasRef = useRef(null);
  const browserStreamRef = useRef(null);
  const browserWsRef = useRef(null);
  const streamIntervalRef = useRef(null);

  // Multi-camera state
  const [cameras, setCameras] = useState([]);
  const [activeCamera, setActiveCamera] = useState(0);
  const [isSwitchingCamera, setIsSwitchingCamera] = useState(false);

  const snapshotIntervalRef = useRef(null);

  // Fetch available cameras from backend
  const fetchCameras = useCallback(async () => {
    try {
      const res = await fetch(apiUrl("/api/cameras"));
      if (res.ok) {
        const data = await res.json();
        if (data.cameras && Array.isArray(data.cameras)) {
          setCameras(data.cameras);
          if (data.active_camera !== undefined) {
            setActiveCamera(data.active_camera);
          }
        }
      }
    } catch (err) {
      console.warn("Failed to probe camera devices:", err);
    }
  }, []);

  useEffect(() => {
    fetchCameras();
  }, [fetchCameras]);

  // Handle dynamic camera hot-switch
  const handleCameraChange = async (e) => {
    const newIndex = parseInt(e.target.value, 10);
    if (isNaN(newIndex)) return;

    setIsSwitchingCamera(true);
    try {
      const res = await fetch(apiUrl("/api/camera_select"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ camera_index: newIndex }),
      });
      if (res.ok) {
        setActiveCamera(newIndex);
        setTimeout(() => {
          setStreamKey(Date.now());
          setSnapshotUrl(apiUrl(`/api/camera_snapshot?t=${Date.now()}`));
          setIsConnected(true);
          setHasError(false);
          setIsSwitchingCamera(false);
        }, 400);
      }
    } catch (err) {
      console.error("Camera switch error:", err);
      setIsSwitchingCamera(false);
    }
  };

  // Toggle in-browser camera streaming directly to Render backend
  const toggleBrowserStreaming = async () => {
    if (isBrowserStreaming) {
      // Stop streaming
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
      if (browserWsRef.current) browserWsRef.current.close();
      if (browserStreamRef.current) {
        browserStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      setIsBrowserStreaming(false);
      setBrowserStreamFps(0);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } },
        audio: false,
      });

      browserStreamRef.current = stream;
      if (videoElementRef.current) {
        videoElementRef.current.srcObject = stream;
        videoElementRef.current.play();
      }

      // Connect binary WebSocket to backend
      const wsUrl = getRemoteFrameWebSocketUrl();
      const ws = new WebSocket(wsUrl);
      ws.binaryType = "arraybuffer";
      browserWsRef.current = ws;

      let frameCount = 0;
      let lastFpsTime = Date.now();

      const canvas = canvasRef.current || document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 480;
      const ctx = canvas.getContext("2d");

      streamIntervalRef.current = setInterval(() => {
        if (!videoElementRef.current || videoElementRef.current.readyState < 2) return;

        ctx.drawImage(videoElementRef.current, 0, 0, 640, 480);
        canvas.toBlob(
          (blob) => {
            if (blob && ws.readyState === WebSocket.OPEN) {
              blob.arrayBuffer().then((buf) => {
                ws.send(buf);
                frameCount++;
                const now = Date.now();
                if (now - lastFpsTime >= 1000) {
                  setBrowserStreamFps(frameCount);
                  frameCount = 0;
                  lastFpsTime = now;
                }
              });
            }
          },
          "image/jpeg",
          0.65
        );
      }, 70); // ~14 FPS

      setIsBrowserStreaming(true);
      setIsConnected(true);
      setHasError(false);
    } catch (err) {
      console.error("Failed to access browser camera:", err);
      alert("Could not access camera: " + err.message);
    }
  };

  // Snapshot polling mode (10 FPS)
  useEffect(() => {
    if (streamMode === "snapshot") {
      snapshotIntervalRef.current = setInterval(() => {
        setSnapshotUrl(apiUrl(`/api/camera_snapshot?t=${Date.now()}`));
      }, 100);
    } else {
      if (snapshotIntervalRef.current) {
        clearInterval(snapshotIntervalRef.current);
        snapshotIntervalRef.current = null;
      }
    }
    return () => {
      if (snapshotIntervalRef.current) {
        clearInterval(snapshotIntervalRef.current);
      }
    };
  }, [streamMode]);

  const handleReconnect = () => {
    setHasError(false);
    setIsConnected(true);
    setStreamKey(Date.now());
    setSnapshotUrl(`/api/camera_snapshot?t=${Date.now()}`);
    fetchCameras();
  };

  const handleImgError = () => {
    setHasError(true);
    setIsConnected(false);
    setTimeout(() => {
      setHasError(false);
      setStreamKey(Date.now());
    }, 2500);
  };

  return (
    <div className="panel-card">
      <h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span>Live Camera Feed</span>
          <span
            className="badge"
            style={{
              background: isVisitorPresent
                ? "var(--primary-subtle)"
                : isConnected
                ? "#e6f4ea"
                : "#fef3c7",
              color: isVisitorPresent
                ? "var(--primary)"
                : isConnected
                ? "#137333"
                : "#d97706",
            }}
          >
            {isVisitorPresent
              ? `Visitor: ${visitorName}`
              : isConnected
              ? "🟢 Camera Active"
              : "🟡 Connecting…"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          {/* Multi-Camera Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <label htmlFor="cam-select" style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>
              📹
            </label>
            <select
              id="cam-select"
              className="form-control"
              value={activeCamera}
              onChange={handleCameraChange}
              disabled={isSwitchingCamera}
              style={{
                padding: "3px 8px",
                fontSize: "11px",
                height: "26px",
                borderRadius: "var(--radius-sm)",
                background: "var(--surface-raised)",
                color: "var(--text)",
                borderColor: "var(--border)",
                cursor: "pointer",
              }}
              title="Select active camera device"
            >
              {cameras.length > 0 ? (
                cameras.map((c) => (
                  <option key={c.index} value={c.index}>
                    {c.name}
                  </option>
                ))
              ) : (
                <option value={0}>Camera 0 (Default)</option>
              )}
            </select>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ padding: "3px 6px", fontSize: "11px", height: "26px" }}
              onClick={fetchCameras}
              title="Rescan camera devices"
            >
              🔍
            </button>
            <button
              type="button"
              className="btn"
              style={{
                padding: "3px 10px",
                fontSize: "11px",
                height: "26px",
                fontWeight: 600,
                background: isBrowserStreaming ? "var(--primary)" : "var(--surface-raised)",
                color: isBrowserStreaming ? "#0a1f14" : "var(--primary)",
                border: "1px solid var(--primary)",
              }}
              onClick={toggleBrowserStreaming}
              title="Stream your device / browser webcam directly to Anchor cloud backend"
            >
              {isBrowserStreaming ? `🟢 Streaming (${browserStreamFps} FPS)` : "📱 Stream Browser Cam"}
            </button>
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: "3px 8px", fontSize: "11px", height: "26px" }}
            onClick={() =>
              setStreamMode(streamMode === "mjpeg" ? "snapshot" : "mjpeg")
            }
            title="Switch streaming protocol if video is stuttering"
          >
            {streamMode === "mjpeg" ? "⚡ Live Stream" : "📸 Snapshot Mode"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: "3px 8px", fontSize: "11px", height: "26px" }}
            onClick={handleReconnect}
            title="Reconnect video feed"
          >
            🔄 Reconnect
          </button>
        </div>
      </h2>

      <div
        style={{
          background: "#0f1712",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "240px",
          position: "relative",
        }}
      >
        {/* Hidden / Active Video Element for Browser Webcam */}
        <video
          ref={videoElementRef}
          playsInline
          muted
          style={{
            display: isBrowserStreaming ? "block" : "none",
            width: "100%",
            maxHeight: "280px",
            objectFit: "contain",
            transform: "scaleX(-1)", // Mirrored for natural user feel
          }}
        />

        {/* Remote MJPEG / Snapshot Stream from Backend */}
        {!isBrowserStreaming && (streamMode === "mjpeg" ? (
          <img
            key={streamKey}
            src={apiUrl(`/video_feed?t=${streamKey}`)}
            alt="Live Webcam Stream"
            onError={handleImgError}
            onLoad={() => {
              setIsConnected(true);
              setHasError(false);
            }}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              maxHeight: "280px",
            }}
          />
        ) : (
          <img
            src={snapshotUrl}
            alt="Live Webcam Snapshot"
            onError={handleImgError}
            onLoad={() => {
              setIsConnected(true);
              setHasError(false);
            }}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              maxHeight: "280px",
            }}
          />
        ))}

        {isSwitchingCamera && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15, 23, 18, 0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            📹 Switching Camera…
          </div>
        )}

        {hasError && !isBrowserStreaming && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15, 23, 18, 0.85)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#f87171",
              fontSize: "12px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <span>⚠️ No server camera attached.</span>
            <button
              className="btn btn-primary"
              style={{ fontSize: "11px", padding: "4px 12px" }}
              onClick={toggleBrowserStreaming}
            >
              📱 Enable Browser / Device Camera
            </button>
          </div>
        )}
      </div>

      <div style={{ marginTop: "10px", fontSize: "11px", color: "var(--text-muted)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
        <span>
          {isBrowserStreaming ? "🟢 Live Video Streaming to Render Backend" : "Face alignment & EAR liveness analysis active on backend."}
        </span>
        <a
          href="/capture"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}
        >
          📱 Open Mobile Glasses / Cam Streamer &rarr;
        </a>
      </div>
    </div>
  );
}
