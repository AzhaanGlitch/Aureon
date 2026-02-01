// src/components/dashboard/ActiveGoals.jsx
import React from 'react';
import { ChevronRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { DUMMY_GOALS } from '../../data/dummyData';

const ActiveGoals = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'ahead':
        return <TrendingUp size={16} className="text-emerald-400" />;
      case 'behind':
        return <TrendingDown size={16} className="text-red-400" />;
      default:
        return <Minus size={16} className="text-blue-400" />;
    }
  };

  const getStatusText = (goal) => {
    switch (goal.status) {
      case 'ahead':
        return `Ahead by ${goal.aheadBy}%`;
      case 'behind':
        return `Behind by $${goal.behindBy}`;
      default:
        return 'On track';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ahead':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'behind':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      default:
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Active Goals</h2>
          <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center transition-colors duration-300">
            View All <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {DUMMY_GOALS.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            return (
              <div
                key={goal.id}
                className="border border-white/10 rounded-xl p-4 hover:border-emerald-500/30 hover:bg-white/5 transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white text-sm">{goal.name}</h3>
                  <span className="text-2xl">
                    {goal.name.includes('House') ? '🏠' :
                     goal.name.includes('Vacation') ? '🏝️' :
                     goal.name.includes('Wedding') ? '💍' : '🎯'}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">{percentage.toFixed(0)}%</span>
                    <span className="text-gray-400">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        goal.status === 'ahead' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' :
                        goal.status === 'behind' ? 'bg-gradient-to-r from-red-500 to-orange-400' :
                        'bg-gradient-to-r from-blue-500 to-cyan-400'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Target</span>
                    <span className="font-medium text-white">{goal.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Monthly</span>
                    <span className="font-medium text-white">${goal.currentPace}/mo</span>
                  </div>
                  <div className={`flex items-center justify-between px-2 py-1 rounded border ${getStatusColor(goal.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(goal.status)}
                      <span className="font-medium text-xs">{getStatusText(goal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full mt-4 py-3 text-sm text-emerald-400 hover:text-emerald-300 font-medium border-2 border-dashed border-emerald-500/30 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 backdrop-blur-sm">
          + Create New Goal
        </button>
      </div>
    </div>
  );
};

export default ActiveGoals;