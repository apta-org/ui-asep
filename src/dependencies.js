import { browserHistory } from 'react-router';
import dateUtil from './util/date/date';
import { getCourses, getRulesForCourse } from './common/api/api-client';

export default {
  api: {
    getCourses,
    getRulesForCourse
  },
  dateUtil,
  // 3rd party libs
  browserHistory
};

// don't forget to add a mock for testing here when a new DI is added above
export const mockDependencies = () => ({
  api: {
    getCourses: jest.fn(),
    getRulesForCourse: jest.fn()
  },
  dateUtil: {
    now: jest.fn(() => (dateUtil.now())),
    timeSince: jest.fn(),
    nowMoment: jest.fn()
  },
  browserHistory: {
    push: jest.fn(),
    getCurrentLocation: jest.fn()
  },
  console: {
    warn: jest.fn(),
    log: jest.fn()
  }
});
