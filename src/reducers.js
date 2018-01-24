import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { backup, restoreState } from './util/backup/backup';
import i18n from './resources/i18n/reducer-i18n';
import courses from './common/courses/reducer-courses';
import rules from './common/rules/reducer-rules';

const reduxReducer = combineReducers({
  i18n,
  routing: routerReducer,
  courses,
  rules
});

export default function reducer(state, action) {
  // local reducers
  let newState;
  try {
    newState = reduxReducer(state, action);
  } catch (err) {
    console.error('FATAL ERROR: uncaught exception in a reducer', action, err);
    // reset the state
    newState = state;
  }
  // global level reducer
  // eslint-disable-next-line
  newState = commonReducer(newState, action);
  // then back up the new state
  backup(newState);
  return newState;
}

// this is our default initial state of the application
// INIT is a fake action type that should not be handled
export const initialState = Object.freeze(reducer({}, { type: 'INIT' }));

export function commonReducer(globalState, action) {
  switch (action.type) {
    case 'RESTORE_SESSION':
      // This is action is currently never dispatched
      return restoreState(globalState, action.payload.sessionKey);
    default:
      return globalState;
  }
}
