import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TherapyList from './TherapyList';
import CenterList from './CenterList';
import BookingForm from './BookingForm';
import UserDashboard from './UserDashboard';
import ChatAssistant from './ChatAssistant';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/therapies" element={<TherapyList />} />
          <Route path="/centers" element={<CenterList />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </main>
      <ChatAssistant />
    </>
  );
}

export default App;
