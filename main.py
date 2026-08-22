"""
main.py
=======
Root entrypoint for Render and cloud hosting providers.
Exposes FastAPI application instance `app`.
"""

from backend.app.main import app

__all__ = ["app"]

if __name__ == "__main__":
    import os
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=port)
