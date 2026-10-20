import { useTranslation } from 'react-i18next';
import { CheckCircle2, MapPin, Navigation } from 'lucide-react';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Button from '../../ui/Button';
import Logistics from './Logistics';
import { site } from '../../../config/site';

export default function Venue({ withHeading = true }) {
  const { t } = useTranslation();
  const query = encodeURIComponent(site.mapQuery);
  const highlights = t('venue.highlights', { returnObjects: true });

  return (
    <Section id="venue">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          {withHeading && <SectionHeading eyebrow={t('venue.eyebrow')} title={t('venue.title')} align="left" />}
          <p className={`leading-relaxed text-ink/75 ${withHeading ? 'mt-6' : 'text-lg'}`}>{t('venue.description')}</p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-ink" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-page-alt p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">{t('venue.addressLabel')}</p>
              <p className="mt-1 text-ink">{t('venue.address')}</p>
            </div>
          </div>

          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
            variant="outlineDark"
            className="mt-6"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            {t('venue.directions')}
          </Button>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15 ring-1 ring-line">
          <iframe
            title={t('venue.mapTitle')}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="aspect-[4/3] w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <Logistics />
    </Section>
  );
}
