// src/pages/BillsPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import { DUMMY_USER, DUMMY_BILLS, DUMMY_SUBSCRIPTIONS } from '../data/dummyData';
import { CheckCircle, AlertCircle, XCircle, Calendar } from 'lucide-react';

const BillsPage = () => {
  const totalDue = DUMMY_BILLS.reduce((sum, bill) => sum + bill.amount, 0);
  const unusedSubscriptions = DUMMY_SUBSCRIPTIONS.filter(sub => sub.status === 'unused');
  const potentialSavings = unusedSubscriptions.reduce((sum, sub) => sum + sub.potentialSaving, 0);

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
          <h1 className="text-4xl font-bold text-white mb-8">
            Bills & Subscriptions
          </h1>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-300">Total Due (Next 30 Days)</p>
                <Calendar size={24} className="text-emerald-400" />
              </div>
              <p className="text-4xl font-bold text-white">
                ${totalDue.toFixed(2)}
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-300">Active Subscriptions</p>
                <CheckCircle size={24} className="text-teal-400" />
              </div>
              <p className="text-4xl font-bold text-white">{DUMMY_SUBSCRIPTIONS.length}</p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-orange-300">Potential Savings</p>
                <AlertCircle size={24} className="text-orange-400" />
              </div>
              <p className="text-4xl font-bold text-orange-400">${potentialSavings}/year</p>
            </div>
          </div>

          {/* Upcoming Bills */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Upcoming Bills</h2>
            
            <div className="space-y-3">
              {DUMMY_BILLS.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <span className="text-3xl">
                        {bill.category === 'Subscriptions' ? '🎬' :
                         bill.category === 'Utilities' ? '💡' :
                         bill.category === 'Housing' ? '🏠' : '📄'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">{bill.name}</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <span>Due: {bill.dueDate}</span>
                        <span>•</span>
                        <span>{bill.daysUntil} days</span>
                        {bill.autoPay && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-400 flex items-center space-x-1">
                              <CheckCircle size={14} />
                              <span>Auto-pay</span>
                            </span>
                          </>
                        )}
                        {bill.predicted && (
                          <>
                            <span>•</span>
                            <span className="text-blue-400">Predicted</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">${bill.amount.toFixed(2)}</p>
                    {!bill.autoPay && (
                      <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                        Pay Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Analyzer */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Subscription Analyzer</h2>
            <p className="text-gray-300 mb-6">I found opportunities to save money!</p>

            {unusedSubscriptions.length > 0 && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 mb-6 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <XCircle size={28} className="text-red-400 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-300 mb-2 text-lg">Unused Subscriptions Detected</h3>
                    <p className="text-sm text-red-200">
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
                    className={`border-2 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 ${
                      isUnused ? 'border-red-500/40 bg-red-500/5 hover:bg-red-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-3">{subscription.name}</h3>
                        <div className="mt-2 space-y-2 text-sm">
                          <p className="text-gray-300">Amount: ${subscription.amount}/month</p>
                          <p className="text-gray-300">Renewal: {subscription.renewalDate}</p>
                          <p className="text-gray-300">Usage: {subscription.usage}</p>
                          {subscription.lastUsed && (
                            <p className="text-red-400 font-medium">Last used: {subscription.lastUsed}</p>
                          )}
                          {subscription.warning && (
                            <p className="text-orange-400 font-medium">{subscription.warning}</p>
                          )}
                        </div>
                        {isUnused && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-red-300 mb-3">
                              Potential saving: ${subscription.potentialSaving}/year
                            </p>
                            <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm font-medium border border-red-400/30">
                              Cancel Subscription
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end space-y-3 ml-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-xl ${
                                i < subscription.valueScore ? 'text-yellow-400' : 'text-gray-600'
                              }`}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          isUnused ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
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
      </div>
    </div>
  );
};

export default BillsPage;