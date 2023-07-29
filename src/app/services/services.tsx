"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function Services() {


    const [modalContent, setModalContent] = useState({ title: "", description: "", image: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { 'title': 'Unlocking Sustainable and Impactful Investment Opportunities', 'description': "Investors, join us on an exciting investment journey where we harness the expertise of Kantar Advisory Partners 'KAP' to unlock your full investment potential. At KAP, we are dedicated to uncovering top sustainable and impact ful investment opportunities that align with your financial goals and values.\nWith our deep knowledge and insights, we identify investment prospects that not only generate strong returns but also create a positive impact on society and the environment. Our team diligently evaluates these opportunities, ensuring they meet our rigorous criteria for sustainability, impact, and financial viability. \nBy partnering with KAP, you gain access to our extensive network and resources, empowering you to make informed investment decisions. We provide comprehensive support throughout the investment process, offering expert guidance and analysis to help you navigate the dynamic investment landscape. \nTogether, we can make a difference. Through our collaborative efforts, we aim to drive positive change while achieving financial success. Join us at KAP and embark on an investment journey that not only delivers strong returns but also leaves a lasting positive impact on the world around us.", 'image': '/services1.png' },
        { 'title': 'Accelerating Start-up Success: Future-proofing and Investor Readiness', 'description': "If you are a founder or start-up, discover the power of kap as your one-stop-shop solution to future-proof your business and position it as investor-ready. We are deeply committed to nurturing the growth and scalability of start-ups, empowering sustainability at every stage of their journey. \nAt KAP, we understand the unique challenges and opportunities that start-ups face. That's why we offer comprehensive and tailored services designed to support and guide you towards success. From refining your business strategy to connecting you to exceptional investors, we provide the expertise and resources needed to navigate the competitive landscape. \nWe assist in developing robust business models, enhancing operational ef ficiency, and implementing ef fective growth strategies. By integrating sustainable practices into your operations and promoting environmental and social responsibility, we ensure your business is aligned with the values of conscious investors. We then leverage our network of industry experts, investors, and strategic partners, we help start-ups gain invaluable connections and access to vital resources. \nPartnering with KAP means gaining a trusted ally dedicated to your success. We provide ongoing support, guidance, and mentorship to foster growth and drive your start-up towards scalability. Our holistic approach addresses both immediate needs and long-term objectives, enabling you to build a strong foundation for sustainable success. Get in touch to learn more!", 'image': '/services2.png' },
        { 'title': 'Seamless Market Entry and Sustainable Growth in the MEA Market', 'description': "Enter the Middle East & Africa (MEA) market with confidence and thrive with the support of Kantar Advisory Partners (KAP). We of fer a strategic plat form that leverages our extensive network, cultural insight, and deep market understanding to ensure successful entry and sustainable growth in the diverse and dynamic MEA market. \nWe assist in building relationships with local businesses, government entities, and potential investors, empowering you to forge partnerships that drive growth and create sustainable value. \nPartnering with KAP means accessing a wealth of expertise, insights, and resources to navigate the complexities of the MEA market successfully. We are committed to supporting your growth objectives, mitigating risks, and maximizing opportunities in this vibrant region. \nSeize the opportunities awaiting you in the MEA market with KAP as your trusted partner. Let us guide you through the intricacies of this diverse market, unlock new horizons, and drive sustainable growth in the Middle East & Africa.", 'image': '/services3.png' },
        { 'title': 'Crafting Exceptional and Sustainable Events', 'description': "Immerse your attendees in extraordinary corporate events, exhibitions, round tables, and networking experiences that not only leave a lasting impression but also embrace sustainability. At Kantar Advisory Partners (KAP), we specialize in curating exceptional and sustainable events that resonate with your audience and align with your corporate objectives. \nFrom concept to execution, KAP brings a wealth of expertise in event management to elevate your gatherings to new heights. We work closely with you to understand your vision, objectives, and target audience, allowing us to design bespoke experiences that captivate and engage. We leverage our network of industry experts, renowned speakers, and influential stakeholders to curate engaging round tables, insightful panel discussions, and dynamic networking opportunities that foster meaningful connections and drive collaboration. \nElevate your corporate events with KAP's expertise to create impact ful exhibitions, thought-provoking round tables, and engaging networking events that enhance your brand reputation and contribute to a more sustainable future.", 'image': '/services4.png' },
        { 'title': 'Decarbonisation Roadmaps: Expert Guidance on the Path to a Sustainable Future', 'description': "Navigate your organization's journey towards decarbonisation with the expert guidance of Kantar Advisory Partners (KAP). We are committed to helping companies and governments develop and implement robust decarbonisation roadmaps that align with sustainability goals. \nDecarbonisation is a critical priority for companies and governments worldwide, driven by the urgent need to mitigate the impacts of climate change. With our deep industry knowledge and expertise, we assist in crafting tailored decarbonisation roadmaps that encompass both short-term and long-term objectives. We take into account the unique circumstances and goals of your organization, providing practical and innovative solutions that prioritize sustainability while maintaining operational ef ficiency. \nEmbark on your decarbonisation journey with KAP and empower your organization to make a meaningful impact. Let us guide you in developing and implementing robust decarbonisation roadmaps that align with your vision and values. Together, we can forge a path towards a sustainable future that benefits your organization, society, and the planet.", 'image': '/services5.png' }
    ]
    const openModal = (service) => {
        setModalContent(service);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const switchService = (direction) => {
        let currentIndex = services.findIndex(service => service.title === modalContent.title);
        if (direction === 'left') {
            currentIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
        } else {
            currentIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
        }
        openModal(services[currentIndex]);
    }
    return (
        <section className=" text-[var(--white)] backdrop-brightness-50 flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <br />
            <br />
            <div className="flex flex-wrap space-x-8">
                {services.map((service, index) => {
                    return (
                        <div className="w-64 h-36 rounded-md outline outline-offset-2 outline-[var(--green)] flex justify-center items-center bg-black"
                            onClick={() => openModal(service)}
                            key={index}>
                            <p className="text-center text-lg">{service.title}</p>
                        </div>
                    );
                })}
            </div>
            {isModalOpen &&
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-50 flex justify-center items-center">

                    <div className="fixed top-4 left-4">
                        <button className="text-white bg-transparent text-2xl border-none opacity-90" onClick={closeModal}>X</button>
                    </div>
                    <div className="fixed left-3 top-1/2 transform -translate-y-1/2 text-5xl">
                        <button onClick={() => switchService('left')}>&lt;</button>
                    </div>
                    <div className="fixed right-3 top-1/2 transform -translate-y-1/2 text-5xl">
                        <button onClick={() => switchService('right')}>&gt;</button>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center w-1/2 h-screen">
                        <div className="h-24 w-24 relative"><Image alt="MBBC Logo" src={modalContent.image} fill /></div>
                        <h2 className="text-3xl font-bold mb-4 text-white">{modalContent.title}</h2>
                        <p className="text-base text-white">{modalContent.description.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br /><br /></span>
                        })}
                        </p>
                    </div>

                </div>
            }
        </section>
    )
}




// {services.map((service, index) => {
//     return (
//         <p>
// {service.description.split('\n').map((item, key) => {
//     return <span key={key}>{item}<br /><br /></span>
// })}
//         </p>
//     );
// })}