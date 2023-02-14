import React from 'react';
import AllRoutines from './AllRoutines';

const Main = (props) => {
  const routines = props.routines;

  return (
    <>
      <h1>Main Component</h1>
      <AllRoutines routines={routines} />
    </>
  );
};

export default Main;
