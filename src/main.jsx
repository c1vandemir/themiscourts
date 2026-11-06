import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import i18n from './i18n';
import './index.css';
import App from './App';
import { PAGE_HEAD_SELECTOR } from './config/seo';

// Görsellerin sürüklenip yeni sekmede açılmasını engelle (CSS'teki -webkit-user-drag Firefox'ta çalışmaz)
document.addEventListener('dragstart', (e) => {
  if (e.target instanceof HTMLImageElement) e.preventDefault();
});

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Build sırasında scripts/prerender.js her sayfanın HTML'ini önceden üretir ve #root'a
// hangi adres (data-prerendered) ve hangi dil (data-lang) için üretildiğini yazar.
const { prerendered, lang } = container.dataset;
const here = window.location.pathname.replace(/\/+$/, '') || '/';
const canHydrate =
  container.hasChildNodes() && lang === i18n.resolvedLanguage && (prerendered === '*' || prerendered === here);

if (canHydrate) {
  // Mevcut HTML'i yeniden çizmeden etkileşimli hâle getir
  hydrateRoot(container, app);
} else {
  // Geliştirme sunucusu ya da kullanıcının kayıtlı dili farklı: sıfırdan çiz.
  // index.html'deki sayfaya özel etiketleri kaldır; React sayfanın kendi etiketlerini <head>'e ekler.
  document.head.querySelectorAll(PAGE_HEAD_SELECTOR).forEach((el) => el.remove());
  container.replaceChildren();
  createRoot(container).render(app);
}
