// src/pages/BudgetPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import { DUMMY_USER, DUMMY_BUDGET } from '../data/dummyData';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const BudgetPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/dashboard-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="relative z-10">
        <Header user={DUMMY_USER} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <h1 className="text-4xl font-bold text-white mb-8">
            Budget Management
          </h1>

          {/* Overall Budget Status */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">January 2026 Budget</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-gray-300 mb-1">Total Budget</p>
                <p className="text-2xl font-bold text-white">${DUMMY_BUDGET.total}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-red-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-red-300 mb-1">Spent</p>
                <p className="text-2xl font-bold text-red-400">${DUMMY_BUDGET.spent.toFixed(2)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-emerald-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-emerald-300 mb-1">Remaining</p>
                <p className="text-2xl font-bold text-emerald-400">${DUMMY_BUDGET.remaining.toFixed(2)}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-blue-500/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-blue-300 mb-1">Daily Budget</p>
                <p className="text-2xl font-bold text-blue-400">${DUMMY_BUDGET.dailyBudget}</p>
              </div>
            </div>

            <div className="w-full bg-white/10 rounded-full h-4 border border-white/10">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-4 rounded-full relative overflow-hidden"
                style={{ width: `${(DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-3">
              {((DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100).toFixed(1)}% of budget used • {DUMMY_BUDGET.daysLeft} days left
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-6">Category Breakdown</h2>
            
            <div className="space-y-6">
              {DUMMY_BUDGET.categories.map((category) => {
                const percentage = (category.spent / category.budget) * 100;
                const isWarning = percentage > 70;
                const isDanger = percentage > 90;
                
                return (
                  <div key={category.id} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                        <p className="text-sm text-gray-400">{category.transactions} transactions</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white text-lg">
                          ${category.spent} / ${category.budget}
                        </p>
                        <p className="text-sm text-gray-400">${category.remaining} left</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-3 mb-2 border border-white/10">
                      <div
                        className={`h-3 rounded-full ${
                          isDanger ? 'bg-gradient-to-r from-red-600 to-red-400' : 
                          isWarning ? 'bg-gradient-to-r from-orange-500 to-yellow-400' : 
                          'bg-gradient-to-r from-emerald-500 to-teal-600'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-medium ${
                        isDanger ? 'text-red-400' : isWarning ? 'text-orange-400' : 'text-emerald-400'
                      }`}>
                        {percentage.toFixed(0)}% used
                      </span>
                      <span className="text-gray-400">Status: {category.status}</span>
                    </div>
                    
                    {category.warning && (
                      <div className="mt-3 flex items-start space-x-2 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                        <AlertTriangle size={16} className="text-orange-400 mt-0.5" />
                        <p className="text-sm text-orange-300">{category.warning}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Budget Optimizer */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">AI Budget Optimizer</h2>
            <p className="text-gray-300 mb-6">I've analyzed your spending patterns</p>
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 backdrop-blur-sm hover:bg-blue-500/15 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Transportation Budget Adjustment</h3>
                    <p className="text-sm text-blue-200 mb-3">
                      You consistently exceed this by 20-30%. Suggested: Increase to $260/month
                    </p>
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                      Apply Suggestion →
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 backdrop-blur-sm hover:bg-emerald-500/15 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/50">
                    <TrendingDown size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">Dining Out Pattern Detected</h3>
                    <p className="text-sm text-emerald-200 mb-3">
                      You spend 3x more on weekends vs weekdays. Suggestion: Set weekend dining limit to $70/week
                    </p>
                    <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                      Create Split Budget →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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

export default BudgetPage;