'use client'

import Link from "next/link";
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import './styled.css'

export function Navbar() {

    let links = 'text-lg font-semibold hover:cursor-pointer hover:bg-gray-400 hover:text-gray-900 transition-colors px-2 py-1 rounded';


    const showMenu = () => {
        document.querySelector('#show-menu')?.classList.toggle('show')
    }

    return (
        <header className="h-nav bg-gray-900 text-white flex items-center justify-between px-8 shadow-lg">
            <h1>Logo</h1>

            <button className="md:hidden font-bold text-gray-200" onClick={showMenu}>
                <HiOutlineMenuAlt3/>
            </button>
            <ul id="show-menu" className="hidden gap-x-2 md:flex">
                <button className="md:hidden font-bold text-lg text-gray-200 absolute right-2 top-2" 
                    onClick={showMenu}>
                    <MdClose/>
                </button>
                <li><Link className={links} href="/">Home</Link></li>
                <li><Link className={links} href="/">Explorer Next</Link></li>
                <li><Link className={links} href="/">Contact</Link></li>
                <li><Link className={links} href="/">About</Link></li>
            </ul>
        </header>
    )
}