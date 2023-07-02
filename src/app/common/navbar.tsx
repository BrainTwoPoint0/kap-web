import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="flex flex-row bg-[var(--white)] text-[var(--black)] justify-between p-4">
            <Image alt="KAP Logo" src="/KAP-logo.svg" height={100} width={100} />
            <div className="flex flex-row md:gap-8">
                <p>About Us</p>
                <p>Our Services</p>
                <p>Contact Us</p>
            </div>
        </nav>
    )
}
