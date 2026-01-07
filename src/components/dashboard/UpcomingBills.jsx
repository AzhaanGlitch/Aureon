// src/components/dashboard/UpcomingBills.jsx
import React from 'react';
import { ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { DUMMY_BILLS } from '../../data/dummyData';

const UpcomingBills = () => {
  const totalDue = DUMMY_BILLS.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Bills</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
            Manage Bills <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total due in next 7 days</p>
          <p className="text-2xl font-bold text-gray-800">${totalDue.toFixed(2)}</p>
        </div>

        <div className="space-y-3">
          {DUMMY_BILLS.slice(0, 4).map((bill) => (
            <div
              key={bill.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">
                    {bill.category === 'Subscriptions' ? '🎬' :
                     bill.category === 'Utilities' ? '💡' :
                     bill.category === 'Housing' ? '🏠' : '📄'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{bill.name}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{bill.dueDate}</span>
                    {bill.predicted && <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">Predicted</span>}
                    {bill.autoPay && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle size={14} />
                        <span className="text-xs">Auto-pay</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-gray-800">${bill.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{bill.daysUntil} days</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;