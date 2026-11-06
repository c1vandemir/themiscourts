import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from '../locales/tr.json';
import en from '../locales/en.json';
import { PRERENDER_LANGUAGE } from '../config/seo';

// Dil düğmesindeki sıra
export const LANGUAGES = ['en', 'tr'];

// Ziyaretçi seçim yapana kadar site Türkçe açılır. Önceden render edilen HTML de bu dildedir;
// değiştirirseniz src/config/seo.js içindeki PRERENDER_LANGUAGE'i ve index.html'i de güncelleyin.
export const DEFAULT_LANGUAGE = PRERENDER_LANGUAGE;

const isBrowser = typeof window !== 'undefined';

if (isBrowser) i18n.use(LanguageDetector);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  // Sunucuda (prerender) tarayıcı tespiti yok; doğrudan varsayılan dil kullanılır
  lng: isBrowser ? undefined : DEFAULT_LANGUAGE,
  supportedLngs: LANGUAGES,
  fallbackLng: DEFAULT_LANGUAGE,
  nonExplicitSupportedLngs: true,
  interpolation: { escapeValue: false },
  detection: {
    // Tarayıcı dili bilinçli olarak dikkate alınmıyor: yalnızca kullanıcının kaydettiği seçim
    order: ['localStorage'],
    lookupLocalStorage: 'lang',
    caches: ['localStorage'],
  },
});

// <html lang> özniteliğini aktif dile senkron tut (sayfa başlıkları: components/seo/Seo)
if (isBrowser) {
  document.documentElement.lang = i18n.resolvedLanguage;
  i18n.on('languageChanged', () => {
    document.documentElement.lang = i18n.resolvedLanguage;
  });
}

export default i18n;
