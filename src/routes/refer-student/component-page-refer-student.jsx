import React, { PropTypes } from 'react';
import Text from '../../components/text/container-text';
import Button from '../../components/button/component-button';
import Header from '../../components/header/component-header';
import theme from '../../theme';

const ReferStudentPage = ({ onClickBack }) => (
  <div id="page-refer-student" style={{ ...theme.column, ...theme.fillParent }} >
    <Header />
    <div style={{ ...theme.flexCenter, paddingTop: '1vmin' }}>
      <Text id="text-refer-student" label="instruction.refer.student" style={{ ...theme.h3, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexCenter, alignContent: 'flex-end', paddingTop: '8vmin', paddingBottom: '3vmin' }}>
      <Button id="button-go-back" label="button.go.back" handleClick={onClickBack} style={{ ...theme.buttonBig, ...theme.buttonPrimary }} />
    </div>
  </div>
);

ReferStudentPage.propTypes = {
  onClickBack: PropTypes.func.isRequired
};

export default ReferStudentPage;
