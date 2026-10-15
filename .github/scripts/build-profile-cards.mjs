#!/usr/bin/env node
/**
 * Build the profile cards embedded in README.md / README.en.md:
 *   profile-languages.<locale>.svg   most used languages, stacked bar + legend
 *   profile-stats.<locale>.svg       public repos / own repos / commits / merged PRs
 *   profile-projects.<locale>.svg    repositories pushed to most recently
 *
 * Star counts are intentionally not collected: the profile does not track them.
 * Zero dependencies, Node 18+ (global fetch). Run by .github/workflows/profile.yml.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const USER = process.env.GITHUB_USER || 'daftpunkwav';
const TOKEN = process.env.GITHUB_TOKEN || '';
const OUT_DIR = process.env.OUT_DIR || 'dist';
const TOP_LANGUAGES = Number(process.env.TOP_LANGUAGES || 6);
const TOP_PROJECTS = Number(process.env.TOP_PROJECTS || 4);
const INCLUDE_FORKED = process.env.INCLUDE_FORKED === 'true';
const API = 'https://api.github.com';

const ONE_YEAR_AGO = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
const SINCE_DATE = ONE_YEAR_AGO.toISOString().slice(0, 10);
const SINCE_ISO = `${SINCE_DATE}T00:00:00Z`;

// --- palette -----------------------------------------------------------------

// GitHub linguist colours, so the legend matches the language dot on github.com.
const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Go: '#00ADD8',
  Rust: '#dea584', Java: '#b07219', 'C++': '#f34b7d', C: '#555555', 'C#': '#178600',
  HTML: '#e34c26', CSS: '#563d7c', SCSS: '#c6538c', Sass: '#a53b70', Less: '#1d365d',
  Shell: '#89e051', Dockerfile: '#384d54', Lua: '#000080', SQL: '#e38c00',
  Vue: '#41b883', Svelte: '#ff3e00', Astro: '#ff5a03', Solidity: '#AA6746',
  Swift: '#F05138', Kotlin: '#A97BFF', Dart: '#00B4AB', Objective: '#438eff',
  Ruby: '#701516', PHP: '#4F5D95', Perl: '#0298c3', R: '#198CE7', Julia: '#a270ba',
  Elixir: '#6e4a7e', Erlang: '#B83998', Haskell: '#5e5086', Clojure: '#db5855',
  Scala: '#c22d40', Groovy: '#4298b8', Zig: '#ec915c', Nim: '#ffc200', OCaml: '#ef7a08',
  PowerShell: '#012456', Batchfile: '#C1F12E', CMake: '#DA3434', Makefile: '#427819',
  Jupyter: '#DA5B0B', 'Jinja': '#a52a22', Handlebars: '#f7931e', EJS: '#a91e50',
  MDX: '#fcb32c', 'Vim Script': '#199f4b', Emacs: '#c065db', Text: '#8b949e',
};

const FALLBACK_COLOR = '#8b949e';

const CARD = {
  // Kept at 450 so two cards fit side by side in a README without horizontal overflow.
  width: 450,
  padX: 28,
  bg: '#0d1117',
  border: '#30363d',
  title: '#2dd4bf',
  text: '#e6edf3',
  muted: '#8b949e',
  tile: '#161b22',
};

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Ubuntu, Cantarell, Helvetica, Arial, sans-serif";

const LOCALE = {
  en: {
    languages: 'Most Used Languages',
    stats: 'Repository & Contribution',
    projects: 'Recently Active Projects',
    labels: {
      publicRepos: 'Public repositories',
      ownRepos: 'Own projects (no fork)',
      commits: 'Commits - 12 months',
      mergedPrs: 'Merged PRs - 12 months',
    },
    noDescription: 'No description provided',
  },
  zh: {
    languages: '最常使用的语言',
    stats: '仓库与贡献',
    projects: '最近在做的项目',
    labels: {
      publicRepos: '公开仓库',
      ownRepos: '自有项目（不含 fork）',
      commits: '近一年提交',
      mergedPrs: '近一年合并的 PR',
    },
    noDescription: '还没有写简介',
  },
};

// --- GitHub API --------------------------------------------------------------

const BASE_HEADERS = {
  accept: 'application/vnd.github+json',
  'x-github-api-version': '2022-11-28',
  'user-agent': 'github-profile-cards',
};

/**
 * GITHUB_TOKEN is a repository-scoped installation token, which GitHub rejects on
 * endpoints outside that repository ("Resource not accessible by integration").
 * Every endpoint used here is public, so an auth failure falls back to the
 * anonymous quota instead of failing the whole build. A real rate limit is not
 * retried, it would only burn the second quota as well.
 */
async function api(endpoint) {
  const tokens = TOKEN ? [TOKEN, null] : [null];
  let failure = 'no attempt made';
  for (const token of tokens) {
    const headers = { ...BASE_HEADERS };
    if (token) headers.authorization = `Bearer ${token}`;
    const response = await fetch(`${API}${endpoint}`, { headers });
    if (response.ok) {
      return { data: await response.json(), link: response.headers.get('link') ?? '' };
    }
    failure = `${response.status} ${response.statusText}`;
    const rateLimited = response.headers.get('x-ratelimit-remaining') === '0';
    if (![401, 403].includes(response.status) || rateLimited) break;
  }
  throw new Error(`GET ${endpoint} failed: ${failure}`);
}

