import { AsyncStorage } from 'react-native';

const tokenKey = 'authToken';

export default {
	getToken: callback => AsyncStorage.getItem(tokenKey, callback),
	setToken: (token, callback) => AsyncStorage.setItem(tokenKey, token, callback),
	clearToken: callback => AsyncStorage.removeItem(tokenKey, callback)
};
