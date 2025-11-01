import React from 'react';

const Post = ({ post }) => {
  const date = new Date(post.createdAt);
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{post.user?.name || 'Unknown'}</div>
          <div className="post-time">{date.toLocaleString()}</div>
        </div>
      </div>
      <div style={{marginTop:10}}>{post.text}</div>
    </div>
  );
};

export default Post;
