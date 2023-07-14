import React from 'react'
import Events from './events'

export default function Header() {
    return (
        <header className="bg-home text-[var(--white)]">
            <div className='w-1/2 p-20'>
                <h1 className="text-5xl font-bold">Your Partner in Growth.</h1>
                <br />
                <p className="text-sm">Kantar Advisory Partners "KAP" is a boutique consultancy specialising in supporting start-ups, businesses, and investors under our distinctive guiding principle of "Driving Impact, Powering Sustainability".</p>
            </div>
            <Events />
        </header>
    )
}
