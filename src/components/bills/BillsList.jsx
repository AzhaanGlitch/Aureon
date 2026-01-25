// src/components/bills/BillsList.jsx
import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';

const BillsList = ({ bills, onAddBill }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Subscriptions': return '🎬';
      case 'Utilities': return '💡';
      case 'Housing': return '🏠';
      default: return '📄';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Bills</h2>
        <button 
          onClick={onAddBill}
          className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <Plus size={16} />
          <span>Add Bill</span>
        </button>
      </div>
      
      <div className="space-y-3">
        {bills.map((bill) => (
          <div key={bill.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition">
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{getCategoryIcon(bill.category)}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{bill.name}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span>Due: {bill.dueDate}</span>
                  <span>•</span>
                  <span>{bill.daysUntil} days</span>
                  {bill.autoPay && (
                    <>
                      <span>•</span>
                      <span className="text-green-600 flex items-center space-x-1">
                        <CheckCircle size={14} />
                        <span>Auto-pay</span>
                      </span>
                    </>
                  )}
                  {bill.predicted && (
                    <>
                      <span>•</span>
                      <span className="text-blue-600">Predicted</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-800">${bill.amount.toFixed(2)}</p>
              {!bill.autoPay && (
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsList;