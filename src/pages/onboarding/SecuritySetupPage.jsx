// src/pages/onboarding/SecuritySetupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Key, Lock, Mail, Smartphone, CheckCircle } from 'lucide-react';

const SecuritySetupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [securityData, setSecurityData] = useState({
    pin: '',
    confirmPin: '',
    twoFactorMethod: 'email',
    passphrase: '',
    confirmPassphrase: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/onboarding/profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
            <span className="text-sm text-gray-600">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key size={28} className="text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Setup PIN</h1>
                <p className="text-gray-600">Create a 6-digit PIN for quick access</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.pin}
                    onChange={(e) => setSecurityData({ ...securityData, pin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.confirmPin}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {securityData.pin && securityData.confirmPin && securityData.pin === securityData.confirmPin && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">PIN matched!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={28} className="text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Two-Factor Authentication</h1>
                <p className="text-gray-600">Choose your preferred verification method</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'email' })}
                  className={`w-full p-6 border-2 rounded-lg text-left transition ${
                    securityData.twoFactorMethod === 'email'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Mail size={24} className="text-blue-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Email OTP</h3>
                      <p className="text-sm text-gray-600">Receive codes via email</p>
                    </div>
                    {securityData.twoFactorMethod === 'email' && (
                      <CheckCircle size={24} className="text-blue-600" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'sms' })}
                  className={`w-full p-6 border-2 rounded-lg text-left transition ${
                    securityData.twoFactorMethod === 'sms'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Smartphone size={24} className="text-green-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">SMS OTP</h3>
                      <p className="text-sm text-gray-600">Receive codes via text message</p>
                    </div>
                    {securityData.twoFactorMethod === 'sms' && (
                      <CheckCircle size={24} className="text-blue-600" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock size={28} className="text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Encryption</h1>
                <p className="text-gray-600">Create a master passphrase</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800 font-medium mb-2">⚠️ Important:</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• This encrypts ALL your financial data</li>
                  <li>• Cannot be recovered if forgotten</li>
                  <li>• Known ONLY to you</li>
                  <li>• Never stored on our servers</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Master Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.passphrase}
                    onChange={(e) => setSecurityData({ ...securityData, passphrase: e.target.value })}
                    placeholder="Enter a strong passphrase"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          securityData.passphrase.length < 8 ? 'bg-red-500' :
                          securityData.passphrase.length < 12 ? 'bg-orange-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((securityData.passphrase.length / 16) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {securityData.passphrase.length < 8 ? 'Weak' :
                       securityData.passphrase.length < 12 ? 'Medium' : 'Strong'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.confirmPassphrase}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassphrase: e.target.value })}
                    placeholder="Re-enter passphrase"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-gray-700">
                    I understand I cannot recover this passphrase if forgotten
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {step === 3 ? 'Complete' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetupPage;