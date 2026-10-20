import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Courts from '../components/sections/Courts/Courts';
import { usePageTitle } from '../hooks/usePageTitle';

export default function CourtsPage() {
  const { t } = useTranslation();
  usePageTitle('courts');

  return (
    <>
      <PageHeader
        crumb={t('nav.courts')}
        eyebrow={t('courts.eyebrow')}
        title={t('courts.title')}
        subtitle={t('courts.subtitle')}
      />
      <Courts withHeading={false} />
    </>
  );
}
