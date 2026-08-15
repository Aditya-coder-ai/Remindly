import { useState, useEffect, useRef } from "react";
import { startPairing, stopPairing } from "../../services/wearable-pairing.js";

/**
 * WearableCamera — WebRTC pairing component for wearable/phone camera capture.
 *
 * PRIVACY TRADEOFF — Capture Device Pairing
 * Raw video leaves the capture device and travels peer-to-peer over the LAN
 * before face recognition runs on the compute backend.
 */
export default function WearableCamera() {
  const [pairingState, setPairingState] = useState("idle"); // 'idle' | 'waiting' | 'connected' | 'error'
  const [peerId, setPeerId] = useState("");
  const [statusDetail, setStatusDetail] = useState("");
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    return () => {
      stopPairing();
    };
  }, []);

  const handleStartPairing = () => {
    startPairing({
      onPeerIdReady: (id) => {
        setPeerId(id);
        // If qrcode lib is present, render to canvas
        if (window.QRCode && qrCanvasRef.current) {
          window.QRCode.toCanvas(
            qrCanvasRef.current,
            id,
            {
              width: 160,
              margin: 2,
              color: { dark: "#163024", light: "#ffffff" },
            },
            (err) => {
              if (err) console.error("QR Code generation error:", err);
            }
          );
        }
      },
      onStatusChange: (status, detail) => {
        setPairingState(status);
        setStatusDetail(detail);
      },
    });
  };

  const handleStopPairing = () => {
    stopPairing();
    setPairingState("idle");
    setPeerId("");
    setStatusDetail("");
  };

  return (
    <div className={`panel-card wearable-panel ${pairingState === "connected" ? "paired" : ""}`}>
      <h2>
        <span>📷 Wearable Camera</span>
        <span
          className="badge"
          style={{
            background: pairingState === "connected" ? "var(--primary)" : undefined,
            color: pairingState === "connected" ? "white" : undefined,
          }}
        >
          {pairingState === "connected"
            ? "Connected ✓"
            : pairingState === "waiting"
            ? "Pairing…"
            : "Not Connected"}
        </span>
      </h2>

      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "14px" }}>
        Pair a phone or wearable camera to stream video for face recognition instead of the built-in webcam.
      </p>

      {pairingState === "idle" && (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={handleStartPairing}
          >
            Connect Wearable Camera
          </button>
        </div>
      )}

      {(pairingState === "waiting" || pairingState === "initializing") && (
        <div>
          <div className="qr-container">
            <canvas ref={qrCanvasRef} style={{ width: 160, height: 160 }} />
          </div>
          <div className="pairing-code-display">
            <label style={{ textAlign: "center", display: "block" }}>Pairing Code</label>
            <div className="pairing-code">{peerId || "------"}</div>
          </div>
          <div className="wearable-status">
            <span className="wearable-status-dot waiting" />
            <span>{statusDetail || "Waiting for capture device…"}</span>
          </div>
          <p style={{ fontSize: "11px", color: "var(--text-light)", textAlign: "center", marginTop: "10px" }}>
            On the capture device, open <strong>http://&lt;this-ip&gt;:8000/capture</strong> and enter the code above.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "100%", marginTop: "12px" }}
            onClick={handleStopPairing}
          >
            Cancel Pairing
          </button>
        </div>
      )}

      {pairingState === "connected" && (
        <div>
          <div className="wearable-status connected">
            <span className="wearable-status-dot connected" />
            <span>Wearable camera streaming ✓</span>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "100%", marginTop: "12px" }}
            onClick={handleStopPairing}
          >
            Disconnect Wearable
          </button>
        </div>
      )}

      {pairingState === "error" && (
        <div>
          <div className="wearable-status">
            <span className="wearable-status-dot error" />
            <span>{statusDetail || "Pairing error"}</span>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "100%", marginTop: "12px" }}
            onClick={handleStopPairing}
          >
            Retry Pairing
          </button>
        </div>
      )}
    </div>
  );
}
