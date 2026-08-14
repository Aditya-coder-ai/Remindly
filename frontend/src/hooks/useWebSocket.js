import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useWebSocket — Real-time event bridge with Anchor FastAPI backend.
 * Listens for face recognition events (recognized, unrecognized, status).
 */
export function useWebSocket(onEvent) {
  const [connectionStatus, setConnectionStatus] = useState("connecting");
  const wsRef = useRef(null);
  const onEventRef = useRef(onEvent);

  useEffect(() => {
    onEventRef.current = onEvent;
  }, [onEvent]);

  const connect = useCallback(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const host = window.location.host;
    const wsUrl = `${protocol}//${host}/ws`;

    setConnectionStatus("connecting");
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnectionStatus("connected");
    };

    ws.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (onEventRef.current) {
          onEventRef.current(payload);
        }
      } catch (err) {
        console.error("WebSocket message parse error:", err);
      }
    };

    ws.onclose = () => {
      setConnectionStatus("disconnected");
      // Auto-reconnect after 2.5s
      setTimeout(() => {
        connect();
      }, 2500);
    };

    ws.onerror = () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    connect();
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  const sendCommand = useCallback((cmd, data = {}) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ command: cmd, ...data }));
    }
  }, []);

  return { connectionStatus, sendCommand };
}
