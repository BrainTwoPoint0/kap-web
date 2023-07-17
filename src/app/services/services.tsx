import React from 'react'

export default function Services() {
    return (
        <section className=" text-[var(--white)] backdrop-brightness-50 flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <br />
            <br />
            <div className="flex flex-wrap space-x-8">
                <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black "><p className="text-center text-lg">Unlocking Sustainable and Impactful Investment Opportunities</p></div>
                <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black "><p className="text-center text-lg">Accelerating Start-up Success: Future-proofing and Investor Readiness</p></div>
                <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black "><p className="text-center text-lg">Seamless Market Entry and Sustainable Growth in the MEA Market</p></div>
                <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black "><p className="text-center text-lg">Crafting Exceptional and Sustainable Events</p></div>
                <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black "><p className="text-center text-lg">Decarbonisation Roadmaps: Expert Guidance on the Path to a Sustainable Future</p></div>
            </div>
        </section>
    )
}
