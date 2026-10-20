import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Accordion from '../../ui/Accordion';

function ContactPrompt() {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-ink/60">{t('faq.more')}</p>
      <Link to="/contact" className="mt-2 inline-flex items-center gap-2 font-semibold text-ink hover:text-ink/70">
        {t('faq.contact')}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </>
  );
}

export default function Faq({ withHeading = true }) {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true });

  // Kendi sayfasında: başlık PageHeader'da, akordeon ortada tek sütun
  if (!withHeading) {
    return (
      <Section id="faq" containerClassName="max-w-3xl">
        <Accordion items={items} />
        <div className="mt-10 text-center">
          <ContactPrompt />
        </div>
      </Section>
    );
  }

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} subtitle={t('faq.subtitle')} align="left" />
          <div className="mt-8">
            <ContactPrompt />
          </div>
        </div>
        <Accordion items={items} />
      </div>
    </Section>
  );
}
