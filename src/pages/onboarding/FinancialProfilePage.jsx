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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 4</span>
            <span className="text-sm text-gray-600">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={28} className="text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Basic Information</h1>
                <p className="text-gray-600">Tell us about yourself</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    placeholder="28"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Employed', 'Self-employed', 'Student', 'Other'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setProfileData({ ...profileData, employment: status })}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition ${
                          profileData.employment === status
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Income (approximate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="100"
                      value={profileData.monthlyIncome}
                      onChange={(e) => setProfileData({ ...profileData, monthlyIncome: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-gray-800">
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={28} className="text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Financial Goals</h1>
                <p className="text-gray-600">What do you want to achieve? (Select all)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-4 rounded-lg border-2 text-left transition ${
                      profileData.goals.includes(goal)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        profileData.goals.includes(goal)
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {profileData.goals.includes(goal) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{goal}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={28} className="text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Current Finances</h1>
                <p className="text-gray-600">Help us understand your situation</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Savings
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={profileData.savings}
                      onChange={(e) => setProfileData({ ...profileData, savings: e.target.value })}
                      placeholder="8,500"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Expenses (estimate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={profileData.monthlyExpenses}
                      onChange={(e) => setProfileData({ ...profileData, monthlyExpenses: e.target.value })}
                      placeholder="2,400"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Debts (if any)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={profileData.debts}
                      onChange={(e) => setProfileData({ ...profileData, debts: e.target.value })}
                      placeholder="0"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={28} className="text-orange-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Preferences</h1>
                <p className="text-gray-600">Customize your experience</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
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
                        className={`w-full p-4 rounded-lg border-2 text-left transition ${
                          profileData.riskTolerance === option.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    value={profileData.currency}
                    onChange={(e) => setProfileData({ ...profileData, currency: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="INR">INR (₹)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Period
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Monthly', 'Bi-weekly', 'Weekly'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setProfileData({ ...profileData, budgetPeriod: period.toLowerCase() })}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition ${
                          profileData.budgetPeriod === period.toLowerCase()
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
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
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {step === 4 ? 'Continue' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProfilePage;