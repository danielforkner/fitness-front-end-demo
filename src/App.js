import React, { useState, useEffect } from 'react';
import { getAllRoutines } from './api';
import Header from './components/Header/Header';
import Main from './components/Main';

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchAllRoutines = async () => {
      const fetchedRoutines = await getAllRoutines();
      setRoutines(fetchedRoutines);
    };

    fetchAllRoutines();
  }, []);

  return (
    <div>
      <Header setToken={setToken} setUser={setUser} user={user} />
      <h1>Nav Component Will Go Here</h1>
      <Main routines={routines} />
      <h1>Footer Component Will Go Here</h1>
    </div>
  );
};

export default App;
