import React from 'react'
import Image from 'next/image'

export default function Map() {
    return (
        <div className="bg-[var(--dark-grey)] p-20 flex  justify-center text-[var(--white)]">
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
            <Image alt="KAP Network Map" src="/map.svg" className="h-1/2" height={1000} width={1250} />

        </div>
    )
}
