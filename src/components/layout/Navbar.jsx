import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { navItems } from '../../data/navigation';
import { site } from '../../config/site';
import { useScrolled } from '../../hooks/useScrolled';

const desktopLink = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-medium transition after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-white after:transition-transform ${
    isActive
      ? 'text-white after:scale-x-100'
      : 'text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100'
  }`;

const mobileLink = ({ isActive }) =>
  `rounded-lg px-3 py-3 font-display text-xl hover:bg-white/5 ${
    isActive ? 'text-white' : 'text-white/90 hover:text-white'
  }`;

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  // Mobil menü açıkken arka plan kaydırmasını kilitle
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy-950/95 shadow-lg shadow-navy-950/30 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className={`flex items-center justify-between transition-all ${scrolled ? 'h-16' : 'h-20'}`}>
        <Logo />

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, path }) => (
            <NavLink key={id} to={path} end className={desktopLink}>
              {t(`nav.${id}`)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button href={site.applyUrl} size="sm" className="max-sm:hidden">
            {t('nav.apply')}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobil menü */}
      <nav
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {navItems.map(({ id, path }) => (
            <NavLink key={id} to={path} end className={mobileLink}>
              {t(`nav.${id}`)}
            </NavLink>
          ))}
          <Button href={site.applyUrl} size="lg" className="mt-4">
            {t('nav.apply')}
          </Button>
        </Container>
      </nav>
    </header>
  );
}
