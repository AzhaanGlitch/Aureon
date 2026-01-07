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
        return <TrendingUp size={20} className="text-green-600" />;
      case 'behind':
        return <TrendingDown size={20} className="text-red-600" />;
      default:
        return <Minus size={20} className="text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Financial Goals</h1>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Plus size={20} />
            <span>Create New Goal</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_GOALS.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            
            return (
              <div key={goal.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{goal.name}</h2>
                  <span className="text-3xl">
                    {goal.name.includes('House') ? '🏠' :
                     goal.name.includes('Vacation') ? '🏝️' : '💍'}
                  </span>
                </div>

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

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Remaining</span>
                    <span className="font-medium text-gray-800">${goal.remaining.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Deadline</span>
                    <span className="font-medium text-gray-800">{goal.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Time Left</span>
                    <span className="font-medium text-gray-800">{goal.timeLeft}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Monthly Target</span>
                    <span className="font-medium text-gray-800">${goal.monthlyTarget}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Current Pace</span>
                    <span className="font-medium text-gray-800">${goal.currentPace}/mo</span>
                  </div>

                  <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                    goal.status === 'ahead' ? 'bg-green-50' :
                    goal.status === 'behind' ? 'bg-red-50' : 'bg-blue-50'
                  }`}>
                    {getStatusIcon(goal.status)}
                    <span className={`font-medium ${
                      goal.status === 'ahead' ? 'text-green-700' :
                      goal.status === 'behind' ? 'text-red-700' : 'text-blue-700'
                    }`}>
                      {goal.status === 'ahead' && `Ahead by ${goal.aheadBy}%`}
                      {goal.status === 'behind' && `Behind by $${goal.behindBy}`}
                      {goal.status === 'on-track' && 'On Track'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                    Add Money
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Create New Goal Card */}
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus size={32} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Create a New Goal</h3>
          <p className="text-gray-600 mb-4">Set a new financial target and start saving</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default GoalsPage;