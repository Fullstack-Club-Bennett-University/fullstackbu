import React, { useState } from "react";

const ExploreEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Events data matching the images in your reference
  const events = [
    {
      id: 1,
      image: "/api/placeholder/400/500", // Placeholder for the Kingston House party image with disco ball
      title: "Kingston House Party",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300", // Placeholder for the star lanterns image
      title: "9.2 SGPA",
      description:
        "Starter event for fullstack Club where we tell the juniors about learning material, how to tackle subjects and how to achieve 9 SGPA by perfecting their strategies to improve grade, personality and attitude!!!",
    },
  ];

  const totalSlides = events.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-100 p-6 pb-16 relative overflow-hidden">
      {/* Header with star decorations */}
      <div className="relative flex justify-center items-center mb-10">
        <div className="absolute left-8 md:left-20">
          <OrangeStar />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center tracking-wide">
          EXPLORE OUR EVENTS
        </h2>
        <div className="absolute right-8 md:right-20">
          <OrangeStar />
        </div>
        <div className="absolute opacity-10 rotate-12 -z-10 text-orange-300 text-2xl font-bold">
          EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
        </div>
      </div>

      {/* Cards layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Card 1 - Always visible with orange border */}
        <div
          className={`transform transition-all duration-500 ${
            currentSlide === 0 ? "opacity-100 z-10" : "opacity-50 z-0"
          }`}
        >
          <div className="rounded-3xl overflow-hidden border-4 border-orange-500 relative">
            <img
              src={
                currentSlide === 0
                  ? events[0].image
                  : "/api/placeholder/400/500"
              }
              alt="Kingston House Party"
              className="w-full h-full object-cover"
            />

            {/* Left navigation button (blue triangle) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
              aria-label="Previous slide"
            >
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-500 rounded-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Right navigation button (blue triangle) */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
              aria-label="Next slide"
            >
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-500 rounded-sm flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Card 2 - SGPA with blue border */}
        <div
          className={`transform transition-all duration-500 ${
            currentSlide === 1 ? "opacity-100 z-10" : "opacity-50 z-0"
          }`}
        >
          <div className="rounded-3xl overflow-hidden border-4 border-blue-500 bg-white p-4">
            <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src={
                  currentSlide === 1
                    ? events[1].image
                    : "/api/placeholder/400/300"
                }
                alt="Star Lanterns"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <SGPALogo />
              </div>
              <div>
                <p className="text-base">
                  Starter event for fullstack Club where we tell the juniors
                  about learning material, how to tackle subjects and how to
                  achieve 9 SGPA by perfecting their strategies to improve
                  grade, personality and attitude!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots at the bottom */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-6 rounded-full transition-colors ${
                currentSlide === index ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// SVG Components
const OrangeStar = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 0C25 0 31.25 18.75 50 25C31.25 31.25 25 50 25 50C25 50 18.75 31.25 0 25C18.75 18.75 25 0 25 0Z"
      fill="#FF7A00"
    />
  </svg>
);

const SGPALogo = () => (
  <svg
    width="100"
    height="80"
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="45"
      fill="#FF7A00"
      fontSize="45"
      fontWeight="bold"
      style={{ stroke: "#40C9FF", strokeWidth: "1px" }}
    >
      9.2
    </text>
    <text
      x="0"
      y="75"
      fill="#FF7A00"
      fontSize="30"
      fontWeight="bold"
      style={{ stroke: "#40C9FF", strokeWidth: "1px" }}
    >
      SGPA
    </text>
  </svg>
);

export default ExploreEvents;
