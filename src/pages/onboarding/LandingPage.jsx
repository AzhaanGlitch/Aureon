// src/pages/onboarding/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Google Fonts - Bebas Neue */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

      <div className="h-screen w-screen overflow-hidden relative flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bg-main.jpg")',
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
            {/* AUREON Text */}
            <h1 
              className="text-[12rem] md:text-[14rem] lg:text-[18rem] tracking-wider leading-none select-none uppercase"
              style={{
                color: '#ffffff',
                textShadow: '0 0 40px rgb(0, 0, 0)',
                fontFamily: '"Bebas Neue", sans-serif',
                fontWeight: '400',
                letterSpacing: '0.05em',
                fontStyle: 'normal'
              }}
            >
              AUREON
            </h1>

            {/* Get Started Button */}
            <button
              onClick={() => navigate('/onboarding/signup')}
              className="mt-16 px-16 py-5 bg-emerald-0 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-black/20 transition-all shadow-2xl hover:scale-105 transform duration-200 relative z-30 border border-white/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;