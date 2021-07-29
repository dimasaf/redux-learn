import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import gridReducer from '../features/Grid/reducer';

let rootReducer = combineReducers({
  grid: gridReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
