export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl text-gray-600">
                <h1 className="text-4xl font-bold text-[#0a1e3d] mb-8">Privacy Policy</h1>
                <p className="mb-8 text-sm text-gray-400">Last Updated: February 2026</p>

                <section className="space-y-6">
                    <p>
                        At Franklin Aviation, we prioritize the security and privacy of our clients. This policy outlines how we collect, use, and protect your data.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">1. Data Collection</h2>
                    <p>
                        We collect information necessary to process orders and ensure compliance with aviation regulations. This includes:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Contact details (Name, Email, Phone)</li>
                        <li>Shipping and Billing addresses</li>
                        <li>Aircraft serial numbers (for compatibility checks)</li>
                        <li>Payment information (processed securely via Stripe)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">2. Usage of Data</h2>
                    <p>
                        Your data is used strictly for:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Order fulfillment and shipping</li>
                        <li>Generating airworthiness documentation</li>
                        <li>Customer support and AOG coordination</li>
                        <li>Improving our platform services</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">3. Data Protection</h2>
                    <p>
                        We employ industry-standard SSL encryption and firewall protections. We never sell your personal data to third parties. Customer data is stored in secure, ISO-27001 certified data centers.
                    </p>
                </section>
            </div>
        </div>
    );
}
