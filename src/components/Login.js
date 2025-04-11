import React, { useState } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ userInput, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Email or Username"
          value={userInput}
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <p className="auth-prompt">
          New user? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;