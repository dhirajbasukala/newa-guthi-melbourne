import Card from 'components/card.jsx';
import { Shield, Users, BookOpen, Megaphone, Star, Calendar } from 'lucide-react';

const AboutSection = () => {
    const purposes = [
        {
            icon: Shield,
            title: 'Preserving Newa Heritage and Traditions',
            description:
                'We strive to keep Newa traditions, languages, customs, and rituals alive, ensuring their continuity for future generations.'
        },
        {
            icon: Users,
            title: 'Creating Newa Community and Support',
            description:
                'We offer a supportive environment where members feel connected, understood, and valued, fostering a deeper connection to Newa cultural identity.'
        },
        {
            icon: BookOpen,
            title: 'Promoting Cultural Awareness and Education',
            description:
                'We aim to educate both our members and the wider community about Newa heritage and traditions, promoting diversity and cultural awareness.'
        },
        {
            icon: Megaphone,
            title: 'Advocacy and Representation',
            description:
                'We advocate for the rights and needs of Newa community members, ensuring their voices are heard in broader societal conversations.'
        },
        {
            icon: Star,
            title: 'Encouraging Self-Expression and Pride',
            description:
                'We provide a platform for individuals to proudly express their cultural identity, contributing to personal growth and confidence.'
        },
        {
            icon: Calendar,
            title: 'Social, Cultural, and Recreational Activities',
            description:
                'We organize events, festivals, and gatherings that allow members to socialize, connect, and celebrate their heritage.'
        }
    ];

    return (
        <section>
            {/* Section header */}
            <div className="mb-16">
                <div className="w-24 h-1 bg-heritage-gold mx-auto mb-8"></div>
                <p className="text-lg md:text-xl font-light text-heritage-brown/80 max-w-4xl mx-auto ">
                    <span className="font-normal">Newa Guthi Melbourne Incorporated</span> is a traditional social and
                    cultural organization dedicated to the Newar community in Victoria. Our core purpose is to unite the
                    Newar ethnic community by celebrating and preserving our shared cultural backgrounds, languages,
                    traditions, values, and beliefs.
                </p>
            </div>

            {/* Key purposes grid */}
            <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {purposes.map((purpose, index) => (
                        <div
                            key={purpose.title}
                            className="bg-white border border-gray-200 rounded-2xl text-neutral-600"
                        >
                            <div className="flex flex-col gap-4 px-6 py-8">
                                <div className="flex flex-row">
                                    <purpose.icon strokeWidth="1" className="min-w-20 h-20 mr-4 text-orange-500" />
                                    <h3 className="text-neutral-900 font-normal mb-5">{purpose.title}</h3>
                                </div>
                                <span>{purpose.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8">
                <h3 className="font-playfair text-2xl font-medium text-heritage-brown mb-4">Our Journey Forward</h3>
                <p className="text-heritage-brown/80 font-light text-lg leading-relaxed">
                    <span className="font-normal">Newa Guthi Melbourne</span> is currently in the process of being
                    incorporated with Consumer Affairs Victoria, marking an important milestone in our commitment to
                    serving the Newar community with official recognition and structure.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
