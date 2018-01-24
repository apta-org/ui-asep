import React, { Component } from 'react';
import Select from '../select/component-select';
import { translate } from '../../resources/i18n/translate';

const getPlaceHolderLabel = () => translate('instruction.select.student.course');

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseSelected: ''
    };
    this.handleCourseSelection = this.handleCourseSelection.bind(this);
  }

  handleCourseSelection(e) {
    this.setState({
      courseSelected: e.target.value
    });
    this.props.handleSelectedCourse(e.target.value);
  }

  render() {
    return (
      <Select
        selectStyle="styled-select green semi-square"
        name={'select-course'}
        placeholder={getPlaceHolderLabel()}
        options={this.props.courseOptions}
        controlFunc={this.handleCourseSelection}
        selectedOption={this.state.courseSelected}
      />
    );
  }
}

Courses.propTypes = {
  courseOptions: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  })).isRequired,
  handleSelectedCourse: React.PropTypes.func.isRequired
};

export default Courses;
