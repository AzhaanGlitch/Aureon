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
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
          <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center transition-colors duration-300">
            View All <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="space-y-3">
          {DUMMY_TRANSACTIONS.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer border border-white/10 hover:border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/10">
                  {getCategoryIcon(transaction.categoryKey)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{transaction.merchant}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
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
                    <p className="text-sm text-gray-500 mt-1">{transaction.note}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount > 0 ? 'text-emerald-400' : 'text-white'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount < 0 ? '-' : ''}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400">{transaction.paymentMethod}</p>
                </div>
                {transaction.amount > 0 ? (
                  <ArrowDownRight size={20} className="text-emerald-400" />
                ) : (
                  <ArrowUpRight size={20} className="text-gray-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-2 text-sm text-gray-400 hover:text-white font-medium border border-white/10 rounded-xl hover:bg-white/5 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm">
          View All {DUMMY_TRANSACTIONS.length} Transactions
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;