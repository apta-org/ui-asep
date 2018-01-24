import { createLogic } from 'redux-logic';

const eligibilityCriteriaLogic = createLogic({
  type: 'ELIGIBILITY_CRITERIA',
  process({ getState }, dispatch, done) {
    console.log('state', getState());
    dispatch({ type: 'GET_COURSES' });
    dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/eligibility' });
    done();
  }
});

const referralApplicationLogic = createLogic({
  type: 'START_REFERRAL_APPLICATION',
  process({ getState }, dispatch, done) {
    console.log('state', getState());
    dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/refer-student' });
    done();
  }
});

const studentApplicationLogic = createLogic({
  type: 'START_STUDENT_APPLICATION',
  process({ getState }, dispatch, done) {
    console.log('state', getState());
    dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/student-application' });
    done();
  }
});

export default [
  eligibilityCriteriaLogic,
  referralApplicationLogic,
  studentApplicationLogic
];
