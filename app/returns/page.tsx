import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ReturnsPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-[#0a1e3d] mb-6">Returns & Warranty</h1>

                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-12">
                    <h3 className="text-lg font-bold text-[#0a1e3d] mb-2">Start a Return</h3>
                    <p className="text-gray-600 mb-4">
                        Need to return a part or manage a core exchange? Contact our support team to obtain an RMA number.
                    </p>
                    <Link href="/contact">
                        <Button>Contact Support</Button>
                    </Link>
                </div>

                <div className="space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-2xl font-bold text-[#0a1e3d] mb-4">Return Policy</h2>
                        <p className="mb-4">
                            We accept returns for most items within <strong>30 days</strong> of delivery. Items must be:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>In their original, unused condition</li>
                            <li>Accompanied by all original paperwork (8130-3 forms, trace docs)</li>
                            <li>In the original packaging</li>
                        </ul>
                        <p className="mt-4 text-sm bg-gray-100 p-4 rounded text-gray-500">
                            Note: A restocking fee of 15% may apply for non-defective returns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a1e3d] mb-4">Core Exchanges</h2>
                        <p>
                            Core units must be returned within the timeframe specified on your invoice (typically 14 or 21 days) to avoid bill-back charges. Cores must be repairable and match the part number purchased.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a1e3d] mb-4">Warranty</h2>
                        <p>
                            <strong>New Parts:</strong> Covered by OEM warranty (typically 1 year).<br />
                            <strong>Overhauled/Serviceable Parts:</strong> Covered by Franklin Aviation warranty for 6 months or 500 flight hours, whichever comes first.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
