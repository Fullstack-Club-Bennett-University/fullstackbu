import { useState, useEffect } from "react";
import WavyMarquee from "./WavyMarquee";

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
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description:
      "Another exciting event coming soonasnfoawniojwjnownfjawnfjwnjwnajk!",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    description:
      "Another exciting evensadasdasdast coming soonasnfoawniojwjnownfjawnfjwnjwnajk!",
    leftCard: "/events/Subtract.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX - window.innerWidth / 2);
      setMouseY(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      {/* Title with Wavy Marquee */}
      <div className="relative flex flex-col items-center w-full">
        <WavyMarquee />
        <h2 className="text-4xl font-bold text-gray-900 -mt-14 z-10">
          EXPLORE OUR EVENTS
        </h2>
      </div>

      {/* Event Wrapper */}
      <div className="relative flex items-center w-full max-w-5xl gap-32 justify-center mt-20">
        {/* Left Card with Arrows */}
        <div className="relative flex flex-col items-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={30}
              height={30}
              className="rotate-180"
              alt="Previous"
            />
          </button>

          {/* Left Card (Fixed Size) */}
          <div className="w-[232.5px] h-[406px] flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={events[currentIndex].leftCard}
              alt="Left Card"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="/events/solar_play-bold.png"
              width={35}
              height={35}
              alt="Next"
            />
          </button>
        </div>

        {/* Event Content with Smooth Sliding & Depth Effect */}
        <div className="relative w-[450px] h-[450px] flex items-center justify-center perspective-[1800px]">
          {events.map((event, index) => {
            const isPrevious =
              index === (currentIndex - 1 + events.length) % events.length;
            const isNext = index === (currentIndex + 1) % events.length;
            const isActive = index === currentIndex;
            const isBehind = !isPrevious && !isNext && !isActive;

            // Dynamic depth & positioning
            const translateZ = isActive
              ? 250
              : isPrevious || isNext
              ? 100
              : -50;

            const translateX = isActive
              ? 0
              : isPrevious
              ? "-15%"
              : isNext
              ? "15%"
              : "25%";

            const rotateY = isPrevious ? "20deg" : isNext ? "-20deg" : "0deg";

            return (
              <div
                key={index}
                className={`absolute w-full h-full flex flex-col items-center text-center bg-white rounded-3xl border-4 border-blue-500 p-6 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-xl
          ${
            isActive
              ? "z-[30] opacity-100"
              : isBehind
              ? "z-[10] opacity-50 blur-[2px]"
              : "z-[20] opacity-80"
          }
        `}
                style={{
                  transformOrigin: "center",
                  transform: `
            translateX(calc(${translateX} + ${mouseX * 0.05}px))
            translateY(${mouseY * 0.05}px)
            translateZ(${translateZ}px)
            rotateY(${rotateY})
          `,
                  transition: "transform 0.3s ease-out",
                  animation: isActive
                    ? "floatUpDown 3s ease-in-out infinite"
                    : "none",
                }}
              >
                {/* Event Image */}
                <div className="relative w-full h-[180px] rounded-t-3xl overflow-hidden">
                  <img
                    src={event.image}
                    className="w-full h-full object-cover"
                    alt="Event Image"
                  />
                </div>

                {/* Event Description */}
                <p className="mt-16 text-lg text-gray-700 px-6 leading-relaxed">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-16 space-x-3">
        {events.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? "scale-130 bg-orange-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
