import React from 'react';
import header from '../../resources/images/header.jpg';
import theme from '../../theme';

const Header = () => (
  <div style={{ ...theme.flexStart, paddingTop: '0vmin', paddingBottom: '0vmin' }}>
    <img style={{ width: '180vmin', height: '20vmin' }} src={header} alt="logo-header" />
  </div>
);

export default Header;
