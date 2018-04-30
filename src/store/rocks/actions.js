import _ from 'lodash';

import * as types from './actionTypes';
import api from '../../api';

export function fetchRocks() {
  return async(dispatch, getState) => {
    try {
      const rocks = await api.fetch('/rocks');
      // const rocksByName = rocks.data.filter( (rock) => rock.name);

      dispatch({ type: types.ROCKS_FETCHED, rocks });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addRock( rock, router ) {
  return async(dispatch, getState) => {
    try {
      const post = await api.post('/rocks', rock );
      const newRock = post.data[ 0 ];
      dispatch({ type: types.CREATE_ROCK_SUCCESS, newRock });
    } catch(error) {
      console.error(error)
    }
  }
}

export function editRock(id, edited ) {
  return async(dispatch, getState) => {
    try {
      const update = await api.patch(`/rocks/${id}`, { 'name': edited });
      const updatedRock = update.data[0];
      dispatch({ type: types.EDIT_ROCK_SUCCESS, updatedRock });
    }
    catch(error) {
      console.error(error)
    }
  }
}

export function deleteRock( rock ) {
  console.log('delete');
}

export function completeRock( rock ) {
  return async(dispatch, getState) => {
    try {
      const update = await api.patch(`/rocks/${ rock.id }`, { 'active': !rock.active } );
      const updatedRock = update.data[ 0 ];
      console.log('THIS WAS SUCCESS');
      dispatch({ type: types.COMPLETE_ROCK_SUCCESS, updatedRock });
    }
    catch(err) {
      console.log('HERE');
      console.error(err);
    }
  }
}

export function createChild(rock) {
  return async (dispatch, getState) => {
    try {
      const post = await api.post('/rocks', rock);
      const newRock = post.data[0];
      dispatch({ type: types.CREATE_ROCK_SUCCESS, newRock });
    } catch (error) {
      console.error(error)
    }
  }
}
