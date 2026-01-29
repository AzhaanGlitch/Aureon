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
      `}</style>

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
        <nav className="relative z-10 w-full px-8 py-6 animate-fade-in-down">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
            <div className="text-white text-xl font-bold">
              AUREON
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/login')}
                className="text-white hover:text-gray-200 font-medium transition-all duration-300 hover:scale-105"
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
              className="text-[12rem] md:text-[14rem] lg:text-[18rem] tracking-wider leading-none select-none uppercase animate-scale-in delay-200"
              style={{
                color: '#ffffff',
                textShadow: '0 0 40px rgb(0, 0, 0), 0 0 80px rgba(255, 255, 255, 0.15)',
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
              className="mt-16 px-16 py-5 bg-black/10 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-black/20 transition-all shadow-2xl hover:scale-110 duration-300 relative z-30 border border-white/20 animate-float-button delay-400 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 button-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;