import React, { useState } from 'react';

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const params = new URLSearchParams();
      params.append('username', form.username);
      params.append('password', form.password);
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', data.access_token);
        if (onLogin) onLogin(data.access_token);
      } else {
        setError(data.detail || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0b1220'  // page gray background
    }}>
      <div style={{
        backgroundColor: '#0b1220',
        padding: '2rem',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 0 10px rgba(234, 230, 230, 0.2)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ fontWeight: '500' }}>Full Name</label>
            <input
              type="text"
              name="username"
              placeholder="Your First Name"
              value={form.username}
              onChange={handleChange}
              required
              style={{
                width: '90%',
                padding: '10px',
                marginTop: '6px',
                border: 'none',
                borderRadius: '6px',
                outline: 'none'
              }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ fontWeight: '500' }}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose your password"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                width: '90%',
                padding: '10px',
                marginTop: '6px',
                border: 'none',
                borderRadius: '6px',
                outline: 'none'
              }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: '#4285f4',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            Login
          </button>
        </form>
        {message && <div style={{ color: 'green', marginTop: 10 }}>{message}</div>}
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </div>
    </div>
  );
}

export default Login;
