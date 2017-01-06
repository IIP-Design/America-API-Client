import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { MainContainer, LessonLayout } from './App';
import { CourseContainer } from './Course';
import { LessonContainer } from './Lesson';
import { InstructorContainer } from './Instructor';
import { QuizContainer } from './Quiz';


/*
 * Export the router
 *
 * @todo Consider removing the LessonLayout component
 *
 * @since 1.0.0
 */

module.exports = (
  <Router history={ hashHistory }>
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
