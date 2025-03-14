import { useEffect, useRef } from "react";

export default function WavyMarquee() {
  const textPathRef = useRef(null);
  let offset = 100;

  useEffect(() => {
    const animateText = () => {
      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", `${offset}%`);
        offset -= 0.1;
        if (offset <= -100) offset = 100;
      }
      requestAnimationFrame(animateText);
    };

    requestAnimationFrame(animateText);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Left Stationary Star */}
      <img
        src="/events/Soft Star.png"
        alt="Star"
        className="absolute left-96 w-8 h-8 sm:w-10 sm:h-10"
      />

      {/* Wavy Marquee */}
      <div className="w-full max-w-[1200px] flex justify-center overflow-hidden">
        <svg
          className="w-full h-[60px] overflow-visible"
          viewBox="0 0 1200 100"
        >
          <defs>
            <path
              id="wavePath"
              d="M 0,50 Q 300,0 600,50 T 1200,50"
              fill="transparent"
            />
          </defs>
          <text className="text-[16px] font-bold text-black uppercase">
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
        className="absolute w-16 h-16 right-96 transform sm:w-10 sm:h-10"
      />
    </div>
  );
}
