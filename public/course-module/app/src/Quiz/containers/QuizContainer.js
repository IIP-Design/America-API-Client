import React from 'react';
import { connect } from 'react-redux';

import Quiz from '../components/Quiz';


const { array, string } = React.PropTypes;


/*
 * The container component responsible for interacting with the Redux store.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const QuizContainer = (props) => <Quiz { ...props }/>;


QuizContainer.propTypes = {
  courseName: string,
  lessons: array,
  questions: array
};




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 *
 * @return {Object} QuizContainerPropsObject - Data from state mapped to the QuizContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app }) => {
  const course = app.data;
  const lessons = app.data.lessons;
  const questions = [].concat.apply([], lessons.map(lesson => lesson.quiz));


  /*
   * @typedef {Object} QuizContainerPropsObject
   * @property {String} courseName - The name of the course
   * @property {Array} lessons - The course lessons
   * @property {Array} questions - The course quiz questions
   */

  return {
    courseName: course.title,
    lessons,
    questions
  };
};


export default connect(mapStateToProps)(QuizContainer);

