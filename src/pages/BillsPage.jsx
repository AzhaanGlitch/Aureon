// src/pages/BillsPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';
import { DUMMY_USER, DUMMY_BILLS, DUMMY_SUBSCRIPTIONS } from '../data/dummyData';
import { CheckCircle, AlertCircle, XCircle, Calendar } from 'lucide-react';

const BillsPage = () => {
  const totalDue = DUMMY_BILLS.reduce((sum, bill) => sum + bill.amount, 0);
  const unusedSubscriptions = DUMMY_SUBSCRIPTIONS.filter(sub => sub.status === 'unused');
  const potentialSavings = unusedSubscriptions.reduce((sum, sub) => sum + sub.potentialSaving, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={DUMMY_USER} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Bills & Subscriptions</h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Due (Next 30 Days)</p>
              <Calendar size={20} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">${totalDue.toFixed(2)}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Active Subscriptions</p>
              <CheckCircle size={20} className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{DUMMY_SUBSCRIPTIONS.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Potential Savings</p>
              <AlertCircle size={20} className="text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">${potentialSavings}/year</p>
          </div>
        </div>

        {/* Upcoming Bills */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Bills</h2>
          
          <div className="space-y-3">
            {DUMMY_BILLS.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">
                      {bill.category === 'Subscriptions' ? '🎬' :
                       bill.category === 'Utilities' ? '💡' :
                       bill.category === 'Housing' ? '🏠' : '📄'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{bill.name}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span>Due: {bill.dueDate}</span>
                      <span>•</span>
                      <span>{bill.daysUntil} days</span>
                      {bill.autoPay && (
                        <>
                          <span>•</span>
                          <span className="text-green-600 flex items-center space-x-1">
                            <CheckCircle size={14} />
                            <span>Auto-pay</span>
                          </span>
                        </>
                      )}
                      {bill.predicted && (
                        <>
                          <span>•</span>
                          <span className="text-blue-600">Predicted</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-800">${bill.amount.toFixed(2)}</p>
                  {!bill.autoPay && (
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Analyzer */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Subscription Analyzer</h2>
          <p className="text-gray-600 mb-6">I found opportunities to save money!</p>

          {unusedSubscriptions.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <XCircle size={24} className="text-red-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800 mb-2">Unused Subscriptions Detected</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Cancel these to save ${potentialSavings}/year
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {DUMMY_SUBSCRIPTIONS.map((subscription) => {
              const isUnused = subscription.status === 'unused';
              
              return (
                <div
                  key={subscription.id}
                  className={`border-2 rounded-lg p-4 ${
                    isUnused ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{subscription.name}</h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <p className="text-gray-600">Amount: ${subscription.amount}/month</p>
                        <p className="text-gray-600">Renewal: {subscription.renewalDate}</p>
                        <p className="text-gray-600">Usage: {subscription.usage}</p>
                        {subscription.lastUsed && (
                          <p className="text-red-600 font-medium">Last used: {subscription.lastUsed}</p>
                        )}
                        {subscription.warning && (
                          <p className="text-orange-600 font-medium">{subscription.warning}</p>
                        )}
                      </div>
                      {isUnused && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold text-red-700">
                            Potential saving: ${subscription.potentialSaving}/year
                          </p>
                          <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium">
                            Cancel Subscription
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < subscription.valueScore ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        isUnused ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {subscription.status === 'active' ? 'Active' : 'Unused'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default BillsPage;