'use client';

import { Metadata } from 'next';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="bg-card rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-card-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore our premium aircraft components and add items to your cart.
            </p>
            <Link href="/shop">
              <Button className="gap-2">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
          <p className="text-primary-foreground/90 mt-2">
            {items.length} item{items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="bg-card rounded-lg p-4 flex gap-4 shadow-soft"
                >
                  {/* Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.product.category}
                    </p>
                    <p className="text-accent font-bold">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex flex-col items-end gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 size={18} />
                    </Button>

                    <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-accent">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${Math.round(total * 0.08).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-accent">
                  ${Math.round(total * 1.08).toLocaleString()}
                </span>
              </div>

              <Link href="/checkout" className="block w-full">
                <Button className="w-full mb-3 gap-2">
                  Proceed to Checkout
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>

              <Link href="/shop" className="block mt-4">
                <Button variant="ghost" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
