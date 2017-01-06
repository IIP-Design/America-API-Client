import React from 'react';
import * as types from './actionTypes';


/*
 * Action format
 *
 * {
 *   type: 'STRING',
 *   payload: {},
 *   status: 'success' || 'error'
 * }
 *
 */




/*
 * Set the user answer in the redux store
 *
 * @param {string} questionId - The question id
 * @param {Object} error - An error object
 *
 * @return {Object} payload - The action object sent to the quiz reducer
 *
 * @since 2.0.0
 */

export function setUserAnswer(questionId, choiceId, error) {
  if (error) {
    return {
      type: types.SET_USER_ANSWER,
      payload: new Error(),
      status: 'error'
    };
  }

  if (questionId && choiceId) {
    return {
      type: types.SET_USER_ANSWER,
      payload: {
        userAnswers: [{
          choiceId,
          questionId
        }]
      },
      status: 'success'
    };
  }
}




/*
 * An action to increment the number of attempts the user has taken the quiz
 *
 * @return {Object} - The action object sent to the quiz reducer
 *
 * @since 2.0.0
 */

export function incrementNumAttempts() {
  return {
    type: types.INCREMENT_NUM_ATTEMPTS
  }
}




/*
 * An action to reset the user's answers and number number of attempts at submitting the quiz
 *
 * @return {Object} - The action object sent to the quiz reducer
 *
 * @since 2.0.0
 */

export function resetQuiz() {
  return {
    type: types.RESET_QUIZ,
    payload: {
      userAnswers: [],
      numAttempts: 0
    }
  }
}

