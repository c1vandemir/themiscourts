import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { routes } from '../../../data/routes';

export default function Logistics() {
  const { t } = useTranslation();

  return (
    <div id="logistics" className="mt-24 scroll-mt-20">
      <SectionHeading eyebrow={t('logistics.eyebrow')} title={t('logistics.title')} subtitle={t('logistics.subtitle')} />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {routes.map(({ id, icon: Icon }) => {
          const key = `logistics.routes.${id}`;
          const steps = t(`${key}.steps`, { returnObjects: true });
          return (
            <article key={id} className="rounded-3xl border border-line bg-card p-7">
              <header className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-on-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{t(`${key}.title`)}</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-ink/10 px-3 py-1 text-xs font-semibold text-ink">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {t(`${key}.duration`)}
                </span>
              </header>

              {/* Adım adım zaman çizelgesi */}
              <ol className="mt-7 space-y-5">
                {steps.map((step, i) => (
                  <li key={i} className="relative flex gap-4">
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="absolute top-8 left-3.5 h-[calc(100%-0.75rem)] w-px bg-line" />
                    )}
                    <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-card text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-ink/75">{step}</p>
                  </li>
                ))}
              </ol>
            </article>
          );
        })}
      </div>
    </div>
  );
}
