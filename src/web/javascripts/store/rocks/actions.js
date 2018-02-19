import _ from 'lodash';

import * as types from './actionTypes';
import api from '../../api';

export function fetchRocks() {
  return async(dispatch, getState) => {
    try {
      const rocks = await api.fetch('/rocks');
      const rocksByName = _.keyBy(rocks.data, (rock) => rock.name);
      dispatch({ type: types.ROCKS_FETCHED, rocksByName });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addRock(data, router) {
  return async(dispatch, getState) => {
    try {
      const newRock = await api.post('/rocks', data);
      dispatch({ type: types.CREATE_ROCK_SUCCESS, newRock });

      // export function createRoom(data, router) {
      //   return dispatch => api.post('/rooms', data)
      //     .then((response) => {
      //       dispatch({ type: 'CREATE_BOULDERS_SUCCESS', response });
      //       router.transitionTo(`/r/${response.data.id}`);
      //     });
      // }
    } catch(error) {
      console.error(error);
    }
  }
}
