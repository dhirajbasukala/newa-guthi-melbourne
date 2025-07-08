import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-white mt-16 ">
            <div className="flex justify-end space-x-3 mr-4">
                <a
                    href="#facebook"
                    className="w-8 h-8  rounded-full flex items-center justify-center text-orange transition-colors"
                    aria-label="Facebook"
                    title="Facebook page"
                >
                    <Facebook strokeWidth="2" className="w-4 h-4 text-gray-500 hover:text-orange-500 " />
                </a>
                <a
                    href="#instagram"
                    className="w-8 h-8  rounded-full flex items-center justify-center text-gray-500 hover:text-white  transition-colors"
                    aria-label="Instagram"
                    title="Instagram page"
                >
                    <Instagram strokeWidth="2" className="w-4 h-4 text-gray-500 hover:text-orange-500" />
                </a>
                <a
                    href="#twitter"
                    className="w-8 h-8  rounded-full flex items-center justify-center text-white  transition-colors"
                    aria-label="Twitter"
                    title="Twitter link"
                >
                    <Twitter strokeWidth="2" className="w-4 h-4 text-gray-500 hover:text-orange-500" />
                </a>
            </div>
            <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto grow px-4 py-8">
                <p className="text-sm">© 2025 Newa Guthi Melbourne Incorporated. All rights reserved.</p>
                <div className="mt-5 md:mt-0">
                    <div className="flex items-center space-x-4 text-sm no-underline">
                        <a
                            href="#privacy"
                            className="hover:text-orange-700 no-underline hover:underline hover:underline-offset-4 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="hover:text-orange-700 no-underline hover:underline hover:underline-offset-4 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
