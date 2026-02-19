'use client';

import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
    {
        src: '/work1.jpg',
        title: 'Precision Engineering',
        description: 'Advanced wing component manufacturing process.'
    },
    {
        src: '/work2.jpg',
        title: 'Quality Assurance',
        description: 'Rigorous testing of turbine assemblies.'
    },
    {
        src: '/work3.jpg',
        title: 'Logistics Excellence',
        description: 'Global distribution network in action.'
    },
    {
        src: '/work4.jpg',
        title: 'Technical Support',
        description: '24/7 dedicated engineering assistance.'
    }
];

export function GallerySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Gallery</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[#0a1e3d] leading-tight">
                            Our Precision <span className="text-accent">in Action</span>
                        </h3>
                        <p className="mt-6 text-gray-600 text-lg">
                            Explore the dedication and expertise that go into every component we supply.
                            From manufacturing to final delivery, excellence is our baseline.
                        </p>
                    </div>
                </div>

                <div className="relative px-12">
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {galleryImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="border-none overflow-hidden group bg-[#f8fafc]">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src={image.src}
                                                    alt={image.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <div className="text-white">
                                                        <h4 className="font-bold text-xl mb-1">{image.title}</h4>
                                                        <p className="text-sm text-gray-200">{image.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-6 border-[#0a1e3d] text-[#0a1e3d] hover:bg-[#0a1e3d] hover:text-white" />
                        <CarouselNext className="hidden md:flex -right-6 border-[#0a1e3d] text-[#0a1e3d] hover:bg-[#0a1e3d] hover:text-white" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
