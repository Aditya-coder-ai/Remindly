import { useState, useEffect, useRef, useCallback } from "react";

/**
 * LiveCameraFeed — Streams webcam feed with face recognition overlays,
 * passive liveness indicators (EAR & blinks), and dynamic multi-camera device selection.
 */
export default function LiveCameraFeed({ isVisitorPresent, visitorName }) {
  const [streamMode, setStreamMode] = useState("mjpeg"); // 'mjpeg' | 'snapshot'
  const [streamKey, setStreamKey] = useState(Date.now());
  const [snapshotUrl, setSnapshotUrl] = useState(`/api/camera_snapshot?t=${Date.now()}`);
  const [isConnected, setIsConnected] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Multi-camera state
  const [cameras, setCameras] = useState([]);
  const [activeCamera, setActiveCamera] = useState(0);
  const [isSwitchingCamera, setIsSwitchingCamera] = useState(false);

  const snapshotIntervalRef = useRef(null);

  // Fetch available cameras from backend
  const fetchCameras = useCallback(async () => {
    try {
      const res = await fetch("/api/cameras");
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
      const res = await fetch("/api/camera_select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ camera_index: newIndex }),
      });
      if (res.ok) {
        setActiveCamera(newIndex);
        // Refresh feed with a fresh timestamp
        setTimeout(() => {
          setStreamKey(Date.now());
          setSnapshotUrl(`/api/camera_snapshot?t=${Date.now()}`);
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

  // Snapshot polling mode (10 FPS) for environments where MJPEG streams stall
  useEffect(() => {
    if (streamMode === "snapshot") {
      snapshotIntervalRef.current = setInterval(() => {
        setSnapshotUrl(`/api/camera_snapshot?t=${Date.now()}`);
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
        {streamMode === "mjpeg" ? (
          <img
            key={streamKey}
            src={`/video_feed?t=${streamKey}`}
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
        )}

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

        {hasError && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(15, 23, 18, 0.85)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: "6px" }}>
              Reconnecting to Camera Feed…
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: "12px", padding: "4px 12px", marginTop: "8px" }}
              onClick={handleReconnect}
            >
              🔄 Retry Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
