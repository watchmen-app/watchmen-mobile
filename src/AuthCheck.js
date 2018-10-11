import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/index.js';
import authToken from './utils/authToken.js';
import { actionCreators } from './store/ducks.js';

class AuthCheck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tokenError: false
		};
	}

	componentDidMount() {
		authToken.getToken((error, token) => {
			if (error) {
				this.setState({ tokenError: true });
			}
			else if (token) {
				this.props.setAuthToken(token);
				this.props.navigation.navigate('home');
			}
			else {
				this.props.navigation.navigate('login');
			}
		});
	}

	render() {
		if (this.state.tokenError) {
			return <Text h1>There was an error starting the app. Please try again later</Text>;
		}

		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle='default' />
			</View>
		);
	}
}

AuthCheck.propTypes = {
	navigation: PropTypes.object.isRequired,
	setAuthToken: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	setAuthToken: actionCreators.setAuthToken
};


export default connect(null, mapDispatchToProps)(AuthCheck);
