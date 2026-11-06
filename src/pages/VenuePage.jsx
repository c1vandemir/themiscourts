import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Venue from '../components/sections/Venue/Venue';
import Seo from '../components/seo/Seo';

export default function VenuePage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="venue" />
      <PageHeader crumb={t('nav.venue')} eyebrow={t('venue.eyebrow')} title={t('venue.title')} />
      <Venue withHeading={false} />
    </>
  );
}
