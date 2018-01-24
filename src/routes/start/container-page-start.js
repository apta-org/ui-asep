import { connect } from 'react-redux';
import StartPage from './component-page-start';

const mapDispatchToProps = dispatch => ({
  onClickEligibility: () => dispatch({ type: 'ELIGIBILITY_CRITERIA' }),
  onClickReferStudent: () => dispatch({ type: 'START_REFERRAL_APPLICATION' }),
  onClickApply: () => dispatch({ type: 'START_STUDENT_APPLICATION' })
});

export default connect(() => ({}), mapDispatchToProps)(StartPage);
