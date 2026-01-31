// src/pages/onboarding/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, X, Lock, ArrowLeft } from 'lucide-react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    agreeToTerms: false
  });

  const passwordRequirements = [
    { label: '8+ characters', met: formData.password.length >= 8 },
    { label: '1 uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: '1 number', met: /[0-9]/.test(formData.password) },
    { label: '1 special character', met: /[!@#$%^&*]/.test(formData.password) }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding/security');
  };

  return (
    <div className="min-h-screen relative py-8 px-4">
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

      <div className="max-w-md mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-white hover:text-gray-300 mb-6 transition-all duration-300 animate-[slideInLeft_0.6s_ease-out] hover:translate-x-[-4px]"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Card - Black Glassy Effect */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 animate-[slideUp_0.8s_ease-out]">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
              <Lock size={32} className="text-white animate-[fadeIn_1s_ease-out]" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
              Create Your Account
            </h1>
            <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Start your journey to financial freedom</p>
          </div>

          {/* Form */}  
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="animate-[slideInRight_0.6s_ease-out_0.4s_both]">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Aureon Dev"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
              />
            </div>

            {/* Email */}
            <div className="animate-[slideInRight_0.6s_ease-out_0.5s_both]">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="aureondev@email.com"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
              />
            </div>

            {/* Password */}
            <div className="animate-[slideInRight_0.6s_ease-out_0.6s_both]">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 pr-12 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-3 space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-sm transition-all duration-300 animate-[fadeIn_0.5s_ease-out]"
                    style={{ animationDelay: `${0.7 + index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    {req.met ? (
                      <Check size={16} className="text-emerald-400 animate-[scaleIn_0.3s_ease-out]" />
                    ) : (
                      <X size={16} className="text-gray-600" />
                    )}
                    <span className={`transition-all duration-300 ${req.met ? 'text-emerald-400' : 'text-gray-500'}`}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="animate-[slideInRight_0.6s_ease-out_0.7s_both]">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 pr-12 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-sm text-red-400 animate-[shake_0.5s_ease-in-out]">Passwords do not match</p>
              )}
            </div>

            {/* Security Question */}
            <div className="animate-[slideInRight_0.6s_ease-out_0.8s_both]">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Security Question
              </label>
              <select
                name="securityQuestion"
                value={formData.securityQuestion}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
              >
                <option value="" className="bg-gray-900">Select a question</option>
                <option value="pet" className="bg-gray-900">What's your first pet's name?</option>
                <option value="city" className="bg-gray-900">What city were you born in?</option>
                <option value="school" className="bg-gray-900">What's your elementary school name?</option>
                <option value="mother" className="bg-gray-900">What's your mother's maiden name?</option>
              </select>
            </div>

            {/* Security Answer */}
            {formData.securityQuestion && (
              <div className="animate-[slideInRight_0.6s_ease-out]">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Answer
                </label>
                <input
                  type="text"
                  name="securityAnswer"
                  value={formData.securityAnswer}
                  onChange={handleChange}
                  placeholder="Enter your answer"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                />
              </div>
            )}

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 animate-[slideInRight_0.6s_ease-out_0.9s_both] hover:bg-emerald-500/15 transition-all duration-300">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-emerald-500 border-gray-600 rounded focus:ring-emerald-500 bg-white/5 transition-all duration-300 cursor-pointer"
              />
              <label className="text-sm text-gray-300">
                I agree to the{' '}
                <button type="button" className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors duration-300">
                  Terms & Conditions
                </button>{' '}
                and{' '}
                <button type="button" className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors duration-300">
                  Privacy Policy
                </button>
                <div className="flex items-center space-x-2 mt-2 text-emerald-400">
                  <Lock size={16} className="animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs">Your data is encrypted end-to-end</span>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] disabled:hover:scale-100 animate-[slideInRight_0.6s_ease-out_1s_both] active:scale-95"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm text-gray-400 animate-[fadeIn_0.8s_ease-out_1.1s_both]">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300 hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;