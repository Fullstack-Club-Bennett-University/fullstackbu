import React, { useEffect } from 'react';

const HeroSection = () => {
  

  // Cloud SVG component
  const Cloud = () => (
    <svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      className="absolute cloud"
      style={{ animation: 'float 15s linear infinite' }}
    >
      <path
        d="M0,50 C20,40 30,20 50,30 C70,40 80,50 100,40 L100,50 Z"
        fill="white"
        fillOpacity="0.2"
      />
    </svg>
  );

  useEffect(() => {
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
      const delay = index * 5; // Stagger the animation start
      cloud.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <section className="min-h-screen bg-blue-500 text-white relative overflow-hidden flex flex-col">

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
        <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          {/* Left Vertical Text */}
          <div className="sm:w-1/5 mb-6 sm:mb-0">
            <h1
              className="text-4xl sm:text-5xl font-bold text-blue-800 uppercase tracking-widest transform -rotate-90 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              FULLSTACK
            </h1>
          </div>

          {/* Center Text */}
          <div className="sm:w-2/5 text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-orange-400 leading-tight">
              CODE<br />CREATE<br />CONQUER
            </h2>
          </div>

          {/* Right Dragon Illustration */}
          <div className="sm:w-2/5 flex justify-center sm:justify-end">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
         
              <img
                src="./dragon.png"
                alt="Dragon Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Moving Clouds */}
      <Cloud style={{ top: '10%', left: '-100px' }} />
      <Cloud style={{ top: '30%', left: '-150px' }} />
      <Cloud style={{ top: '50%', left: '-120px' }} />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        .cloud {
          position: absolute;
          animation: float 15s linear infinite;
        }
        section {
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;