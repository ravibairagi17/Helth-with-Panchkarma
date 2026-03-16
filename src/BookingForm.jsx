import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Appointment booked on ${date} at ${time}`);
  };

  return (
    <section id="booking" style={{ padding: '32px 20px', maxWidth: '360px', margin: 'auto' }}>
      <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#F9F8FF', padding: '24px', borderRadius: '16px' }}>
        <h2 style={{ color: '#6C48FF', marginBottom: '16px' }}>Book Appointment</h2>
        <label>Date:
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
            style={{ padding: '8px', marginTop: '6px', borderRadius: '6px', border: '1px solid #ccc' }} 
          />
        </label>
        <label>Time:
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
            style={{ padding: '8px', marginTop: '6px', borderRadius: '6px', border: '1px solid #ccc' }} 
          />
        </label>
        <button type="submit" style={{ background: '#7F3CF2', color: '#fff', padding: '10px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
          Book Now
        </button>
      </form>
    </section>
  );
}
