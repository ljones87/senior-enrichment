import axios from 'axios';


/* -----------------    ACTION TYPES     ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function getCampuses (allCampuses) {
  const action = { type: GET_CAMPUSES, allCampuses };
  return action;
}

export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

/* ------------       THUNK CREATORS     ------------------ */

export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/')
      .then(res => res.data)
      .then(allCampuses => {
        const action = getCampuses(allCampuses);
        dispatch(action);
      })
      .catch(err => console.log(err))
  };
}

export function addNewCampus (credentials) {

  return function thunk (dispatch) {
     return axios.post('/api/new-campus', credentials)
      .then(res => console.log("****reached post campus thunk***", res.data))
      .then(newCampus => {
        const action = addCampus(newCampus);
        dispatch(action);
       // socket.emit('new-student', newStudent);
      })
      .catch(err => console.log(err))
  }
}
/* ------------       REDUCERS     ------------------ */

export default function campuses (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.allCampuses;
    case ADD_CAMPUS:
      return [...state, action.addCampus]
    default:
      return state;
  }
}
