import Image from "next/image";
import Link from "next/link";
import logo2 from './logo.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-[4%] md:px-[10%] py-10">
            <Link href="/">
                    <Image
                        aria-hidden
                        src={logo2}
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                
            </Link>

            <ul className="flex items-center gap-1 mx-6">
                <li className="hover:bg-slate-200 px-6 py-1 rounded-md transition-all duration-200">
                    <Link href="/" >
                        <span className="text-lg">Songs</span>
                    </Link>
                </li>
                <li className="hover:bg-slate-200 px-6 py-1 rounded-md transition-all duration-200">
                    <Link href="/about" >
                        <span className="text-lg">About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
