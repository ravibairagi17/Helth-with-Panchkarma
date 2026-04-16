import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TherapyList from './TherapyList';
import CenterList from './CenterList';
import BookingForm from './BookingForm';
import UserDashboard from './UserDashboard';
import ChatAssistant from './ChatAssistant';
import LoginPage from './LoginPage';

const AUTH_STORAGE_KEY = 'ayursutra-auth-user';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuthenticate = (nextUser) => {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    navigate('/');
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
    navigate('/login');
  };

  if (!user) {
    const authMode = location.pathname === '/signup' ? 'signup' : 'login';
    return <LoginPage mode={authMode} onAuthenticate={handleAuthenticate} />;
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <main style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/signup" element={<HomePage />} />
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
