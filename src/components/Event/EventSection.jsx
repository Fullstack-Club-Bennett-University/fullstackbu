import { useState } from "react";

const events = [
  {
    image: "/events/event1.png",
    description:
      "Starter event for fullstack Club where we tell the juniors about learning material, how to tackle subjects and how to achieve 9 SGPA by perfecting their strategies to improve grade, personality and attitude!!!",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description: "Another exciting event coming soon!",
    leftCard: "/events/Subtract2.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center py-12 bg-gradient-to-b from-white to-blue-200">
      {/* Title */}
      <div className="flex items-center gap-4 mb-8">
        <img src="/events/Soft Star.png" width={50} height={50} alt="Star" />
        <h2 className="text-4xl font-bold">EXPLORE OUR EVENTS</h2>
        <img src="/events/Soft Star.png" width={50} height={50} alt="Star" />
      </div>

      {/* Event Wrapper */}
      <div className="relative flex items-center w-full max-w-5xl px-8 gap-16">
        {/* Left Card with Arrows */}
        <div className="relative flex flex-col items-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={35}
              height={35}
              className="rotate-180"
              alt="Previous"
            />
          </button>

          {/* Left Card */}
          <img
            src={events[currentIndex].leftCard}
            width={360}
            height={480}
            alt="Left Card"
            className="rounded-lg shadow-lg border-4 border-orange-400"
          />

          {/* Right Button (Placed to the right of Left Card) */}
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={35}
              height={35}
              alt="Next"
            />
          </button>
        </div>

        {/* Event Content */}
        <div className="relative flex flex-col items-center text-center bg-white rounded-xl shadow-xl border-4 border-blue-500 p-8 w-3/4">
          <img
            src={events[currentIndex].image}
            width={320}
            height={220}
            className="rounded-lg shadow-md"
            alt="Event Image"
          />
          <div className="mt-4">
            <img
              src="/events/image 17.png"
              width={100}
              height={50}
              alt="9.2 SGPA Logo"
            />
          </div>
          <p className="mt-4 text-lg text-gray-700">
            {events[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-6 space-x-2">
        {events.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
