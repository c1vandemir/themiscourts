import Hero from '../components/sections/Hero/Hero';
import Letters from '../components/sections/Letters/Letters';
import Stats from '../components/sections/Stats/Stats';
import { usePageTitle } from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Letters />
      <Stats />
    </>
  );
}
