import { createLogic } from 'redux-logic';

const browserHistoryPushLogic = createLogic({
  type: 'BROWSER_HISTORY_PUSH',
  process({ browserHistory, action }) {
    browserHistory.push(action.payload);
  }
});

const actionFailedLogic = createLogic({
  type: 'ACTION_FAILED',
  process({ action }) {
    console.log(action);
  }
});

export default [
  browserHistoryPushLogic,
  actionFailedLogic
];
