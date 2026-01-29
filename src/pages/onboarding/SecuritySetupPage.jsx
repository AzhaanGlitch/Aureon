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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Step {step} of 3</span>
            <span className="text-sm text-green-200/60">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800/50 rounded-full h-3 border border-green-500/20">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{ width: `${(step / 3) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-green-500/20">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
                  <Key size={32} className="text-green-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Setup PIN
                </h1>
                <p className="text-green-200/60">Create a 6-digit PIN for quick access</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Enter PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.pin}
                    onChange={(e) => setSecurityData({ ...securityData, pin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Confirm PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.confirmPin}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                </div>

                {securityData.pin && securityData.confirmPin && securityData.pin === securityData.confirmPin && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-950/30 p-4 rounded-xl border border-green-500/30">
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
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/40">
                  <Shield size={32} className="text-purple-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Two-Factor Authentication
                </h1>
                <p className="text-green-200/60">Choose your preferred verification method</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'email' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all ${
                    securityData.twoFactorMethod === 'email'
                      ? 'border-green-500 bg-green-950/30'
                      : 'border-green-500/20 bg-gray-900/30 hover:border-green-500/40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Mail size={28} className="text-green-400" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">Email OTP</h3>
                      <p className="text-sm text-green-200/60">Receive codes via email</p>
                    </div>
                    {securityData.twoFactorMethod === 'email' && (
                      <CheckCircle size={28} className="text-green-400" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'sms' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all ${
                    securityData.twoFactorMethod === 'sms'
                      ? 'border-green-500 bg-green-950/30'
                      : 'border-green-500/20 bg-gray-900/30 hover:border-green-500/40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Smartphone size={28} className="text-emerald-400" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">SMS OTP</h3>
                      <p className="text-sm text-green-200/60">Receive codes via text message</p>
                    </div>
                    {securityData.twoFactorMethod === 'sms' && (
                      <CheckCircle size={28} className="text-green-400" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <Lock size={32} className="text-emerald-400" />
                </div>
                <h1 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-3">
                  Data Encryption
                </h1>
                <p className="text-green-200/60">Create a master passphrase</p>
              </div>

              <div className="bg-yellow-950/30 border border-yellow-500/30 rounded-xl p-5 mb-6">
                <p className="text-sm text-yellow-300 font-medium mb-2">Important:</p>
                <ul className="text-sm text-yellow-200/80 space-y-1">
                  <li>• This encrypts ALL your financial data</li>
                  <li>• Cannot be recovered if forgotten</li>
                  <li>• Known ONLY to you</li>
                  <li>• Never stored on our servers</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Master Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.passphrase}
                    onChange={(e) => setSecurityData({ ...securityData, passphrase: e.target.value })}
                    placeholder="Enter a strong passphrase"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-800/50 rounded-full h-2.5 border border-green-500/20">
                      <div
                        className={`h-2.5 rounded-full ${
                          securityData.passphrase.length < 8 ? 'bg-red-500' :
                          securityData.passphrase.length < 12 ? 'bg-orange-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((securityData.passphrase.length / 16) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-green-200/70 min-w-[60px]">
                      {securityData.passphrase.length < 8 ? 'Weak' :
                       securityData.passphrase.length < 12 ? 'Medium' : 'Strong'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Confirm Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.confirmPassphrase}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassphrase: e.target.value })}
                    placeholder="Re-enter passphrase"
                    className="w-full px-4 py-4 bg-gray-900/50 border border-green-500/30 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                </div>

                <div className="flex items-start space-x-3 bg-gray-900/30 p-4 rounded-xl border border-green-500/20">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-green-600 border-green-500/50 rounded focus:ring-green-500 bg-gray-900" />
                  <span className="text-sm text-green-200/80">
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
                className="flex-1 py-4 border border-green-500/30 text-white rounded-xl hover:bg-green-950/30 transition-all font-medium"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 border border-green-400/30 hover:scale-[1.02]"
            >
              {step === 3 ? 'Complete' : 'Continue'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default SecuritySetupPage;