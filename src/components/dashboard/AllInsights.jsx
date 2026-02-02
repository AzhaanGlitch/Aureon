// src/components/dashboard/AIInsights.jsx
import React from 'react';
import { CheckCircle, AlertCircle, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import { AI_INSIGHTS } from '../../data/dummyData';

const AIInsights = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-emerald-400" size={20} />;
      case 'warning':
        return <AlertCircle className="text-orange-400" size={20} />;
      case 'suggestion':
        return <Lightbulb className="text-blue-400" size={20} />;
      case 'pattern':
        return <TrendingUp className="text-purple-400" size={20} />;
      default:
        return <Lightbulb className="text-gray-400" size={20} />;
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-black/20';
      case 'warning':
        return 'bg-black/20';
      case 'suggestion':
        return 'bg-black/20';
      case 'pattern':
        return 'bg-black/20';
      default:
        return 'bg-black/20';
    }
  };

  return (
    <div className="h-full">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">AI Daily Insights</h2>
          <span className="text-sm text-gray-400">Good morning, Azhaan!</span>
        </div>

        <div className="space-y-3 overflow-y-auto flex-1">
          {AI_INSIGHTS.slice(0, 3).map((insight) => (
            <div
              key={insight.id}
              className={`p-3 sm:p-4 rounded-xl border backdrop-blur-sm hover:bg-white/5 transition-all duration-300 ${getBackgroundColor(insight.type)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getIcon(insight.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{insight.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{insight.message}</p>
                  
                  {insight.savings && (
                    <div className="text-sm font-medium text-emerald-400">
                      Savings so far: ${insight.savings}
                    </div>
                  )}
                  
                  {insight.detail && (
                    <div className="text-sm text-gray-400 mt-1">{insight.detail}</div>
                  )}
                  
                  {insight.options && (
                    <div className="mt-3 space-y-2">
                      {insight.options.slice(0, 2).map((option, index) => (
                        <div key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="mr-2">•</span>
                          <span className="line-clamp-1">{option}</span>
                        </div>
                      ))}
                      <button className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors duration-300">
                        View Options <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {insight.suggestion && (
                    <button className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center transition-colors duration-300">
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