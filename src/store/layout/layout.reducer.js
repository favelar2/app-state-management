import { layoutTypes as types } from './layout.types';

const initialState = {
  sidebar: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_SIDEBAR:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
export default reducer;
