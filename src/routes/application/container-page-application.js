import { connect } from 'react-redux';
import StudentApplicationPage from './component-page-application';

const mapDispatchToProps = dispatch => ({
  onClickBack: () => dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/' })
});

export default connect(() => ({}), mapDispatchToProps)(StudentApplicationPage);
