// >>>----> >>>---->  >>>---->  >>>---->
//                 Store
// <----<<< <----<<<  <----<<<  <----<<<

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { reducer as form } from 'redux-form';
import rocks from './rocks/reducer';

// Middle Ware
const middleWare = [thunk];

// Create Store
const store = createStore(
  combineReducers( { form, rocks } ),
  applyMiddleware(...middleWare)
);

export default store;
