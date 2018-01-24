import { connect } from 'react-redux';
import AcademicYear from './component-academic-year';
import { selectedCourse } from '../../../common/courses/reducer-courses';

const prepareAcademicYearListOptions = (course) => {
  const academicYearOptions = [];
  if (course && course.length > 0) {
    for (let i = 0; i < course.length; i += 1) {
      const academicYear = i + 1;
      academicYearOptions.push({
        key: `${academicYear}`,
        value: `Year - ${academicYear}`
      });
    }
  }
  return academicYearOptions;
};

const mapStateToProps = (state) => {
  const courseSelected = selectedCourse(state)[0];
  return {
    course: courseSelected,
    academicYearOptions: prepareAcademicYearListOptions(courseSelected)
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelectedAcademicYear: (courseSelected, academicYearSelected) => {
    dispatch({ type: 'FETCH_RULES_FOR_COURSE', payload: { course: courseSelected, academicYear: academicYearSelected } });
    dispatch({ type: 'UPDATE_ACADEMIC_YEAR', payload: academicYearSelected });
  }
});

export default connect(() => mapStateToProps, mapDispatchToProps)(AcademicYear);
