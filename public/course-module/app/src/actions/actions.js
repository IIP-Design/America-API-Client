const axios = require('axios');
const types = require('../actions/types');

// Utility method to get data from id
function getData(data) {
  var keys = Object.keys(data);
  var result = keys.map((key) => {
    return data[key];
  })
  
  return result;
}

function formatQuiz(data) {
  var values = Object.values(data);
  var result = values.map((value) => {
    return value;
  })
  return result;
}

// let app know data being fetched
export function fetchRequest() {
  return {
    type: types.FETCH_REQUEST,
    payload: {
      isFetching: true
    }
  };
}

// let app know data error occurred during fetch
export function fetchError(error) {
  return {
    type: types.FETCH_ERROR,
    payload: {
      error: error,
      isFetching: false
    }
  };
}

// populate redux store upon successful fetch
export function fetchCourseComplete(data) {
  let course = data.entities.course[data.result];  // get course by id
  return {
    type: types.FETCH_COURSE_COMPLETE,
    payload: {
      isFetching: false,
      detail: course,
      lessons: getData(data.entities.lessons),
      instructors: getData(data.entities.instructors)
    }
  };
}

// set current lesson
export function setLesson(lesson) {
 return {
    type: types.SET_LESSON,
    payload: {
      detail: lesson,
      image: lesson.image,
      media: lesson.media,
      glossary: lesson.glossary,
      resources: lesson.resources
    }
  };
}

// set quiz
export function setQuiz(quiz) {
 return {
    type: types.SET_QUIZ,
    payload: {
      questions: formatQuiz(quiz)
    }
  };
}

// add user answer to userAnswers
export function answerQuestion(questionId) {
  const re = /^(q\d+)c(\d+)/;
  const match = questionId.match(re); 
  return {
    type: types.ANSWER_QUESTION,
    payload:  { 
      question: match[1], 
      answer: match[2] }
  };
}

    
