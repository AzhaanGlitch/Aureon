// src/components/dashboard/FinancialSnapshot.jsx
import React from 'react';
import { TrendingUp, Wallet, TrendingDown, CreditCard, Target } from 'lucide-react';
import { DUMMY_USER } from '../../data/dummyData';

const FinancialSnapshot = () => {
  const stats = [
    {
      icon: Wallet,
      label: 'Cash Available',
      value: `$${DUMMY_USER.cashAvailable.toLocaleString()}`,
      color: 'blue'
    },
    {
      icon: TrendingUp,
      label: 'Invested',
      value: `$${DUMMY_USER.invested.toLocaleString()}`,
      color: 'green'
    },
    {
      icon: CreditCard,
      label: 'Credit Used',
      value: `$${DUMMY_USER.creditUsed}/$${DUMMY_USER.creditLimit.toLocaleString()}`,
      color: 'purple'
    },
    {
      icon: Target,
      label: 'Savings Goal',
      value: `${DUMMY_USER.savingsGoalProgress}% complete`,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Financial Snapshot</h2>
        
        {/* Net Worth Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-90">Net Worth</span>
            <TrendingUp size={20} />
          </div>
          <div className="text-4xl font-bold mb-2">
            ${DUMMY_USER.netWorth.toLocaleString()}
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <TrendingUp size={16} />
            <span>+$420 this month (3.98%)</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className={`w-10 h-10 rounded-lg ${getColorClasses(stat.color)} flex items-center justify-center mb-3`}>
                  <Icon size={20} />
                </div>
                <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FinancialSnapshot;