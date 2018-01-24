import React, { PropTypes } from 'react';
import Text from '../../components/text/container-text';
import Button from '../../components/button/component-button';
import Header from '../../components/header/component-header';
import member from '../../resources/images/member.png';
import student from '../../resources/images/student.png';
import theme from '../../theme';

const StartPage = ({ onClickEligibility, onClickReferStudent, onClickApply }) => (
  <div id="page-start" style={{ ...theme.column, ...theme.fillParent }} >
    <Header />
    <div style={{ ...theme.flexCenter, paddingTop: '1vmin' }}>
      <Text label="instruction.start" style={{ ...theme.h2, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexCenter }}>
      <Text label="instruction.guide.lines" style={{ ...theme.h3, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '10vmin' }}>
      <img style={{ width: '5vmin', height: '4vmin', paddingRight: '1vmin' }} src={member} alt="logo-member" />
      <Text label="instruction.guide.lines.referrer" style={{ ...theme.h4, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '12vmin' }}>
      <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
        <Text label="instruction.guide.lines.referrer.step1" style={{ ...theme.smallText, color: theme.darkText }} />
      </li>
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '12vmin' }}>
      <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
        <Text label="instruction.guide.lines.referrer.step2" style={{ ...theme.smallText, color: theme.darkText }} />
      </li>
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '12vmin' }}>
      <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
        <Text label="instruction.guide.lines.referrer.step3" style={{ ...theme.smallText, color: theme.darkText }} />
      </li>
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '3vmin', paddingLeft: '10vmin', paddingBottom: '0vmin' }}>
      <img style={{ width: '5vmin', height: '4vmin', paddingRight: '1vmin' }} src={student} alt="logo-student" />
      <Text label="instruction.guide.lines.student" style={{ ...theme.h4, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin', paddingBottom: '0vmin' }}>
      <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
        <Text label="instruction.guide.lines.student.step1" style={{ ...theme.smallText, color: theme.darkText }} />
      </li>
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin', paddingBottom: '0vmin' }}>
      <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
        <Text label="instruction.guide.lines.student.step2" style={{ ...theme.smallText, color: theme.darkText }} />
      </li>
    </div>
    <div style={{ ...theme.flexCenter, paddingTop: '2vmin', paddingBotton: '1vmin' }}>
      <Button id="button-eligibility" label="button.eligibility" handleClick={onClickEligibility} style={{ ...theme.buttonBig, ...theme.buttonPrimary }} />
      <Button id="button-refer-student" label="button.refer.student" handleClick={onClickReferStudent} style={{ ...theme.buttonBig, ...theme.buttonPrimary }} />
      <Button id="button-apply" label="button.apply" handleClick={onClickApply} style={{ ...theme.buttonBig, ...theme.buttonPrimary }} />
    </div>
  </div>
);

StartPage.propTypes = {
  onClickEligibility: PropTypes.func.isRequired,
  onClickReferStudent: PropTypes.func.isRequired,
  onClickApply: PropTypes.func.isRequired
};

export default StartPage;
