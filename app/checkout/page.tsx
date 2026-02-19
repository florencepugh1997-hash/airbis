'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, CreditCard, Truck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
    const { items, getTotalPrice, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const total = getTotalPrice();
    const tax = Math.round(total * 0.08);
    const grandTotal = total + tax;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const [confirmedOrderNumber, setConfirmedOrderNumber] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            const orderNum = `AIR-${Math.floor(Math.random() * 900000) + 100000}`;
            setConfirmedOrderNumber(orderNum);

            try {
                // Send confirmation email
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        customer: formData,
                        items: items,
                        total: grandTotal,
                        orderNumber: orderNum,
                    }),
                });

                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || 'Failed to send confirmation email');
                }
            } catch (error: any) {
                console.error('Email notification failed:', error);
                alert(`Note: The order was placed, but the confirmation email could not be sent: ${error.message}. If you are in Sandbox mode, please ensure you are using your registered email address.`);
            }

            setStep(4);
            clearCart();
        }
    };

    if (items.length === 0 && step !== 4) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Add components to your cart to proceed to checkout.</p>
                <Link href="/shop">
                    <Button>Back to Shop</Button>
                </Link>
            </div>
        );
    }

    if (step === 4) {
        return (
            <main className="flex-1">
                <section className="container mx-auto px-4 py-20 text-center max-w-2xl">
                    <div className="flex justify-center mb-6 text-green-500">
                        <CheckCircle2 size={80} />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Thank you for your purchase. We've sent a confirmation email to {formData.email}.
                        Your order number is #<strong>{confirmedOrderNumber}</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/shop">
                            <Button variant="outline" className="w-full sm:w-auto">Continue Shopping</Button>
                        </Link>
                        <Link href="/">
                            <Button className="w-full sm:w-auto">Return Home</Button>
                        </Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="flex-1 bg-muted/30">
            {/* Header */}
            <section className="bg-primary text-primary-foreground py-10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/cart" className="hover:text-primary-foreground/80 transition-colors">
                            <ChevronLeft size={24} />
                        </Link>
                        <h1 className="text-3xl font-bold">Checkout</h1>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex justify-between max-w-lg mx-auto mt-8 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2 z-0" />
                        <div
                            className="absolute top-1/2 left-0 h-0.5 bg-primary-foreground -translate-y-1/2 z-0 transition-all duration-300"
                            style={{ width: `${((step - 1) / 2) * 100}%` }}
                        />

                        {[1, 2, 3].map((s) => (
                            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= s
                                    ? 'bg-primary-foreground text-primary border-primary-foreground'
                                    : 'bg-primary text-primary-foreground/40 border-primary-foreground/20'
                                    }`}>
                                    {s}
                                </div>
                                <span className={`text-xs font-medium ${step >= s ? 'text-primary-foreground' : 'text-primary-foreground/40'}`}>
                                    {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 mb-6">
                                            <Truck className="text-accent" />
                                            <h2 className="text-2xl font-bold">Shipping Details</h2>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">First Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Last Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Shipping Address</label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                placeholder="123 Aviation Blvd"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">City</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">ZIP Code</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="zipCode"
                                                    value={formData.zipCode}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2 col-span-2 md:col-span-1">
                                                <label className="text-sm font-medium">Country</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                />
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full py-6 text-lg">Continue to Payment</Button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 mb-6">
                                            <CreditCard className="text-accent" />
                                            <h2 className="text-2xl font-bold">Payment Method</h2>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-muted p-4 rounded-lg flex items-center justify-between border-2 border-accent">
                                                <div className="flex items-center gap-3">
                                                    <CreditCard className="text-accent" />
                                                    <span className="font-semibold">Credit / Debit Card</span>
                                                </div>
                                                <div className="w-5 h-5 rounded-full border-4 border-accent bg-background" />
                                            </div>

                                            <div className="space-y-2 pt-4">
                                                <label className="text-sm font-medium">Card Number</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                    placeholder="0000 0000 0000 0000"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Expiry Date</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="expiry"
                                                        value={formData.expiry}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                        placeholder="MM/YY"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">CVV</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="cvv"
                                                        value={formData.cvv}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"
                                                        placeholder="123"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 pt-4">
                                            <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 py-6">Back</Button>
                                            <Button type="submit" className="flex-1 py-6">Review Order</Button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 mb-6">
                                            <CheckCircle2 className="text-accent" />
                                            <h2 className="text-2xl font-bold">Review Order</h2>
                                        </div>

                                        <div className="bg-muted/50 p-6 rounded-xl space-y-4 mb-8">
                                            <div>
                                                <h4 className="font-bold text-sm uppercase text-muted-foreground mb-2">Shipping To</h4>
                                                <p>{formData.firstName} {formData.lastName}</p>
                                                <p className="text-sm">{formData.address}, {formData.city}, {formData.zipCode}</p>
                                                <p className="text-sm">{formData.country}</p>
                                            </div>
                                            <hr className="border-border" />
                                            <div>
                                                <h4 className="font-bold text-sm uppercase text-muted-foreground mb-2">Payment</h4>
                                                <p>Card ending in {formData.cardNumber.slice(-4) || 'XXXX'}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 py-6">Back</Button>
                                            <Button type="submit" className="flex-1 py-6">Place Order - ${grandTotal.toLocaleString()}</Button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Summary Side */}
                    <div className="lg:col-span-5">
                        <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 mb-6">
                                {items.map(item => (
                                    <div key={item.product.id} className="flex gap-4 items-center bg-muted/30 p-3 rounded-lg">
                                        <div className="relative w-16 h-16 flex-shrink-0 rounded bg-white overflow-hidden border border-border">
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.name}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-sm truncate">{item.product.name}</h3>
                                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-sm whitespace-nowrap">
                                            ${(item.product.price * item.quantity).toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-border">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="text-green-500 font-medium">FREE</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Tax (8%)</span>
                                    <span>${tax.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold pt-4 border-t border-border">
                                    <span>Total</span>
                                    <span className="text-accent">${grandTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-center text-muted-foreground mt-6 uppercase tracking-widest">
                                Secure Checkout Powered by Airbis
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
