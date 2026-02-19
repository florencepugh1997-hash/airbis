import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-[#0a1e3d] mb-4">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our AOG desk is manned 24/7. For general inquiries, sales, or partnership opportunities, please reach out below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-[#0a1e3d] text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold">Phone (24/7 AOG)</p>
                                        <p className="text-blue-200">+44 7565079734</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-blue-200 break-all">oi.coinmarketcapcommunity@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold">Headquarters</p>
                                        <p className="text-blue-200">
                                            The Business Centre<br />
                                            61 Wellfield Road<br />
                                            Cardiff CF24 3DG<br />
                                            United Kingdom
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold">Office Hours</p>
                                        <p className="text-blue-200">Mon-Fri: 8am - 6pm PST</p>
                                        <p className="text-blue-200">Sat-Sun: AOG Support Only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-[#0a1e3d] mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <Input placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <Input type="email" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>Sales Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button className="w-full md:w-auto px-8 bg-[#0a1e3d] hover:bg-[#0f2d5a]">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
