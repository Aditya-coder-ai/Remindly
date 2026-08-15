import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useWebSocket — Real-time event bridge with Anchor FastAPI backend.
 * Listens for face recognition events (recognized, unrecognized, status).
 */
export function useWebSocket(onEvent) {
  const [connectionStatus, setConnectionStatus] = useState("connecting");
  const wsRef = useRef(null);
  const onEventRef = useRef(onEvent);
  const reconnectTimerRef = useRef(null);
  const unmountedRef = useRef(false);

  useEffect(() => {
    onEventRef.current = onEvent;
  }, [onEvent]);

  const connect = useCallback(() => {
    if (unmountedRef.current) return;

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
      // Auto-reconnect after 2.5s, unless unmounted
      if (!unmountedRef.current) {
        reconnectTimerRef.current = setTimeout(() => {
          reconnectTimerRef.current = null;
          connect();
        }, 2500);
      }
    };

    ws.onerror = () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    unmountedRef.current = false;
    connect();
    return () => {
      unmountedRef.current = true;
      // Cancel any pending reconnect timer
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
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
