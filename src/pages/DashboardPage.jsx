// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2">
            Welcome back, {DUMMY_USER.name.split(' ')[0]}!
          </h1>
          <p className="text-green-200/60 mt-1">Last login: {DUMMY_USER.lastLogin}</p>
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

      {/* Floating Add Button with glow effect */}
      <button
        onClick={() => setShowAddTransaction(true)}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 z-40 border border-green-400/20"
        style={{
          boxShadow: '0 0 40px rgba(34, 197, 94, 0.4), 0 0 80px rgba(16, 185, 129, 0.2)'
        }}
      >
        <Plus size={28} />
      </button>

      <BottomNav />

      {/* Add Transaction Modal */}
      {showAddTransaction && (
        <AddTransactionModal onClose={() => setShowAddTransaction(false)} />
      )}

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