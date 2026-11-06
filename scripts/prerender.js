// Build sonrası statik HTML üretimi (SSG).
// `vite build` istemci paketini dist/'e, `vite build --ssr` ise src/entry-server.jsx'i
// node_modules/.prerender'a derler. Bu betik her route'u React'in kendi prerender API'siyle
// render eder ve içeriği dist/<route>/index.html dosyalarına yazar; böylece arama motorları
// sayfa metnini, başlığı ve açıklamayı JavaScript çalıştırmadan görür. Tarayıcı bu HTML'i hydrate eder.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pages, PRERENDER_LANGUAGE } from '../src/config/seo.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'node_modules', '.prerender');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// React 19, <title>/<meta>/<link> gibi etiketleri çıktının başına koyar; bunlar <head>'e taşınır.
const LEADING_HEAD_TAGS = /^(?:<title>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*>)*/;

// index.html'deki (ana sayfaya ait) varsayılan sayfa etiketleri; her sayfada kendi etiketleriyle değiştirilir.
// src/config/seo.js içindeki PAGE_HEAD_SELECTOR ile aynı kümeyi kapsar.
const DEFAULT_PAGE_TAGS = [
  /<meta\s+name="(?:description|robots|twitter:title|twitter:description)"[^>]*>\s*/g,
  /<meta\s+property="og:(?:title|description|url)"[^>]*>\s*/g,
  /<link\s+rel="canonical"[^>]*>\s*/g,
];

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

let failed = false;

for (const [name, { path: route, file }] of Object.entries(pages)) {
  // 404 sayfası, eşleşmeyen herhangi bir adresle render edilir
  const url = route === '*' ? '/404' : route;
  const appHtml = await render(url, PRERENDER_LANGUAGE);

  const headTags = appHtml.match(LEADING_HEAD_TAGS)[0];
  const body = appHtml.slice(headTags.length);

  if (!headTags.includes('<title>') || !/<h1[\s>]/.test(body)) {
    console.error(`✗ ${name}: <title> veya <h1> üretilemedi`);
    failed = true;
  }

  let html = template;
  for (const pattern of DEFAULT_PAGE_TAGS) html = html.replace(pattern, '');
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, () => headTags)
    .replace(
      '<div id="root"></div>',
      () =>
        `<div id="root" data-prerendered="${escapeAttr(route)}" data-lang="${PRERENDER_LANGUAGE}">${body}</div>`,
    );

  const outFile = path.join(distDir, file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`✓ ${route.padEnd(10)} → dist/${file} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });

if (failed) process.exit(1);
