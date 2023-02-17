import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllRoutines from './AllRoutines';
import AllActivities from './AllActivities';

const Main = (props) => {
  const { routines, activities, setActivities } = props;

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
        <Route path="/" element={<h1>Main home page</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
