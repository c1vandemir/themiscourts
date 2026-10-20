import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import Team from '../components/sections/Team/Team';
import { usePageTitle } from '../hooks/usePageTitle';

export default function TeamPage() {
  const { t } = useTranslation();
  usePageTitle('team');

  return (
    <>
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
