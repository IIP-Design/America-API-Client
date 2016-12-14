import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { loadState, saveState } from './sessionStorage';
import { appReducer } from './App';
import { quizReducer } from './Quiz';


/*
 * Including thunk middleware in the event we want to return functions for async purposes
 *
 * @since 1.0.0
 */

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}




/*
 * Get Redux store from sessionStorage
 *
 * @since 1.0.0
 */

const persistedState = loadState();




/*
 * Combine Redux reducers
 *
 * @since 1.0.0
 */

const reducers = combineReducers({
  app: appReducer,
  quiz: quizReducer
});




/*
 * Create the Redux store
 *
 * @todo: only include devToolsExtension/logger if environment is DEV
 *
 * @since 1.0.0
 */

const store = createStore(
  reducers,
  persistedState,
  compose(
  	applyMiddleware(...middleware)
  )
);


// Listen for state changes and update state in sessionStorage
store.subscribe(() => {
	saveState(store.getState());
});


/* remove redux dev tools temporarily
typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
? window.devToolsExtension()
: f => f
*/


export default store;

