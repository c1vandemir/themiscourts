import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Venue from '../components/sections/Venue/Venue';
import { usePageTitle } from '../hooks/usePageTitle';

export default function VenuePage() {
  const { t } = useTranslation();
  usePageTitle('venue');

  return (
    <>
      <PageHeader crumb={t('nav.venue')} eyebrow={t('venue.eyebrow')} title={t('venue.title')} />
      <Venue withHeading={false} />
    </>
  );
}
