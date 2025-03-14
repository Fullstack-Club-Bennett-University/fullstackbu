import { useEffect, useRef } from "react";

export default function WavyMarquee() {
  const textPathRef = useRef(null);
  let offset = 100;

  useEffect(() => {
    const animateText = () => {
      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", `${offset}%`);
        offset -= 0.02;
        if (offset <= -200) offset = 100;
      }
      requestAnimationFrame(animateText);
    };

    requestAnimationFrame(animateText);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-visible">
      {/* Left Stationary Star */}
      <img
        src="/events/Soft Star.png"
        alt="Star"
        className="absolute left-96 w-20 h-20 sm:w-20 sm:h-20 "
      />

      {/* Wavy Marquee */}
      <div className="w-full max-w-[1200px] flex justify-center overflow-visible">
        <svg
          className="w-full h-[55px] overflow-visible"
          viewBox="0 0 1200 100"
        >
          <defs>
            <path
              id="wavePath"
              d="M 0,50 Q 300,175 600,50 T 1200,50"
              fill="transparent"
            />
          </defs>
          <text className="text-[20px] font-bold uppercase " fill="#ffc17b">
            <textPath ref={textPathRef} href="#wavePath" startOffset="100%">
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
              EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS! EVENTS!
            </textPath>
          </text>
        </svg>
      </div>

      {/* Right Stationary Star */}
      <img
        src="/events/Soft Star.png"
        alt="Star"
        className="absolute right-96 w-20 h-20 transform sm:w-20 sm:h-20"
      />
    </div>
  );
}
