import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Contact from '../components/sections/Contact/Contact';
import Seo from '../components/seo/Seo';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="contact" />
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
