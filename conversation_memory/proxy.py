"""
Tiny CORS proxy for Groq API calls from the browser demo.

Runs on http://localhost:8001 and forwards POST requests to
https://api.groq.com/openai/v1/chat/completions, adding the
required CORS headers so the browser's fetch() call succeeds.

Usage:
    python proxy.py
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.request
import urllib.error

GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"
PORT = 8001


class CORSProxyHandler(BaseHTTPRequestHandler):
    """Forward POST to Groq, relay the response with CORS headers."""

    def _cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers",
                         "Content-Type, Authorization")

    def do_OPTIONS(self):
        """Handle CORS preflight."""
        self.send_response(204)
        self._cors_headers()
        self.end_headers()

    def do_POST(self):
        """Forward the request to Groq and relay the response."""
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        auth = self.headers.get("Authorization", "")

        req = urllib.request.Request(
            GROQ_ENDPOINT,
            data=body,
            headers={
                "Content-Type": "application/json",
                "Authorization": auth,
            },
            method="POST",
        )

        try:
            with urllib.request.urlopen(req) as resp:
                resp_body = resp.read()
                self.send_response(resp.status)
                self._cors_headers()
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(resp_body)
        except urllib.error.HTTPError as e:
            err_body = e.read()
            self.send_response(e.code)
            self._cors_headers()
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(err_body)

    def log_message(self, format, *args):
        print(f"[proxy] {args[0]}")


if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", PORT), CORSProxyHandler)
    print(f"CORS proxy listening on http://localhost:{PORT}")
    print(f"Forwarding to {GROQ_ENDPOINT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nProxy stopped.")
