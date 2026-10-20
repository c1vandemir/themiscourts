import { useTranslation } from 'react-i18next';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import CourtCard from './CourtCard';
import { courts } from '../../../data/courts';

export default function Courts({ withHeading = true }) {
  const { t } = useTranslation();

  return (
    <Section id="courts">
      {withHeading && (
        <SectionHeading eyebrow={t('courts.eyebrow')} title={t('courts.title')} subtitle={t('courts.subtitle')} />
      )}
      <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${withHeading ? 'mt-14' : ''}`}>
        {courts.map((court) => (
          <CourtCard key={court.id} {...court} />
        ))}
      </div>
    </Section>
  );
}
