import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import logic from './rootLogic';
import dependencies from './dependencies';
import reducers from './reducers';
import { getLastState } from './util/backup/backup';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const logicMiddleware = createLogicMiddleware(logic, dependencies);

function configureStore(initialState) {
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk, logicMiddleware)));
}

function reduxStore() {
  // this is a debugging feature that will restore your last redux state when a hot module replacement occurs
  // to start with a fresh state, just reload the page manually
  if (module.hot) {
    // in production, module.hot is not present
    // when the page unloads on hmr, set a flag so we know to restore state on restart
    module.hot.status((status) => {
      if (status === 'abort') {
        localStorage.setItem('hmr', true);
      }
    });
    if (localStorage.getItem('hmr') === 'true') {
      console.log('Hot module replacement state reload', getLastState());
      localStorage.setItem('hmr', false);
      // reload the last state from our backup
      return configureStore(getLastState());
    }
  }
  return configureStore({});
}

export default reduxStore();
