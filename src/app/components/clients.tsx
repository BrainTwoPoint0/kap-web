import React from 'react'
import Image from 'next/image'
export default function Clients() {
    return (
        <div className="bg-[var(--dark-grey)] p-16 text-[var(--green)] flex items-center flex-col">
            <h2 className="text-4xl font-bold">Our Clients & Partners</h2>
            <br />
            <br />
            <div className="flex flex-wrap space-x-4 justify-center items-center w-2/5">
                <div className="h-24 w-24 relative"><Image alt="Arishi Logo" src="/arishi-logo.svg" fill /></div>
                <div className="h-24 w-24 relative"><Image alt="ABCC Logo" src="/abcc-logo.svg" fill /></div>
                <div className="h-24 w-24 relative"><Image alt="Civitem Logo" src=" /civitem-logo.svg" fill /></div>
                <div className="h-24 w-24 relative"><Image alt="DKG Logo" src=" /dkg-logo.svg" fill /></div>
                <div className="h-24 w-24 relative"><Image alt="FBBC Logo" src=" /fbbc-logo.svg" fill /></div>
                <div className="h-24 w-24 relative"><Image alt="MBBC Logo" src=" /mbbc-logo.svg" fill /></div>
                <div className="h-32 w-32 relative"><Image alt="Phyla Logo" src=" /phyla-logo.svg" fill /></div>
                <div className="h-32 w-32 relative"><Image alt="Unitrove Logo" src=" /unitrove-logo.svg" fill /></div>
                <div className="h-32 w-32 relative"><Image alt="Welkom Logo" src=" /welkom-logo.svg" fill /></div>
                <div className="h-32 w-32 relative"><Image alt="ZEF Logo" src=" /zef-logo.svg" fill /></div>
            </div >
        </div >
    )
}
