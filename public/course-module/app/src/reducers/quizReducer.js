import * as types from '../actions/types';
const { find } = require('lodash');

const initialState = {
  questions: [],
  userAnswers: [],
  numAttempts: 0
};

/*
	If question has already been answered, update answer else just add to new response to array
 */
const update = (state, response) => {
	let userAnswers = state.userAnswers.slice(0);
	let userAnswer = _.find(userAnswers, function(o) { return o.question == response.question; });
	if( userAnswer ) {
		userAnswer.answer = response.answer;
	} else {
		userAnswers.push(response);
	}
	return userAnswers;
}

// NOTE: To use the object spread operatr ( { x, y, ...z } ) which is still in Stage 2 proposal for ECMAScript
// Will need to transpile.  Install babel-plugin-transform-object-rest-spread plugin
const quizReducer = (state = initialState, action) => {
	switch(action.type) {
    case types.SET_QUIZ: {
      return Object.assign({}, state, action.payload);
    }

    case types.ANSWER_QUESTION: {
    	return Object.assign({}, state, {
    		userAnswers: update(state, action.payload)
    	});
    	return state;
    }
  }

  return state;
}
// babel-plugin-transform-object-rest-spread
module.exports = quizReducer;

