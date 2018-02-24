import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  activeRocks: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROCKS_FETCHED:
      return state.merge({
        activeRocks: action.rocksByName
      });
    case types.CREATE_ROCK_SUCCESS:
      return state.merge({
        ...state,
        activeRocks: [...state, action.newRock ]
      });

    case types.COMPLETE_ROCK_SUCCESS:
      const updateRock = ( updatedRock ) => {
        return state.activeRocks.map( rock =>
          rock.id === updatedRock.id ?
            { ...rock, active: !rock.active } :
            rock
        );
      };

      return state.merge({
        ...state,
        activeRocks: updateRock( action.updatedRock )
      });
    default:
      return state;
  }
}

// Selectors
export function getRocks(state) {
  const activeRocks = state.rocks.activeRocks;
  const rocksArray = _.keys(activeRocks);
  return [activeRocks, rocksArray];
}

export function getRocksByName(state) {
  return state.rocks.activeRocks;
}

export function getRocksNameArray(state) {
  return _.keys(state.rocks.activeRocks);
}
