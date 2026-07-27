import { useEffect, useState } from "react";
import { fetchGitHubProjects } from "../services/github";
import { supplementalProjects } from "../data/projectEnhancements";
import { GITHUB_USERNAME } from "../config/site";

function mergeProjects(githubProjects) {
  const githubUrls = new Set(githubProjects.map((p) => p.github));
  const local = supplementalProjects.filter(
    (p) => !p.github || !githubUrls.has(p.github),
  );
  return [...githubProjects, ...local];
}

export default function useGitHubProjects(username = GITHUB_USERNAME) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const githubProjects = await fetchGitHubProjects(username);
        if (!cancelled) {
          setProjects(mergeProjects(githubProjects));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load GitHub projects");
          setProjects(supplementalProjects);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { projects, loading, error };
}
