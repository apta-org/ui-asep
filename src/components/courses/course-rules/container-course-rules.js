import { connect } from 'react-redux';
import CourseRules from './component-page-course-rules';
import { selectedCourse, selectedAcademicYear } from '../../../common/courses/reducer-courses';
import { selectRulesByCourse } from '../../../common/rules/reducer-rules';

const mapStateToProps = (state) => {
  const courseSelected = selectedCourse(state)[0];
  const academicYearSelected = selectedAcademicYear(state);
  let rulesForCourse = [];
  if (courseSelected && academicYearSelected > 0) {
    rulesForCourse = selectRulesByCourse(state, `${courseSelected.name}-${academicYearSelected}`);
  }
  return {
    rules: rulesForCourse
  };
};

export default connect(() => mapStateToProps)(CourseRules);
