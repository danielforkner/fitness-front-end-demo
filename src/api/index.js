const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com';
// user --------------
const loginUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'superman27',
        password: 'WRONGPASSWORD',
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
const getUser = async (token) => {
  try {
    const response = await fetch(
      'http://fitnesstrac-kr.herokuapp.com/api/users/me',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
// --------------

// routines --------------
const getAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
// --------------

// activities
const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/activities`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
//

module.exports = {
  getAllRoutines,
  getAllActivities,
  loginUser,
  getUser,
};
