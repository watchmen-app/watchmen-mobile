export const actions = {
	SET_AUTH_TOKEN: 'SET_AUTH_TOKEN'
};

export const actionCreators = {
	setAuthToken: token => ({ type: actions.setAuthToken, token })
};

const initialState = {
	authToken: null
};

export function reducer(state, action) {
	if (!state) {
		return initialState;
	}

	switch (action.type) {
		case actions.SET_AUTH_TOKEN: {
			return { ...state, token: action.token };
		}
		default: {
			return state;
		}
	}
}
