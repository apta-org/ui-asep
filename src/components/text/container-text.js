import { connect } from 'react-redux';
import { translate } from '../../resources/i18n/translate';
import Text from './component-text';

function mapStateToProps(state, ownProps) {
  return {
    value: translate(ownProps.label, state.i18n.locale)
  };
}

export default connect(mapStateToProps)(Text);
