// src/pages/onboarding/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp, Target, PieChart, Lock, Brain } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Smart AI Insights',
      description: 'Get personalized financial advice powered by artificial intelligence'
    },
    {
      icon: PieChart,
      title: 'Budget Tracking',
      description: 'Track your spending and stay within budget effortlessly'
    },
    {
      icon: TrendingUp,
      title: 'Investment Recommendations',
      description: 'Make informed investment decisions with AI-powered suggestions'
    },
    {
      icon: Target,
      title: 'Goal Management',
      description: 'Set and achieve your financial goals with smart planning'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
              <DollarSign size={40} className="text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Take Control of Your Finances
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Smart budgeting, investment tracking, and AI-powered financial insights
            all in one secure platform
          </p>
          
          {/* Security Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Lock size={20} className="text-green-400" />
            <span className="text-white font-semibold">100% Private & Secure</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Join thousands of users who are taking control of their financial future
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate('/onboarding/signup')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Get Started Free
            </button>
            
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition"
            >
              Already have an account? Sign In
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield size={18} className="text-green-600" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock size={18} className="text-green-600" />
                <span>256-bit encryption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-blue-100 text-sm">
          <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

const DollarSign = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M6 3h12M6 8h12m-5.6 13L6 13h3c5 0 8-2 8-5H6"></path>
  </svg>
);

export default LandingPage;