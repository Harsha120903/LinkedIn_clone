import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');

    try {
      const res = await api.post('/users/login', { email, password });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      onLogin && onLogin();

      navigate('/');
    } catch (error) {
      setErr(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="card">
      <h3>Login</h3>
      {err && <div style={{ color: 'red' }}>{err}</div>}
      <form onSubmit={submit}>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <Link to="/signup" style={{ alignSelf: 'center' }}>
            <button type="button" className='btn btn-primary'>SignUp</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
