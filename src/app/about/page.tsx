'use client'
import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';
import Enquiries from '../components/enquiries'
import Map from '../components/map'

const aspirations = [
    "Drive positive change",
    "Champion sustainable growth",
    "Empower businesses",
    "Promote ethical and impactful investing",
    "Make a positive impact on society and the environment",
    "Foster partnerships for sustainable development aligning with SDG17",
];

export default function About() {
    const [index, setIndex] = useState(0);
    const aspiration = useTypewriter(aspirations[index]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index + 1) % aspirations.length);
        }, 9000); // adjust timing as needed
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div>
            <div className="text-[var(--white)] text-center bg-about ">
                <h1 className="md:text-6xl md:p-28 text-4xl font-bold p-20 backdrop-brightness-75">Unleash the untapped potential of your business.</h1>
                <div className="backdrop-brightness-50 flex flex-col items-center p-16">
                    <h3 className="font-bold text-4xl">Who We Are</h3>
                    <br />
                    <br />
                    <p className="w-3/4">Welcome to Kantar Advisory Partners, where we unify sustainability and impactful investing under the guiding principle of “Driving Impact, Powering Sustainability.” We play the dual role of spotlighting strong, sustainable, and impactful investment opportunities that generate both impressive returns and positive impact, while also acting as a vital support for startups. More than 30 years of combined expertise in sustainability, impact investments, energy sector and event management, our team at KAP brings a vast network encompassing government entities, private sector stakeholders, investors, and local/regional start-ups in the cleantech, healthtech, agritech, and energy industries.</p>
                    <br />
                    <p className='font-bold'> At kap, we are not only service providers, but also partners on your journey towards sustainability.<br />Each step we take together is a stride towards a better, more sustainable future.</p>
                </div>
            </div>
            <div className="bg-[var(--white)] text-[var(--green)] p-20">
                <h1 className="text-2xl md:text-4xl">
                    <span className="font-bold ">We aspire to:</span>{" "}
                    {aspiration}
                </h1>
            </div>

            <Map />
            <Enquiries />
        </div>
    )
}
