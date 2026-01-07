// src/pages/BudgetPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
import { DUMMY_USER, DUMMY_BUDGET } from '../data/dummyData';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const BudgetPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Budget Management</h1>

        {/* Overall Budget Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">January 2026 Budget</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Budget</p>
              <p className="text-2xl font-bold text-gray-800">${DUMMY_BUDGET.total}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Spent</p>
              <p className="text-2xl font-bold text-red-600">${DUMMY_BUDGET.spent.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Remaining</p>
              <p className="text-2xl font-bold text-green-600">${DUMMY_BUDGET.remaining.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Daily Budget</p>
              <p className="text-2xl font-bold text-blue-600">${DUMMY_BUDGET.dailyBudget}</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${(DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {((DUMMY_BUDGET.spent / DUMMY_BUDGET.total) * 100).toFixed(1)}% of budget used • {DUMMY_BUDGET.daysLeft} days left
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Category Breakdown</h2>
          
          <div className="space-y-6">
            {DUMMY_BUDGET.categories.map((category) => {
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

        {/* Budget Optimizer */}
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
      </main>

      <BottomNav />
    </div>
  );
};

export default BudgetPage;