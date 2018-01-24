export const defaultState = () => ({
  rulesByCourse: new Map()
});

const reducer = (state = defaultState(), action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_RULES_FOR_COURSE':
      newState.rulesByCourse.set(action.payload.ruleByCourseKey, action.payload.courseRules.data.rules);
      break;
    default:
      return state;
  }
  return newState;
};

export const selectRulesByCourse = (state, ruleByCourseKey) => state.rules.rulesByCourse.get(ruleByCourseKey);

export default reducer;
