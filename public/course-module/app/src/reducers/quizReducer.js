import * as types from '../actions/types';
const { find } = require('lodash');

const initialState = {
  questions: [],
  userAnswers: [],
  numAttempts: 0
};


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

const quizReducer = (state = initialState, action) => { 
	switch(action.type) {
    case types.SET_QUIZ: {
      return Object.assign({}, state, action.payload);
    }

    case types.ANSWER_QUESTION: {
    	return Object.assign({}, state, {
    		userAnswers: update(state, action.payload)
    	});
    }
  }
  return state;
}
// babel-plugin-transform-object-rest-spread
module.exports = quizReducer;

 // return Object.assign({}, state, 
	//       { 
		//       	userAnswers: {
		//       	'q1': 12, 
		//       	'q2': 24 
		//       	}
	//       },
	//       {
	//       	userAnswers: {
		//       	'q1': 12, 
		//       	'q2': 30 ,
		//       	'q3': 100 
	//       	}
	//       }
 //      );
 //return Object.assign({}, state, { userAnswers: {'q1': 12} });
 //
// let newVersion = {
//   ...previousVersion,
//   name: 'New Name', // Override the name property
//   address: {
//     ...previousVersion.address,
//     zipCode: '99999' // Update nested zip code
//   },
//   items: [
//     ...previousVersion.items,
//     {title: 'New Item'} // Add an item to the list of items
//   ]
// };