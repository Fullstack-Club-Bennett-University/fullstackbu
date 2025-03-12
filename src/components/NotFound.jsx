import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white px-4">
      <div className="max-w-4xl w-full bg-black rounded-3xl p-6 md:p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
        
        <div className="relative z-10">
          {/* 404 heading */}
          <h1 className="text-9xl font-bold text-orange-500 mb-6 text-center tracking-tighter">
            404
          </h1>
          
          {/* Code Create Conquer logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500 rounded-2xl p-4 inline-block">
              <div className="text-4xl font-bold text-center">
                <span className="block">CODE</span>
                <span className="block">CREATE</span>
                <span className="text-orange-500 transform -rotate-12 inline-block">CONQUER</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have disappeared into the digital void.
            </p>
          </div>
          
          {/* Navigation options */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-center transition-colors"
            >
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-center transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;