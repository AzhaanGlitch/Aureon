// src/pages/onboarding/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Navbar with Glass Effect */}
      <nav className="relative z-10 w-full px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
          <div className="text-white text-xl font-bold">
            AUREON
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/login')}
              className="text-white hover:text-gray-200 font-medium transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative z-10 flex items-center justify-center px-4">
        <div className="relative flex flex-col items-center">
          {/* AUREON Text with Momo Signature Font */}
          <h1 
            className="text-[10rem] md:text-[12rem] lg:text-[14rem] tracking-wider leading-none select-none"
            style={{
              color: '#ffffff',
              textShadow: '0 0 40px rgb(0, 0, 0)',
              fontFamily: '"Momo Signature", cursive',
              fontWeight: '400',
              letterSpacing: '0.05em',
              fontStyle: 'normal'
            }}
          >
            AUREON
          </h1>

          {/* Money Image Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <img 
              src="/money-landing-page.png" 
              alt="Money Overlay" 
              className="w-[650px] h-[650px] object-contain transition-transform duration-300"
              style={{
                marginLeft: '160px',
                marginBottom: '-90px',
                transform: 'rotate(45deg)'
              }}
            />
          </div>

          {/* Get Started Button */}
          <button
            onClick={() => navigate('/onboarding/signup')}
            className="mt-16 px-16 py-5 bg-gray-900/80 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-2xl hover:scale-105 transform duration-200 relative z-30 border border-white/20"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;