/** Public repos owned by the user, following pagination through the Link header. */
async function fetchRepos() {
  const repos = [];
  for (let page = 1; ; page += 1) {
    const { data, link } = await api(`/users/${USER}/repos?per_page=100&type=owner&sort=pushed&page=${page}`);
    repos.push(...data);
    if (!link.includes('rel="next"')) return repos;
  }
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

/** Languages of every repo, weighted by bytes. */
async function fetchLanguages(repos) {
  const totals = new Map();
  await mapLimit(repos, 6, async (repo) => {
    const { data } = await api(`/repos/${repo.full_name}/languages`);
    for (const [language, bytes] of Object.entries(data)) {
      totals.set(language, (totals.get(language) ?? 0) + bytes);
    }
  });
  return [...totals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_LANGUAGES)
    .map(([name, bytes]) => ({ name, bytes, color: LANGUAGE_COLORS[name] ?? FALLBACK_COLOR }));
}

/** Commits authored by the user in the last year; the Link header gives the count for free. */
async function fetchCommitCount(repos) {
  const counts = await mapLimit(repos, 6, async (repo) => {
    const { data, link } = await api(`/repos/${repo.full_name}/commits?author=${USER}&since=${SINCE_ISO}&per_page=1`);
    const lastPage = /[?&]page=(\d+)>;\s*rel="last"/.exec(link);
    return lastPage ? Number(lastPage[1]) : data.length;
  });
  return counts.reduce((total, count) => total + count, 0);
}

async function countSearch(query) {
  const { data } = await api(`/search/issues?q=${encodeURIComponent(query)}&per_page=1`);
  return data.total_count;
}

// --- svg helpers -------------------------------------------------------------

const XML_ESCAPES = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
const escapeXml = (value) => String(value).replace(/[<>&'"]/g, (char) => XML_ESCAPES[char]);

/** Approximate advance width; SVG has no text metrics, and guessing wide is cheaper than overflowing. */
function textWidth(text, size) {
  let width = 0;
  for (const char of String(text)) {
    if (/[\u2e80-\u9fff\uff00-\uffef]/.test(char)) width += size;
    else if (/[iljI.,:;'!|]/.test(char)) width += size * 0.3;
    else if (/[A-Z@%&MW]/.test(char)) width += size * 0.68;
    else width += size * 0.55;
  }
  return width;
}

function fit(text, size, maxWidth) {
  const value = String(text);
  if (textWidth(value, size) <= maxWidth) return value;
  let result = value;
  while (result.length > 1 && textWidth(`${result}...`, size) > maxWidth) result = result.slice(0, -1);
  return `${result.trimEnd()}...`;
}

const text = (x, y, size, fill, content, extra = '') =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}"${extra}>${escapeXml(content)}</text>`;

function card(height, label, body) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD.width}" height="${height}" viewBox="0 0 ${CARD.width} ${height}" role="img" aria-label="${escapeXml(label)}">`,
    `<style>text{font-family:${FONT};font-weight:400}</style>`,
    `<rect x="0.5" y="0.5" width="${CARD.width - 1}" height="${height - 1}" rx="12" fill="${CARD.bg}" stroke="${CARD.border}"/>`,
    body,
    '</svg>',
    '',
  ].join('\n');
}

// --- cards -------------------------------------------------------------------

function languagesCard(entries, t) {
  const inner = CARD.width - CARD.padX * 2;
  const rows = Math.ceil(entries.length / 2);
  const rowHeight = 28;
  const legendTop = 112;
  const height = legendTop + (rows - 1) * rowHeight + 26;
  const total = entries.reduce((sum, entry) => sum + entry.bytes, 0) || 1;

  const barY = 76;
  const barHeight = 9;
  let offset = 0;
  const segments = entries.map((entry) => {
    const width = (entry.bytes / total) * inner;
    const rect = `<rect x="${(CARD.padX + offset).toFixed(2)}" y="${barY}" width="${width.toFixed(2)}" height="${barHeight}" fill="${entry.color}"/>`;
    offset += width;
    return rect;
  });

  const legend = entries.map((entry, index) => {
    // Column-major: 1,2,3 down the left, 4,5,6 down the right.
    const column = Math.floor(index / rows);
    const row = index % rows;
    const x = CARD.padX + column * (inner / 2);
    const baseline = legendTop + row * rowHeight;
    const percent = `${((entry.bytes / total) * 100).toFixed(2)}%`;
    const label = fit(entry.name, 13, inner / 2 - 24 - textWidth(percent, 13) - 8);
    return [
      `<circle cx="${x + 5}" cy="${baseline - 4}" r="5" fill="${entry.color}"/>`,
      `<text x="${x + 18}" y="${baseline}" font-size="13" fill="${CARD.text}">${escapeXml(label)} <tspan fill="${CARD.muted}">${percent}</tspan></text>`,
    ].join('');
  });

  const body = [
    text(CARD.padX, 50, 20, CARD.title, t.languages, ' font-weight="700"'),
    `<clipPath id="bar-clip"><rect x="${CARD.padX}" y="${barY}" width="${inner}" height="${barHeight}" rx="${barHeight / 2}"/></clipPath>`,
    `<g clip-path="url(#bar-clip)">${segments.join('')}</g>`,
    legend.join(''),
  ].join('\n');

  return card(height, t.languages, body);
}

function statsCard(stats, t) {
  const inner = CARD.width - CARD.padX * 2;
  const gap = 16;
  const tileWidth = (inner - gap) / 2;
  const tileHeight = 74;
  const gridTop = 78;
  const height = gridTop + tileHeight * 2 + gap + 24;

  const tiles = [
    { value: stats.publicRepos, label: t.labels.publicRepos },
    { value: stats.ownRepos, label: t.labels.ownRepos },
    { value: stats.commits, label: t.labels.commits },
    { value: stats.mergedPrs, label: t.labels.mergedPrs },
  ];

  const cells = tiles.map((tile, index) => {
    const x = CARD.padX + (index % 2) * (tileWidth + gap);
    const y = gridTop + Math.floor(index / 2) * (tileHeight + gap);
    return [
      `<rect x="${x}" y="${y}" width="${tileWidth}" height="${tileHeight}" rx="10" fill="${CARD.tile}"/>`,
      `<text x="${x + 18}" y="${y + 38}" font-size="30" font-weight="700" fill="${CARD.text}">${tile.value}</text>`,
      text(x + 18, y + 60, 12, CARD.muted, fit(tile.label, 12, tileWidth - 32)),
    ].join('');
  });

  const body = [
    text(CARD.padX, 50, 20, CARD.title, t.stats, ' font-weight="700"'),
    cells.join('\n'),
  ].join('\n');

  return card(height, t.stats, body);
}

function projectsCard(repos, t) {
  const inner = CARD.width - CARD.padX * 2;
  const rowHeight = 58;
  const rowsTop = 74;
  const height = rowsTop + repos.length * rowHeight + 18;

  const rows = repos.map((repo, index) => {
    const y = rowsTop + index * rowHeight;
    const language = repo.language ?? '';
    const languageWidth = language ? textWidth(language, 11) + 12 : 0;
    const color = LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
    const name = fit(repo.name, 14, inner - 20 - languageWidth - 12);
    const description = fit(repo.description || t.noDescription, 12, inner - 20);
    return [
      `<circle cx="${CARD.padX + 5}" cy="${y - 5}" r="5" fill="${repo.language ? color : CARD.border}"/>`,
      text(CARD.padX + 20, y, 14, CARD.text, name, ' font-weight="600"'),
      language ? text(CARD.padX + inner, y, 11, CARD.muted, language, ' text-anchor="end"') : '',
      text(CARD.padX + 20, y + 20, 12, CARD.muted, description),
    ].join('');
  });

  const body = [
    text(CARD.padX, 50, 20, CARD.title, t.projects, ' font-weight="700"'),
    rows.join('\n'),
  ].join('\n');

  return card(height, t.projects, body);
}

// --- main --------------------------------------------------------------------

async function main() {
  if (!USER) throw new Error('GITHUB_USER is not set');

  const allRepos = await fetchRepos();
  const repos = allRepos.filter((repo) => (INCLUDE_FORKED || !repo.fork) && !repo.archived);
  // The profile repository itself carries no code and is never worth showing.
  const codeRepos = repos.filter((repo) => repo.name.toLowerCase() !== USER.toLowerCase());

  const [languages, commits, mergedPrs] = await Promise.all([
    fetchLanguages(codeRepos),
    fetchCommitCount(codeRepos),
    countSearch(`author:${USER} is:pr merged:>=${SINCE_DATE}`),
  ]);

  const stats = {
    publicRepos: allRepos.length,
    ownRepos: codeRepos.length,
    commits,
    mergedPrs,
  };

  const projects = [...codeRepos]
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, TOP_PROJECTS);

  await mkdir(OUT_DIR, { recursive: true });
  for (const [locale, t] of Object.entries(LOCALE)) {
    await writeFile(path.join(OUT_DIR, `profile-languages.${locale}.svg`), languagesCard(languages, t), 'utf8');
    await writeFile(path.join(OUT_DIR, `profile-stats.${locale}.svg`), statsCard(stats, t), 'utf8');
    await writeFile(path.join(OUT_DIR, `profile-projects.${locale}.svg`), projectsCard(projects, t), 'utf8');
  }

  console.log(`languages: ${languages.map((l) => `${l.name} ${l.bytes}`).join(', ') || 'none'}`);
  console.log(`stats: ${JSON.stringify(stats)}`);
  console.log(`projects: ${projects.map((r) => r.full_name).join(', ') || 'none'}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
