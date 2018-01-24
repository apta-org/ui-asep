export const defaultState = () => ({
  list: [],
  selectedCourse: {},
  selectedAcademicYear: 0
});

export const findCourseById = (courseId, courses) => courses.filter(course => course.id === courseId);

const reducer = (state = defaultState(), action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_COURSES':
      newState.list = action.payload.data.courses;
      break;
    case 'UPDATE_SELECTED_COURSE':
      newState.selectedCourse = findCourseById(action.payload, state.list);
      newState.selectedAcademicYear = 0;
      break;
    case 'UPDATE_ACADEMIC_YEAR':
      newState.selectedAcademicYear = action.payload;
      break;
    case 'CLEAR_SELECTED_COURSE':
      newState.selectedCourse = {};
      newState.selectedAcademicYear = 0;
      break;
    default:
      return state;
  }
  return newState;
};

export const selectCourses = state => state.courses.list;
export const selectedCourse = state => state.courses.selectedCourse;
export const selectedAcademicYear = state => state.courses.selectedAcademicYear;

export default reducer;
