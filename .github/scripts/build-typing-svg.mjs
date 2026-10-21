#!/usr/bin/env node
/**
 * Build the typing banner that sits under the contribution graph:
 *   typing-light.svg, typing-dark.svg
 *
 * The readme-typing-svg service cannot follow the colour scheme and only
 * offers a fixed rainbow, so the banner is rendered here instead: one file per
 * scheme and the README picks the matching one with <picture>, the same way it
 * already picks the snake.
 *
 * The text is filled with a gradient built from the snake palette. The ramp is
 * interpolated in linear light and sampled densely, so it reads as one
 * continuous gradient rather than a few colour bands, and it drifts sideways
 * for ever: the gradient moves by exactly one period per cycle, which is what
 * makes the loop seamless.
 *
 * Zero dependencies, Node 18+. Run by .github/workflows/profile.yml.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT_DIR = process.env.OUT_DIR || 'dist';
const FONT_PATH = process.env.FONT_PATH || path.join('.github', 'assets', 'FiraCode-Medium.ttf');

const LINES = [
  'LLM Agents · RAG · Streaming · Evals · Tools · Memory',
  'Python · TypeScript · C# · Go · C/C++ · Rust',
];

// Colours taken from the snake palettes in .github/workflows/profile.yml, so the
// banner and the contribution grid read as one picture:
//   light  cyberpunk, cyan through hot pink
//   dark   synthwave, cyan through sunset orange
const THEMES = {
  light: ['#0891b2', '#2563eb', '#9333ea', '#c026d3', '#db2777'],
  dark: ['#00f5d4', '#6d28d9', '#c026d3', '#ff2e97', '#ffb03a'],
};

const WIDTH = 700;
const HEIGHT = 44;
const FONT_SIZE = 20;
const PERIOD = 700;   // gradient period in user units
const TILE = PERIOD * 2;
const SAMPLES = 6;    // colour samples per ramp segment
const DRIFT = '18s';  // time for the gradient to travel one period

// --- colour ------------------------------------------------------------------

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
};

const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);

const mix = (a, b, t) => {
  const out = a.map((value, i) => {
    const linear = toLinear(value / 255) * (1 - t) + toLinear(b[i] / 255) * t;
    return Math.round(Math.min(255, Math.max(0, toSrgb(linear) * 255)));
  });
  return `#${out.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};

// The ramp goes up the palette and back down, so the gradient repeats without a
// seam: the end of one period is the start of the next.
const controlPoints = (colors) => {
  const up = colors;
  const down = colors.slice(1, -1).reverse();
  return [...up, ...down];
};

const ramp = (colors) => {
  const points = controlPoints(colors);
  const stops = [];
  const segments = points.length; // last point closes the loop back to the first
  for (let s = 0; s < segments; s++) {
    const from = hexToRgb(points[s]);
    const to = hexToRgb(points[(s + 1) % points.length]);
    for (let i = 0; i < SAMPLES; i++) {
      const t = i / SAMPLES;
      const offset = (s + t) / segments;
      stops.push({ offset, color: mix(from, to, t) });
    }
  }
  return stops;
};

// --- svg ---------------------------------------------------------------------

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const gradient = (id, colors) => {
  const stops = ramp(colors);
  const one = stops.map((s) => `<stop offset='${s.offset.toFixed(5)}' stop-color='${s.color}'/>`).join('');
  // Two periods per tile, so the drift of exactly one period lands on the same
  // pattern again and the loop has no visible seam.
  const two = one + stops.map((s) => `<stop offset='${(s.offset + 1).toFixed(5)}' stop-color='${s.color}'/>`).join('');
  return (
    `<linearGradient id='${id}' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='${TILE}' y2='0' spreadMethod='repeat'>` +
    two +
    `<animateTransform attributeName='gradientTransform' type='translate' from='0 0' to='-${PERIOD} 0' dur='${DRIFT}' repeatCount='indefinite'/>` +
    `</linearGradient>`
  );
};

// The reveal is the same trick the readme-typing-svg service uses: the path the
// text is written along grows from nothing to the full width, and the next
// line starts when the previous one is done.
const line = (index, text) => {
  const pathId = `p${index}`;
  const animateId = `d${index}`;
  const begin = index === 0 ? '0s' : `${animateId - 1}.end`;
  const path =
    `<path id='${pathId}'>` +
    `<animate id='${animateId}' attributeName='d' begin='${begin}' dur='6200ms' fill='remove' ` +
    `values='m0,22 h0 ; m0,22 h${WIDTH} ; m0,22 h${WIDTH} ; m0,22 h0' ` +
    `keyTimes='0;0.64516129032258;0.83870967741935;1' />` +
    `</path>`;
  const label =
    `<text font-family='"Fira Code", monospace' fill='url(#g)' font-size='${FONT_SIZE}' ` +
    `dominant-baseline='middle' x='50%' text-anchor='middle' letter-spacing='normal'>` +
    `<textPath xlink:href='#${pathId}'>${escapeXml(text)}</textPath></text>`;
  return path + label;
};

const build = (colors, fontBase64) => {
  const title = LINES.join('. ');
  return (
    `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' ` +
    `viewBox='0 0 ${WIDTH} ${HEIGHT}' style='background-color: #00000000;' width='${WIDTH}px' height='${HEIGHT}px' ` +
    `role='img' aria-label='${escapeXml(title)}'>` +
    `<title>${escapeXml(title)}</title>` +
    `<style>@font-face{font-family:'Fira Code';font-style:normal;font-weight:500;font-display:fallback;` +
    `src:url(data:font/truetype;base64,${fontBase64})}</style>` +
    `<defs>${gradient('g', colors)}</defs>` +
    LINES.map((text, index) => line(index, text)).join('') +
    `</svg>`
  );
};

async function main() {
  const font = await readFile(FONT_PATH);
  const fontBase64 = font.toString('base64');

  await mkdir(OUT_DIR, { recursive: true });
  for (const [theme, colors] of Object.entries(THEMES)) {
    const file = path.join(OUT_DIR, `typing-${theme}.svg`);
    await writeFile(file, build(colors, fontBase64), 'utf8');
    console.log(`typing-${theme}.svg: ${colors.join(' → ')}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
