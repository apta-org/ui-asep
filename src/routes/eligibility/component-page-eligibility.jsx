import React, { PropTypes } from 'react';
import Text from '../../components/text/container-text';
import Courses from '../../components/courses/container-courses';
import AcademicYear from '../../components/courses/academic-year/container-academic-year';
import CourseRules from '../../components/courses/course-rules/container-course-rules';
import Button from '../../components/button/component-button';
import Header from '../../components/header/component-header';
import rules from '../../resources/images/rules.png';
import theme from '../../theme';

const EligibilityPage = ({ onClickBack }) => (
  <div id="page-eligibility" style={{ ...theme.column, ...theme.fillParent }} >
    <Header />
    <div style={{ ...theme.flexCenter, paddingTop: '1vmin' }}>
      <Text id="text-eligibility" label="instruction.eligibility" style={{ ...theme.h3, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '10vmin' }}>
      <img style={{ width: '7vmin', height: '5vmin', paddingRight: '1vmin' }} src={rules} alt="logo-rules" />
      <Text id="text-eligibility-check-list" label="instruction.eligibility.check.list" style={{ ...theme.h4, color: theme.darkText }} />
    </div>
    <div style={{ ...theme.flexCenter, paddingTop: '1vmin' }}>
      <Text id="text-eligibility-check-list-docs" label="instruction.eligibility.check.list.docs" style={{ ...theme.smallText, color: theme.darkText, fontWeight: '600' }} />
    </div>
    <div style={{ ...theme.row, paddingTop: '1vmin' }}>
      <div style={{ ...theme.column }}>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin' }}>
          <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
            <Text id="text-eligibility-check-list-2" label="instruction.eligibility.check.list.2" style={{ ...theme.smallText, color: theme.darkText }} />
          </li>
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin' }}>
          <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
            <Text id="text-eligibility-check-list-3" label="instruction.eligibility.check.list.3" style={{ ...theme.smallText, color: theme.darkText }} />
          </li>
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin' }}>
          <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
            <Text id="text-eligibility-check-list-4" label="instruction.eligibility.check.list.4" style={{ ...theme.smallText, color: theme.darkText }} />
          </li>
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '12vmin' }}>
          <li style={{ paddingTop: '0vmin', paddingBottom: '0vmin', color: theme.darkText }}>
            <Text id="text-eligibility-check-list-1" label="instruction.eligibility.check.list.1" style={{ ...theme.smallText, color: theme.darkText }} />
          </li>
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '0vmin', paddingLeft: '18vmin' }}>
          <Text id="text-eligibility-check-list-1-sub" label="instruction.eligibility.check.list.1.sub" style={{ ...theme.smallText, color: theme.aptaRed1, fontSize: '0.8vw' }} />
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '12vmin' }}>
          <Courses />
        </div>
        <div style={{ ...theme.flexStart, justifyContent: 'flex-start', paddingTop: '1vmin', paddingLeft: '12vmin' }}>
          <AcademicYear />
        </div>
      </div>
      <div style={{ ...theme.flexCenter, paddingTop: '1vmin', paddingLeft: '5vmin' }}>
        <CourseRules />
      </div>
    </div>

    <div style={{ ...theme.flexCenter, alignContent: 'flex-end', paddingTop: '8vmin', paddingBottom: '3vmin' }}>
      <Button id="button-go-back" label="button.go.back" handleClick={onClickBack} style={{ ...theme.buttonBig, ...theme.buttonPrimary }} />
    </div>
  </div>
);

EligibilityPage.propTypes = {
  onClickBack: PropTypes.func.isRequired
};

export default EligibilityPage;
