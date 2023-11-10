import React from 'react';
export default function Form() {
    return (
        <section>
            <form
                name="contact-form"
                method="POST"
                action="contact/?success=true"
            >
                <label htmlFor="name">Name *</label>
                <input
                    id="name"
                    name="name"
                    required
                    type="text"
                />
                <label htmlFor="company">Company *</label>
                <input id="company" name="company" required type="text" />
                <label htmlFor="email">E-mail Address *</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>

        </section>
        // <form className="flex flex-col" data-netlify="true" method="POST">
        //     <h1 className="text-2xl font-bold text-[var(--green)] text-center md:text-5xl">
        //         Get In Touch With Us
        //     </h1>

        //     <div className="flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">
        //         <div className="w-full md:w-1/2">
        //             <label
        //                 htmlFor="firstName"
        //                 className="text-gray-500 font-light mb-4 dark:text-gray-50"
        //             >
        //                 First Name
        //             </label>
        //             <input
        //                 type="text"
        //                 value={firstName}
        //                 onChange={(e) => {
        //                     setFirstName(e.target.value);
        //                 }}
        //                 name="firstName"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>

        //         <div className="w-full md:w-1/2">
        //             <label
        //                 htmlFor="lastName"
        //                 className="text-gray-500 font-light mb-4 dark:text-gray-50"
        //             >
        //                 Last Name
        //             </label>
        //             <input
        //                 type="text"
        //                 value={lastName}
        //                 onChange={(e) => {
        //                     setLastName(e.target.value);
        //                 }}
        //                 name="lastName"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>
        //     </div>



        //     <div className="flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">

        //         <div className="w-full md:w-1/2">
        //             <label htmlFor="companyName" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //                 Company Name
        //             </label>
        //             <input
        //                 type="text"
        //                 value={companyName}
        //                 onChange={(e) => setCompanyName(e.target.value)}
        //                 name="companyName"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>


        //         <div className="w-full md:w-1/2">
        //             <label htmlFor="companyWebsite" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //                 Company Website (optional)
        //             </label>
        //             <input
        //                 type="url"
        //                 value={companyWebsite}
        //                 onChange={(e) => setCompanyWebsite(e.target.value)}
        //                 name="companyWebsite"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>
        //     </div>


        //     <div className="flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">
        //         <div className="w-full md:w-1/2">
        //             <label htmlFor="email" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //                 E-Mail Address
        //             </label>
        //             <input
        //                 type="text"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 name="email"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>


        //         <div className="w-full md:w-1/2">
        //             <label htmlFor="telephone" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //                 Telephone Number (optional)
        //             </label>
        //             <input
        //                 type="url"
        //                 value={telephone}
        //                 onChange={(e) => setTelephone(e.target.value)}
        //                 name="telephone"
        //                 className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //             />
        //         </div>
        //     </div>


        //     <div className="mt-8">
        //         <label htmlFor="helpType" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //             How can we help?
        //         </label>
        //         <select
        //             value={helpType}
        //             onChange={(e) => setHelpType(e.target.value)}
        //             name="helpType"
        //             className="w-full h-10 bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500"
        //         >
        //             <option value="">Select an option</option>
        //             <option value="Investment / fundraising">Investment / fundraising</option>
        //             <option value="Business development">Business development</option>
        //             <option value="Decarbonisation roadmaps">Decarbonisation roadmaps</option>
        //             <option value="Events">Events</option>
        //             <option value="MEA Market Entry">MEA Market Entry</option>
        //         </select>
        //     </div>

        //     <label
        //         htmlFor="tellUsMore"
        //         className="text-gray-500 font-light mt-4 mb-4 dark:text-gray-50"
        //     >
        //         Tell us more:
        //     </label>
        //     <textarea
        //         name="tellUsMore"
        //         value={message}
        //         onChange={(e) => {
        //             setMessage(e.target.value);
        //         }}
        //         rows={2}
        //         // rows="2"
        //         className="w-full bg-white rounded-md py-2 pl-4 mb-4 focus:outline-none focus:ring-1 ring-green-500 font-light text-gray-500 resize-vertical"
        //     ></textarea>


        //     <label htmlFor="helpType" className="text-gray-500 font-light mb-4 dark:text-gray-50">
        //         Upload your pitch deck, company presentation, or brochure: <a href="#" className="underline font-semibold">here</a>
        //     </label>
        //     <button
        //         type="submit"
        //         className="px-10 mt-8 py-2 bg-[var(--white)] text-[var(--green)] rounded-md text-lg border-[var(--green)] border-2 hover:bg-[var(--green)] hover:text-[var(--white)] transition-all duration-300 ease-in-out]"
        //     >
        //         Submit
        //     </button>


        // </form >
    );
}