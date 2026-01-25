// src/components/chat/QuickSuggestions.jsx
import React from 'react';

const QuickSuggestions = ({ onSuggestionClick }) => {
  const suggestions = [
    "How much did I spend on food last month?",
    "Am I on track with my budget?",
    "When can I afford a new laptop?",
    "Show my biggest expenses"
  ];

  return (
    <div className="p-4 border-t border-gray-200">
      <p className="text-sm text-gray-600 mb-3">Quick suggestions:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left text-sm p-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSuggestions;