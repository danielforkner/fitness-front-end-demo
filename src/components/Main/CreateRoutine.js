import React from 'react';

const CreateRoutine = ({ setRoutines }) => {
  let token = window.localStorage.getItem('token');

  return <>{token && <form>My Form</form>}</>;
};

export default CreateRoutine;
