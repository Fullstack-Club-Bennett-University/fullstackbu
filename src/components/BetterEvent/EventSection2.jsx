import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    image: "/events/event1.png",
    title: "Fullstack Kickoff",
    date: "September 15, 2024",
    description:
      "Starter event for Fullstack Club where we guide juniors through learning materials, strategic approaches, and achieving academic excellence while developing personality and attitude.",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    title: "Code & Connect",
    date: "October 22, 2024",
    description:
      "An exclusive networking event bringing industry experts and aspiring developers together for collaboration and mentorship.",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    title: "Tech Summit 2024",
    date: "November 10, 2024",
    description:
      "A premier technology conference featuring cutting-edge presentations, workshops, and opportunities to connect with tech innovators.",
    leftCard: "/events/Subtract.png",
  },
  {
    image: "/events/event1.png",
    title: "Hackathon Elite",
    date: "December 5, 2024",
    description:
      "Our flagship 48-hour hackathon challenging participants to build innovative solutions for real-world problems with mentorship from industry leaders.",
    leftCard: "/events/Subtract.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);

  // Handle mouse move for parallax effects - with dampened response
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (carouselRef.current) {
        const { left, top, width, height } =
          carouselRef.current.getBoundingClientRect();
        // Reduced divisor for more subtle movement
        const x = (e.clientX - left - width / 2) / 40;
        const y = (e.clientY - top - height / 2) / 40;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-play functionality with longer interval
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 6000); // Increased from 5000 to 6000ms
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Pause auto-play when hovering over carousel
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  // Refined variants for main card animations with gentler transitions
  const cardVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 200 : -200, // Reduced distance
      opacity: 0,
      scale: 0.9, // Less scaling
      rotateY: direction === "right" ? -10 : 10, // Reduced rotation
      zIndex: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 10,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 }, // Softer spring
        opacity: { duration: 0.7 }, // Longer fade
        scale: { duration: 0.7 },
        rotateY: { duration: 0.7 },
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? -200 : 200, // Reduced distance
      opacity: 0,
      scale: 0.9, // Less scaling
      rotateY: direction === "right" ? 10 : -10, // Reduced rotation
      zIndex: 1,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 }, // Softer spring
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.5 },
      },
    }),
  };

  // Refined left card variants with smoother transitions
  const leftCardVariants = {
    initial: { opacity: 0, scale: 1.05, y: 10 }, // Added y offset
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }, // Longer duration
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.6, ease: "easeIn" }, // Smoother exit
    },
  };

  // New right card variants for enhanced animation
  const rightCardVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      rotateY: -15,
      x: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: -10,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2, // Slight delay after main card appears
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: -20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  // New floating animation for background elements
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative flex flex-col items-center py-20 min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0c1445 0%, #1e3a8a 50%, #0c1445 100%)",
      }}
    >
      {/* Enhanced sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant radial gradient that slowly pulses */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(30, 58, 138, 0.1) 40%, rgba(12, 20, 69, 0.05) 70%)",
            }}
          />
        </motion.div>

        {/* Subtle grid overlay with slight animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Premium diagonal light beams that slowly move */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
              style={{
                height: "150%",
                width: "100px",
                top: "-25%",
                left: `${i * 25}%`,
                transform: "rotate(35deg) translateX(-50%)",
              }}
              animate={{
                left: [`${i * 25}%`, `${i * 25 + 100}%`],
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 8,
              }}
            />
          ))}
        </div>

        {/* Subtle noise texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Subtle vignette effect around the edges */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, rgba(12, 20, 69, 0.4) 100%)",
          }}
        />
      </div>

      {/* Enhanced Title Section with subtle animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mb-16"
      >
        <motion.h2
          className="text-5xl font-bold text-white text-center mb-2"
          animate={{
            textShadow: [
              "0 0 0px rgba(251, 191, 36, 0)",
              "0 0 10px rgba(251, 191, 36, 0.3)",
              "0 0 0px rgba(251, 191, 36, 0)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          SIGNATURE <span className="text-amber-400">EVENTS</span>
        </motion.h2>
        <div className="flex justify-center">
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
            animate={{ width: ["32px", "140px", "32px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xl text-blue-100 text-center mt-4 max-w-2xl mx-auto">
          Experience our most prestigious gatherings and transformative programs
        </p>
      </motion.div>

      {/* Enhanced Event Carousel */}
      <div
        ref={carouselRef}
        className="relative flex items-center justify-center w-full max-w-6xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Card with 3D effect - Fixed inline styles to prevent function calls */}
        <div className="relative w-[300px] h-[450px] mr-14 perspective">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-card-${currentIndex}`}
              className="absolute inset-0 w-full h-full"
              variants={leftCardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90"
                  style={{
                    backgroundImage: `url(${events[currentIndex].leftCard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7) contrast(1.2)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Enhanced luxurious overlay with subtle animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-900/90"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Animated gold accents */}
                <motion.div
                  className="absolute top-6 left-6 right-6 bottom-6 border border-amber-400/30 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 8px rgba(251, 191, 36, 0.3)",
                      "0 0 0px rgba(251, 191, 36, 0)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.h3
                      className="text-amber-400 text-lg font-medium mb-2"
                      animate={{
                        textShadow: "0 0 8px rgba(251, 191, 36, 0.5)",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      PREVIOUS EVENT
                    </motion.h3>
                    <h4 className="text-white text-2xl font-bold mb-3">
                      {
                        events[
                          (currentIndex - 1 + events.length) % events.length
                        ].title
                      }
                    </h4>
                    <p className="text-blue-100 text-sm opacity-80">
                      {
                        events[
                          (currentIndex - 1 + events.length) % events.length
                        ].date
                      }
                    </p>
                  </motion.div>
                </div>

                {/* Enhanced shine effect - more subtle and repeating */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 7,
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Carousel Cards - with gentler transitions */}
        <div className="relative w-[500px] h-[550px] perspective">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Event Image with Refined Parallax Effect */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/0 z-5" />
                <motion.img
                  src={events[currentIndex].image}
                  alt={events[currentIndex].title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(1.05) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
                  }}
                  animate={{
                    scale: [1.05, 1.07, 1.05], // Subtle breathing animation
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 m-6 px-4 py-2 bg-amber-400 rounded-full z-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(251, 191, 36, 0.5)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <p className="text-indigo-900 font-semibold text-sm">
                    {events[currentIndex].date}
                  </p>
                </motion.div>
              </div>

              {/* Content with staggered animation */}
              <div className="p-8 relative">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-indigo-900 mb-4">
                    {events[currentIndex].title}
                  </h3>
                  <motion.p
                    className="text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {events[currentIndex].description}
                  </motion.p>
                </motion.div>

                {/* Animated gold accent line */}
                <motion.div
                  className="absolute left-8 top-0 w-16 h-1 bg-amber-400 rounded-full"
                  animate={{ width: ["16px", "80px", "16px"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Enhanced CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 px-6 py-3 bg-indigo-800 hover:bg-indigo-700 text-white font-medium rounded-full flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-1"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)",
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="white"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons with hover effects */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-indigo-800/80 flex items-center justify-center group transition-all duration-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 10H4.16666M4.16666 10L9.99999 15.8333M4.16666 10L9.99999 4.16667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-amber-400 transition-colors duration-300"
                />
              </svg>
            </motion.button>
          </div>
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-indigo-800/80 flex items-center justify-center group transition-all duration-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-amber-400 transition-colors duration-300"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Right preview card - Enhanced with animations */}
        <div className="relative w-[250px] h-[380px] ml-14 opacity-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-card-${currentIndex}`}
              variants={rightCardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(79, 70, 229, 0.6) 100%)",
                backdropFilter: "blur(10px)",
                transformStyle: "preserve-3d",
                transform: `rotateY(-10deg) translateZ(-30px)`,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-[150px] overflow-hidden">
                <motion.img
                  src={events[(currentIndex + 1) % events.length].image}
                  alt="Next Event"
                  className="w-full h-full object-cover opacity-70"
                  animate={{
                    scale: [1, 1.05, 1], // Subtle zoom effect
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/0" />
              </div>
              <div className="p-5">
                <motion.h3
                  className="text-amber-300 text-sm font-medium mb-1"
                  animate={{ textShadow: "0 0 5px rgba(251, 191, 36, 0.5)" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  UP NEXT
                </motion.h3>
                <motion.h4
                  className="text-white text-lg font-bold mb-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {events[(currentIndex + 1) % events.length].title}
                </motion.h4>
                <motion.p
                  className="text-blue-100 text-xs"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {events[(currentIndex + 1) % events.length].date}
                </motion.p>
              </div>

              {/* Shine effect for the upcoming card */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Dots Indicator with smoother animations */}
      <div className="flex mt-12 space-x-2">
        {events.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            className={`relative h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-10 bg-amber-400" : "w-3 bg-white/30"
            }`}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 10px rgba(251, 191, 36, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-400 opacity-50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Enhanced Event Counter */}
      <motion.div
        className="mt-8 text-white/70 font-medium"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-amber-400 font-bold">{currentIndex + 1}</span>
        <span> / {events.length}</span>
      </motion.div>
    </div>
  );
}
