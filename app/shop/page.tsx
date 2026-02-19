import { Metadata } from 'next';
import { products } from '@/lib/products';
import { ProductGrid } from '@/components/product-grid';

export const metadata: Metadata = {
  title: 'Shop - Airbis | Aircraft Components',
  description: 'Browse our collection of certified aircraft components and aerospace parts.',
};

export default function ShopPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aircraft Components Shop
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Explore our premium collection of certified aerospace parts and components. All items are rigorously tested and certified.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <ProductGrid
          products={products}
          title="All Products"
          subtitle="Browse our complete inventory of aerospace components"
        />
      </section>

      {/* Certification Badge Section */}
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">
                Certified & Authenticated
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">
                Partner Airlines
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">
                Expert Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
