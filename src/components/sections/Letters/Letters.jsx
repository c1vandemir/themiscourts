import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Tabs, { TabPanel } from '../../ui/Tabs';
import Avatar from '../../ui/Avatar';
import { letters } from '../../../data/letters';

export default function Letters() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(letters[0].id);
  const author = letters.find((l) => l.id === activeId);
  const key = `letters.items.${activeId}`;
  const paragraphs = t(`${key}.body`, { returnObjects: true });

  return (
    <Section id="letters" className="bg-page-alt">
      <SectionHeading eyebrow={t('letters.eyebrow')} title={t('letters.title')} />

      <div className="mt-10 flex justify-center">
        <Tabs
          idPrefix="letters"
          value={activeId}
          onChange={setActiveId}
          tabs={letters.map((l) => ({ id: l.id, label: t(`letters.items.${l.id}.tab`) }))}
        />
      </div>

      <TabPanel
        idPrefix="letters"
        activeId={activeId}
        className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start"
      >
        {/* Yazar kartı */}
        <aside className="flex flex-col items-center text-center lg:sticky lg:top-28">
          <Avatar name={author.name} src={author.photo} size="lg" />
          <p className="mt-5 font-display text-xl font-semibold text-ink">{author.name}</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-widest text-ink">{t(`${key}.role`)}</p>
        </aside>

        {/* Mektup */}
        <article key={activeId} className="relative rounded-3xl bg-card p-8 shadow-xl shadow-navy-900/5 ring-1 ring-line sm:p-12">
          <Quote aria-hidden="true" className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-accent p-2 text-on-accent" />
          <p className="font-display text-xl italic text-ink">{t(`${key}.greeting`)}</p>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-8 text-ink/75">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-sm text-ink/60">{t(`${key}.closing`)}</p>
            <p className="mt-1 font-display text-2xl italic text-ink">{author.name}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink">{t(`${key}.role`)}</p>
          </div>
        </article>
      </TabPanel>
    </Section>
  );
}
