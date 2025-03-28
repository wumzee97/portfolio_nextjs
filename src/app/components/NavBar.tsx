"use client";

import MobileNav from './MobileNav'
import Link from "next/link";

const NavBar = () => {
    return (
        <header className="flex justify-between h-24 px-4 lg:px-20 items-center">
            <Link href='/' className=" font-bebas text-4xl text-neutral-offwhite">
                ADEWUMI ALABI
            </Link>
            <div className="lg:flex hidden ">
                <Link href="/#work" className=" text-neutral-offwhite">Work</Link>
                <Link href="/about" className=" text-neutral-offwhite ml-8">About</Link>
                <Link href="#contact" className=" text-neutral-offwhite ml-8">Contact</Link>
            </div>
            
            <MobileNav   />
        </header>
    );
};

export default NavBar;