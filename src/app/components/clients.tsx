import React from 'react'
import Image from 'next/image'
export default function Clients() {
    return (
        <section className="bg-[var(--dark-grey)] p-8 md:p-16 text-[var(--green)] flex items-center flex-col">
            <h2 className="text-2xl md:text-4xl font-bold md:mb-8">Our Clients & Partners</h2>

            <div className="flex flex-wrap space-x-4 space-y-4 justify-center items-center md:w-1/2">
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="Arishi Logo" src="/arishi-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="ABCC Logo" src="/abcc-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="Civitem Logo" src=" /civitem-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="DKG Logo" src=" /dkg-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="FBBC Logo" src=" /fbbc-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="MBBC Logo" src=" /mbbc-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="Phyla Logo" src=" /phyla-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="Unitrove Logo" src=" /unitrove-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="Welkom Logo" src=" /welkom-logo.svg" />
                <img className="h-14 w-14 md:h-auto md:w-auto" alt="ZEF Logo" src=" /zef-logo.svg" />
            </div >
        </section >
    )
}
