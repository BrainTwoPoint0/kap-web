import React from 'react'
import Image from 'next/image'

export default function Map() {
    return (
        <div className="bg-[var(--dark-grey)] md:p-20 p-8 flex  justify-center text-[var(--white)]">
            <div>

                <h3 className="font-bold text-2xl md:text-4xl text-[var(--white)] text-center">Our Network</h3>
                <div className="flex md:flex-col">
                    <div>

                        <p className="text-[var(--green)] font-bold mt-6">U.K.</p>
                        <h4 className="text-[var(--green)] font-bold mt-6">Middle-East</h4>
                        <p className="">Lebanon</p>
                        <p className="">U.A.E.</p>
                        <p className="">K.S.A</p>
                        <p className="">Qatar</p>
                        <p className="">Kuwait</p>
                        <p className="">Oman</p>
                        <p className="">Iraq</p>
                        <p className="">Jordan</p>
                    </div>
                    <div className="ml-8 md:ml-0">
                        <h4 className="text-[var(--green)] font-bold mt-6">Africa</h4>
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
                    </div>
                </div>
            </div>
            <img alt="KAP Network Map" src="/map.svg" className="md:w-1/2 md:relative absolute w-full mt-28 md:mt-0" />
        </div>
    )
}
