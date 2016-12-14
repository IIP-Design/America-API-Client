import React from 'react';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';

import Lesson from '../components/Lesson';


const { array } = React.PropTypes;



/*
 * The Lesson container component responsible for interacting with the Redux store and passing state to the Lesson conmponent as props.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const LessonContainer = (props) => <Lesson { ...props }/>;


LessonContainer.propTypes = {
  lessons: array
};




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 * @param {String} props.params.lessonSlug - The url slug from the router
 *
 * @return {Object} LessonContainerPropsObject - Data from state mapped to the Lesson component's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app }, { params: { lessonSlug } }) => {
  const course = app.data;
  const lessons = course.lessons;
  const lesson = lessons.filter(lesson => lesson.slug === lessonSlug)[0];
  const index = _.findIndex(lessons, o => o.id == lesson.id);


  /*
   * @typedef {Object} LessonContainerPropsObject
   * @property {String} courseTitle - The course title from state
   * @property {Number} lessonIndex - The lesson's index from the course.lesons array
   * @property {Array} lessons - The course lessons array
   * @property {Object} lesson - The current lesson object
   *
   * @since 2.0.0
   */

  return {
    courseTitle: course.title,
    lessonIndex: index,
    lessons,
    lesson
  };
};


export default connect(mapStateToProps)(LessonContainer);

