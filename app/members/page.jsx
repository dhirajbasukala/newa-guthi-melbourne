import OrganizationChart from './organizational-chart';

export const metadata = {
    title: 'Newa Guthis Melbourne: Our Teamd and Members'
};

export default async function page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="relative flex flex-col ">
                <div className="mb-10 delay-200">
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold  ">Our Team & Members</h1>
                </div>
                <div>
                    <h2 className="text-xl mb-0 md:text-2xl text-orange-500  font-light">
                        Know your team and get connected
                    </h2>
                </div>
            </section>
            <OrganizationChart />
            <section>
                <div>
                    <p className="text-lg md:text-xl font-light  max-w-4xl mx-auto">
                        Join our vibrant community dedicated to preserving Newar heritage and fostering cultural
                        connections in Melbourne. Our membership is open and inclusive, welcoming individuals and
                        families from diverse backgrounds.
                    </p>
                </div>
            </section>
        </div>
    );
}
