import React from 'react';
import LoginButton from './LoginButton';

const Header = ({ setToken, setUser, user }) => {
  // const setToken = props.setToken;
  // const setUser = props.setUser;
  // const user = props.User;

  return (
    <div>
      <h1>Header Component Will Go Here</h1>
      <h3>Fitness Tracker Front-End</h3>
      {user.username && <p>Welcome {user.username}!</p>}
      <LoginButton setToken={setToken} setUser={setUser} />
    </div>
  );
};

export default Header;
