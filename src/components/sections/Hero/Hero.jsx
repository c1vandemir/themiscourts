import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import Countdown from './Countdown';
import { site } from '../../../config/site';
import heroImage from '../../../assets/hero-cibali.jpg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden bg-navy-950 pt-24 pb-16">
      {/* Arka plan: kampüs fotoğrafı + yalnızca okunabilirlik için hafif, renksiz karartma */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-black/35 via-black/15 to-black/45" />

      <Container className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {t('hero.eyebrow')}
        </p>

        <h1 className="mt-8 pb-2 font-display text-6xl leading-tight font-bold italic sm:text-8xl lg:text-9xl">
          <span className="pr-2 text-white [text-shadow:0_4px_24px_rgb(0_0_0/0.55)]">{site.name}</span>
        </h1>

        <div className="mx-auto mt-10 max-w-2xl">
          <Countdown target={site.eventDate} enabled={site.countdownActive} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={site.applyUrl} size="lg">
            {t('hero.apply')}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button to="/courts" variant="outlineLight" size="lg">
            {t('hero.explore')}
          </Button>
        </div>
      </Container>

      <a
        href="#letters"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hover:text-white"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}
