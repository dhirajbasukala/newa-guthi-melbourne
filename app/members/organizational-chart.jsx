import { CircleUserRound, User } from 'lucide-react';
import Image from 'next/image';
import imgPresident from 'public/images/members/maya-prasad-suwal.jpg';
import imgVicePresident from 'public/images/members/maya-prasad-suwal.jpg';

import imgSecretary from 'public/images/members/susanta-dongol.jpg';
import imgTreasurer from 'public/images/members/surya-maharjan.jpg';
// executive memebers
import imgRajendraMaharjan from 'public/images/members/rajendra-maharjan.jpg';
import imgSurajPradhan from 'public/images/members/suraj-pradhan.jpg';
import imgBeenaMaharjan from 'public/images/members/beena-maharjan.jpg';
// import imgAryanManandhar from 'public/images/members/aryan-mananadhar.jpg';
// import imgSritiNakhanda from 'public/images/members/sriti-nakhanda.jpg';
// import imgRajanTwayna from 'public/images/members/rajan-twayna.jpg';
// import imgAnilDongol from 'public/images/members/anil-dongol.jpg';
// advisor
import imgRajanVaidya from 'public/images/members/rajan-vaidya.jpg';
import imgMadhuriMaskeySharma from 'public/images/members/madhuri-maskey-sharma.jpg';
import imgRajanMaskey from 'public/images/members/rajan-maskey.jpg';
import imgSureshMaharjan from 'public/images/members/suresh-maharjan.jpg';

const OrganizationChart = () => {
    const organizationStructure = {
        level1: [
            {
                title: 'President',
                name: 'Maya Prasad Suwal',
                image: imgPresident
            }
        ],
        level2: [
            {
                title: 'Vice President',
                name: 'Kumar Maharjan',
                image: '' //imgVicePresident
            },
            {
                title: 'Secretary',
                name: 'Susanta Dangol (Simon)',
                image: imgSecretary
            },
            {
                title: 'Treasurer',
                name: 'Surya Maharjan',
                image: imgTreasurer
            }
        ],
        level3: [
            {
                title: 'Executive member',
                name: 'Rajendra Maharjan',
                image: imgRajendraMaharjan
            },
            {
                title: 'Executive member',
                name: 'Suraj Pradhan',
                image: imgSurajPradhan
            },
            {
                title: 'Executive member',
                name: 'Beena Maharjan',
                image: imgBeenaMaharjan
            },
            {
                title: 'Executive member',
                name: 'Aryan Manandhar',
                image: '' // imgAryanManandhar
            },
            {
                title: 'Executive member',
                name: 'Sriti Nakhanda',
                image: '' // imgSritiNakhanda
            },
            {
                title: 'Executive member',
                name: 'Rajan Twayna',
                image: '' // imgRajanTwayna
            },
            {
                title: 'Executive member',
                name: 'Anil Dongol',
                image: '' // imgAnilDongol
            }
        ],
        level4: [
            {
                title: 'Advisor',
                name: 'Ranjan Vaidya',
                image: imgRajanVaidya
            },
            {
                title: 'Advisor',
                name: 'Rajan Maskey',
                image: imgRajanMaskey
            },
            {
                title: 'Advisor',
                name: 'Madhuri Maskey Sharma',
                image: imgMadhuriMaskeySharma
            },
            {
                title: 'Advisor',
                name: 'Suresh Maharjan',
                image: imgSureshMaharjan
            }
        ]
    };

    const PersonCard = ({ person, level }) => (
        <div className=" rounded-3xl bg-orange-50 hover:border-orange-500  hover:shadow-lg transition-shadow">
            <div className="p-6 text-center">
                <div className="relative mb-3 flex justify-center ">
                    {person.image !== '' && (
                        <Image
                            src={person.image}
                            alt={person.name || person.title}
                            className="w-40 h-40 rounded-full mx-auto object-cover border-2 border-orange-100"
                        />
                    )}
                    {person.image === '' && <User strokeWidth="1" className="min-w-30 h-30 mr-4 text-orange-300" />}
                </div>
                <h4 className="font-playfair mb-1 ">{person.title}</h4>
                {person.name && <p className="text-md  mb-2 font-semibold text-orange-500">{person.name}</p>}
                {person.description && <p className="text-xs  mb-2">{person.description}</p>}
                {person.count && <p className="text-sm font-medium ">{person.count}</p>}
                {person.email && <p className="text-xs ">{person.email}</p>}
            </div>
        </div>
    );

    return (
        <div className="mb-16">
            <h3 className="font-playfair text-2xl font-normal mb-3">Organization Structure</h3>
            <p className="mb-12">Our leadership team working together to preserve and promote Newar heritage</p>

            <div className="space-y-8">
                {/* Level 1 - President */}
                <div className="flex justify-center">
                    <div className="w-64">
                        {organizationStructure.level1.map((person, index) => (
                            <PersonCard key={index} person={person} level={1} />
                        ))}
                    </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center">
                    <div className="w-px h-8 bg-orange-200 "></div>
                </div>

                {/* Level 2 - Executive Team */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {organizationStructure.level2.map((person, index) => (
                        <PersonCard key={index} person={person} level={2} />
                    ))}
                </div>

                {/* Connection Line */}
                <div className="flex flex-col items-center justify-center">
                    <div className="w-px h-8 bg-orange-200"></div>
                    <h3 className="font-light mt-5 uppercase text-orange-400"> Executive members </h3>
                    <div className="w-px h-8 mt-2 bg-orange-200"></div>
                </div>

                {/* Level 3 - Committee Chairs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {organizationStructure.level3.map((person, index) => (
                        <PersonCard key={index} person={person} level={3} />
                    ))}
                </div>
                {/* Connection Line */}
                <div className="flex flex-col items-center justify-center">
                    <div className="w-px h-8 bg-orange-200"></div>
                    <h3 className="font-light mt-5 uppercase text-orange-400"> Advisors</h3>
                    <div className="w-px h-8 mt-2 bg-orange-200"></div>
                </div>

                {/* Level 4 - Committee Chairs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {organizationStructure.level4.map((person, index) => (
                        <PersonCard key={index} person={person} level={3} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganizationChart;
