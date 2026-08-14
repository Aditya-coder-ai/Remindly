import { useState } from "react";

/**
 * LiveCameraFeed — Streams webcam feed with face recognition overlays.
 */
export default function LiveCameraFeed({ isVisitorPresent, visitorName }) {
  const [cameraError, setCameraError] = useState(false);

  return (
    <div className="panel-card">
      <h2>
        <span>Live Camera Feed</span>
        <span className="badge">
          {isVisitorPresent ? `Visitor: ${visitorName}` : "Webcam Stream"}
        </span>
      </h2>
      <div style={{
        background: "#0f1712",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "220px",
        position: "relative",
      }}>
        {!cameraError ? (
          <img
            src="/video_feed"
            alt="Live Webcam Feed"
            onError={() => setCameraError(true)}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
              maxHeight: "260px",
            }}
          />
        ) : (
          <div style={{ padding: "24px", textAlign: "center", color: "var(--text-light)", fontSize: "13px" }}>
            <p style={{ fontWeight: 600, marginBottom: "4px" }}>Webcam Stream Standby</p>
            <p>Camera feed will appear when a webcam is connected, or use the Visit Simulator below.</p>
          </div>
        )}
      </div>
    </div>
  );
}
