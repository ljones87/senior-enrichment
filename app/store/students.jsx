import axios from 'axios';
//import socket from '../socket';

/* -----------------    ACTION TYPES     ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export function getStudents (allStudents) {
  const action = { type: GET_STUDENTS, allStudents };
  return action;
}

export function addStudent (student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function deleteStudent (studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

/* ------------       THUNK CREATORS     ------------------ */

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

export function addNewStudent (credentials) {

  return function thunk (dispatch) {
     return axios.post('/api/students/new-student', credentials)
      .then(newStudent => {
        const action = addStudent(newStudent);
        dispatch(action);
       // socket.emit('new-student', newStudent);
      })
      .catch(err => console.log(err))
  }
}

export function removeStudent (studentId) {

  return function thunk (dispatch) {
     return axios.delete(`/api/students/${studentId}`)
      .then(student => {
        const action = deleteStudent(student);
        dispatch(action);
       // socket.emit('new-student', newStudent);
      })
      .catch(err => console.log(err))
  }
}

/* ------------       REDUCERS     ------------------ */

export default function students (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.allStudents;
    case ADD_STUDENT:
      return [...state, action.addStudent];
    case DELETE_STUDENT:
      return state.filter(({id}) => id !== action.deleteStudent);
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


