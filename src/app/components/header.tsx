import React from 'react'
import Events from './events'

export default function Header() {
    return (
        <header className="bg-home text-[var(--white)]">
            <div className='md:w-1/2 md:p-20 p-10'>
                <h1 className="text-2xl md:text-5xl font-bold">Your Partner in Growth.</h1>
                <br />
                <p className="text-sm">Kantar Advisory Partners &quot;KAP&quot; is a boutique consultancy specialising in supporting start-ups, businesses, and investors under our distinctive guiding principle of "Driving Impact, Powering Sustainability".</p>
            </div>
            <Events />
        </header>
    )
}
