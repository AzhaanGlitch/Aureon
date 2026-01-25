// src/components/goals/GoalOptimizer.jsx
import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';

const GoalOptimizer = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="text-yellow-500" size={24} />
        <h2 className="text-lg font-semibold text-gray-800">Smart Goal Insights</h2>
      </div>
      
      <div className="space-y-4">
        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">House Down Payment Alert</h3>
              <p className="text-sm text-gray-700 mb-2">
                You are currently $1,200 behind schedule. To catch up by December 2026, consider increasing your monthly contribution by $110.
              </p>
              <button className="text-sm text-yellow-700 hover:text-yellow-800 font-medium underline">
                Adjust Monthly Target
              </button>
            </div>
          </div>
        </div>

        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp size={16} className="text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Vacation Fund Surplus</h3>
              <p className="text-sm text-gray-700">
                You're 8% ahead on your Vacation goal! You could redirect $50/month to your House Down Payment to help get it back on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalOptimizer;