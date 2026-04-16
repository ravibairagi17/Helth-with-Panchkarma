import React, { useEffect, useState } from 'react';

const cardStyle = {
  width: '100%',
  maxWidth: '460px',
  background: '#fff',
  borderRadius: '20px',
  boxShadow: '0 14px 40px rgba(108, 72, 255, 0.12)',
  padding: '32px',
  textAlign: 'left',
};

const inputStyle = {
  width: '100%',
  marginTop: '8px',
  padding: '12px 14px',
  border: '1px solid #d8d5e8',
  borderRadius: '10px',
  boxSizing: 'border-box',
  fontSize: '1rem',
};

export default function LoginPage({ mode = 'login', onAuthenticate }) {
  const [activeMode, setActiveMode] = useState(mode);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setActiveMode(mode);
    setMessage('');
  }, [mode]);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((current) => ({
      ...current,
      [name]: value,
    }));
    setMessage('');
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData((current) => ({
      ...current,
      [name]: value,
    }));
    setMessage('');
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      setMessage('Please enter both email and password.');
      return;
    }

    onAuthenticate({
      email: loginData.email,
      name: loginData.email.split('@')[0] || 'User',
    });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (!signupData.name || !signupData.email || !signupData.password) {
      setMessage('Please complete all signup fields.');
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    onAuthenticate({
      email: signupData.email,
      name: signupData.name,
    });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        background: 'linear-gradient(180deg, #f8f5ff 0%, #ffffff 100%)',
      }}
    >
      <div style={cardStyle}>
        <p style={{ color: '#6C48FF', fontWeight: 700, marginTop: 0, marginBottom: '8px' }}>
          AyurSutra
        </p>
        <h1 style={{ color: '#5A3AFF', margin: '0 0 10px', fontSize: '2.2rem' }}>
          {activeMode === 'login' ? 'Login' : 'Signup'}
        </h1>
        <p style={{ color: '#555', marginTop: 0, marginBottom: '24px' }}>
          {activeMode === 'login'
            ? 'Sign in first to view therapies, centers, bookings, and your dashboard.'
            : 'Create your account first, then continue to the wellness platform.'}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '22px',
            background: '#f5f2ff',
            padding: '6px',
            borderRadius: '14px',
          }}
        >
          <button
            type="button"
            onClick={() => {
              setActiveMode('login');
              setMessage('');
            }}
            style={{
              background: activeMode === 'login' ? '#6C48FF' : 'transparent',
              color: activeMode === 'login' ? '#fff' : '#5A3AFF',
              border: 'none',
              borderRadius: '10px',
              padding: '12px',
              fontWeight: 600,
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode('signup');
              setMessage('');
            }}
            style={{
              background: activeMode === 'signup' ? '#6C48FF' : 'transparent',
              color: activeMode === 'signup' ? '#fff' : '#5A3AFF',
              border: 'none',
              borderRadius: '10px',
              padding: '12px',
              fontWeight: 600,
            }}
          >
            Signup
          </button>
        </div>

        {activeMode === 'login' ? (
          <form onSubmit={handleLoginSubmit} style={{ display: 'grid', gap: '16px' }}>
            <label style={{ fontWeight: 600, color: '#333' }}>
              Email Address
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                style={inputStyle}
              />
            </label>

            <label style={{ fontWeight: 600, color: '#333' }}>
              Password
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                style={inputStyle}
              />
            </label>

            <button
              type="submit"
              style={{
                background: '#6C48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} style={{ display: 'grid', gap: '16px' }}>
            <label style={{ fontWeight: 600, color: '#333' }}>
              Full Name
              <input
                type="text"
                name="name"
                value={signupData.name}
                onChange={handleSignupChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                style={inputStyle}
              />
            </label>

            <label style={{ fontWeight: 600, color: '#333' }}>
              Email Address
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                placeholder="Create your email"
                autoComplete="email"
                required
                style={inputStyle}
              />
            </label>

            <label style={{ fontWeight: 600, color: '#333' }}>
              Password
              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                placeholder="Create a password"
                autoComplete="new-password"
                required
                style={inputStyle}
              />
            </label>

            <label style={{ fontWeight: 600, color: '#333' }}>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
                style={inputStyle}
              />
            </label>

            <button
              type="submit"
              style={{
                background: '#6C48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Create Account
            </button>
          </form>
        )}

        <p style={{ marginTop: '16px', color: '#666', fontSize: '0.95rem' }}>
          Demo mode: any valid entries will unlock the app.
        </p>

        {message ? (
          <p
            role="status"
            style={{
              marginTop: '18px',
              padding: '12px 14px',
              borderRadius: '10px',
              background: '#f1edff',
              color: '#4f3cbf',
              fontWeight: 600,
            }}
          >
            {message}
          </p>
        ) : null}
      </div>
    </section>
  );
}
