import Link from "next/link";
import {HiOutlineMenuAlt3} from 'react-icons/hi'

export function Navbar() {

    let links = 'text-lg font-semibold hover:cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors px-2 py-1 rounded';

    return (
        <header className="h-nav bg-gray-900 text-white flex items-center justify-between px-8 shadow-lg">
            <h1>Logo</h1>

            <button className="md:hidden font-bold text-gray-200">
                <HiOutlineMenuAlt3/>
            </button>
            <ul className="hidden gap-x-2 md:flex">
                <li><Link className={links} href="/">Home</Link></li>
                <li><Link className={links} href="/">Explorer Next</Link></li>
                <li><Link className={links} href="/">Contact</Link></li>
                <li><Link className={links} href="/">About</Link></li>
            </ul>
        </header>
    )
}