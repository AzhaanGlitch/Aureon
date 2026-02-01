// src/pages/GoalsPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import { DUMMY_USER, DUMMY_GOALS } from '../data/dummyData';
import { Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GoalsPage = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'ahead':
        return <TrendingUp size={20} className="text-emerald-400" />;
      case 'behind':
        return <TrendingDown size={20} className="text-red-400" />;
      default:
        return <Minus size={20} className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/dashboard-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="relative z-10">
        <Header user={DUMMY_USER} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-white">
              Financial Goals
            </h1>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 border border-emerald-400/20 hover:scale-105">
              <Plus size={20} />
              <span className="font-medium">Create New Goal</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUMMY_GOALS.map((goal) => {
              const percentage = (goal.current / goal.target) * 100;
              
              return (
                <div key={goal.id} className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 hover:shadow-emerald-500/20 transition-all duration-300 border border-white/10 hover:border-emerald-500/30 group">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{goal.name}</h2>
                    <span className="text-4xl transform group-hover:scale-110 transition-transform">
                      {goal.name.includes('House') ? '🏠' :
                       goal.name.includes('Vacation') ? '🏝️' : '💍'}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-emerald-400 font-semibold">{percentage.toFixed(0)}%</span>
                      <span className="font-medium text-gray-300">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-4 border border-white/10 relative overflow-hidden">
                      <div
                        className={`h-4 rounded-full ${
                          goal.status === 'ahead' ? 'bg-gradient-to-r from-emerald-500 to-teal-600' :
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
                    <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <span className="text-gray-300">Remaining</span>
                      <span className="font-medium text-white">${goal.remaining.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <span className="text-gray-300">Deadline</span>
                      <span className="font-medium text-white">{goal.deadline}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <span className="text-gray-300">Time Left</span>
                      <span className="font-medium text-white">{goal.timeLeft}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <span className="text-gray-300">Monthly Target</span>
                      <span className="font-medium text-white">${goal.monthlyTarget}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <span className="text-gray-300">Current Pace</span>
                      <span className="font-medium text-white">${goal.currentPace}/mo</span>
                    </div>

                    <div className={`flex items-center space-x-2 p-3 rounded-lg border ${
                      goal.status === 'ahead' ? 'bg-emerald-500/10 border-emerald-500/30' :
                      goal.status === 'behind' ? 'bg-red-500/10 border-red-500/30' : 
                      'bg-blue-500/10 border-blue-500/30'
                    }`}>
                      {getStatusIcon(goal.status)}
                      <span className={`font-medium ${
                        goal.status === 'ahead' ? 'text-emerald-400' :
                        goal.status === 'behind' ? 'text-red-400' : 'text-blue-400'
                      }`}>
                        {goal.status === 'ahead' && `Ahead by ${goal.aheadBy}%`}
                        {goal.status === 'behind' && `Behind by $${goal.behindBy}`}
                        {goal.status === 'on-track' && 'On Track'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 py-3 px-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 text-sm font-medium backdrop-blur-sm">
                      View Details
                    </button>
                    <button className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 text-sm font-medium border border-emerald-400/20">
                      Add Money
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Create New Goal Card */}
          <div className="mt-6 border-2 border-dashed border-white/20 rounded-2xl p-12 text-center hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 cursor-pointer backdrop-blur-xl group bg-black/20">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform">
              <Plus size={40} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">Create a New Goal</h3>
            <p className="text-gray-300 mb-6">Set a new financial target and start saving</p>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 font-medium border border-emerald-400/20 hover:scale-105">
              Get Started
            </button>
          </div>
        </main>
      </div>

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