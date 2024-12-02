import { Header } from '@/components';
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
    </main>
  );
}
