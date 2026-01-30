// src/components/dashboard/SpendingChart.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { DUMMY_BUDGET } from '../../data/dummyData';

const SpendingChart = () => {
  const percentageSpent = (DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100;
  const isOverBudget = percentageSpent > 80;

  return (
    <div className="mb-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">This Month (Jan 1-5)</h2>
        
        {/* Progress Circle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                    {percentageSpent.toFixed(1)}% Used
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    ${DUMMY_BUDGET.spent.toFixed(2)} / ${DUMMY_BUDGET.total}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                <div
                  style={{ width: `${Math.min(percentageSpent, 100)}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                    isOverBudget ? 'bg-red-500' : 'bg-blue-500'
                  }`}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Remaining</p>
                <p className="text-xl font-bold text-gray-800">${DUMMY_BUDGET.remaining.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Daily Average</p>
                <p className="text-xl font-bold text-gray-800">${DUMMY_BUDGET.dailyBudget}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning if projected over budget */}
        {isOverBudget && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-orange-600 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-orange-800">Budget Warning</p>
                <p className="text-sm text-orange-700 mt-1">
                  Projected month total: $2,910 ($410 over budget)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Spending by Category */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-4">Spending by Category</h3>
          <div className="space-y-3">
            {DUMMY_BUDGET.categories.map((category) => {
              const percentage = (category.spent / category.budget) * 100;
              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-600">
                      ${category.spent} / ${category.budget}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        percentage > 90 ? 'bg-red-500' :
                        percentage > 70 ? 'bg-orange-500' :
                        'bg-green-500'
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
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Food spending is 40% above average!</span>
            <button className="text-yellow-700 hover:text-yellow-900 ml-2 underline">
              See Details
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;