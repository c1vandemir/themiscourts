import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import Container from '../ui/Container';
import Logo from './Logo';
import { socialIcons } from '../ui/SocialIcons';
import { footerLinks } from '../../data/navigation';
import { site } from '../../config/site';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <Container className="grid gap-12 border-t border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{t('footer.tagline')}</p>
          <p className="mt-6 flex max-w-sm items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
            <span>{t('venue.address')}</span>
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">{t('footer.quickLinks')}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map(({ id, path }) => (
              <li key={id}>
                <Link to={path} className="transition hover:text-white">
                  {t(`nav.${id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">{t('footer.follow')}</h3>
          <ul className="mt-4 flex gap-3">
            {Object.entries(site.socials).map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white hover:bg-white hover:text-navy-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}. {t('footer.rights')}
          </p>
          <button type="button" onClick={() => window.scrollTo({ top: 0 })} className="hover:text-white">
            ↑ {t('footer.backToTop')}
          </button>
        </Container>
      </div>
    </footer>
  );
}
