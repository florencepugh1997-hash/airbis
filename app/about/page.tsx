import Image from 'next/image';
import { ShieldCheck, Globe, Users, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center bg-[#0a1e3d] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/products/wing-panel.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Pioneering Aerospace Solutions</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Connecting the global aviation industry with certified, high-performance components since 2010.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0a1e3d] mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Franklin Aviation, we are dedicated to streamlining the aerospace supply chain. Our mission is to provide airlines, MROs, and private operators with instant access to a vast inventory of certified aircraft parts, ensuring fleets remain operational and safe.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We leverage cutting-edge technology and a global network of logistics partners to deliver critical components—from landing gear to avionics—with unprecedented speed and reliability.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/products/maintenance.jpg"
                            alt="Engine Maintenance"
                            fill
                            className="object-cover"
                        />
                        {/* Fallback to a solid color if image missing */}
                        <div className="absolute inset-0 bg-gray-200 -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#0a1e3d]">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-2">FAA/EASA Certified</h3>
                            <p className="text-sm text-gray-500">Fully compliant parts</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#0a1e3d]">
                                <Globe size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Global Shipping</h3>
                            <p className="text-sm text-gray-500">150+ countries served</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#0a1e3d]">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                            <p className="text-sm text-gray-500">Expert AOG team</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#0a1e3d]">
                                <Award size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-2">Industry Leader</h3>
                            <p className="text-sm text-gray-500">Top Rated Supplier 2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
