import React, { useEffect, useRef } from "react";

const UpcomingEventsSection = () => {
  // Event data
  const events = [
    { bgImage: "/upcoming/canva.png" },
    { bgImage: "/upcoming/mern.png" },
    { bgImage: "/upcoming/linkedin.png" },
  ];

  const imageLinks = [
    "https://unstop.com/hackathons/phantasia-hackathon-bennett-university-1435956",
    "https://unstop.com/competitions/phantasia-brandframe-bennett-university-1435944",
    "https://unstop.com/workshops-webinars/phantasia-logolex-bennett-univeristy-1435930",
    "https://unstop.com/competitions/phantasia-front-end-borderland-bennett-university-1435953",
    "https://unstop.com/workshops-webinars/phantasia-how2-hackathon-bennett-university-1435929",
  ];

  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerElement = containerRef.current;

    if (!marqueeElement || !containerElement) return;

    // Clone the marquee content for seamless looping
    const clone = marqueeElement.cloneNode(true);
    containerElement.appendChild(clone);

    // Animation function
    let animationId;
    let position = 0;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        position -= 1;
        if (position <= -marqueeElement.offsetWidth) {
          position = 0;
        }

        containerElement.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners to pause animation on hover
    containerElement.addEventListener('mouseenter', () => { isPaused = true; });
    containerElement.addEventListener('mouseleave', () => { isPaused = false; });
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      containerElement.removeEventListener('mouseenter', () => { isPaused = true; });
      containerElement.removeEventListener('mouseleave', () => { isPaused = false; });
    };
  }, []);

  // Function to handle image click
  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-400 text-white">
      {/* Header Image */}
      <div className="w-full">
        <img src="/upcoming/banner.png" alt="Header" className="w-full" />
      </div>

      {/* Phantasia Event Section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 pt-12">
        <div className="w-full md:w-1/2">
          <img
            src="/upcoming/PHANTASIA WALLPAPER 1.png"
            alt="Phantasia Event"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-blue-900">PHANTASIA</h2>
          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco commodo consequat.
          </p>
          <a href="path/to/register-now-link">
            <img
              src="/upcoming/register.png"
              alt="Register Now"
              className="mt-6 w-40 cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="w-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex"
            style={{ willChange: 'transform' }}
          >
            <div ref={marqueeRef} className="flex">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="w-96 flex-shrink-0 px-2 cursor-pointer"
                  onClick={() => handleImageClick(imageLinks[index - 1])}
                >
                  <img
                    src={`/${index}.png`}
                    alt={`Phantasia Event ${index}`}
                    className="w-full rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Circular Events Section */}
      <div className="relative max-w-6xl mx-auto mt-20 px-4 flex flex-col items-center">
        {/* Circle with Event Boxes */}
        <div
          className="relative flex flex-col items-center justify-center w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
          style={{
            backgroundImage: "url('/upcoming/circle.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 flex flex-col items-center space-y-6">
            {events.map((event, index) => (
              <div key={index} className="w-64 md:w-80">
                <img
                  src={event.bgImage}
                  alt={`Event ${index + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Button (Centered Below the Circle) */}
        <div className="mt-6">
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=qhbTLrFh9I15cVJZ" // Replace with actual YouTube link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/upcoming/button.png"
              alt="Watch on YouTube"
              className="w-24 md:w-28 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;