'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    // get pathname from url so we know what page we're on
    const pathName: string = usePathname();

    // fn to determine if link is active/inactive
    const getLinkClass = (href: string) =>
        pathName === href || pathName.startsWith(href + '/') ? 'activeLink' : 'inactiveLink'

    return (
        <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-xl font-bold mb-2 md:mb-0">
                <Link href="/">React Blog</Link>
            </h1>
            <ul className="flex flex-col md:flex-row md:space-x-4">
                <li><Link href="/blog" className={getLinkClass('/blog')}>Blog</Link></li>
                <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li>
                <li><Link href="/contact" className={getLinkClass('/contact')}>Contact</Link></li>
                <li><Link href="/auth/register" className={getLinkClass('/auth/register')}>Register</Link></li>
            </ul>
        </nav>
    );
}