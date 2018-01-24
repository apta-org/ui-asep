import React from 'react';
import Text from '../text/container-text';
import theme from '../../theme';

const Button = ({ id, handleClick, label, style, className }) => (
  <button
    id={id}
    className={className}
    onClick={handleClick}
    style={{ ...theme.button, ...style }}
  >
    <Text label={label} />
  </button>
);

Button.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  style: React.PropTypes.objectOf(React.PropTypes.string),
  className: React.PropTypes.string
};

Button.defaultProps = {
  className: '',
  style: { }
};

export default Button;
