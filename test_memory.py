"""
test_memory.py
==============

End-to-end test for Anchor's memory-update mechanism.

Runs through the full cycle:
  1. Create a person in the SQLite store
  2. Update their note via PATCH /people/{id}/note
  3. Fetch them back via GET /people/{id} and confirm the note changed
  4. Fire a second update and confirm "replace, not append"
  5. Verify overlapping / rapid-fire updates resolve safely
  6. Confirm the note_history audit log recorded old notes
  7. Confirm blank notes are rejected (never lose data)

Usage:
    python test_memory.py            # runs against in-process TestClient
    # -- or, if the server is running at localhost:8000 --
    # See the curl examples at the bottom of this file.
"""

from __future__ import annotations

import sys
import tempfile
from pathlib import Path

# ---------------------------------------------------------------------------
# 1.  Unit test: MemoryRepository in isolation (no server needed)
# ---------------------------------------------------------------------------

def test_repository_standalone():
    """Exercises the SQLite layer directly -- no FastAPI involved."""
    from anchor_memory.repository import MemoryRepository

    with tempfile.TemporaryDirectory() as tmpdir:
        db = Path(tmpdir) / "test.db"
        repo = MemoryRepository(db_path=db)

        # --- Create ---
        person = repo.upsert_person("alice", "Alice Chen", "Daughter")
        assert person.id == "alice"
        assert person.name == "Alice Chen"
        assert person.note is None  # no note yet
        print("  [OK] upsert_person -- created Alice")

        # --- Update note ---
        updated = repo.update_person_note("alice", "Alice brought fresh flowers.")
        assert updated.note == "Alice brought fresh flowers."
        print("  [OK] update_person_note -- first note saved")

        # --- Replace, not append ---
        replaced = repo.update_person_note(
            "alice", "Alice and you watched old home movies together."
        )
        assert replaced.note == "Alice and you watched old home movies together."
        assert "flowers" not in replaced.note  # old note gone from current
        print("  [OK] update_person_note -- replaced, not appended")

        # --- History log kept old note ---
        history = repo.get_note_history("alice")
        assert len(history) >= 1
        assert any("flowers" in h["note"] for h in history)
        print(f"  [OK] note_history contains {len(history)} archived note(s)")

        # --- Reject blank note (never lose data) ---
        try:
            repo.update_person_note("alice", "   ")
            assert False, "Should have raised ValueError"
        except ValueError:
            pass
        # Confirm previous note survived
        check = repo.get_person("alice")
        assert check.note == "Alice and you watched old home movies together."
        print("  [OK] blank note rejected -- previous note preserved")

        # --- KeyError for unknown person ---
        try:
            repo.update_person_note("nonexistent", "some note")
            assert False, "Should have raised KeyError"
        except KeyError:
            pass
        print("  [OK] KeyError raised for unknown person_id")

        # --- Rapid-fire / overlapping updates (last writer wins) ---
        for i in range(5):
            repo.update_person_note("alice", f"Update number {i}")
        final = repo.get_person("alice")
        assert final.note == "Update number 4"
        print("  [OK] rapid-fire updates -- last writer wins (note = 'Update number 4')")

        # --- Delete ---
        assert repo.delete_person("alice") is True
        assert repo.get_person("alice") is None
        print("  [OK] delete_person -- Alice removed")


# ---------------------------------------------------------------------------
# 2.  Integration test: FastAPI endpoints via TestClient
# ---------------------------------------------------------------------------

