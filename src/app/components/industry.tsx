import React from 'react'

export default function IndustryCoverage() {
    const coverage = [
        "Power, Renewable Energy & Utilities", "Hydrogen & Green Ammonia", "Sustainability & Planning Net Zero", "Water & Waste Management", "Transportation & Infrastructure", "CleanTech & AgriTech", "HealthTech", "Oil, Gas & LNG"
    ]
    return (
        <section className="bg-[var(--dark-grey)] text-[var(--white)] backdrop-brightness-50 flex flex-col items-center md:p-8 p-4">
            <h1 className="text-2xl md:text-4xl font-bold">Industry Coverage</h1>

            <div className="flex flex-wrap justify-center md:mt-8 mt-4">
                {coverage.map((coverageItem, index) => {
                    return (
                        <div className="w-32 h-20 md:w-48 md:h-32 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black m-4"
                            key={index}>
                            <p className="text-center md:text-base text-sm">{coverageItem}</p>
                        </div>
                    );
                })}
            </div>
            <a href="/services" className="text-center md:mt-8 mt-4 bg-[var(--green)] text-[var(--white)] rounded-lg p-3 w-64 font-bold">Find Out More</a>

        </section>
    )
}
