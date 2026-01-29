// src/pages/GoalsPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
import { DUMMY_USER, DUMMY_GOALS } from '../data/dummyData';
import { Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GoalsPage = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'ahead':
        return <TrendingUp size={20} className="text-green-400" />;
      case 'behind':
        return <TrendingDown size={20} className="text-red-400" />;
      default:
        return <Minus size={20} className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Financial Goals
          </h1>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 border border-green-400/20 hover:scale-105">
            <Plus size={20} />
            <span className="font-medium">Create New Goal</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_GOALS.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            
            return (
              <div key={goal.id} className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-6 hover:shadow-green-500/20 transition-all duration-300 border border-green-500/20 hover:border-green-500/40 group">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">{goal.name}</h2>
                  <span className="text-4xl transform group-hover:scale-110 transition-transform">
                    {goal.name.includes('House') ? '🏠' :
                     goal.name.includes('Vacation') ? '🏝️' : '💍'}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-green-400 font-semibold">{percentage.toFixed(0)}%</span>
                    <span className="font-medium text-green-200">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-4 border border-green-500/20 relative overflow-hidden">
                    <div
                      className={`h-4 rounded-full ${
                        goal.status === 'ahead' ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
                        goal.status === 'behind' ? 'bg-gradient-to-r from-red-500 to-orange-400' :
                        'bg-gradient-to-r from-blue-500 to-cyan-400'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm bg-gray-900/50 rounded-lg p-3 border border-green-500/10">
                    <span className="text-green-300/70">Remaining</span>
                    <span className="font-medium text-white">${goal.remaining.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-gray-900/50 rounded-lg p-3 border border-green-500/10">
                    <span className="text-green-300/70">Deadline</span>
                    <span className="font-medium text-white">{goal.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-gray-900/50 rounded-lg p-3 border border-green-500/10">
                    <span className="text-green-300/70">Time Left</span>
                    <span className="font-medium text-white">{goal.timeLeft}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-gray-900/50 rounded-lg p-3 border border-green-500/10">
                    <span className="text-green-300/70">Monthly Target</span>
                    <span className="font-medium text-white">${goal.monthlyTarget}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-gray-900/50 rounded-lg p-3 border border-green-500/10">
                    <span className="text-green-300/70">Current Pace</span>
                    <span className="font-medium text-white">${goal.currentPace}/mo</span>
                  </div>

                  <div className={`flex items-center space-x-2 p-3 rounded-lg border ${
                    goal.status === 'ahead' ? 'bg-green-950/40 border-green-500/30' :
                    goal.status === 'behind' ? 'bg-red-950/40 border-red-500/30' : 
                    'bg-blue-950/40 border-blue-500/30'
                  }`}>
                    {getStatusIcon(goal.status)}
                    <span className={`font-medium ${
                      goal.status === 'ahead' ? 'text-green-400' :
                      goal.status === 'behind' ? 'text-red-400' : 'text-blue-400'
                    }`}>
                      {goal.status === 'ahead' && `Ahead by ${goal.aheadBy}%`}
                      {goal.status === 'behind' && `Behind by $${goal.behindBy}`}
                      {goal.status === 'on-track' && 'On Track'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 py-3 px-4 border border-green-500/30 text-green-300 rounded-xl hover:bg-green-950/30 transition-all duration-300 text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-sm font-medium border border-green-400/20">
                    Add Money
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Create New Goal Card */}
        <div className="mt-6 border-2 border-dashed border-green-500/30 rounded-2xl p-12 text-center hover:border-green-500/60 hover:bg-green-950/20 transition-all duration-300 cursor-pointer backdrop-blur-sm group">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30 group-hover:scale-110 transition-transform">
            <Plus size={40} className="text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">Create a New Goal</h3>
          <p className="text-green-200/60 mb-6">Set a new financial target and start saving</p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-medium border border-green-400/20 hover:scale-105">
            Get Started
          </button>
        </div>
      </main>

      <BottomNav />

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default GoalsPage;