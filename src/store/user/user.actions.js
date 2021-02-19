import { userTypes } from './user.types';

async function getUsers() {
  const response = await fetch('https://reqres.in/api/users');
  const { data } = await response.json();
  return {
    type: userTypes.GET_USERS,
    payload: { users: data }
  }
}

export const userActions = {
  getUsers,
}