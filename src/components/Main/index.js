import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllRoutines from './AllRoutines';

const Main = (props) => {
  const routines = props.routines;

  return (
    <>
      <h1>Main Component</h1>
      {/* ROUTES HERE */}
      <Routes>
        <Route path="/routines" element={<AllRoutines routines={routines} />} />
        <Route path="/" element={<h1>Main home page</h1>} />
      </Routes>
    </>
  );
};

export default Main;
