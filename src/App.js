import React, { useState, useEffect } from 'react';
import { getAllRoutines, getUser, getAllActivities } from './api';
import Header from './components/Header/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './style.css';

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [userRoutines, setUserRoutines] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRoutines = await getAllRoutines();
      setRoutines(fetchedRoutines);
      const fetchedActivities = await getAllActivities();
      setActivities(fetchedActivities);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const exchangeTokenForUser = async () => {
      let token = window.localStorage.getItem('token');
      if (token) {
        let user = await getUser(token);
        setUser(user);
      }
    };

    exchangeTokenForUser();
  }, []);

  return (
    <div>
      <Header setUser={setUser} user={user} />
      <div id="nav-main-container">
        <Nav />
        <Main
          routines={routines}
          activities={activities}
          setActivities={setActivities}
        />
      </div>
      <h1>Footer Component Will Go Here</h1>
    </div>
  );
};

export default App;
