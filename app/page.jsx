import Link from 'next/link';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import jatraPic from 'public/images/jatra.jpg';
import bhairabKumari from 'public/images/bhairab-kumari.jpg';

export default function Page() {
    return (
        <div className="flex flex-col gap-0 sm:gap-0">
            <section className="relative flex flex-col ">
                <div className="mb-8 200">
                    <h1 className="font-playfair text-4xl mb-10 md:text-6xl font-bold  ">Newa Guthi Melbourne</h1>
                    <h2 className="text-xl mb-6 md:text-2xl text-orange-500 font-light">
                        Preserving Heritage, Building Community
                    </h2>
                    <div className="flex flex-col md:flex-row">
                        <div>
                            <p className="mb-6 text-lg font-light">
                                <span className="font-medium">Newa Guthi Melbourne</span> is a traditional social and
                                cultural organization dedicated to the Newar community in Victoria.
                            </p>
                            <p className="mb-6 text-lg font-light">
                                We are dedicated to uniting the Newar community in Victoria through celebration and
                                preservation of our shared cultural heritage, languages, traditions, and values.
                            </p>
                        </div>
                        <Image
                            src={jatraPic}
                            className="md:-mt-10 ml-5 w-auto md:h-48"
                            alt="newa guthi melbourne logo"
                        />
                    </div>
                </div>
                <section className="mb-12">
                    <a href="/events" className="cursor-pointer no-underline text-white hover:text-orange-500">
                        <div className="relative w-full h-80 rounded-2xl flex overflow-hidden justify-center items-center">
                            <div className="absolute top-2/3 right-8 text-right p-3 backdrop-opacity-10 ">
                                <h2 className="font-stretch-100% font-extralight text-5xl text-shadow-2xs ">
                                    Indra Jatra
                                </h2>
                                <p className="italic text-right">honoring the deities Indra and Kumari</p>
                            </div>
                            <Image
                                src={bhairabKumari}
                                className="w-full h-auto shrink-0"
                                alt="newa guthi melbourne logo"
                            />
                        </div>
                    </a>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mb-12 animate-fade-in-up delay-500">
                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-heritage-orange rounded-full flex items-center justify-center mb-4">
                            <Heart strokeWidth="1" className="w-16 h-16 text-orange-400" />
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-heritage-brown mb-2">Heritage</h3>
                        <p className="text-heritage-brown/70 text-center ">
                            Preserving Newa traditions for future generations
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mb-4">
                            <Users strokeWidth="1" className="w-16 h-16 text-orange-400" />
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-heritage-brown mb-2">Community</h3>
                        <p className="text-heritage-brown/70 text-center">Building connections and support networks</p>
                    </div>

                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-heritage-orange rounded-full flex items-center justify-center mb-4">
                            <Globe strokeWidth="1" className="w-16 h-16 text-orange-400" />
                        </div>
                        <h3 className="font-playfair text-xl font-semibold text-heritage-brown mb-2">Culture</h3>
                        <p className="text-heritage-brown/70 text-center">Promoting awareness and education</p>
                    </div>
                </div>
                <div className="animate-fade-in-up mt-10 delay-700">
                    <Link href="/about-us" className=" flex flex-row no-underline">
                        <span className=" flex flex-row  w-auto no-underline bg-orange-400 hover:bg-orange-500 text-white font-normal px-8 py-4  text-lg rounded-full transition-all duration-300 hover:scale-105">
                            Learn more about us
                            <ArrowRight strokeWidth="1" className="ml-2 w-8 h-8 " />
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
