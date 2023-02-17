import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>Nav Component</h1>
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
    </nav>
  );
};

export default Nav;
