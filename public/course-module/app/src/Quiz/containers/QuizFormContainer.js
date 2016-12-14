import React from 'react';
import { connect } from 'react-redux';

import { incrementNumAttempts, resetQuiz } from '../actions';
import QuizForm from '../components/QuizForm';


const { array, func, number, string } = React.PropTypes;


/*
 * The container component responsible for interacting with the Redux store.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const QuizFormContainer = (props) => <QuizForm { ...props }/>;


QuizFormContainer.propTypes = {
  userAnswers: array,
  numAttempts: number,
  courseName: string,
  lessons: array,
  questions: array,
  incrementNumAttempts: func,
  resetQuiz: func
};




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - State of the app as it appears in redux
 * @param {Object} state.quiz - State of the quiz as it appears in redux
 *
 * @return {Object} QuizFormContainerStatePropsObject - Data from state mapped to the QuizFormContainer's props
 */

const mapStateToProps = ({ quiz, app }) => {
  const userAnswers = quiz.userAnswers;
  const numAttempts = quiz.numAttempts;
  const courseName = app.data.title;
  const lessons = app.data.lessons;
  const questions = [].concat.apply([], lessons.map(lesson => lesson.quiz));

  /*
   * @typedef {Object} QuizFormContainerStatePropsObject
   * @property {Array} userAnswers - The users answers
   * @property {Number} numAttempts - The number of times the user has tried to submit the quiz
   * @property {String} courseName - The name of the current course
   * @property {Array} lessons - The course lessons
   * @property {Array} questions - The course quiz questions
   */

  return {
    userAnswers,
    numAttempts,
    courseName,
    lessons,
    questions
  };
};




/*
 * Standard Redux mapDispatchToProps function.
 *
 * @param {Function} dispatch - Redux dispatch function
 *
 * @return {Object} QuizContainerDispatchPropsObject - Object of callback functions mapped to the QuizFormContainer's props
 */

const mapDispatchToProps = (dispatch) => {

  /*
   * @typedef {Object} QuizContainerDispatchPropsObject
   * @property {Function} incrementNumAttempts - Increments numAttempts in state
   * @property {Function} resetQuiz - Reset the quiz information in state
   */

  return {
    incrementNumAttempts: () => {
      dispatch(incrementNumAttempts());
    },

    resetQuiz: () => {
      dispatch(resetQuiz());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizFormContainer);

