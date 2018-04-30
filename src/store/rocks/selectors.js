import _ from 'lodash';

export function getRocks(state) {
  const rocks = state.rocks;
  const rockKeys = _.keys(rocks);
  return [ rocks, rockKeys ];
}

export function getRocksByName(state) {
  return state.rocks;
}

export function getRocksNameArray(state) {
  return _.keys(state.rocks);
}
