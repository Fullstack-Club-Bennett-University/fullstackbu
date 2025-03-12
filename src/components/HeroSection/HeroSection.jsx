import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [cloudPositions, setCloudPositions] = useState([
    { id: 1, x: -10, y: 20, speed: 0.05, scale: 1 },
    { id: 2, x: 30, y: 60, speed: 0.04, scale: 0.8 },
    { id: 3, x: 60, y: 40, speed: 0.06, scale: 0.7 },
    { id: 4, x: 0, y: 80, speed: 0.03, scale: 0.9 },
    { id: 5, x: 20, y: 30, speed: 0.07, scale: 1.2 }
  ]);

  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;

    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setCloudPositions(prevPositions => 
        prevPositions.map(cloud => {
          let newX = cloud.x + cloud.speed * deltaTime;
          // Reset position when cloud moves out of view
          if (newX > 110) newX = -20;
          return { ...cloud, x: newX };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-blue-500 text-white min-h-screen">
      {/* Left text column */}
      <div className="flex flex-col md:flex-row items-center h-screen">
        <div className="px-6 md:px-12 py-8 md:w-1/2 z-10 relative">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-8">
            <div className="block my-2">MAKE</div>
            <div className="block my-2 text-orange-500">CODE</div>
            <div className="block my-2 text-orange-500">CREATE</div>
            <div className="block my-2 text-orange-500">CONQUER</div>
          </h1>
        </div>

        {/* Right dragon image */}
        <div className="md:w-1/2 relative z-10 flex justify-center md:justify-end">
          <div className="w-4/5 md:w-full max-w-lg">
            {/* REPLACE THIS WITH YOUR DRAGON IMAGE */}
            {/* <img src="/path/to/your/dragon-image.png" alt="Dragon Illustration" className="w-full h-auto" /> */}
            <div className="bg-white bg-opacity-20 rounded-full w-full aspect-square flex items-center justify-center">
              <p className="text-lg">dragon image here</p>
            </div>
          </div>
        </div>

        {/* Clouds - Absolute positioned */}
        {cloudPositions.map((cloud) => (
          <div 
            key={cloud.id} 
            className="absolute pointer-events-none" 
            style={{
              left: `${cloud.x}%`, 
              top: `${cloud.y}%`, 
              transform: `scale(${cloud.scale})`,
              transition: 'transform 0.3s ease'
            }}
          >
            {/* REPLACE THIS WITH YOUR CLOUD IMAGE */}
            {/* <img src="/path/to/your/cloud-image.png" alt="Cloud" /> */}
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,10 Q45,0 60,10 Q75,15 90,10 Q100,15 95,30 Q100,45 90,50 Q80,55 70,50 Q60,60 40,50 Q20,60 10,50 Q0,40 5,30 Q0,15 10,10 Q20,5 30,10" fill="white" opacity="0.6" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;