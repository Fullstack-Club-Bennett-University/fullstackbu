import React from "react";

const UpcomingEventsSection = () => {
  // Event data
  const events = [
    { bgImage: "/upcoming/canva.png" },
    { bgImage: "/upcoming/mern.png" },
    { bgImage: "/upcoming/linkedin.png" },
  ];

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
