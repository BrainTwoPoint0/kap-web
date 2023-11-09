"use client"
import Image from 'next/image';
import React, { useState } from 'react'
export default function Events() {

    const events = [
        { id: "1", location: "QEII Conference Centre", date: "6-7 November 2023", description: "The go-to-event for food security & sustainability", link: "https://sustainablefoodsevent.com", image: "/SFL.png" },
        { id: "2", location: "Hilton London Metropole", date: "30 November 2023", description: "3rd Arab British Economic Summit", link: "https://abcc.glueup.com/event/68972/register/", image: "/arabbritishsummit.jpeg" },
        { id: "3", location: "London Olympia", date: "24-25 May 2024", description: "The International Climate & Clean Tech Congress", link: "https://www.innovationzero.com", image: "/innovationzerologo.png" },
    ]

    const [activeIndex, setActiveIndex] = React.useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };


    return (
        <section className=" text-[var(--green)] backdrop-brightness-50 flex flex-col items-center p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold md:mb-8">Upcoming Events</h1>
            <div className="flex flex-wrap justify-center">
                <div className="md:hidden flex my-4">

                    <button onClick={prevSlide} className="text-[var(--white)] text-3xl mr-4">
                        &lt;
                    </button>

                    <a href={events[activeIndex].link} target='_blank' rel="noreferrer" className="bg-[var(--white)] transition-all duration-300 w-72 h-36 rounded-md flex">
                        <Image src={events[activeIndex].image} width={140} height={150} alt="event" className="rounded-l-md border-r-black border-r-[1px]" />
                        <div className="text-black flex flex-col w-1/2 p-2 mt-4 justify-start text-xs ">
                            <p className="font-semibold ">{events[activeIndex].date}</p>
                            <p className="font-thin text-[10px]">{events[activeIndex].location}</p>
                            <p className="font-thin  my-2.5">{events[activeIndex].description}</p>
                        </div>
                    </a>

                    <button onClick={nextSlide} className="text-[var(--white)] text-3xl ml-4">
                        &gt;
                    </button>
                </div>
                {events.map((event, index) => {
                    return (
                        <div className="bg-[var(--white)] w-96 h-44 rounded-md items-cente m-4 hidden md:flex"
                            key={index}>
                            <Image src={event.image} alt={event.image} width={150} height={170} className="rounded-l-md border-r-black border-r-[1px]" />
                            <div className="text-black flex flex-col p-4 text-sm w-1/2">
                                <p className="font-semibold text-base">{event.date}</p>
                                <p className="font-thin">{event.location}</p>
                                <p className="font-thin my-3">{event.description}</p>
                                <a href={event.link} target="_blank" rel="noreferrer" className="text-[var(--green)] underline font-bold text-sm">Link</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
