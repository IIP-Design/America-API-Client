import React from 'react';

import * as types from './actionTypes';

const initialState = {
  userAnswers: [],
  numAttempts: 0
};




/*
 * Get the indexOf an object in an array of objects
 *
 * @param {Array} arr - The array of objects
 * @param {String} key - The key of the field you want to check
 * @param {String} id - The value you want to match against
 *
 * @return {Number} - Return the index of the object
 */

const indexOfObjectInArray = (arr, key, id) => {
  return arr.map(item => item[key] === id).indexOf(true);
};




/*
 * Slice before an index, slice after index, concat the slices. All return new arrays.
 *
 * @param {Array} arr - The original array you want to remove an item from
 * @param {Number} index - The index of the item you want to remove
 *
 * @return {Array} - A new array with the desired item removed
 */

const pureSplice = (arr, index) => {
  return arr.slice(0, index).concat(arr.slice(index + 1));
};




/*
 * Remove an item from an array safely and purely
 *
 * @param {Array} arr - The array
 * @param {Number|Function} index - The index of the item or a callback that returns the index
 *
 * @return {Array} - An array with the item removed or the original array if the item wasn't found
 */

const removeItem = (arr, index) => {
  if (!index) { return arr };

  // Enable index to a possible callback
  if (typeof index === 'function') {
    index = index();
  }

  if (index !== -1) {
    return pureSplice(arr, index);
  }

  return arr;
};




/*
 * Safely update (or set) the userAnswers array in state
 *
 * @param state {Object} - Current state of the application
 * @param payload {Object} - New state of the application
 *
 * @return {Array} - A pure, updated array of userAnswers
 */

const updateUserAnswers = (state, payload) => {
  const userAnswersFromState = state.userAnswers;
  const newAnswer= payload.userAnswers[0];

  let slicedUserAnswers;

  // Check if questionId is already in state. If so, get a new array without it.
  if (userAnswersFromState.length > 0) {
    slicedUserAnswers = removeItem(userAnswersFromState, () => indexOfObjectInArray(userAnswersFromState, 'questionId', newAnswer.questionId));
  }

  if (slicedUserAnswers) {
    return slicedUserAnswers.concat(newAnswer);
  }

  return userAnswersFromState.concat(newAnswer);
};




/*
 * The main reducer for Quiz
 *
 * @param state {Object} - The current state
 * @param action {Object} - The action triggered
 *
 * @return {Object} - The new state of the application
 */

export const quizReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USER_ANSWER:
      return Object.assign({}, state, {
        userAnswers: updateUserAnswers(state, action.payload),
      });

    case types.INCREMENT_NUM_ATTEMPTS:
      return Object.assign({}, state, {
        numAttempts: state.numAttempts + 1
      });

    case types.RESET_QUIZ:
      return Object.assign({}, state, action.payload);
  }

  return state;
};

