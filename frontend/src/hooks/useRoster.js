import { useState, useEffect, useCallback } from "react";
import { apiUrl } from "../config/api.js";

/**
 * useRoster — Manages loved ones profiles, memory notes, and face enrollment with backend persistence.
 */
export function useRoster() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoster = useCallback(async () => {
    try {
      const res = await fetch(apiUrl("/api/roster"));
      if (!res.ok) throw new Error("Failed to fetch roster");
      const list = await res.json();
      setProfiles(Array.isArray(list) ? list : []);
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
    const res = await fetch(apiUrl("/api/roster"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.detail || errData.error || "Failed to create profile");
    }
    await fetchRoster();
    return await res.json().catch(() => ({ success: true }));
  }, [fetchRoster]);

  const deleteProfile = useCallback(async (personId) => {
    const res = await fetch(apiUrl(`/api/roster/${personId}`), {
      method: "DELETE",
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.detail || errData.error || "Failed to delete profile");
    }
    await fetchRoster();
  }, [fetchRoster]);

  const registerFace = useCallback(async (personId, imageBase64 = null) => {
    try {
      const res = await fetch(apiUrl("/api/register_face"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          person_id: personId,
          image_base64: imageBase64,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        await fetchRoster();
        return {
          success: true,
          encodings_count: data.encodings_count,
          message: data.message || "Face snapshot enrolled successfully!",
        };
      }
      return {
        success: false,
        error: data.detail || data.error || `Face registration failed (HTTP ${res.status})`,
      };
    } catch (err) {
      return { success: false, error: err.message || "Network error registering face" };
    }
  }, [fetchRoster]);

  const clearFaceEncodings = useCallback(async (personId) => {
    try {
      const res = await fetch(apiUrl(`/api/clear_encodings/${personId}`), {
        method: "POST",
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        await fetchRoster();
        return { success: true, message: "Face encodings cleared." };
      }
      return { success: false, error: data.detail || data.error || "Failed to clear encodings" };
    } catch (err) {
      return { success: false, error: err.message || "Network error clearing encodings" };
    }
  }, [fetchRoster]);

  const saveUpdatedNote = useCallback(async (personId, note, transcript = "") => {
    try {
      const res = await fetch(apiUrl("/api/update_note"), {
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
