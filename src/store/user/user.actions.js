import { userTypes } from './user.types';

//Async Action
function getUsers() {
  return async (dispatch) => {
    const response = await fetch('https://reqres.in/api/users');
    const { data } = await response.json();
    dispatch({
      type: userTypes.GET_USERS,
      payload: { users: data }
    })
  }
}

export const userActions = {
  getUsers,
}