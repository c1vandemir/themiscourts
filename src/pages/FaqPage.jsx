import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Faq from '../components/sections/Faq/Faq';
import { usePageTitle } from '../hooks/usePageTitle';

export default function FaqPage() {
  const { t } = useTranslation();
  usePageTitle('faq');

  return (
    <>
      <PageHeader crumb={t('nav.faq')} eyebrow={t('faq.eyebrow')} title={t('faq.title')} subtitle={t('faq.subtitle')} />
      <Faq withHeading={false} />
    </>
  );
}
