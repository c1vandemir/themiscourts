import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Seo from '../components/seo/Seo';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="notFound" />
      <PageHeader eyebrow="404" title={t('nav.notFound')} subtitle={t('notFound.text')} />
      <Section containerClassName="text-center">
        <Button to="/" variant="navy" size="lg">
          {t('notFound.back')}
        </Button>
      </Section>
    </>
  );
}
