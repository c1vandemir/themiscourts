import { useTranslation } from 'react-i18next';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import StatCard from './StatCard';
import { useInView } from '../../../hooks/useInView';

export default function Stats() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const items = t('stats.items', { returnObjects: true });

  return (
    <Section id="stats" className="relative overflow-hidden bg-navy-900">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <SectionHeading eyebrow={t('stats.eyebrow')} title={t('stats.title')} light />
      <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <StatCard key={item.icon} {...item} start={inView} />
        ))}
      </div>
    </Section>
  );
}
