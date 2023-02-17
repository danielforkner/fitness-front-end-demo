import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = ({ setUser, user }) => {
  return (
    <div>
      <h1>Header Component Will Go Here</h1>
      <h3>Fitness Tracker Front-End</h3>
      <ul>
        <li>
          <Link to="/routines">Go to Routines</Link>
        </li>
        <li>
          <Link to="/activities">Go to Activities</Link>
        </li>
        <li>
          <Link to="/">Go Home</Link>
        </li>
      </ul>
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
