const React = require('react');
const { Router, Route, IndexRoute, hashHistory } = require('react-router'); 

// Layouts
const MainLayout = require('./modules/layouts/MainLayout');
const LessonLayout = require('./modules/layouts/LessonLayout');

// Pages
//const CourseList = require('./modules/CourseList');
const Course = require('./modules/Course');
const Lesson = require('./modules/Lesson');
const Instructor = require('./modules/Instructor');
const Quiz = require('./modules/Quiz');
const CertificateForm = require('./modules/CertificateForm');

// Had to add 'lesson' to the path as path='quiz'  
// resolves to path=':lessonSlug' as well
module.exports = (
  <Router history={ hashHistory }>
    <Route component={ MainLayout }>
      <Route path='/'>
        <IndexRoute  component={ Course }  />
        <Route path='lesson' component={ LessonLayout }>
          <Route path=':lessonSlug' component={ Lesson } />
        </Route>
        <Route path='/instructors/:slug' component={ Instructor } />
        <Route path='quiz' component={ Quiz } />
         <Route path='certificate' component={ CertificateForm } />
      </Route>
    </Route>
  </Router>
);
