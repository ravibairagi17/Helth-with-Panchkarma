import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatAssistant() {
  return (
    <div style={{
      position: 'fixed', bottom: '20px', right: '20px', width: '320px',
      background: '#F9F8FF', borderRadius: '20px', padding: '24px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)', fontSize: '0.9rem', color: '#444'
    }}>
      <div style={{ marginBottom: '14px', fontWeight: '600', color: '#6C48FF' }}>
        AI Therapy Assistant
      </div>
      <ul style={{ paddingLeft: '16px', margin: 0 }}>
        <li>Avoid heavy meals</li>
        <li>Maintain regular sleep schedule</li>
        <li>Stay hydrated</li>
      </ul>
    </div>
  );
}
