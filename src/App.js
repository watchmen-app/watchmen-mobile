import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/store.js';
import AuthCheck from './AuthCheck.js';
import Login from './Login.js';
import Home from './Home.js';
import Record from './Record.js';

function App() {
	const RootNavigator = createSwitchNavigator(
		{
			authCheck: { screen: AuthCheck },
			login: { screen: Login },
			home: { screen: Home },
			record: { screen: Record }
		},
		{
			initialRouteName: 'authCheck'
		}
	);

	return <Provider store={store}><RootNavigator/></Provider>;
}

export default App;
