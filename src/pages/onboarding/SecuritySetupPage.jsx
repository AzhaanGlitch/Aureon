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
    <div className="min-h-screen relative py-8 px-4">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/common-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Step {step} of 3</span>
            <span className="text-sm text-gray-200">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-200">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Key size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Setup PIN
                </h1>
                <p className="text-gray-600">Create a 6-digit PIN for quick access</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Enter PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.pin}
                    onChange={(e) => setSecurityData({ ...securityData, pin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Confirm PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.confirmPin}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                {securityData.pin && securityData.confirmPin && securityData.pin === securityData.confirmPin && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
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
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Two-Factor Authentication
                </h1>
                <p className="text-gray-600">Choose your preferred verification method</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'email' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all ${
                    securityData.twoFactorMethod === 'email'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Mail size={28} className="text-blue-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">Email OTP</h3>
                      <p className="text-sm text-gray-600">Receive codes via email</p>
                    </div>
                    {securityData.twoFactorMethod === 'email' && (
                      <CheckCircle size={28} className="text-blue-600" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'sms' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all ${
                    securityData.twoFactorMethod === 'sms'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Smartphone size={28} className="text-purple-600" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">SMS OTP</h3>
                      <p className="text-sm text-gray-600">Receive codes via text message</p>
                    </div>
                    {securityData.twoFactorMethod === 'sms' && (
                      <CheckCircle size={28} className="text-blue-600" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Data Encryption
                </h1>
                <p className="text-gray-600">Create a master passphrase</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                <p className="text-sm text-amber-800 font-medium mb-2">Important:</p>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• This encrypts ALL your financial data</li>
                  <li>• Cannot be recovered if forgotten</li>
                  <li>• Known ONLY to you</li>
                  <li>• Never stored on our servers</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Master Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.passphrase}
                    onChange={(e) => setSecurityData({ ...securityData, passphrase: e.target.value })}
                    placeholder="Enter a strong passphrase"
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all ${
                          securityData.passphrase.length < 8 ? 'bg-red-500' :
                          securityData.passphrase.length < 12 ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((securityData.passphrase.length / 16) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 min-w-[60px]">
                      {securityData.passphrase.length < 8 ? 'Weak' :
                       securityData.passphrase.length < 12 ? 'Medium' : 'Strong'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Confirm Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.confirmPassphrase}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassphrase: e.target.value })}
                    placeholder="Re-enter passphrase"
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
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
                className="flex-1 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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