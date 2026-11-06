import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Team from '../components/sections/Team/Team';
import Seo from '../components/seo/Seo';

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <>
      <Seo page="team" />
      <PageHeader
        crumb={t('nav.team')}
        eyebrow={t('team.eyebrow')}
        title={t('team.title')}
        subtitle={t('team.subtitle')}
      />
      <Team withHeading={false} />
    </>
  );
}
