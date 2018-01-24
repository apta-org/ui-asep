import thunk from 'redux-thunk';
import { createMockStore } from 'redux-logic-test';
import rootReducer, { initialState as defaultState } from '../../reducers';
import { mockDependencies } from '../../dependencies';

export const createStoreWithReducerAndCustomLogic = (additionalState, logicArray, injectedDependencies) => {
  const store = createMockStore({
    initialState: { ...defaultState, ...additionalState },
    reducer: rootReducer,
    logic: logicArray,
    injectedDeps: injectedDependencies,
    middleware: [thunk]
  });
  store.getActions = () => store.actions;
  return store;
};
export default function logicTest(opts) {
  const defaults = {
    state: defaultState, // the state to start with
    dependencies: mockDependencies(), // injected dependencies needed for the logic in this test
    logic: [], // an array of the redux-logic to include in the mock store
    before: () => {}, // dependencies) , // setup any mocking from injected dependencies here
    actionToTest: null, // string (action type) || object - is converted to an action object. will throw an error if not specified
    afterDispatch: () => {}, // use to run mock timers during a test (after test action has been dispatched)
    whenComplete: () => { // store, dependencies)
      throw new Error('\'whenComplete\' must be specified to verify test results');
    },
    done: () => {
      const msg = 'The \'done\' method from your test must be provided so the test can be properly ended';
      console.error(msg);
      throw new Error(msg);
    }
  };
  let store;
  let options;
  try {
    options = Object.assign({}, defaults, opts);
    if (typeof options.dependencies === 'function') {
      options.dependencies = options.dependencies();
    }
    store = createStoreWithReducerAndCustomLogic(
      options.state,
      options.logic,
      options.dependencies);
    if (!Array.isArray(options.logic) || options.logic.length === 0) {
      throw new Error('\'logic\' option should be an array of the redux-logic to test');
    }
    if (typeof options.before !== 'function') {
      throw new Error('\'before\' option should be a function');
    }
    options.before(options.dependencies);
  } catch (err) {
    console.log('Logic test setup failed', err);
    opts.done.fail(err);
  }
  if (typeof options.actionToTest === 'string') {
    options.actionToTest = { type: options.actionToTest };
  }
  try {
    store.dispatch(options.actionToTest);
    options.afterDispatch(store, options.dependencies);
  } catch (err) {
    console.log(err);
    options.done.fail(err);
  }
  store.whenComplete(() => {
    try {
      options.whenComplete(store, options.dependencies);
    } catch (err) {
      console.log(err);
      options.done.fail(err);
    }
    options.done();
  });
}
