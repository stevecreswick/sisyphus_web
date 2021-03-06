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

    case types.EDIT_ROCK_SUCCESS:
      const updateName = (updatedRock) => {
        return state.activeRocks.map(rock =>
          rock.id === updatedRock.id ?
            { ...rock, name: updatedRock.name } :
            rock
        );
      };

      return state.merge({
        ...state,
        activeRocks: updateName(action.updatedRock)
      });

    case types.COMPLETE_ROCK_SUCCESS:
      const updateCompletion = (updatedRock) => {
        return state.activeRocks.map(rock =>
          rock.id === updatedRock.id ?
            { ...rock, active: !rock.active } :
            rock
        );
      };

      return state.merge({
        ...state,
        activeRocks: updateCompletion( action.updatedRock )
      });
    default:
      return state;
  }
}
