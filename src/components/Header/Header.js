import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = ({ setUser, user }) => {
  return (
    <div id="header">
      <div id="logo">
        <h1>Routine Tracker</h1>
        {user.username && <p>Welcome {user.username}!</p>}
      </div>
      {user.username ? (
        <LogoutButton setUser={setUser} />
      ) : (
        <LoginButton setUser={setUser} />
      )}
    </div>
  );
};

export default Header;
