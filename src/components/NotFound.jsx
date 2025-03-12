import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center text-white px-4 py-12 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-md animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10 animate-spin-slow"></div>

      <div className="max-w-4xl w-full bg-black/90 backdrop-blur-sm rounded-3xl p-6 md:p-10 relative z-10 shadow-2xl border-2 border-blue-800">
        <div className="relative z-20">
          {/* 404 Heading */}
          <h1
            className="text-8xl sm:text-9xl font-extrabold text-orange-500 mb-6 text-center tracking-tight animate-fade-in"
            aria-label="404 Error"
          >
            404
          </h1>

          {/* Code Create Conquer Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 rounded-2xl p-4 sm:p-6 inline-block shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-center text-white">
                <span className="block">CODE</span>
                <span className="block">CREATE</span>
                <span className="text-orange-400 transform -rotate-12 inline-block animate-bounce-slow">
                  CONQUER
                </span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white animate-slide-up">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Whoops! It seems you've wandered into the digital wilderness. The page you’re seeking
              has vanished into the ether. Try heading back home or let us help you find your way!
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md hover:shadow-lg"
              aria-label="Return to Home Page"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animation Styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeInDelay {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounceSlow {
    0%, 100% { transform: translateY(0) rotate(-12deg); }
    50% { transform: translateY(-10px) rotate(-12deg); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  .animate-fade-in-delay {
    animation: fadeInDelay 1.2s ease-in-out 0.3s backwards;
  }
  .animate-slide-up {
    animation: slideUp 1s ease-out;
  }
  .animate-spin-slow {
    animation: spinSlow 20s linear infinite;
  }
  .animate-bounce-slow {
    animation: bounceSlow 3s ease-in-out infinite;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default NotFound;