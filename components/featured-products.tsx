import { products } from '@/lib/products';
import { ProductGrid } from './product-grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  // Get first 3 products as featured
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most popular aerospace components
          </p>
        </div>
        <Link href="/shop">
          <Button className="gap-2 w-full md:w-auto">
            View All Products
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>

      <ProductGrid products={featuredProducts} />
    </section>
  );
}
