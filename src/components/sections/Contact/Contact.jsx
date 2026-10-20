import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import ContactForm from './ContactForm';
import { site } from '../../../config/site';

export default function Contact({ withHeading = true }) {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="bg-navy-950">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          {withHeading && (
            <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} subtitle={t('contact.subtitle')} align="left" light />
          )}

          <h3 className={`font-sans ${withHeading ? 'mt-10' : ''} text-sm font-semibold uppercase tracking-widest text-white`}>{t('contact.emailsTitle')}</h3>
          <ul className="mt-4 space-y-3">
            {site.emails.map(({ department, address }) => (
              <li key={department}>
                <a
                  href={`mailto:${address}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-3 transition hover:border-white/50 hover:bg-white/5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-navy-950">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/70">
                      {t(`contact.departments.${department}`)}
                    </span>
                    <span className="block font-medium text-white">{address}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
