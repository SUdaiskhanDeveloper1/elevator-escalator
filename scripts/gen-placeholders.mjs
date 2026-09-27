/**
 * Generates original, themed SVG placeholder artwork into /public/images.
 * All artwork is procedurally generated for this build — no third-party assets.
 * Run: node scripts/gen-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'images');

const NAVY = '#123B5D';
const NAVY_D = '#0C2A45';
const STEEL = '#2E6B9E';
const GOLD = '#D4A83F';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Architectural line motif that reads as building + shaft. */
function motif(kind) {
  if (kind === 'escalator') {
    return `
      <g stroke="rgba(255,255,255,0.16)" stroke-width="2" fill="none">
        <line x1="180" y1="620" x2="1060" y2="150"/>
        <line x1="230" y1="620" x2="1110" y2="150"/>
        ${Array.from({ length: 14 }, (_, i) => {
          const t = i / 13;
          const x = 180 + t * 880;
          const y = 620 - t * 470;
          return `<line x1="${x.toFixed(0)}" y1="${y.toFixed(0)}" x2="${(x + 50).toFixed(0)}" y2="${y.toFixed(0)}"/>`;
        }).join('')}
      </g>`;
  }
  if (kind === 'walkway') {
    return `
      <g stroke="rgba(255,255,255,0.16)" stroke-width="2" fill="none">
        <line x1="120" y1="360" x2="1080" y2="360"/>
        <line x1="120" y1="470" x2="1080" y2="470"/>
        ${Array.from({ length: 18 }, (_, i) => {
          const x = 130 + i * 52;
          return `<line x1="${x}" y1="360" x2="${x}" y2="470"/>`;
        }).join('')}
      </g>`;
  }
  // default: elevator shaft + cabin
  return `
    <g stroke="rgba(255,255,255,0.16)" stroke-width="2" fill="none">
      <rect x="470" y="120" width="260" height="560"/>
      <rect x="500" y="180" width="200" height="440"/>
      <line x1="600" y1="180" x2="600" y2="620"/>
      ${Array.from({ length: 8 }, (_, i) => `<line x1="470" y1="${120 + i * 70}" x2="730" y2="${120 + i * 70}"/>`).join('')}
    </g>`;
}

function svg({ label, sublabel = '', kind = 'elevator', hue = NAVY, hue2 = NAVY_D, w = 1200, h = 800 }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(label)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${hue}"/>
      <stop offset="1" stop-color="${hue2}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  ${motif(kind)}
  <rect x="0" y="${h - 6}" width="${w}" height="6" fill="${GOLD}"/>
  <text x="${w - 70}" y="60" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.55)">SAMPLE / PLACEHOLDER</text>
