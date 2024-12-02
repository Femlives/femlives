import { Header } from '@/components';
import {
  HeroSection,
  MenopauseStagesSection,
  ProductsSection,
  StatsSection,
} from './_main-page-components';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MenopauseStagesSection />
      <ProductsSection />
      <StatsSection />
    </main>
  );
}
