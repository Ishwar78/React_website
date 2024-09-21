import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('User signed in:', { email, password });

    
    navigate('/');
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2>Welcome Back!</h2>
        <p>Please enter your credentials to sign in to your account.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Sign In</button>
            <br />
            <br />
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
          <div className="signin-links">
            <p>
              <a href="#">Forgot Password?</a>
            </p>
            <p>
              Don't have an account? <a href="/register">Create a New Account</a>
            </p>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="signin-footer">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default SignIn;
