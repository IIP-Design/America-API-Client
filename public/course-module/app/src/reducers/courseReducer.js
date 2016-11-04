import * as types from '../actions/types';

const initialState = {
  detail: {},
  lessons: [],
  instructors: [],      // all compiled and displayed at the course level
  isFetching: false,
};

const courseReducer = (state = initialState, action) =>  {
  switch(action.type) {
    case types.FETCH_COURSE_COMPLETE:
     return Object.assign({}, state, action.payload);

    case types.FETCH_REQUEST:
      return Object.assign({}, state, action.payload);
  }

  return state;
}

module.exports = courseReducer;
