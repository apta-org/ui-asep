import { connect } from 'react-redux';
import EligibilityPage from './component-page-eligibility';

const mapDispatchToProps = dispatch => ({
  onClickBack: () => {
    dispatch({ type: 'BROWSER_HISTORY_PUSH', payload: '/' });
    dispatch({ type: 'CLEAR_SELECTED_COURSE' });
  }
});

export default connect(() => ({}), mapDispatchToProps)(EligibilityPage);
