import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Faq from '../components/sections/Faq/Faq';
import Seo from '../components/seo/Seo';

export default function FaqPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="faq" />
      <PageHeader crumb={t('nav.faq')} eyebrow={t('faq.eyebrow')} title={t('faq.title')} subtitle={t('faq.subtitle')} />
      <Faq withHeading={false} />
    </>
  );
}
