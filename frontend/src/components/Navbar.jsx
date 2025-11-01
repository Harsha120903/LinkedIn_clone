import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <div className="nav">
<div
  style={{
    fontWeight: 800,
    fontSize: '1.8rem',
    color: '#0077b5',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  }}
>
  Linked<span style={{ color: '#ffb700' }}>In</span> Clone
</div>
      <div className="flex">
        <Link to="/"><button className='btn btn-primary'>Home</button> </Link>
        {user ? (
          <>
            <button className="btn btn-primary" onClick={onLogout}>Logout</button>
            <Link to="/profile"><button  className='btn btn-secondary' >{user.name}</button> </Link>
          </>
        ) : (
          <>
            <Link to="/login"> <button className='btn btn-primary'>Login</button> </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
