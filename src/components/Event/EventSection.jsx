import React, { useState } from 'react';
import Stack from './Stack';

const EventsCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Event data
    const events = [
        {
            id: 1,
            title: "Club Night",
            image: "/api/placeholder/600/400",
            description: "Starter event for FullStack Club where we tell the juniors about learning material, how to tackle subjects and how to achieve 9 SGPA by perfecting their strategies to improve grade, personality and attitude!!!",
            metric: "9.2",
            metricLabel: "SGPA"
        },
        {
            id: 2,
            title: "Hackathon",
            image: "/api/placeholder/600/400",
            description: "48-hour coding competition where teams build innovative solutions to real-world problems. Great networking opportunity with industry professionals and prizes for winners!",
            metric: "24",
            metricLabel: "HRS"
        },
        {
            id: 3,
            title: "Tech Workshop",
            image: "/api/placeholder/600/400",
            description: "Hands-on workshop teaching the latest web development frameworks. Perfect for beginners and intermediate developers looking to expand their skillset.",
            metric: "5+",
            metricLabel: "TECH"
        }
    ];
    
    // Stack card images
    const images = [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-blue-400 to-blue-600 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header with decorative elements */}
                <div className="relative text-center mb-12">
                    <div className="flex justify-center items-center">
                        <span className="text-orange-400 text-4xl mr-4">✦</span>
                        <h2 className="text-4xl font-bold text-black uppercase tracking-widest">
                            EXPLORE OUR EVENTS
                        </h2>
                        <span className="text-orange-400 text-4xl ml-4">✦</span>
                    </div>
                    
                    {/* Repeating Background Text */}
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-20 z-0">
                        <div className="whitespace-nowrap text-sm tracking-wider rotate-12">
                            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
                        </div>
                    </div>
                </div>

                {/* Featured Stack Component */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-6">Featured Event Photos</h3>
                    <div className="flex justify-center">
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 300, height: 200 }}
                            cardsData={images}
                        />
                    </div>
                </div>
                
                {/* Carousel */}
                <div className="relative">
                    {/* Slides Container */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                        {/* Left Image */}
                        <div className="md:w-1/3 rounded-2xl overflow-hidden border-4 border-blue-800 shadow-lg transition-all duration-500 h-64 md:h-96">
                            <img
                                src={events[activeSlide].image}
                                alt="Event scene"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-2/3 flex flex-col md:flex-row gap-6">
                            {/* Right Image */}
                            <div className="rounded-2xl overflow-hidden border-4 border-blue-800 shadow-lg transition-all duration-500 h-64 md:h-96 md:w-1/2">
                                <img
                                    src={events[(activeSlide + 1) % events.length].image}
                                    alt="Event decorations"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Event Information */}
                            <div className="rounded-2xl bg-blue-700 p-6 flex flex-col justify-center md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-5xl font-bold text-orange-400">{events[activeSlide].metric}</span>
                                    <span className="text-3xl font-bold text-white">{events[activeSlide].metricLabel}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{events[activeSlide].title}</h3>
                                <p className="text-sm leading-relaxed">
                                    {events[activeSlide].description}
                                </p>
                                <button className="mt-4 bg-orange-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-orange-500 transition-colors">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10 hover:bg-opacity-70 transition-all"
                        onClick={prevSlide}
                    >
                        ←
                    </button>
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10 hover:bg-opacity-70 transition-all"
                        onClick={nextSlide}
                    >
                        →
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-4">
                        {events.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-orange-400' : 'bg-white'} hover:scale-125 transition-transform`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Upcoming Events Preview */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-6">Upcoming Events</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="bg-blue-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                                <p className="text-sm text-blue-100 mb-3 line-clamp-2">{event.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-orange-400 font-bold">{event.metric} {event.metricLabel}</span>
                                    <button className="text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition-colors">
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsCarousel;