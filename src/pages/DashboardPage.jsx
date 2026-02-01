// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import FinancialSnapshot from '../components/dashboard/FinancialSnapshot';
import AIInsights from '../components/dashboard/AllInsights';
import SpendingChart from '../components/dashboard/SpendingChart';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import UpcomingBills from '../components/dashboard/UpcomingBills';
import ActiveGoals from '../components/dashboard/ActiveGoals';
import AddTransactionModal from '../components/transactions/AddTransactionModal';
import { Plus } from 'lucide-react';
import { DUMMY_USER } from '../data/dummyData';

const DashboardPage = () => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

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
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, {DUMMY_USER.name.split(' ')[0]}!
            </h1>
            <p className="text-gray-300 mt-1">Last login: {DUMMY_USER.lastLogin}</p>
          </div>

          {/* Financial Snapshot */}
          <FinancialSnapshot />

          {/* AI Insights */}
          <AIInsights />

          {/* This Month Overview */}
          <SpendingChart />

          {/* Recent Transactions */}
          <RecentTransactions />

          {/* Upcoming Bills */}
          <UpcomingBills />

          {/* Active Goals */}
          <ActiveGoals />
        </main>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowAddTransaction(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 z-40 border border-emerald-400/20"
        >
          <Plus size={28} />
        </button>

        {/* Add Transaction Modal */}
        {showAddTransaction && (
          <AddTransactionModal onClose={() => setShowAddTransaction(false)} />
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;