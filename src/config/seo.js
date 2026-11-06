// SEO ayarları — hem uygulama (components/seo/Seo.jsx) hem de build sonrası prerender betiği
// (scripts/prerender.js) tarafından kullanılır; bu yüzden bu dosya hiçbir şey import etmez.
// Sayfa başlıkları ve açıklamaları dile bağlı olduğu için src/locales altındaki "seo" anahtarındadır.

export const SITE_URL = 'https://themiscourtsim.com';

// Önceden HTML'e render edilen içeriğin dili (varsayılan site dili ile aynı olmalı)
export const PRERENDER_LANGUAGE = 'tr';

// Arama motoruna açık sayfalar. `file`: dist içinde üretilecek statik HTML dosyası.
// Yeni bir route eklerseniz buraya ve public/sitemap.xml'e de ekleyin.
export const pages = {
  home: { path: '/', file: 'index.html' },
  courts: { path: '/courts', file: 'courts/index.html' },
  team: { path: '/team', file: 'team/index.html' },
  venue: { path: '/venue', file: 'venue/index.html' },
  sponsors: { path: '/sponsors', file: 'sponsors/index.html' },
  faq: { path: '/faq', file: 'faq/index.html' },
  contact: { path: '/contact', file: 'contact/index.html' },
  // Bilinmeyen tüm adresler için Netlify'ın 404 durum koduyla sunduğu sayfa
  notFound: { path: '*', file: '404.html', noindex: true },
};

export const canonicalUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Sayfaya özel <head> etiketleri. index.html'deki varsayılanları prerender sırasında ve
// (hydrate edilmeyen durumlarda) tarayıcıda temizlemek için kullanılır; React bunları yeniden ekler.
export const PAGE_HEAD_SELECTOR = [
  'title',
  'meta[name="description"]',
  'meta[name="robots"]',
  'link[rel="canonical"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
].join(',');
