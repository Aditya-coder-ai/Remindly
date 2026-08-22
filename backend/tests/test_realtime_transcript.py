import pytest
from fastapi.testclient import TestClient

from backend.app.main import app
from backend.app.storage.visit_storage import visit_storage

client = TestClient(app)

@pytest.mark.asyncio
async def test_add_transcript_segment():
    # Setup test variables
    visit_id = "test-visit-123"
    segment_id = "test-segment-1"
    
    payload = {
        "segment_id": segment_id,
        "text": "Hello world from test",
        "sequence": 1,
        "timestamp": "2026-08-23T00:50:00Z",
        "speaker": "Sarah"
    }
    
    # Ensure database tables exist
    await visit_storage.init_db()
    
    # Call the API
    response = client.post(f"/api/visits/{visit_id}/transcript", json=payload)
    assert response.status_code == 200
    assert response.json() == {"success": True, "segment_id": segment_id}
    
    # Verify persistence using get_transcript_segments
    segments = await visit_storage.get_transcript_segments(visit_id)
    assert len(segments) == 1
    assert segments[0]["segment_id"] == segment_id
    assert segments[0]["text"] == "Hello world from test"
    assert segments[0]["speaker"] == "Sarah"
    assert segments[0]["sequence"] == 1

@pytest.mark.asyncio
async def test_transcript_idempotency():
    visit_id = "test-visit-123"
    segment_id = "test-segment-1"
    
    payload = {
        "segment_id": segment_id,
        "text": "Hello world from test",
        "sequence": 1,
        "timestamp": "2026-08-23T00:50:00Z",
        "speaker": "Sarah"
    }
    
    # Post again (should be ignored by ON CONFLICT but return success)
    response = client.post(f"/api/visits/{visit_id}/transcript", json=payload)
    assert response.status_code == 200
    
    # Get segments and verify no duplicates exist
    segments = await visit_storage.get_transcript_segments(visit_id)
    assert len(segments) == 1

@pytest.mark.asyncio
async def test_transcript_ordering():
    visit_id = "test-visit-order"
    
    # Insert out of order
    payload_2 = {
        "segment_id": "seg-2",
        "text": "Second statement",
        "sequence": 2,
        "timestamp": "2026-08-23T00:50:02Z",
        "speaker": "Sarah"
    }
    payload_1 = {
        "segment_id": "seg-1",
        "text": "First statement",
        "sequence": 1,
        "timestamp": "2026-08-23T00:50:01Z",
        "speaker": "Sarah"
    }
    
    client.post(f"/api/visits/{visit_id}/transcript", json=payload_2)
    client.post(f"/api/visits/{visit_id}/transcript", json=payload_1)
    
    # Fetch via GET API
    response = client.get(f"/api/visits/{visit_id}/transcript")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert len(data["segments"]) == 2
    
    # Ensure they are sorted by sequence (1 then 2)
    assert data["segments"][0]["segment_id"] == "seg-1"
    assert data["segments"][1]["segment_id"] == "seg-2"

@pytest.mark.asyncio
async def test_visit_isolation():
    visit_a = "visit-a"
    visit_b = "visit-b"
    
    payload_a = {
        "segment_id": "seg-a",
        "text": "Message in A",
        "sequence": 1,
        "timestamp": "2026-08-23T00:50:00Z",
        "speaker": "Sarah"
    }
    payload_b = {
        "segment_id": "seg-b",
        "text": "Message in B",
        "sequence": 1,
        "timestamp": "2026-08-23T00:50:00Z",
        "speaker": "Sarah"
    }
    
    client.post(f"/api/visits/{visit_a}/transcript", json=payload_a)
    client.post(f"/api/visits/{visit_b}/transcript", json=payload_b)
    
    # Fetch A
    res_a = client.get(f"/api/visits/{visit_a}/transcript")
    assert len(res_a.json()["segments"]) == 1
    assert res_a.json()["segments"][0]["segment_id"] == "seg-a"
    
    # Fetch B
    res_b = client.get(f"/api/visits/{visit_b}/transcript")
    assert len(res_b.json()["segments"]) == 1
    assert res_b.json()["segments"][0]["segment_id"] == "seg-b"
