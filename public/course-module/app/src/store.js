const { createStore, applyMiddleware, compose } = require('redux');
const createLogger = require('redux-logger');
const thunk = require('redux-thunk').default;
const reducers =  require('./reducers');
const { loadState, saveState } = require('./localStorage');

// including thunk middleware in the event we want to return functions for async purposes
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

// Get redux store from localStorage
const persistedState = loadState();

// @toso: only include devToolsExtension/logger if environment is DEV
const store = createStore(
  reducers,
  persistedState,
  compose(
  	applyMiddleware(...middleware)
  )
);

// Listen for state changes and update state in localStorage
store.subscribe (() => {
	saveState(store.getState());
});

module.exports = store;


/* remove redux dev tools temporariyl
typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
? window.devToolsExtension()
: f => f
*/
