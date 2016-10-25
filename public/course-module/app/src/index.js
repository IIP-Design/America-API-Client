const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./modules/App');
const root = document.getElementById('course-container');

// Temporary until Redux in place
const courseId = localStorage.getItem('courseId');

if (courseId === null || courseId !== root.dataset.courseId) {
  localStorage.setItem('courseId', root.dataset.courseId);
}

ReactDOM.render(
  <App { ...root.dataset } />,
  root
);
