import fallbackCache from '../data/github-cache.json';
import { projectsConfig } from '../data/projects.config';

export interface ProjectItem {
  id: number;
  name: string;
  title: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  topics: string[];
  homepage?: string;
  featured: boolean;
  demoUrl?: string;
  highlights: string[];
  tags: string[];
}

interface RawGitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
  fork: boolean;
  archived: boolean;
}

export async function getProjects(): Promise<ProjectItem[]> {
  const { githubUsername, exclude, overrides } = projectsConfig;
  let rawRepos: any[] = [];

  const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;

  try {
    const headers: Record<string, string> = {
      'User-Agent': 'Astro-Resume-Website',
      Accept: 'application/vnd.github.v3+json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      { headers, signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        rawRepos = data
          .filter((repo: RawGitHubRepo) => !repo.fork && !repo.archived && !exclude.includes(repo.name))
          .map((repo: RawGitHubRepo) => ({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            htmlUrl: repo.html_url,
            description: repo.description || '',
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            language: repo.language || 'Code',
            updatedAt: repo.updated_at,
            topics: repo.topics || [],
            homepage: repo.homepage || '',
          }));
      }
    }
  } catch (err) {
    // Network or policy failure is expected in airgapped environments
  }

  // Fallback if fetch returned nothing
  if (!rawRepos.length) {
    rawRepos = fallbackCache.filter(repo => !exclude.includes(repo.name));
  }

  // Merge with overrides
  const projects: ProjectItem[] = rawRepos.map(repo => {
    const override = overrides[repo.name] || {};
    const tags = override.tags || (repo.topics?.length ? repo.topics : [repo.language].filter(Boolean));

    return {
      id: repo.id,
      name: repo.name,
      title: override.title || repo.name.replace(/[-_]/g, ' '),
      fullName: repo.fullName || `${githubUsername}/${repo.name}`,
      htmlUrl: repo.htmlUrl,
      description: override.description || repo.description || 'Personal engineering & data project.',
      stars: repo.stars || 0,
      forks: repo.forks || 0,
      language: repo.language || 'Code',
      updatedAt: repo.updatedAt,
      topics: repo.topics || [],
      homepage: repo.homepage || undefined,
      featured: override.featured ?? false,
      demoUrl: override.demoUrl || repo.homepage || undefined,
      highlights: override.highlights || [],
      tags,
    };
  });

  // Sort: featured first, then stars, then updated
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.stars - a.stars;
  });
}

