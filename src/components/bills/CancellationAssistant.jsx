// src/components/bills/CancellationAssistant.jsx
import React from 'react';
import { XCircle } from 'lucide-react';

const CancellationAssistant = ({ unusedSubscriptions }) => {
  if (!unusedSubscriptions || unusedSubscriptions.length === 0) return null;

  const potentialSavings = unusedSubscriptions.reduce((sum, sub) => sum + sub.potentialSaving, 0);

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <XCircle size={24} className="text-red-600 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-800 mb-2">Unused Subscriptions Detected</h3>
          <p className="text-sm text-red-700 mb-4">
            Cancel these to save ${potentialSavings}/year
          </p>
          <div className="flex flex-wrap gap-2">
            {unusedSubscriptions.map(sub => (
              <span key={sub.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {sub.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationAssistant;