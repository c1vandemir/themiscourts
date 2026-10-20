import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../i18n';

export default function LanguageToggle({ className = '' }) {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className={`inline-flex rounded-full border border-white/20 p-0.5 text-xs font-semibold ${className}`}
    >
      {LANGUAGES.map((lng) => {
        const active = lng === current;
        return (
          <button
            key={lng}
            type="button"
            lang={lng}
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(lng)}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition ${
              active ? 'bg-white text-navy-950' : 'text-white/70 hover:text-white'
            }`}
          >
            {lng}
          </button>
        );
      })}
    </div>
  );
}
