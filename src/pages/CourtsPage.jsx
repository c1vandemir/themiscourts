import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Courts from '../components/sections/Courts/Courts';
import Seo from '../components/seo/Seo';

export default function CourtsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="courts" />
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
