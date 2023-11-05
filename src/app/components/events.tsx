"use client"
import React, { useState } from 'react'
export default function Events() {

    const events = [
        { id: "1", location: "London Olympia", date: "24-25 May 2023", description: "The International Climate & Clean Tech Congress", link: "https://www.innovationzero.com", image: "/innovationzero.png" },
        { id: "2", location: "London Olympia", date: "24-25 May 2023", description: "The International Climate & Clean Tech Congress", link: "https://www.innovationzero.com", image: "/innovationzero.png" },
        { id: "3", location: "London Olympia", date: "24-26 May 2023", description: "The International Climate & Clean Tech Congress", link: "https://www.innovationzero.com", image: "/innovationzero.png" },
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

                    <button onClick={prevSlide} className="text-[var(--white)] text-3xl p-6">
                        &lt;
                    </button>

                    <a href={events[activeIndex].link} target='_blank' rel="noreferrer" className="bg-[var(--white)] transition-all duration-300 w-64 h-36 rounded-md flex ">
                        <img src={events[activeIndex].image} alt="event" />
                        <div className="text-black flex flex-col w-1/2 p-2 justify-center">
                            <p className="font-semibold text-xs">{events[activeIndex].date}</p>
                            <p className="font-thin text-xs">{events[activeIndex].location}</p>
                            <p className="font-thin text-xs my-2.5">{events[activeIndex].description}</p>
                        </div>
                    </a>

                    <button onClick={nextSlide} className="text-[var(--white)] text-3xl p-6">
                        &gt;
                    </button>
                </div>
                {events.map((event, index) => {
                    return (
                        <a href={events[activeIndex].link} target='_blank' rel="noreferrer" className="bg-[var(--white)] w-96 h-52 rounded-md items-cente m-4 hidden md:flex"
                            key={index}>
                            <img src={event.image} alt={event.image} />
                            <div className="text-black flex flex-col w-1/2 p-4">
                                <p className="font-semibold text-lg">{event.date}</p>
                                <p className="font-thin">{event.location}</p>
                                <p className="font-thin my-3">{event.description}</p>
                                <a href={event.link} target="_blank" rel="noreferrer" className="text-[var(--green)] underline text-xs">{event.link}</a>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    )
}
