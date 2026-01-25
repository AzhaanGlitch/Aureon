// src/components/goals/GoalCard.jsx
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import GoalDetails from './GoalDetails';

const GoalCard = ({ goal, onViewDetails }) => {
  const percentage = (goal.current / goal.target) * 100;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ahead': return <TrendingUp size={20} className="text-green-600" />;
      case 'behind': return <TrendingDown size={20} className="text-red-600" />;
      default: return <Minus size={20} className="text-blue-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ahead': return 'bg-green-50 text-green-700';
      case 'behind': return 'bg-red-50 text-red-700';
      default: return 'bg-blue-50 text-blue-700';
    }
  };

  const getStatusText = (goal) => {
    if (goal.status === 'ahead') return `Ahead by ${goal.aheadBy}%`;
    if (goal.status === 'behind') return `Behind by $${goal.behindBy}`;
    return 'On Track';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{goal.name}</h2>
        <span className="text-3xl">
          {goal.name.includes('House') ? '🏠' :
           goal.name.includes('Vacation') ? '🏝️' :
           goal.name.includes('Wedding') ? '💍' : '🎯'}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">{percentage.toFixed(0)}%</span>
          <span className="font-medium text-gray-800">
            ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${
              goal.status === 'ahead' ? 'bg-green-500' :
              goal.status === 'behind' ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Details Section */}
      <GoalDetails goal={goal} />

      {/* Status Badge */}
      <div className={`flex items-center space-x-2 p-3 rounded-lg mt-4 mb-4 ${getStatusColor(goal.status)}`}>
        {getStatusIcon(goal.status)}
        <span className="font-medium">
          {getStatusText(goal)}
        </span>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button 
          onClick={() => onViewDetails && onViewDetails(goal)}
          className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
        >
          View Details
        </button>
        <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
          Add Money
        </button>
      </div>
    </div>
  );
};

export default GoalCard;