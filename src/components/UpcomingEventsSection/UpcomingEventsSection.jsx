import React, { useEffect, useRef, useState } from "react";

const UpcomingEventsSection = () => {
  // Event data with more comprehensive information
  const events = [
    {
      id: 1,
      title: "Canva Workshop",
      description: "Learn professional design techniques with Canva.",
      bgImage: "/upcoming/canva.png",
      link: "https://unstop.com/workshops-webinars/phantasia-how2-hackathon-bennett-university-1435929"
    },
    {
      id: 2,
      title: "MERN Stack Bootcamp",
      description: "Master full-stack development with MongoDB, Express, React and Node.js",
      bgImage: "/upcoming/mern.png",
      link: "https://unstop.com/competitions/phantasia-front-end-borderland-bennett-university-1435953"
    },
    {
      id: 3,
      title: "LinkedIn Optimization",
      description: "Boost your professional profile and networking skills",
      bgImage: "/upcoming/linkedin.png",
      link: "https://unstop.com/workshops-webinars/phantasia-logolex-bennett-univeristy-1435930"
    },
  ];

  const marqueeEvents = [
    {
      id: 1,
      title: "Phantasia Hackathon",
      image: "/1.png",
      link: "https://unstop.com/hackathons/phantasia-hackathon-bennett-university-1435956"
    },
    {
      id: 2,
      title: "Phantasia BrandFrame",
      image: "/2.png",
      link: "https://unstop.com/competitions/phantasia-brandframe-bennett-university-1435944"
    },
    {
      id: 3,
      title: "Phantasia LogoLex",
      image: "/3.png",
      link: "https://unstop.com/workshops-webinars/phantasia-logolex-bennett-univeristy-1435930"
    },
    {
      id: 4,
      title: "Frontend Borderland",
      image: "/4.png",
      link: "https://unstop.com/competitions/phantasia-front-end-borderland-bennett-university-1435953"
    },
    {
      id: 5,
      title: "How2 Hackathon",
      image: "/5.png",
      link: "https://unstop.com/workshops-webinars/phantasia-how2-hackathon-bennett-university-1435929"
    },
  ];

  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
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

    const animate = () => {
      if (!isMarqueePaused) {
        position -= 1;
        if (position <= -marqueeElement.offsetWidth) {
          position = 0;
        }

        containerElement.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isMarqueePaused]);

  // Function to handle image click
  const handleRedirect = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-400 text-white pb-20">
      {/* Header Image */}
      <div className="w-full">
        <img
          src="/upcoming/banner.png"
          alt="Upcoming Events Banner"
          className="w-full"
          loading="eager"
        />
      </div>

      {/* Phantasia Event Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/upcoming/PHANTASIA WALLPAPER 1.png"
              alt="Phantasia Event"
              className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">PHANTASIA</h2>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Join us for Phantasia, Bennett University's premier tech festival! Experience cutting-edge workshops,
              thrilling competitions, and networking opportunities with industry leaders. Whether you're a coding prodigy,
              design enthusiast, or tech explorer, Phantasia offers something for everyone.
            </p>
            <button
              onClick={() => handleRedirect("https://unstop.com/hackathons/phantasia-hackathon-bennett-university-1435956")}
              className="mt-8 group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              aria-label="Register for Phantasia Event on Unstop"
            >
              {/* Background animation element */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

              {/* Unstop logo */}
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                alt="Unstop Logo"
                className="h-12 w-20 relative z-10 transform group-hover:rotate-12 transition-transform duration-300"
              />

              {/* Button text */}
              <div className="flex flex-col relative z-10">
                <span className="text-white font-bold text-lg tracking-wide">REGISTER NOW</span>
                <span className="text-red-200 text-xs">Powered by Unstop</span>
              </div>

              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white relative z-10 transform translate-x-2 group-hover:translate-x-4 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>

              {/* Shine effect */}
              <span className="absolute top-0 right-0 w-8 h-full bg-white transform rotate-12 translate-x-12 opacity-20 group-hover:translate-x-40 transition-transform duration-1000 ease-out"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Section with enhanced accessibility */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Competitions</h3>
        <div
          className="w-full overflow-hidden"
          aria-label="Scrolling events carousel"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
          onFocus={() => setIsMarqueePaused(true)}
          onBlur={() => setIsMarqueePaused(false)}
        >
          <div
            ref={containerRef}
            className="flex"
            style={{ willChange: 'transform' }}
          >
            <div ref={marqueeRef} className="flex">
              {marqueeEvents.map((event) => (
                <div
                  key={event.id}
                  className="w-80 flex-shrink-0 px-3 cursor-pointer"
                  onClick={() => handleRedirect(event.link)}
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleRedirect(event.link);
                    }
                  }}
                  role="button"
                  aria-label={`View details for ${event.title}`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">{event.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Circular Events Section */}
      <div className="relative max-w-6xl mx-auto mt-12 px-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Featured Workshops</h3>

        {/* Circle with Event Boxes */}
        <div
          className="relative flex flex-col items-center justify-center w-full max-w-3xl mb-12"
          style={{
            backgroundImage: "url('/upcoming/circle.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "600px",
          }}
          aria-label="Featured workshops carousel"
        >
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="w-full max-w-md transition-all duration-300 hover:transform hover:scale-105"
                onClick={() => handleRedirect(event.link)}
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleRedirect(event.link);
                  }
                }}
                role="button"
                aria-label={`Register for ${event.title}`}
              >
                <div className="relative">
                  <img
                    src={event.bgImage}
                    alt={event.title}
                    className="w-full rounded-lg shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                    <h4 className="text-white font-bold text-lg">{event.title}</h4>
                    <p className="text-white/90 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Button with enhanced accessibility */}
        <div className="mt-6">
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=qhbTLrFh9I15cVJZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Phantasia trailer on YouTube"
            className="group relative inline-block"
          >
            <img
              src="/upcoming/button.png"
              alt="Watch on YouTube"
              className="w-28 md:w-32 transition-transform duration-300 transform group-hover:scale-110"
            />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-blue-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Watch Trailer
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;