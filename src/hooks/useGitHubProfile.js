import { useEffect, useState } from "react";
import { fetchGitHubProfile } from "../services/github";
import { GITHUB_USERNAME } from "../config/site";

export default function useGitHubProfile(username = GITHUB_USERNAME) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchGitHubProfile(username);
        if (!cancelled) setProfile(data);
      } catch {
        if (!cancelled) setProfile(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { profile, loading };
}
