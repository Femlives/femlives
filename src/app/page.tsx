import FAQ from '@/components/FAQ';
import Header from '@/components/Header';
import {
  HeroSection,
  MenopauseStagesSection,
  StatsSection,
} from './_main-page-components';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MenopauseStagesSection />
      <StatsSection />
      <FAQ/>
    </main>
  );
}
