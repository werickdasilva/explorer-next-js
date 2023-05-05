import Link from "next/link";

export function Navbar() {
    return (
        <header>
            <h1>Logo</h1>

            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Explorer Next</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">About</Link></li>
            </ul>
        </header>
    )
}