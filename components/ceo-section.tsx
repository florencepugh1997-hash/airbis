import Image from 'next/image';
import { Quote } from 'lucide-react';

export function CEOSection() {
    return (
        <section className="py-24 bg-[#0a1e3d] text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border-2 border-accent/30 rounded-2xl -z-10 translate-x-4 translate-y-4" />

                            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/ceo.jpg"
                                    alt="Feng Liao - CEO of Franklin Aviation"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-xl shadow-xl hidden md:block">
                                <div className="text-3xl font-bold text-white">25+</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-white/80">Years Excellence</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                            <Quote size={48} className="text-accent mb-6 opacity-50" />
                            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Leadership Message</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Pioneering the Future of <span className="text-accent">Global Aviation</span> Logistics
                            </h3>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    "Franklin Aviation was founded on a simple yet powerful premise: making the complex world of aerospace components accessible, reliable, and efficient. We understands that in aviation, there is no room for compromise."
                                </p>
                                <p>
                                    "Under my leadership, we have transformed from a regional distributor into a global marketplace leader. Our commitment remains steadfast—ensuring every aircraft we serve has access to the highest quality, certified components delivered with speed and integrity."
                                </p>
                                <p>
                                    "We are not just selling parts; we are supporting the infrastructure of global connectivity. Every shipment represents a promise of safety and performance that we take personally."
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-1 bg-accent rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Feng Liao</h4>
                                    <p className="text-accent font-medium">Chief Executive Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
