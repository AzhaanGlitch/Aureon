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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Step {step} of 4</span>
            <span className="text-sm text-green-200/60">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-3 border border-green-500/20">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{ width: `₹{(step / 4) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-500/20">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                  <User size={32} className="text-green-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Basic Information
                </h1>
                <p className="text-green-200/60">Tell us about yourself</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">Age</label>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    placeholder="28"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">Employment Status</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Employed', 'Self-employed', 'Student', 'Other'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setProfileData({ ...profileData, employment: status })}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ₹{
                          profileData.employment === status
                            ? 'border-green-500 bg-green-950/40 text-white'
                            : 'border-green-500/20 bg-gray-900/30 text-green-200/70 hover:border-green-500/40'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Monthly Income (approximate)
                  </label>
                  <div className="bg-gray-900/30 rounded-xl p-6 border border-green-500/20">
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="100"
                      value={profileData.monthlyIncome}
                      onChange={(e) => setProfileData({ ...profileData, monthlyIncome: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                    <div className="text-center mt-4 text-4xl font-bold bg-white bg-clip-text text-transparent">
                      ₹{profileData.monthlyIncome.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <Target size={32} className="text-emerald-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Financial Goals
                </h1>
                <p className="text-green-200/60">What do you want to achieve? (Select all)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-5 rounded-xl border-2 text-left transition-all ₹{
                      profileData.goals.includes(goal)
                        ? 'border-green-500 bg-green-950/40'
                        : 'border-green-500/20 bg-gray-900/30 hover:border-green-500/40'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ₹{
                        profileData.goals.includes(goal)
                          ? 'bg-green-500 border-green-500'
                          : 'border-green-500/40'
                      }`}>
                        {profileData.goals.includes(goal) && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 12 12">
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
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/40">
                  <DollarSign size={32} className="text-purple-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Current Finances
                </h1>
                <p className="text-green-200/60">Help us understand your situation</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Total Savings
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 text-lg">₹</span>
                    <input
                      type="number"
                      value={profileData.savings}
                      onChange={(e) => setProfileData({ ...profileData, savings: e.target.value })}
                      placeholder="8,500"
                      className="w-full pl-10 pr-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Monthly Expenses (estimate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 text-lg">₹</span>
                    <input
                      type="number"
                      value={profileData.monthlyExpenses}
                      onChange={(e) => setProfileData({ ...profileData, monthlyExpenses: e.target.value })}
                      placeholder="2,400"
                      className="w-full pl-10 pr-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Debts (if any)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 text-lg">₹</span>
                    <input
                      type="number"
                      value={profileData.debts}
                      onChange={(e) => setProfileData({ ...profileData, debts: e.target.value })}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/40">
                  <TrendingUp size={32} className="text-orange-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Preferences
                </h1>
                <p className="text-green-200/60">Customize your experience</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-4">
                    Risk Tolerance (for investments)
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'conservative', label: 'Conservative', desc: 'Low risk, stable returns' },
                      { value: 'moderate', label: 'Moderate', desc: 'Balanced risk/reward' },
                      { value: 'aggressive', label: 'Aggressive', desc: 'High risk, high potential' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setProfileData({ ...profileData, riskTolerance: option.value })}
                        className={`w-full p-5 rounded-xl border-2 text-left transition-all ₹{
                          profileData.riskTolerance === option.value
                            ? 'border-green-500 bg-green-950/40'
                            : 'border-green-500/20 bg-gray-900/30 hover:border-green-500/40'
                        }`}
                      >
                        <div className="font-semibold text-white text-lg">{option.label}</div>
                        <div className="text-sm text-green-200/70 mt-1">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Currency
                  </label>
                  <select
                    value={profileData.currency}
                    onChange={(e) => setProfileData({ ...profileData, currency: e.target.value })}
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  >
                    <option value="USD">USD (₹)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Budget Period
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Monthly', 'Bi-weekly', 'Weekly'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setProfileData({ ...profileData, budgetPeriod: period.toLowerCase() })}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all ₹{
                          profileData.budgetPeriod === period.toLowerCase()
                            ? 'border-green-500 bg-green-950/40 text-white'
                            : 'border-green-500/20 bg-gray-900/30 text-green-200/70 hover:border-green-500/40'
                        }`}
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
          <div className="flex space-x-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 border border-green-500/30 text-white rounded-xl hover:bg-green-950/30 transition-all font-medium"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 border border-green-400/30 hover:scale-[1.02]"
            >
              {step === 4 ? 'Continue' : 'Next'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FinancialProfilePage;