import React from 'react'

export default function IndustryCoverage() {
    const coverage = [
        "Power, Renewable Energy & Utilities", "Hydrogen & Green Ammonia", "Sustainability & Planning Net Zero", "Water & Waste Management", "Transportation & Infrastructure", "CleanTech & AgriTech", "HealthTech", "Oil, Gas & LNG"
    ]
    return (
        <section className="bg-[var(--dark-grey)] text-[var(--white)] backdrop-brightness-50 flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <br />
            <br />
            <div className="flex flex-wrap justify-center">
                {coverage.map((service, index) => {
                    return (
                        <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black m-4"

                            key={index}>
                            <p className="text-center text-lg">{service}</p>
                        </div>
                    );
                })}
            </div>

        </section>
    )
}
