// src/components/dashboard/SpendingChart.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { DUMMY_BUDGET } from '../../data/dummyData';

const SpendingChart = () => {
  const percentageSpent = (DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100;
  const isOverBudget = percentageSpent > 80;

  return (
    <div className="mb-8">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
        <h2 className="text-lg font-semibold text-white mb-4">This Month (Jan 1-5)</h2>
        
        {/* Progress Circle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-400 bg-emerald-500/20 border border-emerald-500/30">
                    {percentageSpent.toFixed(1)}% Used
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-400">
                    ${DUMMY_BUDGET.spent.toFixed(2)} / ${DUMMY_BUDGET.total}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/10">
                <div
                  style={{ width: `${Math.min(percentageSpent, 100)}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                    isOverBudget ? 'bg-red-500' : 'bg-gradient-to-r from-emerald-500 to-teal-600'
                  }`}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-gray-400 mb-1">Remaining</p>
                <p className="text-xl font-bold text-white">${DUMMY_BUDGET.remaining.toFixed(2)}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-gray-400 mb-1">Daily Average</p>
                <p className="text-xl font-bold text-white">${DUMMY_BUDGET.dailyBudget}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning if projected over budget */}
        {isOverBudget && (
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4 backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-orange-400 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-orange-300">Budget Warning</p>
                <p className="text-sm text-orange-200 mt-1">
                  Projected month total: $2,910 ($410 over budget)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Spending by Category */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-white mb-4">Spending by Category</h3>
          <div className="space-y-3">
            {DUMMY_BUDGET.categories.map((category) => {
              const percentage = (category.spent / category.budget) * 100;
              return (
                <div key={category.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{category.name}</span>
                    <span className="text-sm text-gray-400">
                      ${category.spent} / ${category.budget}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        percentage > 90 ? 'bg-red-500' :
                        percentage > 70 ? 'bg-orange-500' :
                        'bg-gradient-to-r from-emerald-500 to-teal-600'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top spending alert */}
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-yellow-300">
            <span className="font-semibold">Food spending is 40% above average!</span>
            <button className="text-yellow-200 hover:text-yellow-100 ml-2 underline transition-colors duration-300">
              See Details
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;