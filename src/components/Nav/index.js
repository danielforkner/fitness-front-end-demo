import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  // const user = props.user

  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/routines">Go to Routines</Link>
        </li>
        <li>
          <Link to="/activities">Go to Activities</Link>
        </li>
        {user.username && (
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        )}
        <li>
          <Link to="/">Go Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
