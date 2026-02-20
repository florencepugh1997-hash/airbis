import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a1e3d]/70 z-1" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-2">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center z-10 text-white">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✈️ Trusted by 50+ Airlines Worldwide
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            Premium Aircraft Components Marketplace
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
            Access certified aerospace parts from trusted suppliers. Fast global shipping, competitive pricing, and expert support for all your aircraft component needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 w-full sm:w-auto font-bold shadow-lg"
              >
                Shop Now
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto font-bold"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <p className="text-sm text-primary-foreground/80">Products</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <p className="text-sm text-primary-foreground/80">Support</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <p className="text-sm text-primary-foreground/80">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
