export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl text-gray-600">
                <h1 className="text-4xl font-bold text-[#0a1e3d] mb-8">Terms of Service</h1>

                <section className="space-y-6">
                    <p>
                        By accessing or using the Franklin Aviation platform, you agree to be bound by these Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">1. Account Registration</h2>
                    <p>
                        You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">2. Orders & Pricing</h2>
                    <p>
                        Prices are subject to change without notice. Quotations are valid for 24 hours unless otherwise specified, due to market volatility. We reserve the right to cancel orders due to pricing errors or stock unavailability.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">3. Certification & Traceability</h2>
                    <p>
                        Franklin Aviation guarantees that all parts are supplied with appropriate certification (FAA 8130/EASA Form 1) where indicated. It is the installer's responsibility to determine airworthiness before installation.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">4. Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Franklin Aviation shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.
                    </p>
                </section>
            </div>
        </div>
    );
}
