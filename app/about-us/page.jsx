import Content from './content.jsx';
export const metadata = {
    title: 'Newa Guthi Melbourne: About us'
};

export default async function page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="relative flex flex-col ">
                <div className="mb-10 delay-200">
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold  ">
                        <span className="text-orange-500 uppercase mr-5 block ">About</span>Newa Guthi Melbourne
                    </h1>
                </div>
                <div>
                    <h2 className="text-xl  md:text-2xl text-orange-500  font-light">Our key purposes</h2>
                </div>
                <Content />
            </section>
        </div>
    );
}
