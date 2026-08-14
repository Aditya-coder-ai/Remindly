"""
Integration & System Test for Anchor Backend
Verifies storage, biometric recognition, and API endpoints.
"""

import json
import os
import sys
import tempfile
from pathlib import Path
import numpy as np

from fastapi.testclient import TestClient

from backend.app.storage.roster_storage import RosterStorage
from backend.app.biometrics.service import RecognitionService
from backend.app.biometrics.recognizer import (
    FaceRecognizer,
    PersonRecord,
    encoding_distance,
    calculate_confidence,
)
from backend.app.main import app


def test_biometrics():
    print("Testing Biometric Math & Alignment...")
    v1 = np.random.randn(206)
    v1 /= np.linalg.norm(v1)
    
    v2 = v1.copy()
    assert encoding_distance(v1, v2) == 0.0
    assert calculate_confidence(0.0) == 1.0

    v3 = v1 + np.random.randn(206) * 0.005
    v3 /= np.linalg.norm(v3)
    dist = encoding_distance(v1, v3)
    assert dist < 0.20, f"Expected small distance, got {dist}"
    conf = calculate_confidence(dist, tolerance=0.22)
    assert conf > 0.65, f"Expected high confidence, got {conf}"
    print(f"  [OK] Biometric vector matching passed (perturbed dist={dist:.3f}, conf={conf:.1%}).")


def test_storage():
    print("Testing RosterStorage...")
    with tempfile.TemporaryDirectory() as tmpdir:
        roster_path = Path(tmpdir) / "test_roster.json"
        storage = RosterStorage(file_path=roster_path)
        
        profiles = storage.list_profiles()
        assert len(profiles) >= 2, f"Expected at least 2 seed profiles, got {len(profiles)}"
        
        p = storage.upsert_profile(
            person_id="test_user",
            name="Test User",
            relationship="Friend",
            note="Initial visit test.",
        )
        assert p.name == "Test User"
        
        dummy_enc = np.random.randn(206)
        dummy_enc /= np.linalg.norm(dummy_enc)
        added = storage.add_encoding("test_user", dummy_enc)
        assert added is True
        p_with_enc = storage.get_profile("test_user")
        assert len(p_with_enc.encodings) == 1

        cleared = storage.clear_encodings("test_user")
        assert cleared is True
        p_cleared = storage.get_profile("test_user")
        assert len(p_cleared.encodings) == 0

        updated = storage.update_note(
            person_id="test_user",
            note="Second visit test note.",
            transcript="Hello there friend",
        )
        assert updated.note == "Second visit test note."
        assert len(updated.history) >= 1
        assert updated.history[0]["transcript"] == "Hello there friend"
        print("  [OK] RosterStorage CRUD, encoding storage, and visit history passed.")


def test_api_endpoints():
    print("Testing FastAPI endpoints...")
    client = TestClient(app)
    
    # 1. GET /api/roster
    res = client.get("/api/roster")
    assert res.status_code == 200
    data = res.json()
    assert isinstance(data, list)
    print(f"  [OK] GET /api/roster returned {len(data)} profiles.")

    # 2. GET /api/status
    res = client.get("/api/status")
    assert res.status_code == 200
    status_data = res.json()
    assert "active" in status_data
    assert "roster_count" in status_data
    print("  [OK] GET /api/status passed.")

    # 3. POST /api/roster
    res = client.post("/api/roster", json={
        "person_id": "grandma_anna",
        "name": "Anna Jenkins",
        "relationship": "Grandmother",
        "note": "Anna brought fresh baked cookies.",
    })
    assert res.status_code == 200
    assert res.json()["person"]["name"] == "Anna Jenkins"
    print("  [OK] POST /api/roster profile creation passed.")

    # 4. POST /api/clear_encodings
    res = client.post("/api/clear_encodings/grandma_anna")
    assert res.status_code == 200
    print("  [OK] POST /api/clear_encodings passed.")

    # 5. POST /api/update_note
    res = client.post("/api/update_note", json={
        "person_id": "grandma_anna",
        "note": "Anna and you watered the balcony sunflowers together.",
        "transcript": "Let's water these lovely flowers today.",
    })
    assert res.status_code == 200
    assert "balcony sunflowers" in res.json()["person"]["note"]
    print("  [OK] POST /api/update_note memory persistence passed.")

    # 6. POST /api/simulate
    res = client.post("/api/simulate", json={"action": "arrive", "person_id": "priya"})
    assert res.status_code == 200
    assert res.json()["success"] is True

    res = client.post("/api/simulate", json={"action": "leave"})
    assert res.status_code == 200
    assert res.json()["success"] is True
    print("  [OK] POST /api/simulate visit simulation passed.")


def test_groq_proxy_privacy_enforcement():
    print("Testing Groq proxy privacy enforcement...")
    from unittest.mock import patch

    client = TestClient(app)

    test_headers = {"Authorization": "Bearer fake_test_key"}

    # 1. Non-JSON body rejected
    res = client.post("/api/groq", content="not json", headers=test_headers)
    assert res.status_code == 400

    # 2. Payload carrying forbidden extra fields rejected
    res = client.post("/api/groq", json={
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "user", "content": "hello"}],
        "image_base64": "data:image/jpeg;base64,AAAA",
    }, headers=test_headers)
    assert res.status_code == 400

    # 3. Non-text message rejected
    res = client.post("/api/groq", json={
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "user", "content": {"audio": "blob"}}],
    }, headers=test_headers)
    assert res.status_code == 400

    # 4. Valid text-only payload forwarded
    class FakeResp:
        status = 200

        def __enter__(self):
            return self

        def __exit__(self, *exc):
            return False

        def read(self):
            return b'{"choices":[{"message":{"content":"It was a warm visit."}}]}'

    sent_payload = {}

    def fake_urlopen(req, timeout=None):
        sent_payload["body"] = req.data
        sent_payload["url"] = req.full_url
        return FakeResp()

    with patch("backend.app.main.urllib.request.urlopen", side_effect=fake_urlopen):
        res = client.post("/api/groq", json={
            "model": "llama-3.3-70b-versatile",
            "max_tokens": 60,
            "temperature": 0.7,
            "messages": [
                {"role": "system", "content": "system"},
                {"role": "user", "content": "Priya just finished a visit. transcript here"},
            ],
        }, headers=test_headers)
        assert res.status_code == 200

    assert sent_payload["url"] == "https://api.groq.com/openai/v1/chat/completions"
    forwarded = json.loads(sent_payload["body"])
    assert set(forwarded) == {"model", "max_tokens", "temperature", "messages"}
    assert all(set(m) == {"role", "content"} for m in forwarded["messages"])
    assert all(isinstance(m["content"], str) for m in forwarded["messages"])
    print("  [OK] Groq proxy rejects media/extra fields and forwards text only.")


if __name__ == "__main__":
    print("\n--- Running Anchor Backend Integration Tests ---")
    test_biometrics()
    test_storage()
    test_api_endpoints()
    test_groq_proxy_privacy_enforcement()
    print("\nAll Anchor Backend Integration Tests Passed Successfully!")
