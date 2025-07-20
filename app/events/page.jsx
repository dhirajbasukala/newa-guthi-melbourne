import Image from 'next/image';
import jatraPic from 'public/images/jatra.jpg';

export const metadata = {
    title: 'Newa Guthi Melbourne: Events and Celebration'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="relative flex flex-col">
                <div className="mb-8 delay-200">
                    <h1 className="font-playfair text-4xl mb-10 md:text-6xl font-bold  ">Events & Celebration</h1>
                    <h2 className="text-xl mb-6 md:text-2xl text-orange-500 font-light">
                        Culture and tradition coming to life
                    </h2>
                    <div className="flex flex-col md:flex-row">
                        <div>
                            <h2 className="font-normal">Indra jatra - Yenya punhi 2025 celebration</h2>
                            <div className="bg-orange-50 px-5 my-5 py-6 text-gray-700 rounded-xl">
                                <h3 className="font-normal mb-2">Event details</h3>
                                <p>
                                    <span className="font-semibold">Event name: </span> Indra jatra -- yenya punhi 2025
                                    celebration
                                </p>
                                <p>
                                    <span className="font-semibold">Date: </span>September 6, 2025 Saturday
                                </p>
                                <p>
                                    <span className="font-semibold">Time: </span> 10:00 AM to 5:00 PM{' '}
                                </p>
                                <p>
                                    <span className="font-semibold">Venue: </span> Australian Nepalese Multicultural
                                    Centre (ANMC), 100 Duncans Ln, Diggers Rest VIC 3427.{' '}
                                </p>
                                <p>
                                    <span className="font-semibold">Expected audience: </span> Approximately 5000 guests
                                    are expected.{' '}
                                </p>
                            </div>
                            <div className="bg-green-50 px-5 my-5 py-6 text-gray-700 rounded-xl">
                                <h3 className="font-normal mb-2"> Sponsorship</h3>
                                <p>Sponsorship opportunities are available at different tiers</p>
                                <ul className="mt-2">
                                    <li>$3,000 AUD (Gold Tier)</li>
                                    <li>$1,000 AUD (Silver Tier)</li>
                                </ul>
                            </div>
                        </div>

                        <Image src={jatraPic} className=" ml-5 w-auto md:h-48" alt="newa guthi melbourne logo" />
                    </div>
                    <div>
                        <h3 className="font-normal mb-2 pb-2 border-b border-b-gray-200">About Indra jatra</h3>
                        <p className="mb-6 text-lg font-light">
                            <span className="font-medium">Indra jatra</span>, also known as
                            <span className="font-medium">yenya punhi</span>, is a significant and vibrant festival
                            celebrated by the nepali and especially the newar community. It is one of the oldest and
                            grandest festivals in kathmandu, nepal, with a history spanning over eight centuries.{' '}
                        </p>
                        <p className="mb-6 text-lg font-light">
                            The festival is a vibrant tribute to Lord Indra, the Hindu god of rain and prosperity. It is
                            a spiritual thanksgiving and a call for abundance. Rich in cultural symbolism, religious
                            rituals, and communal harmony, it reflects the traditions of the Nepalese community. The
                            festival serves as a platform for cultural expression and unity among the Nepalese diaspora.
                        </p>
                        <p className="mb-6 text-lg font-light">
                            Combining both Hindu and Buddhist elements, it symbolizes unity in diversity and aims to
                            bring all Nepalese communities together in mutual understanding and shared celebration. The
                            celebration in Australia highlights unique aspects of Newa and broader Nepalese culture,
                            fostering multicultural awareness and promoting Nepal as a rich cultural and tourism
                            destination.
                        </p>
                        <p className="mb-6 text-lg font-light">
                            The goal for the Melbourne celebration is to establish Indra Jatra as an annual cultural
                            festival in Victoria and to pave the way for future celebrations of other traditional
                            Nepalese festivals.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
