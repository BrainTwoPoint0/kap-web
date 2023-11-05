import React from 'react';

export default function Enquiries() {
    return (
        <section className=" bg-[var(--green)] text-[var(--white)]">

            <div className="flex flex-col justify-evenly p-10 md:p-16 mx-auto md:flex-row" style={{ maxWidth: '1200px' }}>

                <div className="flex flex-col justify-evenly h-80 md:h-56 md:w-1/2">
                    <p ><span className="font-bold">Start-up Founders:</span> Reach out to unlock your business potential.</p>

                    <p><span className="font-bold">Impact Investors:</span> Get in touch for impactful opportunities.</p>

                    <p><span className="font-bold">UK Businesses:</span> Learn more about how we can support with MEA Market Entry and Expansion.</p>
                    <a href="/contact" className="bg-[var(--white)] text-[var(--green)] rounded-lg p-3 md:w-1/2 font-bold text-center">Send an Enquiry</a>
                </div>

                <div className="flex flex-col justify-center items-center md:w-1/2">
                    <h3 className="text-lg md:text-2xl font-bold">For Enquiries and Consultancy</h3>
                    <br />
                    <p className="text-center"><a href="mailto:mkantar@kantaradvisory.com">mkantar@kantaradvisory.com</a><br /><a href={'tel:+447402424664'}>+44 (0) 740 2424 664</a></p>
                </div>
            </div>
        </section>
    );
}
