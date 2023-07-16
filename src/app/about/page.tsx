import React from 'react'
import Enquiries from '../components/enquiries'
import Image from 'next/image'

export default function page() {
    return (
        <div>
            <div className="text-[var(--white)] text-center bg-about ">
                <h1 className="text-6xl font-bold p-28 backdrop-brightness-75">Unleash the untapped potential of your business.</h1>
                <div className="backdrop-brightness-50 flex flex-col items-center p-16">
                    <h3 className="font-bold text-4xl">Who We Are</h3>
                    <br />
                    <br />
                    <p className="w-3/4">Welcome to Kantar Advisory Partners, where we unify sustainability and impactful investing under the guiding principle of “Driving Impact, Powering Sustainability.” We play the dual role of spotlighting strong, sustainable, and impactful investment opportunities that generate both impressive returns and positive impact, while also acting as a vital support for startups. More than 30 years of combined expertise in sustainability, impact investments, energy sector and event management, our team at KAP brings a vast network encompassing government entities, private sector stakeholders, investors, and local/regional start-ups in the cleantech, healthtech, agritech, and energy industries.</p>
                    <br />
                    <p> At kap, we are not only service providers, but also partners on your journey towards sustainability.<br />Each step we take together is a stride towards a better, more sustainable future.</p>
                </div>
            </div>
            <div className="bg-[var(--white)] text-[var(--green)] p-20">
                <h1 className="text-4xl"><span className="font-bold ">We aspire to:</span> Drive positive change.</h1>
            </div>
            <div className="bg-[var(--dark-grey)] p-20 flex text-[var(--white)]">
                <div>
                    <h3 className="font-bold text-4xl text-[var(--white)]">Our Network</h3>
                    <br />
                    <h4 className="text-[var(--green)] font-bold">Europe</h4>
                    <p className="">U.K.</p>
                    <br />
                    <h4 className="text-[var(--green)] font-bold">Middle-East</h4>
                    <p className="">Lebanon</p>
                    <p className="">U.A.E.</p>
                    <p className="">K.S.A</p>
                    <p className="">Qatar</p>
                    <p className="">Kuwait</p>
                    <p className="">Oman</p>
                    <p className="">Iraq</p>
                    <p className="">Jordan</p>
                    <br />
                    <h4 className="text-[var(--green)] font-bold">Africa</h4>
                    <p className="">Egypt</p>
                    <p className="">Algeria</p>
                    <p className="">Nigeria</p>
                    <p className="">Mauritania</p>
                    <p className="">Morocco</p>
                    <p className="">Rwanda</p>
                    <p className="">Uganda</p>
                    <p className="">Ivory Coast</p>
                    <p className="">Ghana</p>
                    <p className="">Gabon</p>
                    <p className="">Kenya</p>

                    <br />

                </div>
                <Image alt="KAP Logo" src="/map.svg" height={1000} width={1250} />

            </div>

            <Enquiries />
        </div>
    )
}
