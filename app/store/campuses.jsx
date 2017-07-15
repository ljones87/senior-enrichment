import axios from 'axios';


/* -----------------    ACTION TYPES     ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function getCampuses (allCampuses) {
  const action = { type: GET_CAMPUSES, allCampuses };
  return action;
}

export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function updateCampus(campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
}

export function deleteCampus (campusId) {
  const action = { type: DELETE_CAMPUS, campusId };
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
      .then(res => res.data)
      .then(campus => {
        const action = addCampus(campus[0]);
        dispatch(action);
       // socket.emit('new-student', newStudent);
      })
      .catch(err => console.log(err));
  }
}

export function updateCampusName (info) {

  return function thunk (dispatch) {
     return axios.put(`/api/edit-campus/${info.id}`, info)
      .then(res => res.data)
      .then(newCampusName => {
        const action = updateCampus(newCampusName);
        dispatch(action);
      })
      .catch(err => console.log(err))
  }
}

export function removeCampus (campusId) {

  return function thunk (dispatch) {
     return axios.delete(`/api/campus/${campusId}`, {campusId})
      .then(res => res.data)
      .then(campusId => {
        const action = deleteCampus(campusId);
        dispatch(action);
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
      return [...state, action.addCampus];
    case UPDATE_CAMPUS:
      return [...state, action.updateCampus];
    case DELETE_CAMPUS:
      return state.filter(({id}) => id !== action.deleteCampus);
    default:
      return state;
  }
}
