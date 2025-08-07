'use client'
import useNetworkCheck from "@/lib/hooks/useNetworkCheck"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {
    const { isOnline } = useNetworkCheck();
    const pathname = usePathname();
    return (
        <header className="flex justify-between px-6 py-4">
            <nav className="flex gap-2">
                <Link className={`p-2 select-none hover:bg-neutral-700 underline-offset-4 ${pathname=='/'?' underline':''}`} aria-label="link to home page" href='/'>Home</Link>
                <Link className={`p-2 select-none hover:bg-neutral-700 underline-offset-4 ${pathname=='/about'?' underline':''}`} aria-label="link to about page" href='/about'>About</Link>
            </nav>
            <p className="flex gap-2"><span className={`${isOnline?'text-green-500':'text-red-500'}`}>●</span>status: {isOnline?'on':'off'}line</p>
        </header>
    )
}

export default Header