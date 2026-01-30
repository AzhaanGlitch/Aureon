// src/components/dashboard/ActiveGoals.jsx
import React from 'react';
import { ChevronRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { DUMMY_GOALS } from '../../data/dummyData';

const ActiveGoals = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'ahead':
        return <TrendingUp size={16} className="text-green-600" />;
      case 'behind':
        return <TrendingDown size={16} className="text-red-600" />;
      default:
        return <Minus size={16} className="text-blue-600" />;
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
        return 'text-green-600 bg-green-50 border-green-200';
      case 'behind':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Active Goals</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View All <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {DUMMY_GOALS.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            return (
              <div
                key={goal.id}
                className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition cursor-pointer bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 text-sm">{goal.name}</h3>
                  <span className="text-2xl">
                    {goal.name.includes('House') ? '🏠' :
                     goal.name.includes('Vacation') ? '🏝️' :
                     goal.name.includes('Wedding') ? '💍' : '🎯'}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">{percentage.toFixed(0)}%</span>
                    <span className="text-gray-600">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        goal.status === 'ahead' ? 'bg-green-500' :
                        goal.status === 'behind' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Target</span>
                    <span className="font-medium text-gray-800">{goal.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Monthly</span>
                    <span className="font-medium text-gray-800">${goal.currentPace}/mo</span>
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

        <button className="w-full mt-4 py-3 text-sm text-blue-600 hover:text-blue-700 font-medium border-2 border-dashed border-blue-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition">
          + Create New Goal
        </button>
      </div>
    </div>
  );
};

export default ActiveGoals;