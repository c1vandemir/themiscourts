import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/** Sekme başlığını "<Sayfa> | <Site başlığı>" olarak ayarlar; dil değişince güncellenir. */
export function usePageTitle(navKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const base = t('meta.title');
    document.title = navKey ? `${t(`nav.${navKey}`)} | ${base}` : base;
  }, [navKey, t, i18n.resolvedLanguage]);
}
