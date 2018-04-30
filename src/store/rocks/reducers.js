import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  resourceList: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ROCKS_FETCHED:
      return state.merge({
        resourceList: action.rocks.data
      });

    case types.CREATE_ROCK_SUCCESS:
      return state.merge({
        ...state,
        resourceList: [...state.resourceList, action.newRock ]
      });

    case types.EDIT_ROCK_SUCCESS:
      const updateName = (updatedRock) => {
        return state.rocks.map(rock =>
          rock.id === updatedRock.id ?
            { ...rock, name: updatedRock.name } :
            rock
        );
      };

      return state.merge({
        ...state,
        resourceList: updateName(action.updatedRock)
      });

    case types.COMPLETE_ROCK_SUCCESS:
      const updateCompletion = (updatedRock) => {
        return state.resourceList.map(rock =>
          rock.id === updatedRock.id ?
            { ...rock, active: !rock.active } :
            rock
        );
      };

      return state.merge({
        ...state,
        resourceList: updateCompletion( action.updatedRock )
      });
    default:
      return state;
  }
}
