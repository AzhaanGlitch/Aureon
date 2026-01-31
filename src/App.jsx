// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/onboarding/LandingPage';
import SignUpPage from './pages/onboarding/SignUpPage';
import SecuritySetupPage from './pages/onboarding/SecuritySetupPage';
import FinancialProfilePage from './pages/onboarding/FinancialProfilePage';
import DataImportPage from './pages/onboarding/DataImportPage';
import LoginPage from './pages/auth/LoginPage';
import TwoFactorAuth from './pages/auth/TwoFactorAuth';
import DashboardPage from './pages/DashboardPage';
import BudgetPage from './pages/BudgetPage';
import GoalsPage from './pages/GoalsPage';
import BillsPage from './pages/BillsPage';
import ChatPage from './pages/ChatPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (!isOnboarded) {
      return <Navigate to="/onboarding" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* FIXED: Passed setIsOnboarded here */}
        <Route 
          path="/two-factor" 
          element={
            <TwoFactorAuth 
              setIsAuthenticated={setIsAuthenticated} 
              setIsOnboarded={setIsOnboarded} 
            />
          } 
        />
        
        {/* Onboarding Routes */}
        <Route path="/onboarding" element={<LandingPage />} />
        <Route path="/onboarding/signup" element={<SignUpPage />} />
        <Route path="/onboarding/security" element={<SecuritySetupPage />} />
        <Route path="/onboarding/profile" element={<FinancialProfilePage />} />
        <Route path="/onboarding/import" element={<DataImportPage setIsOnboarded={setIsOnboarded} />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/budget"
          element={
            <ProtectedRoute>
              <BudgetPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <GoalsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bills"
          element={
            <ProtectedRoute>
              <BillsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;