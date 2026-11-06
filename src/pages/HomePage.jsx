import Hero from '../components/sections/Hero/Hero';
import Letters from '../components/sections/Letters/Letters';
import Stats from '../components/sections/Stats/Stats';
import Seo from '../components/seo/Seo';

export default function HomePage() {
  return (
    <>
      <Seo page="home" />
      <Hero />
      <Letters />
      <Stats />
    </>
  );
}
