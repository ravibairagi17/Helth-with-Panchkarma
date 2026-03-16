import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', maxWidth: '720px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '18px', color: '#5A3AFF' }}>
        Embark on Your Personalized Wellness Journey
      </h1>
      <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.6 }}>
        Share your symptoms or health concerns, and our AI will guide you to the best Panchakarma therapy tailored to your needs.
      </p>
      <section style={{ 
        marginTop: '36px', padding: '24px', background: '#F9F8FF', 
        borderRadius: '16px', boxShadow: '0 2px 16px #EEE', textAlign: 'left' 
      }}>
        <h2 style={{ color: '#6C48FF', marginBottom: '16px' }}>What is Panchakarma?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <ul style={{ flex: 1, minWidth: '200px', margin: 0, paddingLeft: '16px', fontSize: '1rem', color: '#333' }}>
            <li>Vamana - Therapeutic vomiting</li>
            <li>Virechana - Purgation therapy</li>
            <li>Basti - Medicated enema</li>
            <li>Nasya - Nasal administration</li>
            <li>Raktamokshana - Bloodletting</li>
          </ul>
          <ul style={{ flex: 1, minWidth: '200px', margin: 0, paddingLeft: '16px', fontSize: '1rem', color: '#333' }}>
            <li>Deep detoxification</li>
            <li>Improved digestion</li>
            <li>Enhanced immunity</li>
            <li>Stress reduction</li>
            <li>Overall wellness</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

