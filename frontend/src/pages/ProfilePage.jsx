import React from 'react';

const ProfilePage = ({ user }) => {
  if (!user) return <div className="card">Please login to view profile.</div>;

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
