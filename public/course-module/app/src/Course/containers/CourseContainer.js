import React from 'react';
import { connect } from 'react-redux';

import Course from '../components/Course';


const { object } = React.PropTypes;


/*
 * The Course container component responsible for interacting with the Redux store and passing state to the Course component as props.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const CourseContainer = (props) => <Course course={ props.course }/>;


CourseContainer.propTypes = {
  course: object
};




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 *
 * @return {Object} CourseContainerPropsObject - Data from state mapped to the Course component's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app }) => {
  const course = app.data;


  /*
   * @typedef {Object} CourseContainerPropsObject
   * @property {Object} course - The course data from state
   *
   * @since 2.0.0
   */

  return {
    course,
  };
};

export default connect(mapStateToProps)(CourseContainer);

