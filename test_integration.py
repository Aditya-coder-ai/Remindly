"""
Integration & System Test for Anchor
Verifies storage, service lifecycle, and API endpoints.
"""

import json
import os
import sys
import tempfile
from pathlib import Path

from fastapi.testclient import TestClient

from anchor_face.storage import RosterStorage
from anchor_face.service import RecognitionService
from server import app

def test_storage():
    print("Testing RosterStorage...")
    with tempfile.TemporaryDirectory() as tmpdir:
        roster_path = Path(tmpdir) / "test_roster.json"
        storage = RosterStorage(file_path=roster_path)
        
        # Check seed profiles
        profiles = storage.list_profiles()
        assert len(profiles) >= 2, f"Expected at least 2 seed profiles, got {len(profiles)}"
        
        # Test upsert
        p = storage.upsert_profile(
            person_id="test_user",
            name="Test User",
            relationship="Friend",
            note="Initial visit test.",
        )
        assert p.name == "Test User"
        
        # Test update note & history
        updated = storage.update_note(
            person_id="test_user",
            note="Second visit test note.",
            transcript="Hello there friend",
        )
        assert updated.note == "Second visit test note."
        assert len(updated.history) >= 1
        assert updated.history[0]["transcript"] == "Hello there friend"
        print("  [OK] RosterStorage CRUD and visit history passed.")

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

    # 4. POST /api/update_note
    res = client.post("/api/update_note", json={
        "person_id": "grandma_anna",
        "note": "Anna and you watered the balcony sunflowers together.",
        "transcript": "Let's water these lovely flowers today.",
    })
    assert res.status_code == 200
    assert "balcony sunflowers" in res.json()["person"]["note"]
    print("  [OK] POST /api/update_note memory persistence passed.")

    # 5. POST /api/simulate
    res = client.post("/api/simulate", json={"action": "arrive", "person_id": "priya"})
    assert res.status_code == 200
    assert res.json()["success"] is True

    res = client.post("/api/simulate", json={"action": "leave"})
    assert res.status_code == 200
    assert res.json()["success"] is True
    print("  [OK] POST /api/simulate visit simulation passed.")

if __name__ == "__main__":
    print("\n--- Running Anchor Integration Test Suite ---")
    test_storage()
    test_api_endpoints()
    print("\nAll Anchor Integration Tests Passed Successfully!")
