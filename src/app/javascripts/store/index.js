import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rocks from './rocks/reducer';

// Middle Ware
const middleWare = [thunk];

// Create Store
const store = createStore(
  combineReducers( { rocks } ),
  applyMiddleware(...middleWare)
);

export default store;
