import React from 'react'
import Image from 'next/image';
export default function Events() {
    const events = [
        { id: "1", location: "London Olympia", date: "24-25 May 2023", description: "The International Climate & Clean Tech Congress", link: "www.innovationzero.com", image: "/innovationzero.png" },
        { id: "2", location: "London Olympia", date: "24-25 May 2023", description: "The International Climate & Clean Tech Congress", link: "www.innovationzero.com", image: "/innovationzero.png" },
        { id: "3", location: "London Olympia", date: "24-25 May 2023", description: "The International Climate & Clean Tech Congress", link: "www.innovationzero.com", image: "/innovationzero.png" },
    ]
    return (
        <div className="backdrop-brightness-50 flex flex-col items-center">
            <h2 className="text-[var(--green)] text-2xl md:text-4xl font-bold mt-8">Upcoming Events</h2>
            <div className="flex">
                {events.map((event) => {
                    return (
                        <div key={event.id} className="flex m-8 rounded-lg bg-white h-64">
                            <img src={event.image} alt="event" />
                            <div className="text-black flex flex-col w-1/2 p-8">
                                <p className="font-semibold text-xl">{event.date}</p>
                                <p className="font-thin">{event.location}</p>
                                <p className="font-thin md:mt-8 md:mb-8">{event.description}</p>
                                <a href={event.link} target="_blank" rel="noreferrer" className="text-[var(--green)] underline">{event.link}</a>


                            </div>

                        </div>);
                })}
            </div>
        </div >
    )
}
