import React from 'react'

export default function Enquiries() {
    return (
        <section className=" flex bg-[var(--green)] text-[var(--white)] justify-evenly p-16 ">
            <div className="flex flex-col justify-evenly w-1/2">
                <p><span className="font-bold">Start-up Founders:</span> Reach out to unlock your business potential.</p>
                <br />
                <p><span className="font-bold">Impact Investors:</span> Get in touch for impactful opportunities.</p>
                <br />
                <p><span className="font-bold">UK Businesses:</span> Learn more about how we can support with MEA Market Entry and Expansion.</p>
                <br />
                <button className="bg-[var(--white)] text-[var(--green)] rounded-lg p-3 w-1/2 font-bold">Send an Enquiry</button>
            </div>

            <div className="flex flex-col justify-center items-center w-1/2">
                <h3 className="text-2xl font-bold">For Enquiries and Consultancy</h3>
                <br />
                <p className="text-center">mkantar@kantaradvisory.com <br /> +44 (0) 740 2424 664</p>
            </div>

        </section>
    )
}
