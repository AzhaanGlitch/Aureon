// src/components/transactions/TransactionList.jsx
import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onViewAll }) => {
  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionItem 
          key={transaction.id} 
          transaction={transaction} 
        />
      ))}

      {onViewAll && (
        <button 
          onClick={onViewAll}
          className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition"
        >
          View All {transactions.length} Transactions
        </button>
      )}
    </div>
  );
};

export default TransactionList;