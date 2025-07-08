'use client';
import Image from 'next/image';
import Link from 'next/link';
import ngmLogo from 'public/logo.jpeg';
import { usePathname } from 'next/navigation';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About us', href: '/about-us' },
    { linkText: 'Events', href: '/events' },
    { linkText: 'Contact us', href: '/contact-us' }
];

export function Header() {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    return (
        <nav className="flex flex-wrap items-center justify-center md:justify-between gap-8 pt-6 pb-12 sm:pt-12 md:pb-24 ">
            <Link href="/">
                <Image src={ngmLogo} width="150" alt="newa guthi melbourne logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={`${isActive(item.href) ? 'text-orange-500' : ''} inline-flex px-1.5 py-1 sm:px-3 sm:py-2 no-underline hover:underline hover:underline-offset-4`}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
