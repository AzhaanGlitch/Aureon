// src/pages/onboarding/FinancialProfilePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, DollarSign, Target, TrendingUp } from 'lucide-react';

const FinancialProfilePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    age: '',
    employment: '',
    monthlyIncome: 3200,
    goals: [],
    savings: '',
    monthlyExpenses: '',
    debts: '',
    riskTolerance: 'moderate',
    currency: 'USD',
    budgetPeriod: 'monthly'
  });

  const goals = [
    'Track daily spending',
    'Create and stick to budgets',
    'Save for specific goals',
    'Invest wisely',
    'Pay off debt',
    'Reduce unnecessary expenses'
  ];

  const toggleGoal = (goal) => {
    if (profileData.goals.includes(goal)) {
      setProfileData({
        ...profileData,
        goals: profileData.goals.filter(g => g !== goal)
      });
    } else {
      setProfileData({
        ...profileData,
        goals: [...profileData.goals, goal]
      });
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/onboarding/import');
    }
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

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Progress */}
        <div className="mb-8 animate-[slideInDown_0.6s_ease-out]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Step {step} of 4</span>
            <span className="text-sm text-gray-300">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-500 shadow-lg shadow-emerald-500/50"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 animate-[slideUp_0.8s_ease-out]">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <User size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Basic Information
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Tell us about yourself</p>
              </div>

              <div className="space-y-6">
                <div className="animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Age</label>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    placeholder="28"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  />
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.5s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Employment Status</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Employed', 'Self-employed', 'Student', 'Other'].map((status, index) => (
                      <button
                        key={status}
                        onClick={() => setProfileData({ ...profileData, employment: status })}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                          profileData.employment === status
                            ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/20'
                            : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm'
                        }`}
                        style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.7s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Monthly Income (approximate)
                  </label>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="100"
                      value={profileData.monthlyIncome}
                      onChange={(e) => setProfileData({ ...profileData, monthlyIncome: parseInt(e.target.value) })}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="text-center mt-4 text-4xl font-bold text-emerald-400">
                      ${profileData.monthlyIncome.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <Target size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Financial Goals
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">What do you want to achieve? (Select all)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] animate-[slideInRight_0.5s_ease-out] ${
                      profileData.goals.includes(goal)
                        ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm'
                    }`}
                    style={{ animationDelay: `${0.4 + index * 0.05}s`, animationFillMode: 'both' }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                        profileData.goals.includes(goal)
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-white/30'
                      }`}>
                        {profileData.goals.includes(goal) && (
                          <svg className="w-4 h-4 text-white animate-[scaleIn_0.3s_ease-out]" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium text-white">{goal}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <DollarSign size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Current Finances
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Help us understand your situation</p>
              </div>

              <div className="space-y-6">
                <div className="animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Total Savings
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                    <input
                      type="number"
                      value={profileData.savings}
                      onChange={(e) => setProfileData({ ...profileData, savings: e.target.value })}
                      placeholder="8,500"
                      className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.5s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Monthly Expenses (estimate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                    <input
                      type="number"
                      value={profileData.monthlyExpenses}
                      onChange={(e) => setProfileData({ ...profileData, monthlyExpenses: e.target.value })}
                      placeholder="2,400"
                      className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.6s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Debts (if any)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
                    <input
                      type="number"
                      value={profileData.debts}
                      onChange={(e) => setProfileData({ ...profileData, debts: e.target.value })}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Preferences
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Customize your experience</p>
              </div>

              <div className="space-y-6">
                <div className="animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Risk Tolerance (for investments)
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'conservative', label: 'Conservative', desc: 'Low risk, stable returns' },
                      { value: 'moderate', label: 'Moderate', desc: 'Balanced risk/reward' },
                      { value: 'aggressive', label: 'Aggressive', desc: 'High risk, high potential' }
                    ].map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => setProfileData({ ...profileData, riskTolerance: option.value })}
                        className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-300 hover:scale-[1.02] ${
                          profileData.riskTolerance === option.value
                            ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                            : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm'
                        }`}
                        style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                      >
                        <div className="font-semibold text-white text-lg">{option.label}</div>
                        <div className="text-sm text-gray-400 mt-1">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.6s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Currency
                  </label>
                  <select
                    value={profileData.currency}
                    onChange={(e) => setProfileData({ ...profileData, currency: e.target.value })}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  >
                    <option value="USD" className="bg-gray-900">USD ($)</option>
                    <option value="EUR" className="bg-gray-900">EUR (€)</option>
                    <option value="GBP" className="bg-gray-900">GBP (£)</option>
                    <option value="INR" className="bg-gray-900">INR (₹)</option>
                  </select>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.7s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Budget Period
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Monthly', 'Bi-weekly', 'Weekly'].map((period, index) => (
                      <button
                        key={period}
                        onClick={() => setProfileData({ ...profileData, budgetPeriod: period.toLowerCase() })}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                          profileData.budgetPeriod === period.toLowerCase()
                            ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/20'
                            : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm'
                        }`}
                        style={{ animationDelay: `${0.75 + index * 0.05}s` }}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex space-x-4 mt-8 animate-[slideUp_0.6s_ease-out_0.8s_both]">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-medium hover:scale-[1.02] active:scale-95 backdrop-blur-sm"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              {step === 4 ? 'Continue' : 'Next'}
            </button>
          </div>
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
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
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

export default FinancialProfilePage;