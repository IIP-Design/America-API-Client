import * as types from './actionTypes';


/*
 * A function for managing what information is sent to the Redux reducer
 *
 * @param {Object} [data] - Data from the ajax request to the api
 * @param {Object} [error] - An error, perhaps from the ajax request to the api
 *
 * @return {Object} state - A new state object passed to the Reduxs reducer
 */

export function requestData(data, error) {
  if (!data && !error) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: true
      }
    };
  }

  if (error) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: false,
        data: new Error()
      },
      status: 'error'
    };
  }

  if (data) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: false,
        data
      },
      status: 'success'
    };
  }
}

