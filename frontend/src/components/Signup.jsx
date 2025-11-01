import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/users/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      onSignup && onSignup();
      navigate('/');
    } catch (error) {
      setErr(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="card">
      <h3>Signup</h3>
      {err && <div style={{color:'red'}}>{err}</div>}
      <form onSubmit={submit}>
        <input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
        <input className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button className="btn" type="submit">Create account</button>
      </form>
    </div>
  );
};

export default Signup;
