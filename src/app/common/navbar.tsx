"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }

    const closeDropdown = () => {
        setDropdownOpen(false);
    }

    return (
        <nav className="relative flex flex-row bg-[var(--white)] text-[var(--black)] justify-between py-4 px-10 items-center">
            <div className="md:hidden flex items-center" onClick={toggleDropdown}>
                <span className="text-3xl cursor-pointer">☰</span>

                {/* Mobile Dropdown */}
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 py-2 bg-white  shadow-xl z-10">
                        <p className="px-4 py-2"><Link href="/about" onClick={closeDropdown}>About Us</Link></p>
                        <p className="px-4 py-2"><Link href="/services" onClick={closeDropdown}>Our Services</Link></p>
                        <p className="px-4 py-2"><Link href="/contact" onClick={closeDropdown}>Contact Us</Link></p>
                    </div>
                )}
            </div>
            <Link href='/' className="md:mr-auto md:ml-0 ml-auto mr-auto">
                <Image alt="KAP Logo" src="/KAP-logo.svg" height={100} width={100} />
            </Link>
            <div className="hidden md:flex flex-row gap-8">
                <p><Link href="/about">About Us</Link></p>
                <p><Link href="/services">Our Services</Link></p>
                <p><Link href="/contact">Contact Us</Link></p>
            </div>
        </nav>
    )
}
