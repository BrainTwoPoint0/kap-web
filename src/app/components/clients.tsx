import React from 'react'
import Image from 'next/image'
export default function Clients() {
    return (
        <section className="bg-[var(--dark-grey)] p-8 md:p-16 text-[var(--green)] flex items-center flex-col">
            <h2 className="text-2xl md:text-4xl font-bold md:mb-8">Our Clients & Partners</h2>

            <div className="flex flex-wrap space-x-4 space-y-4 justify-center items-center md:w-1/2">
                <img className="h-14 w-14 md:h-20 md:w-20" alt="Arishi Logo" src="/arishi-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="ABCC Logo" src="/abcc-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="Civitem Logo" src=" /civitem-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="DKG Logo" src=" /dkg-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="FBBC Logo" src=" /fbbc-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="MBBC Logo" src=" /mbbc-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="Phyla Logo" src=" /phyla-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="Unitrove Logo" src=" /unitrove-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="Welkom Logo" src=" /welkom-logo.svg" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="ZEF Logo" src=" /zef-logo.svg" />
                <img className="h-10 w-14 md:h-20 md:w-20" alt="aspen Logo" src=" /aspen-institute-logo-primary.png" />
                <img className="h-10 w-16 md:h-14 md:w-24" alt="BE Logo" src=" /BE-logo.png" />
                <img className="h-10 w-20 md:h-11 md:w-24" alt="Cambridge Cleantech Logo" src=" /Cambridge-Cleantech-logo.png" />
                <img className="h-14 w-14 md:h-20 md:w-20" alt="OXFORD CLEANTECH Logo" src=" /OXFORD-CLEANTECH-LOGO.png" />
                <img className="h-10 w-16 md:h-14 md:w-24" alt="SEC Logo" src=" /SEC-Logo.png" />

            </div >
        </section >
    )
}
