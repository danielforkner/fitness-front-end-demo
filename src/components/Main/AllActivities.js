import React, { useState } from 'react';

const AllActivities = ({ activities }) => {
  console.log(activities);
  return (
    <div>
      <h3>All Activities:</h3>
      {activities.map((activity) => {
        return (
          <div>
            <p>Name: {activity.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllActivities;
