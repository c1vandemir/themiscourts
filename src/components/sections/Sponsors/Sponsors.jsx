import { useTranslation } from 'react-i18next';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Button from '../../ui/Button';
import Marquee from '../../ui/Marquee';
import SponsorLogo from './SponsorLogo';
import { sponsors } from '../../../data/sponsors';
import { site } from '../../../config/site';

const tierAccent = {
  gold: 'text-ink',
  silver: 'text-ink/60',
  bronze: 'text-ink',
};

function TierTitle({ tier, children }) {
  return (
    <h3 className={`text-center font-sans text-xs font-semibold uppercase tracking-[0.3em] ${tierAccent[tier]}`}>
      {children}
    </h3>
  );
}

export default function Sponsors({ withHeading = true }) {
  const { t } = useTranslation();
  const prEmail = site.emails.find((e) => e.department === 'pr')?.address;

  return (
    <Section id="sponsors" className="bg-page-alt">
      {withHeading && (
        <SectionHeading eyebrow={t('sponsors.eyebrow')} title={t('sponsors.title')} subtitle={t('sponsors.subtitle')} />
      )}

      <div className={`space-y-14 ${withHeading ? 'mt-16' : ''}`}>
        {/* Altın: sabit, büyük grid */}
        <div>
          <TierTitle tier="gold">{t('sponsors.tiers.gold')}</TierTitle>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.gold.map((s) => (
              <SponsorLogo key={s.name} tier="gold" {...s} />
            ))}
          </div>
        </div>

        {/* Gümüş & Bronz: sonsuz kayan şerit */}
        <div>
          <TierTitle tier="silver">{t('sponsors.tiers.silver')}</TierTitle>
          <div className="mt-6">
            <Marquee duration="35s">
              {sponsors.silver.map((s) => (
                <SponsorLogo key={s.name} tier="silver" {...s} />
              ))}
            </Marquee>
          </div>
        </div>

        <div>
          <TierTitle tier="bronze">{t('sponsors.tiers.bronze')}</TierTitle>
          <div className="mt-6">
            <Marquee duration="45s" reverse>
              {sponsors.bronze.map((s) => (
                <SponsorLogo key={s.name} tier="bronze" {...s} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-navy-950 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-2xl text-white">{t('sponsors.cta')}</p>
        <Button href={`mailto:${prEmail}`}>{t('sponsors.ctaButton')}</Button>
      </div>
    </Section>
  );
}
