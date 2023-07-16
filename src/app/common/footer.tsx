import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="flex flex-row justify-between p-4 h-50 items-center bg-[var(--dark-grey)] text-[var(--white)] ">
            <p className="font-bold">Privacy Policy</p>
            <Image alt="KAP Logo" src="/KAP-logo-white.svg" height={100} width={100} />
            <div className="flex flex-row md:gap-8">
                <p><Link href="/about">About Us</Link></p>
                <p><Link href="/services">Our Services</Link></p>
                <p><Link href="/contact">Contact Us</Link></p>
            </div>
        </footer>

    )
}
