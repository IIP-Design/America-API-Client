import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import CourseReactGA from 'react-ga';

import { MainContainer, LessonLayout } from './App';
import { CourseContainer } from './Course';
import { LessonContainer } from './Lesson';
import { InstructorContainer } from './Instructor';
import { QuizContainer } from './Quiz';


/*
 * Initialize Google analytics.  Check for the global object on page
 * If it does not exist, initialize it
 *
 * @todo Figure out use case for fetching a UA code when not already embedded in page
 *
 * @since 2.1.0
 */

function checkForTrackingCode() {
  if (!typeof ga === 'function') {
    CourseReactGA.initialize( '[GOOGLE UA CODE]' );
  }
}

/*
 * Log the page view to analytics.  Only send information to analytics if on a non-index route.
 * getPathName function will return twice: once for index route and once for component route
 * The component route will return a string with '//' in the path.  We do not want to
 * send analytic data twice so only send data for first string
 *
 * @since 2.1.0
 */

function logPageView() {
  if( this.state ) {
    let pathname = getPathName(this.state.location);
    if( !~pathname.indexOf('//') ) {
      CourseReactGA.set({ page: pathname });
      CourseReactGA.pageview( pathname );
    } 
  }
}

/*
 * Extract pathname from state location information. 
 *
 * @param {Object} location - state location object
 *
 * @since 2.1.0
 */

function getPathName(location) {
  if( location.pathname == '/') {
   return window.location.pathname;
  } else {
   return `${window.location.pathname}${location.pathname}/`;
  }
}

checkForTrackingCode(); 

/*
 * Export the router
 *
 * @todo Consider removing the LessonLayout component
 *
 * @since 1.0.0
 */

module.exports = (
  <Router history={ hashHistory } onUpdate={ logPageView }>
    <Route component={ MainContainer }>
      <Route path='/'>
        <IndexRoute component={ CourseContainer }  />
        <Route path='lesson' component={ LessonLayout }>
          <Route path=':lessonSlug' component={ LessonContainer } />
        </Route>
        <Route path='/instructors/:slug' component={ InstructorContainer } />
        <Route path='quiz' component={ QuizContainer } />
      </Route>
    </Route>
  </Router>
);
