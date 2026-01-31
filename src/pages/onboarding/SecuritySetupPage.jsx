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
        className="fixed inset-0 z-0 animate-[fadeIn_0.8s_ease-out]"
        style={{
          backgroundImage: 'url("/common-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Progress Bar */}
        <div className="mb-8 animate-[slideInDown_0.6s_ease-out]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Step {step} of 3</span>
            <span className="text-sm text-gray-300">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-500 shadow-lg shadow-emerald-500/50"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 animate-[slideUp_0.8s_ease-out]">
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <Key size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Setup PIN
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Create a 6-digit PIN for quick access</p>
              </div>

              <div className="space-y-6">
                <div className="animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Enter PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.pin}
                    onChange={(e) => setSecurityData({ ...securityData, pin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  />
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.5s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Confirm PIN
                  </label>
                  <input
                    type="password"
                    maxLength="6"
                    value={securityData.confirmPin}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPin: e.target.value })}
                    placeholder="••••••"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-center text-3xl tracking-widest focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  />
                </div>

                {securityData.pin && securityData.confirmPin && securityData.pin === securityData.confirmPin && (
                  <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 animate-[scaleIn_0.5s_ease-out]">
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
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <Shield size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Two-Factor Authentication
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Choose your preferred verification method</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'email' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all duration-300 animate-[slideInRight_0.6s_ease-out_0.4s_both] hover:scale-[1.02] ${
                    securityData.twoFactorMethod === 'email'
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                      : 'border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Mail size={28} className="text-emerald-400" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">Email OTP</h3>
                      <p className="text-sm text-gray-400">Receive codes via email</p>
                    </div>
                    {securityData.twoFactorMethod === 'email' && (
                      <CheckCircle size={28} className="text-emerald-400 animate-[scaleIn_0.3s_ease-out]" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setSecurityData({ ...securityData, twoFactorMethod: 'sms' })}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all duration-300 animate-[slideInRight_0.6s_ease-out_0.5s_both] hover:scale-[1.02] ${
                    securityData.twoFactorMethod === 'sms'
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
                      : 'border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Smartphone size={28} className="text-teal-400" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">SMS OTP</h3>
                      <p className="text-sm text-gray-400">Receive codes via text message</p>
                    </div>
                    {securityData.twoFactorMethod === 'sms' && (
                      <CheckCircle size={28} className="text-emerald-400 animate-[scaleIn_0.3s_ease-out]" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-[scaleIn_0.6s_ease-out] hover:scale-110 transition-transform duration-300">
                  <Lock size={32} className="text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-3 animate-[fadeInDown_0.8s_ease-out_0.2s_both]">
                  Data Encryption
                </h1>
                <p className="text-gray-400 animate-[fadeInDown_0.8s_ease-out_0.3s_both]">Create a master passphrase</p>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-6 backdrop-blur-sm animate-[slideInRight_0.6s_ease-out_0.4s_both]">
                <p className="text-sm text-amber-300 font-medium mb-2">Important:</p>
                <ul className="text-sm text-amber-200 space-y-1">
                  <li>• This encrypts ALL your financial data</li>
                  <li>• Cannot be recovered if forgotten</li>
                  <li>• Known ONLY to you</li>
                  <li>• Never stored on our servers</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="animate-[slideInRight_0.6s_ease-out_0.5s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Master Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.passphrase}
                    onChange={(e) => setSecurityData({ ...securityData, passphrase: e.target.value })}
                    placeholder="Enter a strong passphrase"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  />
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2.5 backdrop-blur-sm">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          securityData.passphrase.length < 8 ? 'bg-red-500' :
                          securityData.passphrase.length < 12 ? 'bg-amber-500' :
                          'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min((securityData.passphrase.length / 16) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 min-w-[60px]">
                      {securityData.passphrase.length < 8 ? 'Weak' :
                       securityData.passphrase.length < 12 ? 'Medium' : 'Strong'}
                    </span>
                  </div>
                </div>

                <div className="animate-[slideInRight_0.6s_ease-out_0.6s_both]">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Confirm Passphrase
                  </label>
                  <input
                    type="password"
                    value={securityData.confirmPassphrase}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassphrase: e.target.value })}
                    placeholder="Re-enter passphrase"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/10 focus:scale-[1.02]"
                  />
                </div>

                <div className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm animate-[slideInRight_0.6s_ease-out_0.7s_both] hover:bg-white/10 transition-all duration-300">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-emerald-500 border-gray-600 rounded focus:ring-emerald-500 bg-white/5 cursor-pointer transition-all duration-300" />
                  <span className="text-sm text-gray-300">
                    I understand I cannot recover this passphrase if forgotten
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8 animate-[slideUp_0.6s_ease-out_0.8s_both]">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-medium hover:scale-[1.02] active:scale-95 backdrop-blur-sm"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              {step === 3 ? 'Complete' : 'Continue'}
            </button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SecuritySetupPage;