"use client"
import React, { useState } from 'react'

export default function Form() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form className="flex flex-col px-8 py-8">
            <h1 className="text-6xl font-bold text-[var(--green)]">
                Get In Touch With Us
            </h1>

            <label
                htmlFor="fullname"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
                Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
                type="text"
                value={fullname}
                onChange={(e) => {
                    setFullname(e.target.value);
                }}
                name="fullname"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="email"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                E-mail<span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="subject"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Subject<span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
                htmlFor="message"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Message<span className="text-red-500">*</span>
            </label>
            <textarea
                name="message"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>

            <button
                type="submit"
                className="px-10 mt-8 py-2 bg-[var(--white)] text-[var(--green)] rounded-md text-lg border-[var(--green)] border-2 hover:bg-[var(--green)] hover:text-[var(--white)] transition-all duration-300 ease-in-out]">
                Submit
            </button>

        </form>
    )
}
