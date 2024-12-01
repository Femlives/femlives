import Header from '@/components/Header';
import {
  HeroSection,
  MenopauseStagesSection,
  StatsSection,
} from './_main-page-components';

export default function Home() {
  return (
    <main className='relative'>
      <Header />
      <HeroSection />
      <MenopauseStagesSection />
      <StatsSection />
    </main>
  );
}
