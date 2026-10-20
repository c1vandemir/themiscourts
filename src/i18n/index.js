import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from '../locales/tr.json';
import en from '../locales/en.json';

// İlk dil varsayılandır; ziyaretçi seçim yapana kadar site İngilizce açılır.
export const LANGUAGES = ['en', 'tr'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    supportedLngs: LANGUAGES,
    fallbackLng: 'en',
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      // Tarayıcı dili bilinçli olarak dikkate alınmıyor: yalnızca kullanıcının kaydettiği seçim
      order: ['localStorage'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  });

// <html lang> özniteliğini aktif dile senkron tut (sekme başlığı: hooks/usePageTitle)
document.documentElement.lang = i18n.resolvedLanguage;
i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.resolvedLanguage;
});

export default i18n;
