import React from 'react';

const AllRoutines = (props) => {
  const routines = props.routines;

  return (
    <>
      <h2>All Routines</h2>
      {routines.map((routine) => {
        return (
          <div style={{ border: '2px solid black' }} key={routine.id}>
            <h3>Name: {routine.name}</h3>
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <p>Activities: {routine.activities.length}</p>
          </div>
        );
      })}
    </>
  );
};

export default AllRoutines;
