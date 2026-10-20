import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import Tabs, { TabPanel } from '../../ui/Tabs';
import MemberCard from './MemberCard';
import FeaturedMemberCard from './FeaturedMemberCard';
import { featured, team } from '../../../data/team';

const TABS = ['organization', 'academy'];

export default function Team({ withHeading = true }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const roleLabel = (member) =>
    t(`team.roles.${member.role}`, {
      court: member.court,
      dept: member.dept && t(`team.departments.${member.dept}`),
    });

  return (
    <Section id="team" className="bg-page-alt">
      {withHeading && (
        <SectionHeading eyebrow={t('team.eyebrow')} title={t('team.title')} subtitle={t('team.subtitle')} />
      )}

      <div className={withHeading ? 'mt-12' : ''}>
        <h3 className="flex items-center gap-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-ink">
          {t('team.groups.executive')}
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((member) => (
            <FeaturedMemberCard
              key={member.photo}
              name={member.name}
              photo={member.photo}
              role={t(`team.roles.${member.role}`)}
            />
          ))}
        </ul>
      </div>

      <div className="mt-16 flex justify-center">
        <Tabs
          idPrefix="team"
          value={activeTab}
          onChange={setActiveTab}
          tabs={TABS.map((id) => ({ id, label: t(`team.tabs.${id}`) }))}
        />
      </div>

      <TabPanel idPrefix="team" activeId={activeTab} className="mt-12 space-y-12">
        {team[activeTab].map(({ group, members }) => (
          <div key={group}>
            <h3 className="flex items-center gap-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-ink">
              {t(`team.groups.${group}`)}
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <MemberCard key={member.name + member.role} name={member.name} photo={member.photo} role={roleLabel(member)} />
              ))}
            </ul>
          </div>
        ))}
      </TabPanel>
    </Section>
  );
}
