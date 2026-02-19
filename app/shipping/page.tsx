import { Truck, Plane, Clock, Package } from 'lucide-react';

export default function ShippingPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-[#0a1e3d] mb-6">Shipping & Logistics</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Global delivery solutions tailored for the aerospace industry. From routine stock replenishment to critical AOG shipments.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <Plane className="text-blue-500 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-bold text-[#0a1e3d] mb-2">AOG Service</h3>
                        <p className="text-gray-600">
                            24/7/365 availability. Next Flight Out (NFO) and hand-carry services available for critical aircraft-on-ground situations.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <Truck className="text-blue-500 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-bold text-[#0a1e3d] mb-2">Standard Freight</h3>
                        <p className="text-gray-600">
                            Economical shipping for heavy components (engines, landing gear) via our network of trusted freight forwarders.
                        </p>
                    </div>
                </div>

                <div className="prose max-w-none text-gray-600 space-y-6">
                    <h2 className="text-2xl font-bold text-[#0a1e3d]">Delivery Times</h2>
                    <p>
                        Standard orders are processed within 24 hours. Estimated delivery times:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Domestic (USA):</strong> 1-3 business days</li>
                        <li><strong>International Express:</strong> 2-5 business days</li>
                        <li><strong>International Economy:</strong> 5-10 business days</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#0a1e3d] mt-8">Hazardous Materials</h2>
                    <p>
                        We are fully certified to ship HazMat materials (IATA/DOT compliant). Please note that hazardous items may incur additional fees and may have restricted shipping methods.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d] mt-8">Export Compliance</h2>
                    <p>
                        Airbis complies with all US Export Administration Regulations (EAR) and International Traffic in Arms Regulations (ITAR). End-user certificates may be required for certain sensitive components.
                    </p>
                </div>
            </div>
        </div>
    );
}
