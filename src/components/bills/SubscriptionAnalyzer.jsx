// src/components/bills/SubscriptionAnalyzer.jsx
import React from 'react';
import { XCircle } from 'lucide-react';

const SubscriptionAnalyzer = ({ subscriptions }) => {
  const unusedSubscriptions = subscriptions.filter(sub => sub.status === 'unused');
  const potentialSavings = unusedSubscriptions.reduce((sum, sub) => sum + sub.potentialSaving, 0);

  return (
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
        {subscriptions.map((subscription) => {
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
  );
};

export default SubscriptionAnalyzer;