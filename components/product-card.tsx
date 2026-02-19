'use client';

import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-card text-card-foreground rounded-lg overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category Badge */}
        <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-2 w-fit">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">Certified Part</span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`gap-2 transition-all ${
              isAdded
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-primary hover:bg-primary/90'
            }`}
            size="sm"
          >
            <ShoppingCart size={16} />
            {isAdded ? 'Added' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  );
}
