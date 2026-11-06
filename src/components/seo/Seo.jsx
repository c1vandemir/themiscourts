import { useTranslation } from 'react-i18next';
import { canonicalUrl, pages } from '../../config/seo';

/**
 * Sayfaya özel başlık, açıklama ve canonical etiketleri.
 * React 19 bu etiketleri bileşenin neresinde render edilirse edilsin <head>'e taşır;
 * prerender sırasında da statik HTML'in <head> bölümüne yazılırlar.
 */
export default function Seo({ page }) {
  const { t } = useTranslation();
  const { path, noindex } = pages[page];
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);
  const url = noindex ? null : canonicalUrl(path);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
