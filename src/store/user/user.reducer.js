import { userTypes as types } from './user.types';

const initialState = {
  users: [],
  singleUser: undefined,
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case types.GET_USERS:
      return { ...state, users: payload.users }

    case types.GET_SINGLE_USER:
      return { ...state, singleUser: payload.singleUser }

    default:
      return state
  }
}

export default reducer;