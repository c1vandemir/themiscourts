import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Sponsors from '../components/sections/Sponsors/Sponsors';
import Seo from '../components/seo/Seo';

export default function SponsorsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="sponsors" />
      <PageHeader
        crumb={t('nav.sponsors')}
        eyebrow={t('sponsors.eyebrow')}
        title={t('sponsors.title')}
        subtitle={t('sponsors.subtitle')}
      />
      <Sponsors withHeading={false} />
    </>
  );
}
