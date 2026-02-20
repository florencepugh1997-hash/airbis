import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function InsightsSection() {
    const stories = [
        {
            id: 1,
            title: "Essential for survival: The future of military rotorcraft",
            description: "Stefan Thomé discusses the evolution of military rotorcraft, highlighting continuous development of Franklin Aviation helicopters and solutions.",
            image: "/av.jpg",
            badges: ["Web Story", "Helicopters"],
            date: "11 February 2026",
            readTime: "4 min read",
            large: true
        },
        {
            id: 2,
            title: "The brain behind the mission: Franklin Aviation and the future of collaborative combat",
            description: "Exploring the next generation of air power and the digital backbone of modern defence.",
            image: "/av2.jpg",
            badges: ["Web Story", "Defence"],
            date: "09 February 2026",
            readTime: "5 min read",
            large: true
        },
        {
            id: 3,
            title: "A baptism of fire in Albania for Hungary's H225M helicopters and crew",
            image: "/av3.jpg",
            badges: ["Web Story", "Helicopters"],
            date: "05 February 2026",
            readTime: "3 min read",
            large: false
        },
        {
            id: 4,
            title: "Air policing in Romania: 'With the Eurofighter we can respond at a moment's notice'",
            image: "/av4.jpg",
            badges: ["Web Story", "Defence"],
            date: "02 February 2026",
            readTime: "6 min read",
            large: false
        },
        {
            id: 5,
            title: "Franklin Aviation A400M: Landing where others can't to deliver more aid",
            image: "/av5.jpg",
            badges: ["Web Story", "Defence"],
            date: "28 January 2026",
            readTime: "4 min read",
            large: false
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header - Matching Franklin Aviation clean style */}
                <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3d] tracking-tight">
                        Strategic Insights
                    </h2>
                    <button className="text-sm font-bold text-[#0a1e3d] flex items-center gap-1 hover:text-accent transition-colors group">
                        VIEW ALL STORIES
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* Top Row: Two large items */}
                    {stories.filter(s => s.large).map((story) => (
                        <div key={story.id} className="md:col-span-3 group relative overflow-hidden rounded-xl bg-[#0a1e3d] h-[400px]">
                            <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="flex gap-2 mb-4">
                                    {story.badges.map((badge, i) => (
                                        <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${i === 0 ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-accent underline-offset-4">
                                    {story.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2 max-w-xl">
                                    {story.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                                    <span>{story.date}</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                    <span>{story.readTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Bottom Row: Three smaller items */}
                    {stories.filter(s => !s.large).map((story) => (
                        <div key={story.id} className="md:col-span-2 group relative overflow-hidden rounded-xl bg-[#0a1e3d] h-[350px]">
                            <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="flex gap-2 mb-3">
                                    {story.badges.map((badge, i) => (
                                        <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${i === 0 ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-accent underline-offset-4 line-clamp-3">
                                    {story.title}
                                </h3>
                                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-medium">
                                    <span>{story.date}</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                    <span>{story.readTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
