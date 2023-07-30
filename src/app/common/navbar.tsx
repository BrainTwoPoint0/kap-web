import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="flex flex-row bg-[var(--white)] text-[var(--black)] justify-between p-4 items-center ">
            <Link href='/'><Image alt="KAP Logo" src="/KAP-logo.svg" height={100} width={100} /></Link>
            <div className="flex flex-row md:gap-8">
                <p><Link href="/about">About Us</Link></p>
                <p><Link href="/services">Our Services</Link></p>
                <p><Link href="/contact">Contact Us</Link></p>
            </div>
        </nav>
    )
}
