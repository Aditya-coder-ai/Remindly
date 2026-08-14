import { useState, useEffect, useRef } from "react";

/**
 * LiveCameraFeed — Streams webcam feed with face recognition overlays.
 * Features auto-reconnect, dual-mode fallback (MJPEG stream + snapshot polling),
 * and live recognition status indicators.
 */
export default function LiveCameraFeed({ isVisitorPresent, visitorName }) {
  const [streamMode, setStreamMode] = useState("mjpeg"); // 'mjpeg' | 'snapshot'
  const [streamKey, setStreamKey] = useState(Date.now());
  const [snapshotUrl, setSnapshotUrl] = useState(`/camera_snapshot?t=${Date.now()}`);
  const [isConnected, setIsConnected] = useState(true);
  const [hasError, setHasError] = useState(false);

  const snapshotIntervalRef = useRef(null);

  // Snapshot polling mode (10 FPS) for environments where MJPEG streams stall
  useEffect(() => {
    if (streamMode === "snapshot") {
      snapshotIntervalRef.current = setInterval(() => {
        setSnapshotUrl(`/camera_snapshot?t=${Date.now()}`);
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
    setSnapshotUrl(`/camera_snapshot?t=${Date.now()}`);
  };

  const handleImgError = () => {
    setHasError(true);
    setIsConnected(false);
    // Auto-retry in 2.5s with a fresh timestamp
    setTimeout(() => {
      setHasError(false);
      setStreamKey(Date.now());
    }, 2500);
  };

  return (
    <div className="panel-card">
      <h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ padding: "3px 8px", fontSize: "11px" }}
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
            style={{ padding: "3px 8px", fontSize: "11px" }}
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
