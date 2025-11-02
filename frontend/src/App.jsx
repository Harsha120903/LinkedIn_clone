import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import api from './utils/api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadUser = async () => {
    // Check if token exists before making API call
    const token = localStorage.getItem('token');
    
    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }

    try {
      const res = await api.get('/users/me');
      setUser(res.data.user);
    } catch (error) {
      // If token is invalid, remove it
      console.log('Authentication failed - clearing token');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    loadUser(); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  // Show loading state
  if (loading) {
    return (
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="card">
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/login" element={<Login onLogin={loadUser} />} />
          <Route path="/signup" element={<Signup onSignup={loadUser} />} />
          <Route path="*" element={
            <div className="card">
              <h3>Page not found</h3>
              <Link to="/">Go home</Link>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;