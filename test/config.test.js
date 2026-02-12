const assert = require('assert');
const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
  } catch (e) {
    console.error(`FAIL: ${name} — ${e.message}`);
    failed++;
  }
}

test('tailwindcss is installed at v2', () => {
  const pkg = require('tailwindcss/package.json');
  assert(pkg.version.startsWith('2.'));
});

test('tailwind.config.js exists', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'tailwind.config.js')));
});

test('config has purge (v2 syntax)', () => {
  const config = require('../tailwind.config');
  assert(Array.isArray(config.purge));
  assert(config.purge.length > 0);
});

test('config has darkMode', () => {
  const config = require('../tailwind.config');
  assert(config.darkMode === 'media');
});

test('config has variants (v2 syntax)', () => {
  const config = require('../tailwind.config');
  assert(config.variants);
  assert(config.variants.extend);
  assert(config.variants.extend.opacity);
});

test('config has custom colors', () => {
  const config = require('../tailwind.config');
  assert(config.theme.extend.colors.primary);
  assert(config.theme.extend.colors.warmGray);
  assert(config.theme.extend.colors.trueGray);
  assert(config.theme.extend.colors.coolGray);
  assert(config.theme.extend.colors.blueGray);
});

test('config has custom font family', () => {
  const config = require('../tailwind.config');
  assert(config.theme.extend.fontFamily.sans);
});

test('config has custom spacing', () => {
  const config = require('../tailwind.config');
  assert(config.theme.extend.spacing['128'] === '32rem');
});

test('postcss.config.js exists', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'postcss.config.js')));
});

test('postcss config has tailwindcss plugin', () => {
  const postcssConfig = require('../postcss.config');
  assert(postcssConfig.plugins.tailwindcss !== undefined);
});

test('HTML file exists with Tailwind classes', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'src', 'index.html'), 'utf8');
  assert(html.includes('bg-coolGray-50'));
  assert(html.includes('text-primary-600'));
  assert(html.includes('bg-warmGray'));
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
