import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  activeRocks: []
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
        activeRocks: [...state.activeRocks, action.newRock ]
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
