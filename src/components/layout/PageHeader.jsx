import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

/** Alt sayfaların üstündeki lacivert başlık bandı (şeffaf navbar bunun üzerine oturur). */
export default function PageHeader({ crumb, eyebrow, title, subtitle }) {
  const { t } = useTranslation();

  return (
    <header className="relative isolate overflow-hidden bg-navy-950 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute -top-32 right-[-5%] -z-10 h-80 w-80 rounded-full bg-white/15 blur-3xl" />

      <Container className="text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs font-medium text-white/70">
          <Link to="/" className="hover:text-white">
            {t('nav.home')}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-white">{crumb ?? title}</span>
        </nav>
        {eyebrow && (
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <span aria-hidden="true" className="mx-auto mt-6 block h-0.5 w-14 bg-white" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/80">{subtitle}</p>}
      </Container>
    </header>
  );
}
