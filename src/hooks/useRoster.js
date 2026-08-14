import { useState, useEffect, useCallback } from "react";

/**
 * useRoster — Manages loved ones profiles, memory notes, and face enrollment with backend persistence.
 */
export function useRoster() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoster = useCallback(async () => {
    try {
      const res = await fetch("/api/roster");
      if (!res.ok) throw new Error("Failed to fetch roster");
      const list = await res.json();
      setProfiles(list);
    } catch (err) {
      console.error("Roster fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoster();
  }, [fetchRoster]);

  const addProfile = useCallback(async (data) => {
    const res = await fetch("/api/roster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to create profile");
    }
    await fetchRoster();
  }, [fetchRoster]);

  const deleteProfile = useCallback(async (personId) => {
    const res = await fetch(`/api/roster/${personId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete profile");
    }
    await fetchRoster();
  }, [fetchRoster]);

  const registerFace = useCallback(async (personId, imageBase64 = null) => {
    const res = await fetch("/api/register_face", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        person_id: personId,
        image_base64: imageBase64,
      }),
    });
    const data = await res.json();
    if (data.success) {
      await fetchRoster();
    }
    return data;
  }, [fetchRoster]);

  const clearFaceEncodings = useCallback(async (personId) => {
    const res = await fetch(`/api/clear_encodings/${personId}`, {
      method: "POST",
    });
    const data = await res.json();
    if (res.ok) {
      await fetchRoster();
    }
    return data;
  }, [fetchRoster]);

  const saveUpdatedNote = useCallback(async (personId, note, transcript = "") => {
    try {
      const res = await fetch("/api/update_note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          person_id: personId,
          note,
          transcript,
        }),
      });
      if (res.ok) {
        await fetchRoster();
      }
    } catch (err) {
      console.error("Failed to save memory note:", err);
    }
  }, [fetchRoster]);

  return {
    profiles,
    loading,
    reload: fetchRoster,
    addProfile,
    deleteProfile,
    registerFace,
    clearFaceEncodings,
    saveUpdatedNote,
  };
}
