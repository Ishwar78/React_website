import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('User registered:', { username, email, password });
    
    
    navigate('/signin'); 
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
      
      
      <footer className="footer">
        <img src="/path/to/footer-image.png" alt="Footer" className="footer-image" />
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
