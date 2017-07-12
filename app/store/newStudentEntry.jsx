
import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';

export function addStudent (student) {
  const action = { type: ADD_STUDENT , student };
  return action;
}


// export function postChannel (channel, history) {

//   return function thunk (dispatch) {
//     return axios.post('/api/channels', channel)
//       .then(res => res.data)
//       .then(newChannel => {
//         const action = getChannel(newChannel);
//         dispatch(action);
//         socket.emit('new-channel', newChannel);
//         history.push(`/channels/${newChannel.id}`)
//       });
//   }

// }
