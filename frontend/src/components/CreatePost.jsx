import React, { useState } from 'react';
import api from '../utils/api';

const CreatePost = ({ onPostCreated }) => {
  const [text, setText] = useState('');
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      if (!text.trim()) return setErr('Enter some text');
      await api.post('/posts', { text });
      setText('');
      onPostCreated && onPostCreated();
    } catch (error) {
      setErr(error.response?.data?.message || 'Could not create post');
    }
  };

  return (
    <div className="card">
      <h4>Create a post</h4>
      {err && <div style={{color:'red'}}>{err}</div>}
      <form onSubmit={submit}>
        <textarea className="input" rows="3" value={text} onChange={e => setText(e.target.value)} placeholder="What's happening?" />
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button className="btn btn-primary" type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
