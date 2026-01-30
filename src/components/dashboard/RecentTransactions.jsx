// src/components/dashboard/RecentTransactions.jsx
import React from 'react';
import { ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { DUMMY_TRANSACTIONS } from '../../data/dummyData';

const RecentTransactions = () => {
  const getCategoryIcon = (categoryKey) => {
    const icons = {
      dining: '🍔',
      coffee: '☕',
      groceries: '🛒',
      transportation: '⛽',
      entertainment: '🎬',
      income: '💰'
    };
    return icons[categoryKey] || '📝';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View All <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="space-y-3">
          {DUMMY_TRANSACTIONS.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer border border-gray-100"
            >
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                  {getCategoryIcon(transaction.categoryKey)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{transaction.merchant}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{formatDate(transaction.date)}</span>
                    {transaction.time && (
                      <>
                        <span>•</span>
                        <span>{transaction.time}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{transaction.category}</span>
                  </div>
                  {transaction.note && (
                    <p className="text-sm text-gray-600 mt-1">{transaction.note}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount < 0 ? '-' : ''}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">{transaction.paymentMethod}</p>
                </div>
                {transaction.amount > 0 ? (
                  <ArrowDownRight size={20} className="text-green-600" />
                ) : (
                  <ArrowUpRight size={20} className="text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition">
          View All {DUMMY_TRANSACTIONS.length} Transactions
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;