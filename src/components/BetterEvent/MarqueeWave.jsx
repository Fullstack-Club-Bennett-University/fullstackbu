import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const MarqueeWave = () => {
  const [width, setWidth] = useState(0);
  const [repeats, setRepeats] = useState(10);

  // Calculate the number of repeats needed based on screen width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);

      // Calculate how many "events" we need to fill the screen plus extra for continuous scroll
      // Each "events" text is roughly 80px wide with star
      const neededRepeats = Math.ceil(windowWidth / 80) * 2;
      setRepeats(Math.max(8, neededRepeats)); // Minimum 8 repeats
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create array with appropriate number of repeats
  const marqueeItems = Array(repeats).fill("EVENTS!");

  return (
    <div className="relative overflow-hidden w-full py-2">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

      {/* First marquee row - left to right */}
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={`wave-1-${index}`} className="inline-flex items-center">
            <motion.span
              className="text-[#0A84FF] bold-text text-lg md:text-xl mx-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                transformOrigin: "50% 50%",
              }}
              animate={{
                y: ["0px", "-10px", "0px"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: (index * 0.1) % 1, // Stagger wave effect
                repeat: Infinity,
              }}
            >
              {item}
              <Sparkles size={14} className="ml-1 text-[#FF7800]" />
            </motion.span>
          </div>
        ))}
      </motion.div>

      {/* Second marquee row - right to left, with offset styling */}
      <motion.div
        className="flex whitespace-nowrap mt-1"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={`wave-2-${index}`} className="inline-flex items-center">
            <motion.span
              className="text-[#FF7800] bold-text text-xl md:text-2xl mx-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                transformOrigin: "50% 50%",
              }}
              animate={{
                y: ["0px", "-10px", "0px"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: (index * 0.1 + 0.5) % 1, // Offset from first row
                repeat: Infinity,
              }}
            >
              {item}
              <Sparkles size={14} className="ml-1 text-[#0A84FF]" />
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeWave;
