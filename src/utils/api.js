import config from 'react-native-config';
import authToken from './authToken';

function apiUrl(endpoint) {
	if (process.env.NODE_ENV === 'development') {
		return `localhost:8080/${endpoint}`;
	}

	return `${config.API_URL}/${endpoint}`;
}

export default {
	login: async(username, password) => {
		try {
			const body = JSON.stringify({ username, password });
			const headers = { 'Content-Type': 'application/json' };
			const response = await fetch(apiUrl('login'), { method: 'POST', headers, body });
			const responseBody = await response.JSON();

			if (!response.ok) {
				throw responseBody;
			}
			else {
				await authToken.setToken(response.token);
				return authToken;
			}
		}
		catch (error) {
			throw error;
		}
	}
};
