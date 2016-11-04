import * as types from '../actions/types';

const initialState = {
  detail: {},
  media: {},
  image: {},
  resources: [],
  glossary: []
};

const lessonReducer = (state = initialState, action) =>  { 
 
  switch(action.type) {
    case types.SET_LESSON:
      return Object.assign({}, state, action.payload);
  }

  return state;
}

module.exports = lessonReducer;