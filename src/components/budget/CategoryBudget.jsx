// src/components/budget/CategoryBudget.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CategoryBudget = ({ categories }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Category Breakdown</h2>
      
      <div className="space-y-6">
        {categories.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          const isWarning = percentage > 70;
          const isDanger = percentage > 90;
          
          return (
            <div key={category.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.transactions} transactions</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    ${category.spent} / ${category.budget}
                  </p>
                  <p className="text-sm text-gray-500">${category.remaining} left</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${
                    isDanger ? 'bg-red-500' : isWarning ? 'bg-orange-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className={`font-medium ${
                  isDanger ? 'text-red-600' : isWarning ? 'text-orange-600' : 'text-green-600'
                }`}>
                  {percentage.toFixed(0)}% used
                </span>
                <span className="text-gray-600">Status: {category.status}</span>
              </div>
              
              {category.warning && (
                <div className="mt-3 flex items-start space-x-2 p-2 bg-orange-50 rounded">
                  <AlertTriangle size={16} className="text-orange-600 mt-0.5" />
                  <p className="text-sm text-orange-700">{category.warning}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBudget;