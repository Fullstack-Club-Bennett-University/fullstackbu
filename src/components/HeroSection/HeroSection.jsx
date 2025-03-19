import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform the dragon's position based on scroll
  const dragonY = useTransform(scrollY, [0, 300], [0, 100]);
  const dragonRotate = useTransform(scrollY, [0, 300], [0, -10]);

  useEffect(() => {
    // Check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Handle navbar visibility
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    // Initial check
    checkMobile();
    
    // Set up event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Smooth scroll handler for navigation links
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Navbar animation variants
  const navbarVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -50, transition: { duration: 0.5 } }
  };

  // Link hover animation
  const linkVariants = {
    hover: { scale: 1.1, color: "#FFD700", transition: { duration: 0.2 } },
    initial: { scale: 1, color: "#FFFFFF", transition: { duration: 0.2 } }
  };

  // Improved cloud animation variants with smoother transition
  const cloudVariants = {
    cloud1: {
      x: [0, -20, 0],
      transition: { 
        repeat: Infinity, 
        duration: 6, 
        ease: "easeInOut",
        repeatType: "mirror" 
      }
    },
    cloud2: {
      x: [0, 30, 0],
      transition: { 
        repeat: Infinity, 
        duration: 8, 
        ease: "easeInOut",
        repeatType: "mirror" 
      }
    },
    cloud3: {
      x: [0, -40, 0],
      transition: { 
        repeat: Infinity, 
        duration: 7, 
        ease: "easeInOut",
        repeatType: "mirror" 
      }
    },
    cloud4: {
      x: [0, 25, 0],
      transition: { 
        repeat: Infinity, 
        duration: 5, 
        ease: "easeInOut",
        repeatType: "mirror" 
      }
    }
  };

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Navbar inside Hero Section - Mobile optimized */}
      {isNavbarVisible && (
        <motion.nav
          className={`fixed top-0 left-0 z-50 w-full p-6 text-white bg-transparent ${
            isMobile ? "flex flex-col items-center gap-y-2 text-2xl ml-6" : "flex justify-end gap-x-24 text-2xl"
          } caveat`}
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          <motion.a 
            href="#event" 
            className="mx-2 cursor-pointer"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            onClick={handleSmoothScroll}
          >
            About
          </motion.a>
          <motion.a 
            href="#team" 
            className="mx-2 cursor-pointer"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            onClick={handleSmoothScroll}
          >
            Teams
          </motion.a>
          <motion.a 
            href="#UpcomingEventsSection" 
            className="mx-2 cursor-pointer"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            onClick={handleSmoothScroll}
          >
            Upcoming Events
          </motion.a>
          <motion.a 
            href="#footer" 
            className={`${isMobile ? "mx-2" : "ml-2 mr-4"} cursor-pointer`}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            onClick={handleSmoothScroll}
          >
            Contact
          </motion.a>
        </motion.nav>
      )}

      {/* Left section - Hidden on mobile */}
      <div className="relative items-center justify-center hidden w-1/4 bg-white sm:flex">
        <motion.img 
          src="/hero/fullstack.png" 
          alt="fullstack" 
          className="w-full h-[100vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right section - Full width on mobile */}
      <div className="w-full sm:w-3/4 bg-[#0A84FF] relative sm:rounded-br-[45vh]">
        {/* Cloud images with animation - Reduced for mobile */}
        {/* Cloud 1 - Show on all devices */}
        <motion.img 
          src="/hero/cloud1.png" 
          alt="Cloud 1" 
          className={`absolute ${isMobile ? "h-[15vh] w-[36vh] top-16" : "h-[20vh] w-[48vh] top-10"} left-1`}
          variants={cloudVariants}
          animate="cloud1"
        />
        
        {/* Cloud 2 - Hide on mobile */}
        {!isMobile && (
          <motion.img 
            src="/hero/cloud2.png" 
            alt="Cloud 2" 
            className="absolute h-[55vh] w-[68vh] bottom-28 left-10"
            variants={cloudVariants}
            animate="cloud2"
          />
        )}
        
        {/* Cloud 3 - Show on all devices */}
        <motion.img 
          src="/hero/cloud3.png" 
          alt="Cloud 3" 
          className={`absolute ${isMobile ? "h-[15vh] w-[40vh] top-48" : "h-[20vh] w-[70vh] top-20"} right-2`}
          variants={cloudVariants}
          animate="cloud3"
        />
        
        {/* Cloud 4 - Hide on mobile */}
        {!isMobile && (
          <motion.img 
            src="/hero/cloud4.png" 
            alt="Cloud 4" 
            className="absolute h-[15vh] w-[40vh] z-10 -bottom-4 left-96"
            variants={cloudVariants}
            animate="cloud4"
          />
        )}

        {/* Dragon image with scroll-based animation - Sized for mobile */}
        <motion.img 
          src="/hero/dragon.png" 
          alt="Dragon" 
          className={`absolute right-2 bottom-4 ${isMobile ? "h-[50vh] bottom-32 w-[40vh]" : "h-[70vh] w-[50vh]"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            y: dragonY,
            rotate: dragonRotate,
            transformOrigin: "bottom right" 
          }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* CODE CREATE CONQUER image - Fixed position for mobile */}
        <img 
          src="/hero/code.png" 
          alt="CODE CREATE CONQUER" 
          className={`absolute ${
            isMobile 
              ? "h-[20vh] w-[30vh] left-2 -bottom-20" 
              : "h-[45vh] w-[60vh] left-3 -bottom-52"
          } transform -translate-y-1/2`}
        />
      </div>
    </div>
  );
};

export default HeroSection;