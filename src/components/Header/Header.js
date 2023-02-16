import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

const Header = ({ setToken, setUser, user }) => {
  // const setToken = props.setToken;
  // const setUser = props.setUser;
  // const user = props.User;

  return (
    <div>
      <h1>Header Component Will Go Here</h1>
      <h3>Fitness Tracker Front-End</h3>
      <ul>
        <li>
          <Link to="/routines">Go to Routines</Link>
        </li>
        <li>
          <Link to="/">Go Home</Link>
        </li>
      </ul>
      {user.username && <p>Welcome {user.username}!</p>}
      <LoginButton setToken={setToken} setUser={setUser} />
    </div>
  );
};

export default Header;
