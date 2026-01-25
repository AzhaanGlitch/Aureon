// src/components/budget/BudgetOptimizer.jsx
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const BudgetOptimizer = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Budget Optimizer</h2>
      <p className="text-gray-600 mb-4">I've analyzed your spending patterns</p>
      
      <div className="space-y-4">
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Transportation Budget Adjustment</h3>
              <p className="text-sm text-gray-700 mb-2">
                You consistently exceed this by 20-30%. Suggested: Increase to $260/month
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Apply Suggestion →
              </button>
            </div>
          </div>
        </div>

        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingDown size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Dining Out Pattern Detected</h3>
              <p className="text-sm text-gray-700 mb-2">
                You spend 3x more on weekends vs weekdays. Suggestion: Set weekend dining limit to $70/week
              </p>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                Create Split Budget →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOptimizer;