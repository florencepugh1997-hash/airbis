export default function CookiesPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl text-gray-600">
                <h1 className="text-4xl font-bold text-[#0a1e3d] mb-8">Cookie Policy</h1>

                <section className="space-y-6">
                    <p>
                        This website uses cookies to enhance your browsing experience and provide personalized services.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">What are cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device when you visit a website. They help us remember your preferences (like your cart items) and analyze site traffic.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">How we use cookies</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., shopping cart, login).</li>
                        <li><strong>Analytical Cookies:</strong> Help us understand how visitors use our site.</li>
                        <li><strong>Preference Cookies:</strong> Remember your language and region settings.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#0a1e3d]">Managing Cookies</h2>
                    <p>
                        You can control or delete cookies through your browser settings. However, disabling essential cookies may limit your ability to use certain features of the Airbis platform.
                    </p>
                </section>
            </div>
        </div>
    );
}