</svg>`;
}

const files = [
  // Brand
  { path: 'brand/logo.svg', content: logoSvg(false) },
  { path: 'brand/logo-light.svg', content: logoSvg(true) },
  { path: 'og/og-default.svg', content: svg({ label: 'Ascendix', sublabel: 'Vertical Mobility', kind: 'elevator', w: 1200, h: 630 }) },

  // Hero + category cards
  { path: 'hero/hero-1.svg', content: svg({ label: 'Engineered Vertical Mobility', sublabel: 'Elevators & Escalators', kind: 'elevator', hue: '#0F3350', hue2: '#081E31', w: 1600, h: 900 }) },
  { path: 'hero/hero-2.svg', content: svg({ label: 'Built for Modern Buildings', sublabel: 'Commercial & Residential', kind: 'escalator', hue: '#164a70', hue2: '#0C2A45', w: 1600, h: 900 }) },
  { path: 'hero/hero-3.svg', content: svg({ label: 'Safety. Efficiency. Comfort.', sublabel: 'Global Project Support', kind: 'walkway', hue: '#123B5D', hue2: '#0A2135', w: 1600, h: 900 }) },

  { path: 'categories/elevators.svg', content: svg({ label: 'Elevators', sublabel: 'Category', kind: 'elevator' }) },
  { path: 'categories/escalators.svg', content: svg({ label: 'Escalators', sublabel: 'Category', kind: 'escalator', hue: '#164a70' }) },
  { path: 'categories/moving-walkways.svg', content: svg({ label: 'Moving Walkways', sublabel: 'Category', kind: 'walkway', hue: '#1a5580' }) },
  { path: 'categories/home-elevators.svg', content: svg({ label: 'Home & Villa Elevators', sublabel: 'Category', kind: 'elevator', hue: '#0f3350' }) },

  { path: 'about/factory.svg', content: svg({ label: 'Engineering & Manufacturing', sublabel: 'About Ascendix', kind: 'elevator', hue: '#123B5D', hue2: '#0A2135' }) },
];

// Products (reuse kinds/hues)
const products = [
  ['products/passenger-elevator', 'Passenger Elevator', 'elevator', NAVY],
  ['products/hospital-elevator', 'Hospital Elevator', 'elevator', '#12506d'],
  ['products/cargo-elevator', 'Cargo Elevator', 'elevator', '#0f3350'],
  ['products/panoramic-elevator', 'Panoramic Elevator', 'elevator', '#164a70'],
  ['products/home-elevator', 'Home Elevator', 'elevator', '#1a5580'],
  ['products/glass-cabin-elevator', 'Glass Cabin Elevator', 'elevator', '#12506d'],
  ['products/wood-cabin-elevator', 'Wood Cabin Elevator', 'elevator', '#0f3350'],
  ['products/dumbwaiter', 'Dumbwaiter', 'elevator', '#164a70'],
  ['products/commercial-escalator', 'Commercial Escalator', 'escalator', '#164a70'],
  ['products/heavy-duty-escalator', 'Heavy-Duty Escalator', 'escalator', '#12506d'],
  ['products/moving-walkway', 'Moving Walkway', 'walkway', '#1a5580'],
];
for (const [path, label, kind, hue] of products) {
  files.push({ path: `${path}.svg`, content: svg({ label, sublabel: 'Product', kind, hue }) });
  files.push({ path: `${path}-2.svg`, content: svg({ label: `${label} — Interior`, sublabel: 'Detail', kind, hue }) });
  files.push({ path: `${path}-3.svg`, content: svg({ label: `${label} — Detail`, sublabel: 'Gallery', kind, hue: NAVY_D }) });
}

// Projects
const projects = [
  ['projects/marina-towers', 'Marina Towers'],
  ['projects/central-hospital', 'Central Medical Center'],
  ['projects/grand-mall', 'Grand Central Mall'],
  ['projects/harbour-hotel', 'Harbour Grand Hotel'],
  ['projects/logistics-hub', 'National Logistics Hub'],
  ['projects/metro-interchange', 'Metro Interchange'],
  ['projects/riverside-residences', 'Riverside Residences'],
  ['projects/govt-complex', 'Government Complex'],
];
projects.forEach(([path, label], i) => {
  const kinds = ['elevator', 'escalator', 'walkway'];
  files.push({ path: `${path}.svg`, content: svg({ label, sublabel: 'Project', kind: kinds[i % 3], hue: i % 2 ? '#12506d' : NAVY }) });
  files.push({ path: `${path}-2.svg`, content: svg({ label: `${label} — View`, sublabel: 'Gallery', kind: kinds[(i + 1) % 3], hue: NAVY_D }) });
});

// News
const news = [
  ['news/global-expansion', 'Global Expansion'],
  ['news/energy-efficiency', 'Energy-Efficient Drives'],
  ['news/safety-standards', 'Safety Standards'],
  ['news/rd-lab', 'New R&D Laboratory'],
];
news.forEach(([path, label], i) => {
  files.push({ path: `${path}.svg`, content: svg({ label, sublabel: 'News', kind: i % 2 ? 'escalator' : 'elevator', hue: i % 2 ? '#164a70' : NAVY }) });
});

function logoSvg(light) {
  const fg = light ? '#ffffff' : NAVY;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 48" width="220" height="48" role="img" aria-label="Ascendix">
  <g fill="none" stroke="${fg}" stroke-width="3">
    <path d="M12 38 L24 10 L36 38" />
    <line x1="18" y1="26" x2="30" y2="26"/>
  </g>
  <polygon points="24,4 30,12 18,12" fill="${GOLD}"/>
  <text x="50" y="32" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="${fg}" letter-spacing="0.5">Ascendix</text>
</svg>`;
}

let count = 0;
for (const f of files) {
  const out = join(ROOT, f.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, f.content, 'utf8');
  count++;
}
console.log(`Generated ${count} placeholder assets into public/images`);
