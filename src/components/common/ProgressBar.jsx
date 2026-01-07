import React from 'react';

const ProgressBar = ({ 
  value, 
  max = 100, 
  label, 
  showPercentage = true,
  color = 'blue',
  size = 'medium',
  className = '' 
}) => {
  const percentage = (value / max) * 100;
  
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    orange: 'bg-orange-600',
    purple: 'bg-purple-600'
  };
  
  const sizes = {
    small: 'h-1',
    medium: 'h-2',
    large: 'h-3'
  };
  
  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && <span className="text-sm text-gray-600">{percentage.toFixed(0)}%</span>}
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full ${sizes[size]} overflow-hidden`}>
        <div
          className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;