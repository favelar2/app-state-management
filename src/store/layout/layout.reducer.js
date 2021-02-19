import { layoutTypes as types } from './layout.types';

const initialState = {
  sidebar: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.TOGGLE_SIDEBAR:
      return { ...state, sidebar: !state.sidebar }

    case types.SET_SIDEBAR:
      return { ...state, sidebar: action.payload }

    default:
      return state
  }
}
export default reducer;
