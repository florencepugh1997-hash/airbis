import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { CEOSection } from '@/components/ceo-section';
import { InsightsSection } from '@/components/insights-section';
import { GallerySection } from '@/components/gallery-section';
import { VideoSection } from '@/components/video-section';
import { ValueProposition } from '@/components/value-proposition';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <CEOSection />
      <InsightsSection />
      <GallerySection />
      <VideoSection />
      <ValueProposition />
    </main>
  );
}
