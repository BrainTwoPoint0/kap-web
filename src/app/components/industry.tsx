import React from 'react'

export default function IndustryCoverage() {
    const coverage = [
        "Power, Renewable Energy & Utilities", "Hydrogen & Green Ammonia", "Sustainability & Planning Net Zero", "Water & Waste Management", "Transportation & Infrastructure", "CleanTech & AgriTech", "HealthTech", "Oil, Gas & LNG"
    ]
    return (
        <section className="bg-[var(--dark-grey)] text-[var(--white)] backdrop-brightness-50 flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold">Industry Coverage</h1>

            <div className="flex flex-wrap justify-center mt-12">
                {coverage.map((coverageItem, index) => {
                    return (
                        <div className="w-48 h-20 md:w-64 md:h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black m-4"
                            key={index}>
                            <p className="text-center md:text-xl text-md">{coverageItem}</p>
                        </div>
                    );
                })}
            </div>
            <button className="mt-12 bg-[var(--green)] text-[var(--white)] rounded-lg p-3 w-64 font-bold">Find Out More</button>

        </section>
    )
}
