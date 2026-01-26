// src/pages/onboarding/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex flex-col">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Navbar */}
      <nav className="relative z-10 w-full px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-gray-800 text-xl font-semibold">
            AUREON
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/login')}
              className="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative z-10 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* AUREON Text */}
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-green-200 tracking-wider leading-none select-none">
            AUREON
          </h1>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <img 
              src="/money-landing-page.png" 
              alt="Overlay" 
              className="w-200 h-200 pb-20 ml-200 object-contain"
            />
          </div>

          {/* Get Started Button - Below the text */}
          <button
            onClick={() => navigate('/onboarding/signup')}
            className="mt-12 px-16 py-5 bg-gray-800 text-white rounded-full font-bold text-xl hover:bg-gray-700 transition-all shadow-2xl hover:scale-105 transform duration-200 relative z-30"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;