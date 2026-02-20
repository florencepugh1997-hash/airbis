import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0a1e3d] mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600">Find answers to common questions about our parts, certification, and shipping.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold text-[#0a1e3d]">Are your parts certified?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes, absolutely. Every component listed on Franklin Aviation comes with full traceability and certification tags (FAA 8130-3, EASA Form 1, or equivalent). We strictly vet all suppliers to ensure compliance with international aviation standards.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold text-[#0a1e3d]">Do you offer AOG (Aircraft on Ground) shipping?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes. We understand the critical nature of AOG situations. We offer 24/7 AOG support and can arrange next-flight-out (NFO) or expedited courier services to get your part to you as fast as possible, anywhere in the world.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold text-[#0a1e3d]">What is your return policy?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            We offer a 30-day return policy for most parts, provided they are in their original condition and packaging. Core exchanges must be returned within the specified timeframe (usually 14-21 days) to avoid penalty fees. Please see our Returns page for full details.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold text-[#0a1e3d]">Do you ship internationally?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes, we ship to over 150 countries. We are experienced in handling export compliance, ITAR regulations, and customs documentation to ensure smooth delivery of your components.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold text-[#0a1e3d]">Can I set up a corporate account?</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            Yes, we offer corporate accounts for airlines, MROs, and brokers. Benefits include net payment terms (Net 30/60), volume discounts, and dedicated account management. Contact our sales team to apply.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
