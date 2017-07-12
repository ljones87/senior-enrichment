import axios from 'axios';
//import socket from '../socket';

const GET_CAMPUSES = 'GET_CAMPUSES';

export function getCampuses (allCampuses) {
  const action = { type: GET_CAMPUSES, allCampuses };
  return action;
}

export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/')
      .then(res => res.data)
      .then(allCampuses => {
        const action = getCampuses(allCampuses);
        dispatch(action);
      });
  }
}
export default function campuses (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.allCampuses;
    default:
      return state;
  }
}



// export function addStudent (student, history) {

//   return function thunk (dispatch) {
//     return axios.post('/api/Campuses/new-student', channel)
//       .then(res => res.data)
//       .then(newStudent => {
//         const action = getCampuses(newStudent);
//         dispatch(action);
//         socket.emit('new-student', newStudent);
//       });
//   }

// }


