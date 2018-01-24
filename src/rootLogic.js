import pageStartLogic from './routes/start/page-start-logic';
import utilityLogic from './common/utility/utility-logic';
import coursesLogic from './common/courses/courses-logic';

const logic = [
  ...pageStartLogic,
  ...utilityLogic,
  ...coursesLogic
];

export default logic;
