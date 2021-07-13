import {combineReducers, createStore} from 'redux';

import gridReducer from '../features/Grid/reducer';

let rootReducer = combineReducers({
  grid: gridReducer,
});

let store = createStore(rootReducer);

export default store;
