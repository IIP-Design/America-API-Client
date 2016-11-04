const { combineReducers } = require('redux');

// Reducers
const courseReducer = require('./courseReducer');
const lessonReducer = require('./lessonReducer');
const quizReducer 	= require('./quizReducer');

// Combine Reducers
var reducers = combineReducers({
    course: courseReducer,
    lesson: lessonReducer,
    quiz: quizReducer
});

module.exports = reducers;
