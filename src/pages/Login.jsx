import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/AuthService';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authService.login(formData);
      localStorage.setItem('token', token); // Store the token in local storage
      navigate('/dashboard'); // Navigate to '/dashboard' after successful login
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login failed:', error);
    }
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="signup-message">
        <p>Don't have an account? <button onClick={handleSignupClick}>Sign up here</button></p>
      </div>
    </div>
  );
};

export default Login;
