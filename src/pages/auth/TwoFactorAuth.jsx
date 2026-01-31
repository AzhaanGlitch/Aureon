// src/pages/auth/TwoFactorAuth.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail } from 'lucide-react';

// FIXED: Added setIsOnboarded to props
const TwoFactorAuth = ({ setIsAuthenticated, setIsOnboarded }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newCode = [...code];
    pastedData.forEach((char, index) => {
      if (index < 6) newCode[index] = char;
    });
    setCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      // Simulate verification
      setIsAuthenticated(true);
      
      // FIXED: Set onboarded to true so ProtectedRoute allows access to Dashboard
      setIsOnboarded(true);
      
      navigate('/dashboard');
    }
  };

  const resendCode = () => {
    alert('Verification code resent to your email!');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 animate-[fadeIn_0.8s_ease-out]"
        style={{
          backgroundImage: 'url("/common-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="max-w-md w-full bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 relative z-10 animate-[slideUp_0.8s_ease-out]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
            <Shield size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">Two-Factor Authentication</h1>
          <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Enter the 6-digit code sent to your email</p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.4s_both]">
            <Mail size={16} />
            <span>aureondev@email.com</span>
          </div>
        </div>

        {/* Code Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-3 mb-6 animate-[slideUp_0.6s_ease-out_0.5s_both]">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-white/10 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 focus:scale-110"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={code.join('').length !== 6}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:scale-[1.02] active:scale-95 disabled:hover:scale-100 animate-[slideUp_0.6s_ease-out_0.7s_both]"
          >
            Verify & Continue
          </button>
        </form>

        {/* Resend Code */}
        <div className="mt-6 text-center animate-[fadeIn_0.8s_ease-out_0.8s_both]">
          <p className="text-sm text-gray-400 mb-2">
            Didn't receive the code?
          </p>
          <button
            onClick={resendCode}
            className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300"
          >
            Resend Code
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 backdrop-blur-sm animate-[slideUp_0.6s_ease-out_0.9s_both]">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-emerald-400">Security tip:</span> Never share this code with anyone. 
            Our team will never ask for your verification code.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center animate-[fadeIn_0.8s_ease-out_1s_both]">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-300"
          >
            Back to Login
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default TwoFactorAuth;