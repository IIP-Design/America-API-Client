import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import store from '../../store';
import * as actions from '../actions';
import MainLayout from '../components/MainLayout';


/*
 * The container component that is responsible for interacting with the Redux store
 *
 * @since 2.0.0
 */

const MainContainer = React.createClass({

  /*
   * When the MainContainer component mounts, it grabs the course id, performs an ajax request, and passes the response off to redux
   *
   * @todo We might consider moving this step earlier in the application's lifecyle
   */

  componentDidMount() {
    const root = document.getElementById('course-container');
    const endpoint = `${ args.url }/courses/${ root.dataset.courseId }`;

    store.dispatch(actions.requestData());

    axios.get(endpoint)
      .then(response => store.dispatch(actions.requestData(response.data.courses)))
      .catch(error => store.dispatch(actions.requestData(undefined, error=error)));
  },


  render() {
    // On first render, if courses isn't on props, return null to avoid
    // undefined prop messages throughout the call stack

    if (!this.props.course) {
      return null
    }

    const props = this.props;

    return (
      <MainLayout children={ props.children } isFetching={ props.isFetching }/>
    );
  }
});




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 *
 * @return {Object} MainContainerPropsObject - Data from state mapped to the MainContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app }) => {
  const course = app.data;
  const isFetching = app.isFetching;


  /*
   * @typedef {Object} MainContainerPropsObject
   * @property {Boolean} isFetching - Is the application in the state of fetching data
   * @property {Object} course - The course data from state
   */

  return {
    isFetching,
    course
  };
};


export default connect(mapStateToProps)(MainContainer);

