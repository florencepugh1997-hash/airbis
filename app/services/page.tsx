import { Shield, Globe, Zap, Award, CheckCircle2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Services */}
            <section className="bg-[#0a1e3d] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                        Precision-engineered solutions for the global aerospace industry. We combine technical expertise with global logistics to keep you flying.
                    </p>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-[#0a1e3d] text-white rounded-xl flex items-center justify-center mb-6">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0a1e3d] mb-4">Global Procurement</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Access an extensive network of certified suppliers worldwide. Our procurement specialists source hard-to-find components with guaranteed traceability.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-accent text-[#0a1e3d] rounded-xl flex items-center justify-center mb-6">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0a1e3d] mb-4">Quality & Certification</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every part we ship undergoes rigorous inspection. We provide full AS9120 and FAA/EASA certification paperwork with every delivery.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-[#0a1e3d] text-white rounded-xl flex items-center justify-center mb-6">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0a1e3d] mb-4">24/7 AOG Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our Rapid Response Team is available 168 hours a week to handle Aircraft On Ground (AOG) situations, ensuring minimal downtime for your fleet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Capabilities */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0a1e3d] leading-tight">
                                Integrated Logistics & <br /><span className="text-accent">Supply Chain Management</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Airbis provides more than just parts; we provide peace of mind. Our integrated supply chain solutions are designed to optimize your inventory and reduce operational costs.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Real-time inventory tracking and reporting',
                                    'Climate-controlled specialized aerospace warehousing',
                                    'Dangerous goods (DG) certified handling',
                                    'Customs clearance and international duty management'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-[#0a1e3d] p-8 rounded-2xl text-white text-center">
                                <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
                                <div className="text-sm opacity-80 uppercase tracking-widest font-bold">On-Time Delivery</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                                <div className="text-4xl font-bold text-[#0a1e3d] mb-2">15k+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">SKUs In Stock</div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
                                <div className="text-4xl font-bold text-[#0a1e3d] mb-2">24h</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Average Quote Time</div>
                            </div>
                            <div className="bg-accent p-8 rounded-2xl text-[#0a1e3d] text-center">
                                <div className="text-4xl font-bold mb-2">FAA</div>
                                <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Certified Parts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#0a1e3d] text-white overflow-hidden relative">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 capitalize">Ready to streamline your procurement?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/shop">
                            <Button size="lg" className="bg-accent text-[#0a1e3d] hover:bg-white font-bold px-8 h-14 text-lg">
                                Browse Catalog
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 font-bold px-8 h-14 text-lg">
                                Talk to an Expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
