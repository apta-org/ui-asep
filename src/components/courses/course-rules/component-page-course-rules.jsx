import React from 'react';
import theme from '../../../theme';
import { translate } from '../../../resources/i18n/translate';

const getPlaceHolderLabel = labelId => translate(labelId);

const renderCourseRule = rule => (
  <div key={rule.id} style={{ ...theme.row, flex: 80, overflow: 'hidden', padding: '0.4vw 0vw 0.4vw 1vw', border: '1px solid #1d2328' }}>
    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '60vmin' }}>
      {rule.requiredCourseDescription}
    </div>
    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '10vmin', borderLeft: '1px solid #1d2328', paddingLeft: '1vmin' }}>
      {rule.qualifiedMarks}%
    </div>
  </div>
);

const RulesByCoursePage = ({ rules }) => (
  (rules && rules.length > 0) ?
    <div style={{ ...theme.smallText, color: theme.darkText }}>
      <div style={{ ...theme.row, flex: 80, overflow: 'auto', padding: '0.4vw 0vw 0.4vw 1vw', border: '2px solid #1d2328' }}>
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '60vmin', fontWeight: '600' }}>
          {getPlaceHolderLabel('text.header.column.course')}
        </div>
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '10vmin', borderLeft: '1px solid #1d2328', paddingLeft: '1vmin', fontWeight: '600' }}>
          {getPlaceHolderLabel('text.header.column.marks')}
        </div>
      </div>
      <div
        style={{
          ...theme.flexStart,
          ...theme.column,
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          border: '1px solid #1d2328'
        }}
      >
        {
          rules.map(rule => (
            renderCourseRule(rule)
          ))
        }
      </div>
    </div> : <div />
);

RulesByCoursePage.propTypes = {
  rules: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    course: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    requiredCourseDescription: React.PropTypes.string.isRequired,
    academicYear: React.PropTypes.number.isRequired,
    qualifiedMarks: React.PropTypes.number.isRequired
  })).isRequired
};

RulesByCoursePage.defaultProps = {
  rules: []
};

export default RulesByCoursePage;
