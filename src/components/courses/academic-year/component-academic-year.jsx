import React, { Component } from 'react';
import Select from '../../select/component-select';
import { translate } from '../../../resources/i18n/translate';

const getPlaceHolderLabel = () => translate('instruction.select.student.academic.year');

class AcademicYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      academicYearSelected: ''
    };
    this.handleAcademicYearSelection = this.handleAcademicYearSelection.bind(this);
  }

  handleAcademicYearSelection(e) {
    this.setState({
      academicYearSelected: e.target.value
    });
    this.props.handleSelectedAcademicYear(this.props.course, e.target.value);
  }

  render() {
    return (
      (this.props.course && this.props.course.name) ?
        <Select
          selectStyle="styled-select green semi-square"
          name={'select-academic-year'}
          placeholder={getPlaceHolderLabel()}
          options={this.props.academicYearOptions}
          controlFunc={this.handleAcademicYearSelection}
          selectedOption={this.state.academicYearSelected}
        /> : <div style={{ paddingBottom: '4vmin' }} />
    );
  }
}

AcademicYear.propTypes = {
  academicYearOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  })).isRequired,
  course: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    length: React.PropTypes.number.isRequired,
    rank: React.PropTypes.number.isRequired,
    minimumMarks: React.PropTypes.number.isRequired,
    allowedForProgram: React.PropTypes.bool.isRequired
  }).isRequired,
  handleSelectedAcademicYear: React.PropTypes.func.isRequired
};

AcademicYear.defaultProps = {
  course: {
    id: '',
    name: '',
    description: '',
    length: 0,
    rank: 0,
    minimumMarks: 0,
    allowedForProgram: false
  }
};

export default AcademicYear;
