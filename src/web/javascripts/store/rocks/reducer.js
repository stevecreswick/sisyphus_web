import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  rocksByName: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROCKS_FETCHED:
      return state.merge({
        rocksByName: action.rocksByName
      });
    default:
      return state;
  }
}

// Selectors
export function getRocks(state) {
  const rocksByName = state.rocks.rocksByName;
  const rocksNameArray = _.keys(rocksByName);
  return [rocksByName, rocksNameArray];
}

export function getRocksByName(state) {
  return state.rocks.rocksByName;
}

export function getRocksNameArray(state) {
  console.log('here');
  console.log(state.rocks);
  return _.keys(state.rocks.rocksByName);
}
