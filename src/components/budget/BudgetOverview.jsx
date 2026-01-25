// src/components/budget/BudgetOverview.jsx
import React from 'react';

const BudgetOverview = ({ budget }) => {
  const percentageUsed = (budget.spent / budget.total) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">January 2026 Budget</h2>
      
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Budget</p>
          <p className="text-2xl font-bold text-gray-800">${budget.total}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Spent</p>
          <p className="text-2xl font-bold text-red-600">${budget.spent.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Remaining</p>
          <p className="text-2xl font-bold text-green-600">${budget.remaining.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Daily Budget</p>
          <p className="text-2xl font-bold text-blue-600">${budget.dailyBudget}</p>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${Math.min(percentageUsed, 100)}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {percentageUsed.toFixed(1)}% of budget used • {budget.daysLeft} days left
      </p>
    </div>
  );
};

export default BudgetOverview;