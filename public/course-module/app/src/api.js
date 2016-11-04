const axios = require('axios');
const store = require('./store');
const { fetchRequest, fetchCourseComplete, fetchError, setLesson, setQuiz } = require('./actions/actions');
const { hashHistory } = require('react-router');
const { Schema, arrayOf, normalize } = require('normalizr');
const find  = require('lodash');
const shortid = require('shortid');

const ENDPOINT = `${args.url}/courses/`;  // from wp clinet plugin

// normalization schemas
const courseSchema 			 			= new Schema('course');
const lessonSchema     	 			= new Schema('lessons');
const quizSchema   			 			= new Schema('quiz');
const instructorSchema 	 			= new Schema('instructors');

// Generates unique ids
const generateID = () => {
	return shortid.generate();
}

lessonSchema.define({
  instructors: arrayOf(instructorSchema),
  quiz: arrayOf(quizSchema)  // idAttribute
});

courseSchema.define({
  lessons: arrayOf(lessonSchema)
 });

// Listen for hash changes and trigger rerender on lesson pages
// A change to the hash will not update redux store
// This is not the best way to handle the back and next browser buttons
hashHistory.listen((e) => {
	const path = e.pathname;
  const re = /^\/lesson\/(.+)/;
	const match = path.match(re);
  if(match) {
  	getLesson(match[1]);  // index 1 has the slug in the first capturing group $1
  }
});

/**
 * Get lesson from redux store by using its slug to find in lessons array
 * Dispatch event to update redux store
 */
export function getLesson(slug) {
	 const lessons = store.getState().course.lessons;
	 const lesson =  _.find(lessons, function(lesson) { return lesson.slug === slug; });
   store.dispatch(setLesson(lesson));
}

/**
 * Fetches course data by id and dispatches an event to update redux store
 * @todo Cache results
 * @todo Create a shared api call (remove getCourses method) and pass it an endpoint
 */
export function getCourse(id) {
	const dispatch = store.dispatch;

	dispatch(fetchRequest());
	let endpoint = ENDPOINT + id;

  // axios automatically formats to json
  return axios.get(endpoint)
	  .then(response => {
	  	const normalized = normalize(response.data.courses, courseSchema);
	  	const quiz = normalized.entities.quiz;
	   	dispatch( fetchCourseComplete(normalized));

	    if(quiz) {
	    	 dispatch(setQuiz(quiz));
	    }
	  })
	  .catch((err) => {
	  	dispatch(fetchError(err));  // may need to change this as errors are swallowed
	  });
}

/**
 * Fetches all course data using an array of courses ids
 * and dispatches an event to update redux store (will need to be updated if we  display course list page)
 */
export function getCourses(courseIds) {
	const dispatch = store.dispatch;

	dispatch( fetchRequest() );

	let endpoint = `app/src/data/courses.json?id=${ courseIds }`;

  return axios.get(endpoint)
	  .then(response => {
	  	const normalized = normalize(response.data, arrayOf(courseSchema));
	   	dispatch( fetchCoursesComplete(normalized));
	  })
	  .catch((err) => {
	  	 dispatch(fetchError(err));
	  });
}
