import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Globe } from 'lucide-react';
import Button from '../../ui/Button';
import { site } from '../../../config/site';

export default function CourtCard({ id, icon: Icon, language }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const key = `courts.items.${id}`;
  const descId = `court-${id}-desc`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-line transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10 hover:ring-ink">
      {/* Üst şerit: lacivert zemin, hover'da beyaz çizgi */}
      <div className="relative bg-navy-950 px-7 pt-7 pb-10">
        <div className="flex items-start justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 transition group-hover:bg-white group-hover:text-navy-950">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <span className="font-display text-3xl font-bold text-white/15 transition group-hover:text-white/40">
            {t(`${key}.abbr`)}
          </span>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
      </div>

      <div className="flex flex-1 flex-col px-7 pt-6 pb-7">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-page-alt px-3 py-1 text-xs font-semibold text-ink">
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
          {t('courts.language')}: {t(`languages.${language}`)}
        </span>
        <h3 className="mt-4 text-2xl font-bold">{t(`${key}.name`)}</h3>
        <p className="mt-2 text-sm font-medium text-muted">{t(`${key}.topic`)}</p>

        <div className={`grid transition-[grid-template-rows] duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <p id={descId} className="overflow-hidden text-sm leading-relaxed text-ink/75">
            <span className="block pt-4">{t(`${key}.description`)}</span>
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-7">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={descId}
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-semibold text-ink underline-offset-4 hover:text-ink/70 hover:underline"
          >
            {expanded ? t('courts.less') : t('courts.details')}
          </button>
          <Button href={`${site.applyUrl}?court=${id}`} variant="navy" size="sm">
            {t('courts.apply')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}
