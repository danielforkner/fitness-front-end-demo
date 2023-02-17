import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = ({ setUser, user }) => {
  return (
    <div>
      <h1>Header Component</h1>
      <h3>Fitness Tracker Front-End</h3>
      {user.username && <p>Welcome {user.username}!</p>}
      {user.username ? (
        <LogoutButton setUser={setUser} />
      ) : (
        <LoginButton setUser={setUser} />
      )}
    </div>
  );
};

export default Header;
