import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex flex-row justify-between p-4 h-50 items-center bg-[var(--dark-grey)] text-[var(--white)] fixed bottom-0 inset-x-0">
            <p className="font-bold">Privacy Policy</p>
            <Image alt="KAP Logo" src="/KAP-logo-white.svg" height={100} width={100} />
            <div className="flex flex-row md:gap-8">
                <p>About Us</p>
                <p>Our Services</p>
                <p>Contact Us</p>
            </div>
        </footer>

    )
}
