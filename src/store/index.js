import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import layoutReducer from './layout/layout.reducer';
import userReducer from './user/user.reducer';

const combinedReducers = combineReducers({
  layout: layoutReducer,
  user: userReducer
})

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
)