// src/pages/onboarding/DataImportPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Table, Calendar, CheckCircle, Loader } from 'lucide-react';

const DataImportPage = ({ setIsOnboarded }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const methods = [
    {
      id: 'manual',
      icon: Calendar,
      title: 'Manual Entry',
      description: 'Add transactions one by one',
      recommended: true
    },
    {
      id: 'upload',
      icon: Upload,
      title: 'Upload Bank Statements',
      description: 'Upload CSV or PDF files'
    },
    {
      id: 'spreadsheet',
      icon: Table,
      title: 'Spreadsheet Import',
      description: 'Use our Excel template'
    },
    {
      id: 'fresh',
      icon: FileText,
      title: 'Start Fresh',
      description: 'Begin tracking from today'
    }
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    if (method === 'fresh') {
      handleComplete();
    }
  };

  const handleFileUpload = () => {
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setUploadComplete(true);
      setTimeout(() => {
        handleComplete();
      }, 2000);
    }, 3000);
  };

  const handleComplete = () => {
    setIsOnboarded(true);
    navigate('/dashboard');
  };

  if (uploadComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Success!</h1>
          <p className="text-gray-600 mb-6">
            Your financial data is now secure and ready to analyze!
          </p>
          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <p>✓ 247 transactions extracted</p>
            <p>✓ 89% auto-categorized</p>
            <p>✓ 8 recurring bills detected</p>
          </div>
        </div>
      </div>
    );
  }

  if (uploading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <Loader size={48} className="text-blue-600 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Processing Your Files</h2>
          <p className="text-gray-600 mb-6">AI is analyzing your statements...</p>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>Extracting transactions...</span>
              <CheckCircle size={18} className="text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>Detecting categories...</span>
              <Loader size={18} className="text-blue-600 animate-spin" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span>Identifying patterns...</span>
              <span className="text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How would you like to add your financial data?
          </h1>
          <p className="text-lg text-gray-600">
            Choose the method that works best for you. You can use multiple methods anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => handleMethodSelect(method.id)}
                className={`relative p-8 rounded-xl border-2 text-left transition hover:shadow-lg ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-300 bg-white'
                }`}
              >
                {method.recommended && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Recommended
                  </span>
                )}
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
                {selectedMethod === method.id && (
                  <div className="mt-4 flex items-center space-x-2 text-blue-600">
                    <CheckCircle size={20} />
                    <span className="font-medium">Selected</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selectedMethod === 'upload' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Bank Statements</h2>
            <p className="text-gray-600 mb-6">
              Upload your last 2-3 months of bank statements (PDF or CSV format)
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer">
              <Upload size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Drag & drop files here or click to browse
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Supported: PDF, CSV, Excel (.xlsx, .xls)
              </p>
              <button
                onClick={handleFileUpload}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Select Files
              </button>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium">🔒 Security Notice:</p>
              <ul className="text-sm text-green-700 mt-2 space-y-1">
                <li>• Files encrypted during upload (TLS)</li>
                <li>• Processed on secure server</li>
                <li>• Original files deleted after processing</li>
                <li>• Extracted data encrypted with your passphrase</li>
              </ul>
            </div>
          </div>
        )}

        {selectedMethod === 'manual' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in text-center">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfect Choice!</h2>
            <p className="text-gray-600 mb-6">
              You'll be able to add transactions manually from your dashboard.
            </p>
            <button
              onClick={handleComplete}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Continue to Dashboard
            </button>
          </div>
        )}

        {selectedMethod === 'spreadsheet' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Spreadsheet Import</h2>
            <p className="text-gray-600 mb-6">
              Download our Excel template, fill in your data, and upload when ready
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium flex items-center justify-center space-x-2">
                <Table size={20} />
                <span>Download Excel Template</span>
              </button>
              <button
                onClick={handleFileUpload}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center space-x-2"
              >
                <Upload size={20} />
                <span>Upload Completed Template</span>
              </button>
            </div>
          </div>
        )}

        {!selectedMethod && (
          <div className="text-center">
            <button
              onClick={() => setSelectedMethod('fresh')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Skip for now - I'll add data later
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataImportPage;