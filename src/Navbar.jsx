import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <nav style={{ 
      background: '#fff', padding: '14px 30px',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', borderBottom: '1px solid #eee',
      position: 'sticky', top: 0, zIndex: 10
    }}>
      <div style={{ fontWeight: '600', color: '#5A3AFF', fontSize: '1.4rem' }}>AyurSutra</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ margin: '0 16px', color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Home</Link>
        <Link to="/therapies" style={{ margin: '0 16px', color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Therapies</Link>
        <Link to="/centers" style={{ margin: '0 16px', color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Centers</Link>
        <Link to="/booking" style={{ margin: '0 16px', color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Book Appointment</Link>
        <Link to="/dashboard" style={{ margin: '0 16px', color: '#333', textDecoration: 'none', fontSize: '1rem' }}>Dashboard</Link>
        <span style={{ marginLeft: '10px', color: '#6C48FF', fontWeight: 600 }}>
          {user?.name}
        </span>
        <button
          type="button"
          onClick={onLogout}
          style={{
            marginLeft: '16px',
            background: '#6C48FF',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 14px',
            fontSize: '0.95rem',
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
