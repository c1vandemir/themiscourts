import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Contact from '../components/sections/Contact/Contact';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ContactPage() {
  const { t } = useTranslation();
  usePageTitle('contact');

  return (
    <>
      <PageHeader
        crumb={t('nav.contact')}
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <Contact withHeading={false} />
    </>
  );
}
