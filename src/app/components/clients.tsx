import React from 'react'
import Image from 'next/image'
export default function Clients() {
    return (
        <section className="bg-[var(--dark-grey)] p-8 md:p-16 text-[var(--green)] flex items-center flex-col">
            <h2 className="text-2xl md:text-4xl font-bold md:mb-8">Our Clients & Partners</h2>

            <div className="flex flex-wrap space-x-4 space-y-4 justify-center items-center md:w-1/2">
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="Arishi Logo" src="/arishi-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="ABCC Logo" src="/abcc-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="Civitem Logo" src="/civitem-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="DKG Logo" src="/dkg-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="FBBC Logo" src="/fbbc-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="MBBC Logo" src="/mbbc-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="Phyla Logo" src="/phyla-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="Unitrove Logo" src="/unitrove-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="Welkom Logo" src="/welkom-logo.svg" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="ZEF Logo" src="/zef-logo.svg" />
                <Image className="h-10 w-14 md:h-20 md:w-20" width={100} height={100} alt="aspen Logo" src="/aspen-institute-logo-primary.png" />
                <Image className="h-10 w-16 md:h-14 md:w-24" width={100} height={100} alt="BE Logo" src="/BE-logo.png" />
                <Image className="h-8 w-24 md:h-9 md:w-28" width={100} height={100} alt="Cambridge Cleantech Logo" src="/Cambridge-Cleantech-logo.png" />
                <Image className="h-14 w-14 md:h-20 md:w-20" width={100} height={100} alt="OXFORD CLEANTECH Logo" src="/OXFORD-CLEANTECH-LOGO.png" />
                <Image className="h-8 w-14 md:h-10 md:w-20" width={100} height={100} alt="SEC Logo" src="/SEC-Logo.png" />
                <Image className="h-8 w-16 md:h-12 md:w-24" width={100} height={100} alt="Sustainable Logo" src="/sustainable.png" />
                <Image className="h-10 w-16 md:h-12 md:w-24" width={100} height={100} alt="Kezad Logo" src="/kezad.png" />
                <Image className="h-12 w-12 md:h-14 md:w-14" width={100} height={100} alt="IE Logo" src="/improvedenergy.png" />
                <Image className="h-12 w-20 md:h-16 md:w-28" width={100} height={100} alt="Innovation Zero Logo" src="/innovationzero-logo.png" />

            </div >
        </section >
    )
}
