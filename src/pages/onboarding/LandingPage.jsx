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

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUpFloat {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 
              0 0 40px rgba(0, 0, 0, 0.8),
              0 0 80px rgba(255, 255, 255, 0.1);
          }
          50% {
            text-shadow: 
              0 0 40px rgba(0, 0, 0, 0.8),
              0 0 80px rgba(255, 255, 255, 0.2),
              0 0 100px rgba(255, 255, 255, 0.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 1.2s ease-out forwards;
          opacity: 0;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float-button {
          animation: fadeInUpFloat 1s ease-out forwards, float 3s ease-in-out 1s infinite;
          opacity: 0;
        }

        .button-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          background-size: 200% 100%;
        }

        .button-shimmer:hover {
          animation: shimmer 3s linear infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>

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

        {/* Top Right Corner Image */}
        <div 
          className="absolute z-20 animate-fade-in-down"
          style={{
            top: '-35%',
            right: '-20%',
            width: '900px',
            height: '900px'
          }}
        >
          <img 
            src="/landing-page-top-element.png" 
            alt="Decorative"
            className="w-full h-full object-contain"
            style={{
              transform: 'rotate(-180deg)'
          }}
          />
        </div>

        {/* Navbar */}
        <nav className="absolute top-12 left-18 z-30 animate-fade-in-down w-1/2">
          <div className="flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl ml-8" style={{ borderRadius: '9999px' }}>
            
            <div className="flex items-center">
              <img 
                src="/Aureon_logo.png" 
                alt="Aureon Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>

            <button
              onClick={() => navigate('/login')}
              className="text-white hover:text-gray-200 font-medium transition-all duration-300 hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 relative z-10 flex items-center pl-16 md:pl-24 lg:pl-32">
          <div className="relative flex items-center">
            {/* Left Column - AUREON Text and Tagline */}
            <div className="flex flex-col items-start">
              {/* AUREON Text */}
              <h1 
                className="text-[10rem] md:text-[12rem] lg:text-[14rem] tracking-wider leading-none select-none uppercase animate-fade-in-left delay-200"
                style={{
                  color: '#ffffff',
                  textShadow: '0 0 40px rgb(0, 0, 0), 0 0 80px rgba(255, 255, 255, 0.15)',
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  fontStyle: 'normal',
                  marginBottom: '-1.5rem'
                }}
              >
                AUREON
              </h1>

              {/* Financial Highlight Tagline */}
              <div className="animate-fade-in-up delay-600">
                <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-50 font-light tracking-wide max-w-xl">
                  Track and manage your financial data with 
                  <span className="font-semibold text-white"> AI-powered </span>
                  intelligence
                </p>
              </div>
            </div>

            {/* Vertical Get Started Button */}
            <div className="animate-float-button delay-800 ml-16">
              <button
                onClick={() => navigate('/onboarding/signup')}
                className="px-8 py-3 mb-60 bg-black/10 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-black/20 transition-all shadow-2xl hover:scale-110 duration-300 relative border border-white/20 overflow-hidden group"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center center',
                  whiteSpace: 'nowrap',
                  marginLeft: '-6rem'
                }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 button-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;