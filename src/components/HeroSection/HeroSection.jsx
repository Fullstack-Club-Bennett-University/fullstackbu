import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsNavbarVisible(false); // Hide navbar when scrolled past Hero Section
      } else {
        setIsNavbarVisible(true); // Show navbar inside Hero Section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden relative">
      {/* Navbar inside Hero Section */}
      {isNavbarVisible && (
        <nav className="fixed top-0 left-0 w-full flex justify-end gap-x-12 p-6 text-xl text-white caveat bg-transparent z-50 transition-opacity duration-300">
          <a href="#about" className="mx-2">About</a>
          <a href="#team" className="mx-2">Teams</a>
          <a href="#events" className="mx-2">Upcoming Events</a>
          <a href="#contact" className="ml-2 mr-4">Contact</a>
        </nav>
      )}

      {/* Left section */}
      <div className="hidden  w-1/4 bg-white relative sm:flex items-center justify-center">
        <img src="/hero/fullstack.png" alt="fullstack" className="w-full h-[100vh]" />
      </div>

      {/* Right section */}
      <div className="w-full sm:w-3/4 bg-[#0A84FF] relative sm:rounded-br-[45vh]">
        {/* Cloud images */}
        <img src="/hero/cloud1.png" alt="Cloud 1" className="absolute h-[20vh] w-[48vh] top-10 left-1" />
        <img src="/hero/cloud2.png" alt="Cloud 2" className="absolute h-[55vh] w-[68vh] bottom-28 left-10" />
        <img src="/hero/cloud3.png" alt="Cloud 3" className="absolute h-[20vh] w-[70vh] top-20 right-10" />
        <img src="/hero/cloud4.png" alt="Cloud 4" className="absolute h-[15vh] w-[40vh] z-10 -bottom-4 left-96" />

        {/* Dragon image */}
        <img src="/hero/dragon.png" alt="Dragon" className="absolute right-8 bottom-4 h-[70vh] w-[50vh]" />

        {/* CODE CREATE CONQUER image */}
        <img src="/hero/code.png" alt="CODE CREATE CONQUER" className=" absolute h-[30vh] w-[40vh] sm:h-[45vh] sm:w-[60vh] left-3 -bottom-40 transform -translate-y-1/2" />
      </div>
    </div>
  );
};

export default HeroSection;
