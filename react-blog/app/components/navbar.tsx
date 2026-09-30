'use client';
import Link from "next/link";
import{usePathname} from "next/navigation";


export default function Navbar() {
    const pathName = usePathname();
    const getLinkclassName = (href: string) => {
        return pathName == href || pathName.startsWith(href + "/") ? 'activeLink' : 'inactiveLink';
    };
    return (
        <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-xl font-bold mb-2 md:mb-0">
                <Link href="/">React Blog</Link>
            </h1>
            <ul className="flex flex-col md:flex-row md:space-x-4">
                <li><Link href="/blog" className={getLinkclassName("/blog")}>Blog</Link></li>
                <li><Link href="/about" className={getLinkclassName("/about")}>About</Link></li>
                <li><Link href="/contact" className={getLinkclassName("/contact")}>Contact</Link></li>
            </ul>
        </nav>
    );
}