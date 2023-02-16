import React from 'react';
import { loginUser } from '../../api';

const LoginButton = ({ setToken, setUser }) => {
  const handleClick = async () => {
    const response = await loginUser();
    if (response.token) {
      setToken(response.token);
      window.localStorage.setItem('token', response.token);
      setUser(response.user);
    }
  };

  return <button onClick={handleClick}>Login</button>;
};

export default LoginButton;
