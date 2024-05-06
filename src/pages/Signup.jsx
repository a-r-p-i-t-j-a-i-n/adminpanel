import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(formData);
      navigate('/login'); // Navigate to '/login' after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
