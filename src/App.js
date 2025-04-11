// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const handleSignup = (userData) => {
    console.log('Signup data:', userData);
    // Firebase logic will go here
  };

  const handleLogin = (loginData) => {
    console.log('Login data:', loginData);
    // Firebase logic will go here
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>
    </Router>
  );
}

export default App;