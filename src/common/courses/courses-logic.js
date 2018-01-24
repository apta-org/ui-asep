import { createLogic } from 'redux-logic';
import { selectCourses } from './reducer-courses';
import { selectRulesByCourse } from '../rules/reducer-rules';

const coursesFetchLogic = createLogic({
  type: 'GET_COURSES',
  process({ api, getState }, dispatch, done) {
    const courses = selectCourses(getState());
    if (!courses || courses.length === 0) {
      api.getCourses().then((res) => {
        dispatch({ type: 'UPDATE_COURSES', payload: res });
      }).catch((err) => {
        console.log('Error:', err);
      }).then(done);
    }
  }
});

const rulesFetchLogic = createLogic({
  type: 'FETCH_RULES_FOR_COURSE',
  process({ api, getState, action }, dispatch, done) {
    const course = action.payload.course;
    const academicYear = action.payload.academicYear;
    if (course) {
      const ruleByCourseAndAcademicYearKey = `${course.name}-${academicYear}`;
      const rulesByCourse = selectRulesByCourse(getState(), ruleByCourseAndAcademicYearKey);
      if (!rulesByCourse || rulesByCourse.size === 0) {
        api.getRulesForCourse(course.id, academicYear).then((res) => {
          dispatch({ type: 'UPDATE_RULES_FOR_COURSE', payload: { ruleByCourseKey: ruleByCourseAndAcademicYearKey, courseRules: res } });
        }).catch((err) => {
          console.log('Error:', err);
        }).then(done);
      }
    } else {
      console.log(`Invalid course name [${course}] is received`);
    }
  }
});

export default [
  coursesFetchLogic,
  rulesFetchLogic
];
