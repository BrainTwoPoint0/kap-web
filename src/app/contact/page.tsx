import React from 'react'
import Form from './form'

export default function ContactUs() {
    return (
        <section className="bg-contact flex flex-col items-center p-9 md:p-24 justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-[var(--green)] text-center md:text-5xl">
                Get In Touch With Us
            </h1>
            <Form />
        </section>
    )
}



// "use client"
// import React, { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Form from "./form";

// export default function ContactUs() {
//     const [submitterName, setSubmitterName] = useState("");
//     const router = useRouter();
//     const pathname = usePathname();
//     const confirmationScreenVisible = pathname.includes("success");
//     const formVisible = !confirmationScreenVisible;

//     const ConfirmationMessage = (
//         <React.Fragment>
//             <p>
//                 Thank you for submitting this form. Someone should get back to you within 24-48 hours.
//             </p>

//             <button onClick={() => router.replace("/contact", undefined)}> Submit Another Response </button>
//         </React.Fragment>
//     );



//     return (
//         <section className="bg-contact flex flex-col items-center p-9 md:p-24 justify-center min-h-screen">

//             <h1>Contact Us</h1>
//             {formVisible ? <Form /> : ConfirmationMessage}

//         </section>
//     );
// };