import thunk from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import { createMockStore } from 'redux-logic-test';
import configureMockStore from 'redux-mock-store';
// for some reason we need this here to avoid a circular dependency issue in jest
import './websocket-mock-client';
import rootReducer, { initialState } from '../../reducers';
import rootLogic from '../../rootLogic';

// Does NOT attach any reducers
// create a fully functional mock store with proper initial state and all logic
const createStoreWithInitialState = (additionalState, injectedDependencies) => {
  const logicMiddleware = createLogicMiddleware(rootLogic, injectedDependencies);
  const middlewares = [thunk, logicMiddleware];
  const createEmptyMockStore = configureMockStore(middlewares);
  const store = createEmptyMockStore({ ...initialState, ...additionalState });
  store.whenComplete = logicMiddleware.whenComplete;
  return store;
};

export const createStoreWithReducerAndCustomLogic = (additionalState, logicArray, injectedDependencies) => {
  // console.log('Initial state', { ...initialState, ...additionalState });
  const store = createMockStore({
    initialState: { ...initialState, ...additionalState },
    reducer: rootReducer,
    logic: logicArray,
    injectedDeps: injectedDependencies,
    middleware: [thunk]
  });
  store.getActions = () => store.actions;
  return store;
};

export default createStoreWithInitialState;
