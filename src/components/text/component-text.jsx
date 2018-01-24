import React from 'react';

const Text = ({ id, value, style }) => (
  (id) ? <span id={id} style={style}>{value}</span> : <span style={style}>{value}</span>
);

Text.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  id: React.PropTypes.string,
  style: React.PropTypes.objectOf(React.PropTypes.string)
};

Text.defaultProps = {
  value: '',
  style: {},
  id: undefined
};

export default Text;
