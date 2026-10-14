export const languageColors: Record<string, string> = {
  Python: '#3572A5',
  'Jupyter Notebook': '#DA5B0B',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  Java: '#b07219',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  SQL: '#e38c00',
  R: '#198CE7',
};

export function getLanguageColor(lang?: string | null): string {
  if (!lang) return '#9ca3af';
  return languageColors[lang] || '#3b82f6';
}

