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
        return 'bg-emerald-500/10 border-emerald-500/30';
      case 'warning':
        return 'bg-orange-500/10 border-orange-500/30';
      case 'suggestion':
        return 'bg-blue-500/10 border-blue-500/30';
      case 'pattern':
        return 'bg-purple-500/10 border-purple-500/30';
      default:
        return 'bg-white/5 border-white/10';
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">AI Daily Insights</h2>
          <span className="text-sm text-gray-400">Good morning, Azhaan!</span>
        </div>

        <div className="space-y-4">
          {AI_INSIGHTS.map((insight) => (
            <div
              key={insight.id}
              className={`p-4 rounded-xl border backdrop-blur-sm hover:bg-white/5 transition-all duration-300 ${getBackgroundColor(insight.type)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getIcon(insight.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{insight.title}</h3>
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
                      {insight.options.map((option, index) => (
                        <div key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="mr-2">•</span>
                          <span>{option}</span>
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