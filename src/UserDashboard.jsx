import React from 'react';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <section style={{ padding: '30px 20px', maxWidth: '720px', margin: 'auto' }}>
      <h2 style={{ color: '#5A3AFF', marginBottom: '20px' }}>Your Therapy Status</h2>
      <div style={{ background: '#F7F4FF', borderRadius: '14px', padding: '18px', fontSize: '1rem', color: '#333' }}>
        <p><b>Total Sessions:</b> 12</p>
        <p style={{ color: '#27B273' }}><b>Completed:</b> 8</p>
        <p style={{ color: '#6C5AE8' }}><b>In Progress:</b> 1</p>
        <p style={{ color: '#FFA534' }}><b>Upcoming:</b> 3</p>
        <p>Current Therapy Progress: <span style={{ fontWeight: '700', color: '#5441D4' }}>Vamana (60%)</span></p>
      </div>
    </section>
  );
}
