// src/components/dashboard/AIInsights.jsx
import React from 'react';
import { CheckCircle, AlertCircle, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import { AI_INSIGHTS } from '../../data/dummyData';

const AIInsights = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'warning':
        return <AlertCircle className="text-orange-600" size={20} />;
      case 'suggestion':
        return <Lightbulb className="text-blue-600" size={20} />;
      case 'pattern':
        return <TrendingUp className="text-purple-600" size={20} />;
      default:
        return <Lightbulb className="text-gray-600" size={20} />;
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'suggestion':
        return 'bg-blue-50 border-blue-200';
      case 'pattern':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">AI Daily Insights</h2>
          <span className="text-sm text-gray-500">Good morning, Emma!</span>
        </div>

        <div className="space-y-4">
          {AI_INSIGHTS.map((insight) => (
            <div
              key={insight.id}
              className={`p-4 rounded-lg border ${getBackgroundColor(insight.type)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getIcon(insight.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{insight.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">{insight.message}</p>
                  
                  {insight.savings && (
                    <div className="text-sm font-medium text-green-700">
                      Savings so far: ${insight.savings}
                    </div>
                  )}
                  
                  {insight.detail && (
                    <div className="text-sm text-gray-600 mt-1">{insight.detail}</div>
                  )}
                  
                  {insight.options && (
                    <div className="mt-3 space-y-2">
                      {insight.options.map((option, index) => (
                        <div key={index} className="text-sm text-gray-700 flex items-center">
                          <span className="mr-2">•</span>
                          <span>{option}</span>
                        </div>
                      ))}
                      <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        View Options <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {insight.suggestion && (
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      {insight.suggestion} <ChevronRight size={16} className="ml-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;