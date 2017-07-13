

const inistalState = {}

const GET_CAMPUS = 'GET_CAMPUS';


export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export default function campuses (state = [], action) {
  switch (action.type) {
    case GET_CAMPUS:
      return [action.campus];
    default:
      return state;
  }
}

  export function fetchSingleCampus () {

  return function thunk (dispatch) {
    return axios.get('/api/campus/:campusId')
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus);
        dispatch(action);
      })
      .catch(err => console.log(err))
  };
}
