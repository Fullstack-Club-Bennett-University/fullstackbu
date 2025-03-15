import { useState, useEffect } from "react";
import WavyMarquee from "./WavyMarquee";
import { motion } from "framer-motion";

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

          {/* Left Card (Fixed Size) with Cinematic Transition */}
          <div className="relative w-[232.5px] h-[406px] flex items-center justify-center rounded-lg overflow-visible">
            <motion.img
              key={currentIndex} // React re-renders on change
              src={events[currentIndex].leftCard}
              alt="Left Card"
              className="absolute object-cover w-full h-full rounded-lg"
              initial={{ opacity: 0, scale: 1.1 }} // Starts slightly zoomed & transparent
              animate={{ opacity: 1, scale: 1 }} // Fades in with a soft zoom
              exit={{ opacity: 0, scale: 0.95 }} // Fades out subtly
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
            />

            {/* Light Sweep Effect */}
            <motion.div
              key={`sweep-${currentIndex}`} // Change effect per image
              className="absolute top-0 left-0 w-full h-full bg-white/30 blur-[10px]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
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
        <div className="relative w-[450px] h-[450px] flex items-center justify-center perspective-[1200px]">
          {events.map((event, index) => {
            const isPrevious =
              index === (currentIndex - 1 + events.length) % events.length;
            const isNext = index === (currentIndex + 1) % events.length;
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={index}
                className="absolute w-full h-full flex flex-col items-center text-center bg-white rounded-3xl border-4 border-blue-500 p-6 shadow-xl"
                initial={{
                  opacity: 0,
                  scale: isActive ? 0.9 : 0.8,
                  x: isPrevious ? -100 : isNext ? 100 : 0,
                  rotateY: isPrevious ? 20 : isNext ? -20 : 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.9,
                  x: isActive ? 0 : isPrevious ? -50 : 50,
                  rotateY: isActive ? 0 : isPrevious ? 15 : -15,
                  filter: "blur(2px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: isPrevious ? -150 : isNext ? 150 : 0,
                  rotateY: isPrevious ? 30 : isNext ? -30 : 0,
                  filter: "blur(20px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {/* Event Image */}
                <div className="relative w-full h-[180px] rounded-t-3xl overflow-hidden">
                  <motion.img
                    src={event.image}
                    className="w-full h-full object-cover"
                    alt="Event Image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </div>

                {/* Event Description */}
                <p className="mt-16 text-lg text-gray-700 px-6 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
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
