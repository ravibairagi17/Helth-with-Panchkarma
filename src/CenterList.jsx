import React from 'react';
import { Link } from 'react-router-dom';

const centers = [
  { name: 'Ayurveda Wellness Center', city: 'New Delhi', contact: '011-2345-6789', price: '₹500', rating: 4.8 },
  { name: 'Holistic Healing Center', city: 'Mumbai', contact: '022-9876-5432', price: '₹750', rating: 4.6 },
  { name: 'Traditional Ayurveda Center', city: 'Bangalore', contact: '080-3456-7890', price: '₹400', rating: 4.9 },
];

export default function CenterList() {
  return (
    <section id="centers" style={{ padding: '32px 20px', maxWidth: '720px', margin: 'auto' }}>
      <h2 style={{ color: '#5A3AFF', marginBottom: '16px' }}>Available Centers</h2>
      {centers.map(({ name, city, contact, price, rating }, i) => (
        <div key={i} style={{ 
          border: '1px solid #EDEDED', borderRadius: '12px', padding: '18px', 
          marginBottom: '16px', background: '#F7F4FF',
        }}>
          <h3 style={{ color: '#5441D4' }}>{name} ({city})</h3>
          <p>Contact: {contact} | Consultation: {price} | Rating: {rating} ⭐</p>
        </div>
      ))}
    </section>
  );
}
