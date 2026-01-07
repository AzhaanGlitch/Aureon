// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
import FinancialSnapshot from '../components/dashboard/FinancialSnapshot';
import AIInsights from '../components/dashboard/AIInsights';
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
    <div className="min-h-screen bg-gray-50">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, {DUMMY_USER.name.split(' ')[0]}!
          </h1>
          <p className="text-gray-600 mt-1">Last login: {DUMMY_USER.lastLogin}</p>
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
        className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-40"
      >
        <Plus size={28} />
      </button>

      <BottomNav />

      {/* Add Transaction Modal */}
      {showAddTransaction && (
        <AddTransactionModal onClose={() => setShowAddTransaction(false)} />
      )}
    </div>
  );
};

export default DashboardPage;