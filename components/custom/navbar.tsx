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

            <ul className="flex items-center gap-1 mx-6">
                <li className="hover:bg-slate-200 px-6 py-1 rounded-md transition-all duration-200">
                    <a
                        href="/"
                        className="text-lg "
                    >
                        Songs
                    </a>
                </li>
                <li className="hover:bg-slate-200 px-6 py-1 rounded-md transition-all duration-200">
                    <a
                        href="/about"
                        className="text-lg "
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    )
}
