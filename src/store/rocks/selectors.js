import _ from 'lodash';

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
