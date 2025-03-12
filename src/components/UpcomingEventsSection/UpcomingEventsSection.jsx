import React from 'react';

const UpcomingEventsSection = () => {
  // Event data
  const events = [
    {
      title: 'Canva Glasses',
      logo: 'https://via.placeholder.com/50?text=Canva', // Replace with actual logo
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://via.placeholder.com/300?text=Dragon', // Replace with actual dragon image
    },
    {
      title: 'Mernstack Glasses',
      logo: 'https://via.placeholder.com/50?text=Mernstack', // Replace with actual logo
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/300?text=Dragon', // Replace with actual dragon image
    },
    {
      title: 'LinkedIn Workshop',
      logo: 'https://via.placeholder.com/50?text=LinkedIn', // Replace with actual logo
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://via.placeholder.com/300?text=Dragon', // Replace with actual dragon image
    },
  ];

  return (
    <section className="py-12 px-4 bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="relative text-center mb-8">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block text-lg sm:text-xl font-bold uppercase tracking-widest">
            Upcoming Events
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <span
              className="text-orange-400 text-opacity-50 text-sm sm:text-base uppercase tracking-widest whitespace-nowrap animate-marquee"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Upcoming Events ★ Upcoming Events ★ Upcoming Events ★
            </span>
          </div>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-400 text-xl sm:text-2xl">★</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-400 text-xl sm:text-2xl">★</span>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="relative bg-blue-700 rounded-2xl p-4 shadow-lg border-4 border-blue-800">
              {/* Dragon Image */}
              <img
                src={event.image}
                alt={`${event.title} Dragon`}
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg mb-2"
                loading="lazy"
              />
              {/* Event Logo and Title */}
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={event.logo}
                  alt={`${event.title} Logo`}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
              </div>
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Circular Arrow */}
        <div className="mt-8 flex justify-end">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate(-50%, -50%) translateX(0);
          }
          100% {
            transform: translate(-50%, -50%) translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UpcomingEventsSection;