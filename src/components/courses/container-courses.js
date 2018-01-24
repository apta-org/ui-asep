import { connect } from 'react-redux';
import Courses from './component-courses';
import { selectCourses } from '../../common/courses/reducer-courses';

const prepareCourseListOptions = (courseList) => {
  const courseOptions = [];
  courseList.forEach((course) => {
    courseOptions.push({
      key: course.id,
      value: `[${course.name}] ${course.description}`
    });
  });
  return courseOptions;
};

const mapStateToProps = (state) => {
  const courseList = selectCourses(state);
  return {
    courseOptions: prepareCourseListOptions(courseList)
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelectedCourse: courseId => dispatch({ type: 'UPDATE_SELECTED_COURSE', payload: courseId })
});

export default connect(() => mapStateToProps, mapDispatchToProps)(Courses);
