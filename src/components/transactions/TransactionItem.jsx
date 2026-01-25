// src/components/transactions/TransactionItem.jsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const TransactionItem = ({ transaction, onClick }) => {
  const getCategoryIcon = (categoryKey) => {
    const icons = {
      dining: '🍔',
      coffee: '☕',
      groceries: '🛒',
      transportation: '⛽',
      entertainment: '🎬',
      income: '💰',
      housing: '🏠',
      shopping: '🛍️',
      healthcare: '🏥',
      education: '📚'
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
    <div
      onClick={() => onClick && onClick(transaction)}
      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer"
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
            {transaction.amount > 0 ? '+' : ''}
            {transaction.amount < 0 ? '-' : ''}$
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
  );
};

export default TransactionItem;