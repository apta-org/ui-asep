import { connect } from 'react-redux';
import ReferStudentPage from './component-page-refer-student';

const mapDispatchToProps = dispatch => ({
  onClickBack: () => dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/' })
});

export default connect(() => ({}), mapDispatchToProps)(ReferStudentPage);
