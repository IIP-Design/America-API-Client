const React = require('react');
const MainLayout = require('./MainLayout');
const LessonLayout = require('./LessonLayout');
const Course = require('./Course');
const Lesson = require('./Lesson');
const Quiz = require('./Quiz');
const Instructor = require('./Instructor');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const App = React.createClass({
  render: function() {
    return (
      <Router history={ hashHistory }>
        <Route component={ MainLayout }>
          <Route path='/'>
            <IndexRoute staticName={ true } component={ Course } />
            <Route component={ LessonLayout }>
              <Route path=':lessonSlug' staticName={ true } component={ Lesson } />
            </Route>
            <Route path='quiz' component={ Quiz } />
            <Route path='/instructors/:slug' component={ Instructor } />
          </Route>
        </Route>
      </Router>
    );
  }
});

module.exports = App;
