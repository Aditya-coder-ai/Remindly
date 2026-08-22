"""
app.main
========
Root alias for Render / Gunicorn / Uvicorn deployments.
Proxies directly to backend.app.main.app.
"""

from backend.app.main import app

__all__ = ["app"]
