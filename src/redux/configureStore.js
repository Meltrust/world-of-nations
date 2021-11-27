import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
