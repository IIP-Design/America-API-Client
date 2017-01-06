/*
 * Check if the key 'state' exists in sessionStorage
 *
 * @todo Something more unique that 'state'
 *
 * @return {Object} - If 'state' exists, parse it and return the object
 * @return {undefined} - If 'state' does not exist, return undefined
 *
 * @since 1.0.0
 */

export const loadState = () => {
	try {
		const serializedState = sessionStorage.getItem('courses_state_1483731319800');  // change name of state to something less common

    if (serializedState === null) {
      return undefined;
    }

	  return JSON.parse(serializedState);
	} catch (err) {
	  return undefined;
	}
}




/*
 * Save state to sessionStorage
 *
 * @todo Something more unique that 'state'
 *
 * @since 1.0.0
 */

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		sessionStorage.setItem('courses_state_1483731319800', serializedState)
	} catch (err) {}
}

