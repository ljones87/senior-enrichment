

/* -----------------    ACTION TYPES     ------------------ */

const CHANGE_CAMPUS = 'CHANGE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export function changeCurrentCampus (campus) {
  const action = { type: CHANGE_CAMPUS, campus };
  return action;
}

/* ------------       REDUCERS     ------------------ */

export default function reducer (state = {}, action) {
  switch (action.type) {
    case CHANGE_CAMPUS:
      return [action.campus];
    default:
      return state;
  }
}

//   export function fetchSingleCampus () {

//   return function thunk (dispatch) {
//     return axios.get('/api/campus/:campusId')
//       .then(res => res.data)
//       .then(campus => {
//         const action = getCampus(campus);
//         dispatch(action);
//       })
//       .catch(err => console.log(err))
//   };
// }
