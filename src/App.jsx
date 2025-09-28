// src/App.jsx
import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard'; // Este caminho está correto, pois App.jsx está no mesmo nível de components

import './index.css';

const App = () => {
  const [appState, setAppState] = useState(null);

  const handleLoginSuccess = () => {
    setAppState('loggedIn');
  };

  const handleRegisterSuccess = () => {
    setAppState(null);
  };

  const handleLogout = () => {
    setAppState(null);
  };

  if (appState === 'loggedIn') {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (appState === 'register') {
    return <Register onNavigateToLogin={() => setAppState(null)} onRegisterSuccess={handleRegisterSuccess} />;
  }

  return <Login onLogin={() => setAppState('loggedIn')} onNavigateToRegister={() => setAppState('register')} />;
};

export default App;