// src/components/dashboard/FinancialSnapshot.jsx
import React from 'react';
import { TrendingUp, Wallet, CreditCard, Target } from 'lucide-react';
import { DUMMY_USER } from '../../data/dummyData';

const FinancialSnapshot = () => {
  const stats = [
    {
      icon: Wallet,
      label: 'Cash Available',
      value: `$${DUMMY_USER.cashAvailable.toLocaleString()}`,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      label: 'Invested',
      value: `$${DUMMY_USER.invested.toLocaleString()}`,
      color: 'green',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: CreditCard,
      label: 'Credit Used',
      value: `$${DUMMY_USER.creditUsed}/$${DUMMY_USER.creditLimit.toLocaleString()}`,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      label: 'Savings Goal',
      value: `${DUMMY_USER.savingsGoalProgress}% complete`,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="mb-8">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
        <h2 className="text-lg font-semibold text-white mb-4">Financial Snapshot</h2>
        
        {/* Net Worth Card */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 rounded-2xl p-6 text-white mb-6 shadow-2xl border border-emerald-400/20 hover:shadow-emerald-500/30 transition-all duration-300">
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
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-10 h-10 rounded-lg ${getColorClasses(stat.color)} border flex items-center justify-center mb-3`}>
                  <Icon size={20} />
                </div>
                <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                <div className="text-sm font-semibold text-white">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FinancialSnapshot;