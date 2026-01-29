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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-green-300 hover:text-green-200 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Card */}
        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-500/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
              <Lock size={32} className="text-green-400" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-3">
              Create Your Account
            </h1>
            <p className="text-green-200/60">Start your journey to financial freedom</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Emma Johnson"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white placeholder-green-300/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="emma@email.com"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white placeholder-green-300/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white placeholder-green-300/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-3 space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    {req.met ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <X size={16} className="text-gray-600" />
                    )}
                    <span className={req.met ? 'text-green-400' : 'text-gray-500'}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white placeholder-green-300/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-300"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-sm text-red-400">Passwords do not match</p>
              )}
            </div>

            {/* Security Question */}
            <div>
              <label className="block text-sm font-medium text-green-300 mb-2">
                Security Question
              </label>
              <select
                name="securityQuestion"
                value={formData.securityQuestion}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select a question</option>
                <option value="pet">What's your first pet's name?</option>
                <option value="city">What city were you born in?</option>
                <option value="school">What's your elementary school name?</option>
                <option value="mother">What's your mother's maiden name?</option>
              </select>
            </div>

            {/* Security Answer */}
            {formData.securityQuestion && (
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2">
                  Your Answer
                </label>
                <input
                  type="text"
                  name="securityAnswer"
                  value={formData.securityAnswer}
                  onChange={handleChange}
                  placeholder="Enter your answer"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-green-500/30 text-white placeholder-green-300/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            )}

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3 bg-gray-900/30 p-4 rounded-xl border border-green-500/20">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-green-600 border-green-500/50 rounded focus:ring-green-500 bg-gray-900"
              />
              <label className="text-sm text-green-200/80">
                I agree to the{' '}
                <button type="button" className="text-green-400 hover:text-green-300 underline">
                  Terms & Conditions
                </button>{' '}
                and{' '}
                <button type="button" className="text-green-400 hover:text-green-300 underline">
                  Privacy Policy
                </button>
                <div className="flex items-center space-x-2 mt-2 text-green-400">
                  <Lock size={16} />
                  <span className="text-xs">Your data is encrypted end-to-end</span>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed border border-green-400/30 hover:scale-[1.02] disabled:hover:scale-100"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm text-green-200/60">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;