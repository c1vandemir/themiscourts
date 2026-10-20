import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Sayfa değişince en üste döner; adreste #hash varsa o bölüme kaydırır. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
