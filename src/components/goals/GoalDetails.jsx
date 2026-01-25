// src/components/goals/GoalDetails.jsx
import React from 'react';

const GoalDetails = ({ goal }) => {
  const details = [
    { label: 'Remaining', value: `$${goal.remaining.toLocaleString()}` },
    { label: 'Deadline', value: goal.deadline },
    { label: 'Time Left', value: goal.timeLeft },
    { label: 'Monthly Target', value: `$${goal.monthlyTarget}` },
    { label: 'Current Pace', value: `$${goal.currentPace}/mo` }
  ];

  return (
    <div className="space-y-3">
      {details.map((item, index) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{item.label}</span>
          <span className="font-medium text-gray-800">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default GoalDetails;