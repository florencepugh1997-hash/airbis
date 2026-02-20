'use client';

export function VideoSection() {
    console.log('VideoSection Rendering...');
    return (
        <section id="video-showcase" className="py-24 bg-[#0a1e3d] text-white overflow-hidden relative border-t border-accent/10">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Innovation in Motion</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">Experience the Franklin Aviation <span className="text-accent">Standard</span></h3>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        See our certified components and high-precision logistics in action through our latest operational highlight videos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Video 1 */}
                    <div className="group relative">
                        <div className="absolute -inset-4 border border-accent/20 rounded-2xl -z-10 group-hover:border-accent/40 transition-colors" />
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/40 to-transparent pointer-events-none" />
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="w-10 h-1 bg-accent rounded-full" />
                            <h4 className="text-xl font-bold">Logistics & Supply Chain</h4>
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="group relative">
                        <div className="absolute -inset-4 border border-accent/20 rounded-2xl -z-10 group-hover:border-accent/40 transition-colors" />
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/video2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/40 to-transparent pointer-events-none" />
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="w-10 h-1 bg-accent rounded-full" />
                            <h4 className="text-xl font-bold">Component Certification</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
