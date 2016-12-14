import React from 'react';
import { connect } from 'react-redux';

import { setUserAnswer } from '../actions';
import RadioChoice from '../components/RadioChoice';


const { array, func, number, object, string } = React.PropTypes;


/*
 * The container component responsible for interacting with the Redux store.
 *
 * @since 2.0.0
 */

const RadioChoiceContainer = React.createClass({
  propTypes: {
    handleChange: func,
    userAnswers: array,
    choice: object,
    questionId: string,
    choiceId: string
  },


  /*
   * Filter the answer from state that matches props.choiceId
   *
   * @param {Array} answers - The answers from state
   *
   * @return {Object} answer - The filtered answer from state
   *
   * @since 2.0.0
   */

  getAnswer(answers) {
    return answers.filter((answer) => answer.choiceId === this.props.choiceId)[0];
  },


  /*
   * Programmatically set 'checked' attribute on the radio button
   *
   * @since 2.0.0
   */

  render() {
    const props = this.props;
    const answer = this.getAnswer(props.userAnswers) || {};

    return (
      <RadioChoice checked={ (('choiceId' in answer)) ? answer.choiceId : '' } { ...props } />
    );
  }
});




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.quiz - The quiz object in the Redux store
 *
 * @return {Object} RadioChoicContainerStatePropsObject - Data from state mapped to the RadioChoiceContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ quiz }) => {
  const userAnswers = quiz.userAnswers;

  /*
   * @typedef {Object} RadioChoicContainerStatePropsObject
   * @property {Array} userAnswers - The user's answers
   */

  return {
    userAnswers
  };
};




/*
 * Standard Redux mapDispatchToProps function.
 *
 * @param {Function} dispatch - Redux dispatch function
 *
 * @return {Object} RadioChoiceContainerDispatchPropsObject - Object of callback functions mapped to the RadioChoiceContainer's props
 */

const mapDispatchToProps = (dispatch) => {

  /*
   * @typedef {Object} RadioChoiceContainerDispatchPropsObject
   * @property {Function} handleChange - A callback that updates a user's answer in state
   */

  return {
    handleChange: e => {
      const choiceId = e.target.id;
      const questionId = document.getElementById(choiceId).name;

      dispatch(setUserAnswer(questionId, choiceId));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RadioChoiceContainer);

