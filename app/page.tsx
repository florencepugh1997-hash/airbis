import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { ValueProposition } from '@/components/value-proposition';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <ValueProposition />
    </main>
  );
}
