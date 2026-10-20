import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Sponsors from '../components/sections/Sponsors/Sponsors';
import { usePageTitle } from '../hooks/usePageTitle';

export default function SponsorsPage() {
  const { t } = useTranslation();
  usePageTitle('sponsors');

  return (
    <>
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
