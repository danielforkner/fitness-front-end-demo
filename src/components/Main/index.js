import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllRoutines from './AllRoutines';
import AllActivities from './AllActivities';
import MyProfile from './MyProfile';

const Main = (props) => {
  const { routines, setRoutines, activities, setActivities, user } = props;

  return (
    <div id="main">
      <h1>Main Component</h1>
      {/* ROUTES HERE */}
      <Routes>
        <Route path="/routines" element={<AllRoutines routines={routines} />} />
        <Route
          path="/activities"
          element={
            <AllActivities
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <MyProfile
              setRoutines={setRoutines}
              routines={routines}
              user={user}
              activities={activities}
            />
          }
        />
        <Route path="/" element={<h2>Main home page</h2>} />
      </Routes>
    </div>
  );
};

export default Main;
