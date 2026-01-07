// src/pages/auth/TwoFactorAuth.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail } from 'lucide-react';

const TwoFactorAuth = ({ setIsAuthenticated }) => {
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
      navigate('/dashboard');
    }
  };

  const resendCode = () => {
    alert('Verification code resent to your email!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield size={28} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Two-Factor Authentication</h1>
          <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-600">
            <Mail size={16} />
            <span>emma@email.com</span>
          </div>
        </div>

        {/* Code Input */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-3 mb-6">
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
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={code.join('').length !== 6}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg"
          >
            Verify & Continue
          </button>
        </form>

        {/* Resend Code */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Didn't receive the code?
          </p>
          <button
            onClick={resendCode}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Resend Code
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Security tip:</span> Never share this code with anyone. 
            Our team will never ask for your verification code.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;