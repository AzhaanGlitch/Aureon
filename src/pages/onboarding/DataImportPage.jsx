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
      <div className="min-h-screen relative flex items-center justify-center p-4">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url("/common-bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center border border-gray-200 relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Success!
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
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
      <div className="min-h-screen relative flex items-center justify-center p-4">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url("/common-bg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center border border-gray-200 relative z-10">
          <Loader size={56} className="text-blue-600 animate-spin mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Your Files</h2>
          <p className="text-gray-600 mb-6">AI is analyzing your statements...</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-gray-700">Extracting transactions...</span>
              <CheckCircle size={18} className="text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-gray-700">Detecting categories...</span>
              <Loader size={18} className="text-blue-600 animate-spin" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-gray-500">Identifying patterns...</span>
              <span className="text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative py-8 px-4">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/common-bg.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            How would you like to add your financial data?
          </h1>
          <p className="text-xl text-gray-200">
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
                className={`relative p-8 rounded-2xl border-2 text-left transition-all hover:scale-105 ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-white/95 shadow-lg shadow-blue-500/30'
                    : 'border-gray-200 bg-white/90 backdrop-blur-sm hover:border-gray-300'
                }`}
              >
                {method.recommended && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    Recommended
                  </span>
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
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
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 animate-slide-in border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Bank Statements</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Upload your last 2-3 months of bank statements (PDF or CSV format)
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
              <Upload size={56} className="text-blue-600 mx-auto mb-4" />
              <p className="text-xl font-medium text-gray-900 mb-2">
                Drag & drop files here or click to browse
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Supported: PDF, CSV, Excel (.xlsx, .xls)
              </p>
              <button
                onClick={handleFileUpload}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium hover:scale-105"
              >
                Select Files
              </button>
            </div>

            <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-900 font-medium mb-2">🔒 Security Notice:</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Files encrypted during upload (TLS)</li>
                <li>• Processed on secure server</li>
                <li>• Original files deleted after processing</li>
                <li>• Extracted data encrypted with your passphrase</li>
              </ul>
            </div>
          </div>
        )}

        {selectedMethod === 'manual' && (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 animate-slide-in text-center border border-gray-200">
            <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect Choice!</h2>
            <p className="text-gray-600 mb-6 text-lg">
              You'll be able to add transactions manually from your dashboard.
            </p>
            <button
              onClick={handleComplete}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium hover:scale-105"
            >
              Continue to Dashboard
            </button>
          </div>
        )}

        {selectedMethod === 'spreadsheet' && (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 animate-slide-in border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spreadsheet Import</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Download our Excel template, fill in your data, and upload when ready
            </p>
            <div className="space-y-4">
              <button className="w-full py-4 px-6 border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-medium flex items-center justify-center space-x-2">
                <Table size={20} />
                <span>Download Excel Template</span>
              </button>
              <button
                onClick={handleFileUpload}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2"
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
              className="text-white hover:text-gray-300 font-medium transition-colors"
            >
              Skip for now - I'll add data later
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DataImportPage;