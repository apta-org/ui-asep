import React from 'react';
import { translate } from '../../resources/i18n/translate';
import './style.css';

const getPlaceHolderLabel = () => translate('instruction.select.default');

const Select = props => (
  <div className={props.selectStyle}>
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
    >
      <option value="">{props.placeholder}</option>
      {
        props.options.map(opt => <option key={opt.key} value={opt.key}>{opt.value}</option>)
      }
    </select>
  </div>
);

Select.propTypes = {
  selectStyle: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  })).isRequired,
  selectedOption: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
};

Select.defaultProps = {
  selectStyle: 'styled-select green semi-square',
  selectedOption: '',
  placeholder: getPlaceHolderLabel()
};

export default Select;
