import React from 'react'
import Enquiries from '../components/enquiries'
import Clients from '../components/clients'
import Services from './services'

export default function OurServices() {
    return (
        <div>
            <div className="bg-services">
                <h1 className="text-[var(--white)] backdrop-brightness-75 text-5xl font-bold text-center p-24">Tailored Solutions:<br />Ensuring Client and Partner Success</h1>
                <Services />
            </div>
            <Clients />
            <Enquiries />
        </div >
    )
}
