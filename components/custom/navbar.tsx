import Image from "next/image";
import logo2 from './logo.svg'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-[4%] md:px-[10%] py-10">
            <a href="/">
                <Image
                    aria-hidden
                    src={logo2}
                    alt="Logo"
                    width={100}
                    height={100}
                /></a>

            <ul className="flex items-center gap-6">
                <li>
                    <a
                        href="/"
                        className="text-lg  hover:underline hover:underline-offset-4"
                    >
                        Songs
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="text-lg  hover:underline hover:underline-offset-4"
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    )
}
