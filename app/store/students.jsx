import axios from 'axios';
//import socket from '../socket';

const GET_STUDENTS = 'GET_STUDENTS';

export function getStudents (allStudents) {
  const action = { type: GET_STUDENTS, allStudents };
  return action;
}

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(allStudents => {
        const action = getStudents(allStudents);
        dispatch(action);
      });
  }
}
export default function students (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.allStudents;
    default:
      return state;
  }
}



// export function addStudent (student, history) {

//   return function thunk (dispatch) {
//     return axios.post('/api/students/new-student', channel)
//       .then(res => res.data)
//       .then(newStudent => {
//         const action = getStudents(newStudent);
//         dispatch(action);
//         socket.emit('new-student', newStudent);
//       });
//   }

// }


