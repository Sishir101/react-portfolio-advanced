import { GITHUB_USERNAME } from "../config/site";
import { projectEnhancements } from "../data/projectEnhancements";

const GRADIENTS = [
  "from-cyan-500/40 to-blue-600/40",
  "from-purple-500/40 to-pink-600/40",
  "from-emerald-500/40 to-cyan-600/40",
  "from-amber-500/40 to-orange-600/40",
  "from-rose-500/40 to-violet-600/40",
];

function titleFromRepoName(name) {
  return name
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function tagsFromRepo(repo) {
  const extra = projectEnhancements[repo.name]?.tags;
  if (extra?.length) return extra;
  const tags = [];
  if (repo.language) tags.push(repo.language);
  if (repo.topics?.length) tags.push(...repo.topics.slice(0, 4));
  return tags.length ? tags : ["Open Source"];
}

export function mapRepoToProject(repo, index) {
  const custom = projectEnhancements[repo.name] || {};
  return {
    id: repo.id,
    title: custom.title || titleFromRepoName(repo.name),
    description:
      custom.description ||
      repo.description ||
      `A ${repo.language || "software"} project hosted on GitHub.`,
    tags: tagsFromRepo(repo),
    github: repo.html_url,
    demo: repo.homepage || custom.demo || null,
    gradient: custom.gradient || GRADIENTS[index % GRADIENTS.length],
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    source: "github",
  };
}

export async function fetchGitHubRepos(username = GITHUB_USERNAME) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
  );

  if (!response.ok) {
    throw new Error(`GitHub API error (${response.status})`);
  }

  const repos = await response.json();
  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

export async function fetchGitHubProjects(username = GITHUB_USERNAME) {
  const repos = await fetchGitHubRepos(username);
  return repos.map(mapRepoToProject);
}

export async function fetchGitHubProfile(username = GITHUB_USERNAME) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`,
  );
  if (!response.ok) {
    throw new Error(`GitHub profile error (${response.status})`);
  }
  return response.json();
}
