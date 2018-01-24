import axios from 'axios';

const API_ENDPOINT = 'http://localhost:8080';

const getCourses = () => axios.get(`${API_ENDPOINT}/api/courses`);

const getRulesForCourse = (courseId, academicYear) => axios.get(`${API_ENDPOINT}/api/rules/${courseId}/${academicYear}`);

module.exports = {
  getCourses,
  getRulesForCourse
};
