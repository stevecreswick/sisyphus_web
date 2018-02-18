// import api from '../api';
//
// export function fetchRocks() {
//   return dispatch => api.fetch('/rocks')
//     .then((response) => {
//       dispatch({ type: 'FETCH_BOULDERS_SUCCESS', response });
//     });
// }
//
// // export function fetchUserRooms(userId) {
// //   return dispatch => api.fetch(`/users/${userId}/rooms`)
// //     .then((response) => {
// //       dispatch({ type: 'FETCH_USER_BOULDERS_SUCCESS', response });
// //     });
// // }
// //
// // export function createRoom(data, router) {
// //   return dispatch => api.post('/rooms', data)
// //     .then((response) => {
// //       dispatch({ type: 'CREATE_BOULDERS_SUCCESS', response });
// //       router.transitionTo(`/r/${response.data.id}`);
// //     });
// // }
// //
// // export function joinRoom(roomId, router) {
// //   return dispatch => api.post(`/rooms/${roomId}/join`)
// //     .then((response) => {
// //       dispatch({ type: 'BOULDERS_JOINED', response });
// //       router.transitionTo(`/r/${response.data.id}`);
// //     });
// // }
