// src/components/dashboard/UpcomingBills.jsx
import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { DUMMY_BILLS } from '../../data/dummyData';

const UpcomingBills = () => {
  const totalDue = DUMMY_BILLS.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="h-full">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Upcoming Bills</h2>
          <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center transition-colors duration-300">
            Manage Bills <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="mb-4 p-3 sm:p-4 bg-blue-500/10 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/15 transition-all duration-300">
          <p className="text-sm text-gray-300 mb-1">Total due in next 7 days</p>
          <p className="text-xl sm:text-2xl font-bold text-white">${totalDue.toFixed(2)}</p>
        </div>

        <div className="space-y-3 overflow-y-auto flex-1">
          {DUMMY_BILLS.slice(0, 4).map((bill) => (
            <div
              key={bill.id}
              className="flex items-center justify-between p-3 border border-white/10 rounded-xl hover:bg-white/5 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                  <span className="text-lg sm:text-xl">
                    {bill.category === 'Subscriptions' ? '🎬' :
                     bill.category === 'Utilities' ? '💡' :
                     bill.category === 'Housing' ? '🏠' : '📄'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white text-sm sm:text-base truncate">{bill.name}</p>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 flex-wrap">
                    <span>{bill.dueDate}</span>
                    {bill.predicted && <span className="text-xs bg-white/10 px-2 py-0.5 rounded border border-white/20">Predicted</span>}
                    {bill.autoPay && (
                      <div className="flex items-center space-x-1 text-emerald-400">
                        <CheckCircle size={14} />
                        <span className="text-xs hidden sm:inline">Auto-pay</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-right ml-2">
                <p className="font-semibold text-white text-sm sm:text-base">${bill.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-400">{bill.daysUntil} days</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBills;