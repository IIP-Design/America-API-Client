export const loadState = () => {
	try {
		const serializedState = sessionStorage.getItem('state');  // change name of state to something less common
			if (serializedState === null ) {
				return undefined;
			}
			return JSON.parse(serializedState);
	} catch (err) {
			return undefined;
	}
}

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		sessionStorage.setItem('state', serializedState)

	} catch (err) {
			//
	}
}
