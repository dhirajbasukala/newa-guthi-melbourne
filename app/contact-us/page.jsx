import Link from 'next/link';
import { Card } from 'components/card';
import { getNetlifyContext } from 'utils';
import { Mail, MapPin, Phone, ArrowRight, Heart, Users, Globe } from 'lucide-react';

const ctx = getNetlifyContext();
export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="relative min-h-screen flex flex-col verflow-hidden bg-gradient-to-br from-heritage-cream via-white to-heritage-cream">
                <div className="mb-8 delay-200">
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold  ">Join our community</h1>
                    <div className="w-24 h-1 bg-heritage-gold mx-auto mb-6"></div>
                    <p className="text-xl mb-6 md:text-2xl text-orange-500 font-light">Stay conntected</p>
                    <div className="flex flex-col md:flex-row">
                        <div>
                            <p className="mb-6 text-lg font-normal">
                                Connect with fellow members of the Newar community in Melbourne. Whether you're looking
                                to preserve traditions, make new connections, or learn about our rich cultural heritage,
                                we welcome you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-playfair text-2xl font-normal mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <MapPin strokeWidth="1" className="w-10 h-10 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold ">Location</p>
                                        <p className="/70">Melbourne, Victoria</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <Mail strokeWidth="1" className="w-10 h-10 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold ">Email</p>
                                        <p className="/70">
                                            <a
                                                href="mailto:mynewaguthi@gmail.com"
                                                alt="mailto:mynewaguthi@gmail.com"
                                                className="underline underline-offset-4"
                                            >
                                                mynewaguthi@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                        <Users strokeWidth="1" className="w-10 h-10 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold ">Community</p>
                                        <p className="/70">All Newar community members welcome</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-50 rounded-2xl shadow-2xs shadow-gray-300">
                        <div className="p-6">
                            <h4 className="font-playfair text-2xl font-normal mb-4">Why Join Us?</h4>
                            <ul className="space-y-3 /80">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Connect with fellow Newar community members</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Participate in cultural events and festivals</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Preserve and share your cultural heritage</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>Access community support and resources</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
