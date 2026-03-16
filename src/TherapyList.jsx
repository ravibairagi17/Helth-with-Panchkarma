import React from 'react';
import { Link } from 'react-router-dom';

const therapies = [
  { name: 'Vamana', desc: 'Therapeutic vomiting', duration: '7-14 days', price: '₹15,000 – ₹25,000', category: 'Detoxification' },
  { name: 'Virechana', desc: 'Purgation therapy', duration: '5-10 days', price: '₹12,000 – ₹20,000', category: 'Detoxification' },
  { name: 'Basti', desc: 'Medicated enema', duration: '8-15 days', price: '₹18,000 – ₹30,000', category: 'Rejuvenation' },
  { name: 'Nasya', desc: 'Nasal administration', duration: '3-7 days', price: '₹8,000 – ₹15,000', category: 'Rejuvenation' },
  { name: 'Raktamokshana', desc: 'Bloodletting', duration: '5-10 days', price: '₹10,000 – ₹18,000', category: 'Detoxification' },
  { name: 'Abhyanga', desc: 'Oil Massage', duration: '1-3 days', price: '₹3,000 – ₹6,000', category: 'Rejuvenation' },
];

export default function TherapyList() {
  const [filter, setFilter] = React.useState('All Therapies');

  const filteredTherapies = filter === 'All Therapies' ? therapies : therapies.filter(t => t.category === filter);

  return (
    <section id="therapies" style={{ padding: '32px 20px', maxWidth: '960px', margin: 'auto' }}>
      <h2 style={{ color: '#5A3AFF', marginBottom: '16px' }}>Available Therapies</h2>
      <div style={{ marginBottom: '18px' }}>
        {['All Therapies', 'Detoxification', 'Rejuvenation'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{ 
              marginRight: '10px', padding: '6px 14px', borderRadius: '14px', border: '1px solid #7F3CF2',
              background: filter === cat ? '#7F3CF2' : '#fff', color: filter === cat ? '#fff' : '#7F3CF2',
              cursor: 'pointer', fontWeight: filter === cat ? '600' : '400'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {filteredTherapies.map(({ name, desc, duration, price }, i) => (
          <div key={i} style={{ 
            border: '1px solid #EDEDED', borderRadius: '12px', padding: '18px', 
            width: '280px', background: '#F7F4FF', cursor: 'default'
          }}>
            <h3 style={{ color: '#5441D4' }}>{name}</h3>
            <p>{desc}</p>
            <small>Duration: {duration}</small><br />
            <small>Price: {price}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
