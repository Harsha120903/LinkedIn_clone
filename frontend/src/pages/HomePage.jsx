import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

const HomePage = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const res = await api.get('/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPosts(); }, []);

  return (
    <div>
      {user ? <CreatePost onPostCreated={loadPosts} /> : (
        <div className="card">
          <h3>Welcome</h3>
          <p>Please <a href="/login"> <button className='btn btn-outline-primary'>login</button></a> or <a href="/signup"><button className='btn btn-outline-primary'>signup</button></a> to post.</p>
        </div>
      )}

      <div className='gap-3' style={{marginTop:12}}>
        <button className='btn btn-dark gap-3' disabled>Feed</button>
        {loading ? <div className="card">Loading posts...</div> : (
          posts.length ? posts.map(p => <Post key={p._id} post={p} />) : <div className="card gap-3">No posts yet.</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
