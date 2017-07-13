
import students from './students';
import campuses from './campuses';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  students,
  campuses,
})

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()))

export * from './students';
export * from './campuses';

