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
  const navigate = useNavigate();

  const loadUser = async () => {
    try {
      const res = await api.get('/users/me');
      setUser(res.data.user);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => { loadUser(); }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

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
