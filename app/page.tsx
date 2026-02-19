import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { InsightsSection } from '@/components/insights-section';
import { ValueProposition } from '@/components/value-proposition';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <InsightsSection />
      <ValueProposition />
    </main>
  );
}