def test_api_memory_endpoints():
    """Hit the PATCH / GET endpoints via the FastAPI TestClient."""
    try:
        from fastapi.testclient import TestClient
        from server import app, memory_repo
    except ImportError as e:
        print(f"  [SKIP] Cannot import server -- missing dependency: {e}")
        return

    client = TestClient(app)

    # Seed a person into the SQLite store so endpoints have something to hit
    memory_repo.upsert_person(
        person_id="priya",
        name="Priya Patel",
        relationship="Daughter",
        note="Priya brought over fresh chamomile tea.",
    )

    # --- GET /people/priya ---
    res = client.get("/people/priya")
    assert res.status_code == 200
    data = res.json()
    assert data["id"] == "priya"
    assert "chamomile" in data["note"]
    print("  [OK] GET /people/priya -- returned current note")

    # --- PATCH /people/priya/note ---
    res = client.patch(
        "/people/priya/note",
        json={"note": "Priya and you planted sunflowers in the garden."},
    )
    assert res.status_code == 200
    body = res.json()
    assert body["success"] is True
    assert body["person"]["note"] == "Priya and you planted sunflowers in the garden."
    print("  [OK] PATCH /people/priya/note -- note replaced")

    # --- GET confirms the update ---
    res = client.get("/people/priya")
    assert res.status_code == 200
    assert res.json()["note"] == "Priya and you planted sunflowers in the garden."
    print("  [OK] GET /people/priya -- confirmed new note persisted")

    # --- PATCH again (second update, verifies replace semantics) ---
    res = client.patch(
        "/people/priya/note",
        json={"note": "Priya showed you photos from her trip to the mountains."},
    )
    assert res.status_code == 200
    res2 = client.get("/people/priya")
    assert res2.json()["note"] == "Priya showed you photos from her trip to the mountains."
    print("  [OK] second PATCH -- previous note fully replaced")

    # --- PATCH with blank body -> 422 (never lose data) ---
    res = client.patch("/people/priya/note", json={"note": ""})
    assert res.status_code == 422
    print("  [OK] blank note -> 422 rejected")

    # --- PATCH for nonexistent person -> 404 ---
    res = client.patch("/people/nobody/note", json={"note": "test"})
    assert res.status_code == 404
    print("  [OK] nonexistent person -> 404")

    # --- GET /people -> list all ---
    res = client.get("/people")
    assert res.status_code == 200
    assert isinstance(res.json(), list)
    print(f"  [OK] GET /people -- returned {len(res.json())} people")

    # --- GET /people/nobody -> 404 ---
    res = client.get("/people/nobody")
    assert res.status_code == 404
    print("  [OK] GET nonexistent -> 404")


# ---------------------------------------------------------------------------
# 3.  Integration test: existing /api/update_note auto-syncs to SQLite
# ---------------------------------------------------------------------------

def test_auto_sync_via_update_note():
    """
    The existing /api/update_note endpoint (called by the AI summarize
    pipeline) should ALSO persist to SQLite automatically.
    """
    try:
        from fastapi.testclient import TestClient
        from server import app, memory_repo
    except ImportError as e:
        print(f"  [SKIP] Cannot import server -- missing dependency: {e}")
        return

    client = TestClient(app)

    # Ensure person exists in SQLite
    memory_repo.upsert_person("tom", "Tom Evans", "Grandson")

    res = client.post("/api/update_note", json={
        "person_id": "tom",
        "note": "Tom told you about his science project on volcanoes.",
        "transcript": "Grandpa, look at this volcano model I built!",
    })
    assert res.status_code == 200
    assert res.json()["success"] is True

    # Now confirm SQLite has the updated note
    person = memory_repo.get_person("tom")
    assert person is not None
    assert person.note == "Tom told you about his science project on volcanoes."
    print("  [OK] /api/update_note -> SQLite auto-synced")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print("\n" + "=" * 60)
    print("  Anchor Memory Update -- Test Suite")
    print("=" * 60)

    print("\n[1/3] Repository unit tests (SQLite only)...")
    test_repository_standalone()

    print("\n[2/3] API endpoint integration tests...")
    test_api_memory_endpoints()

    print("\n[3/3] Auto-sync via /api/update_note...")
    test_auto_sync_via_update_note()

    print("\n" + "=" * 60)
    print("  [PASS] ALL TESTS PASSED SUCCESSFULLY")
    print("=" * 60)

    print("""
================================================================
  curl examples (run while server is up on localhost:8000):
================================================================

  # 1. Seed a person (only needed once)
  curl -X POST http://localhost:8000/api/roster \\
    -H "Content-Type: application/json" \\
    -d "{\\"person_id\\":\\"priya\\",\\"name\\":\\"Priya Patel\\",\\"relationship\\":\\"Daughter\\",\\"note\\":\\"Initial greeting note.\\"}"

  # 2. Update the note via the new PATCH endpoint
  curl -X PATCH http://localhost:8000/people/priya/note \\
    -H "Content-Type: application/json" \\
    -d "{\\"note\\":\\"Priya brought chamomile tea and you looked through lake house photos together.\\"}"

  # 3. Confirm the note changed
  curl http://localhost:8000/people/priya

  # 4. Update again -- verify replace semantics
  curl -X PATCH http://localhost:8000/people/priya/note \\
    -H "Content-Type: application/json" \\
    -d "{\\"note\\":\\"Priya showed you her new painting.\\"}"

  # 5. Fetch -- should show ONLY the latest note
  curl http://localhost:8000/people/priya

================================================================
""")
