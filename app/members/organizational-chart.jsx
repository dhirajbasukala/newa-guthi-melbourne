import { CircleUserRound } from 'lucide-react';
const OrganizationChart = () => {
    const organizationStructure = {
        level1: [
            {
                title: 'President',
                name: 'Maya Prasad Suwal',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            }
        ],
        level2: [
            {
                title: 'Vice President',
                name: 'Kumar Maharjan',
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Secretary',
                name: 'Susanta Dangol (Simon)',
                image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Treasurer',
                name: 'Surya Maharjan',
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face'
            }
        ],
        level3: [
            {
                title: 'Executive members',
                name: 'Rajendra Maharjan',
                image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Suraj Pradhan',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Beena Maharjan',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Aryan Manandhar',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Sriti Nakhanda',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Rajan Twayna',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            },
            {
                title: 'Executive members',
                name: 'Anil Dongol',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face'
            }
        ],
        level4: [
            {
                title: 'Advisors',
                description: 'Active community members participating in cultural activities and events',
                count: '15+ Members',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop&crop=face'
            }
        ]
    };

    const PersonCard = ({ person, level }) => (
        <div className=" rounded-3xl bg-orange-50 hover:border-orange-500  hover:shadow-lg transition-shadow">
            <div className="p-6 text-center">
                <div className="relative mb-3 flex justify-center ">
                    {/* <img */}
                    {/*     src={person.image} */}
                    {/*     alt={person.name || person.title} */}
                    {/*     className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-heritage-orange/30" */}
                    {/* /> */}
                    {/* <User strokeWidth="2" className="min-w-20 h-20 mr-4 text-orange-500" /> */}
                    <CircleUserRound strokeWidth="1" className="min-w-20 h-20 mr-4 text-orange-300" />
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
                <div className="flex justify-center">
                    <div className="w-px h-8 bg-orange-200"></div>
                </div>

                {/* Level 3 - Committee Chairs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {organizationStructure.level3.map((person, index) => (
                        <PersonCard key={index} person={person} level={3} />
                    ))}
                </div>
            </div>
            <div className="mt-10 hidden">
                <h3 className="font-playfair text-2xl font-normal mb-3">Advisers</h3>
                <ul>
                    <li>Ranjan Baidya</li>
                    <li>Rajan Maskey</li>
                    <li>Suresh Hada</li>
                    <li>Ram Kumar Shrestha</li>
                    <li>Raju Shakya</li>
                    <li>Suresh Maharjan</li>
                </ul>
            </div>
        </div>
    );
};

export default OrganizationChart;
