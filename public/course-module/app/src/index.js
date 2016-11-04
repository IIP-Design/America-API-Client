const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('./store');
const routes = require('./routes');

const root = document.getElementById('course-container');

// Provider is a top-level component that wraps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render (
  <Provider store={ store }>{ routes }</Provider>,
  root
);