import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { actionCreators } from './store/ducks.js';
import styles from './styles/index.js';
import api from './utils/api.js';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			loginError: false,
			loginInProgress: false
		};

		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onLoginClick = this.onLoginClick.bind(this);
	}

	onUsernameChange(text) {
		this.setState({ username: text });
	}

	onPasswordChange(text) {
		this.setState({ password: text });
	}

	onLoginClick() {
		const { username, password } = this.state.username;
		this.setState({ loginInProgress: true });
		api.login(username, password).then(
			(token) => {
				this.props.setAuthToken(token);
				this.props.navigation.navigate('home');
			},
			() => {
				this.setState({ loginInProgress: false, loginError: true });
			}
		);
	}

	render() {
		let disabledButtonProps = {};
		let errorMessage;

		if (this.state.loginInProgress) {
			disabledButtonProps = {
				disabled: true,
				loading: true
			};
		}

		if (this.state.loginError) {
			errorMessage = <Text style={styles.loginError}>There was a problem logging in. Please check your username and password and make sure you have a data or internet connection.</Text>;
		}

		return (
			<View style={[styles.loginContainer]}>
				<View>
					<View style={styles.loginInputContainer}>
						<Input
							style={styles.loginInput}
							label='Username'
							placeholder='Username'
							leftIcon={{ name: 'person' }}
							containerStyle={styles.widthFull}
							onChangeText={this.onUsernameChange}
						/>
					</View>
					<View style={styles.loginInputContainer}>
						<Input
							style={styles.loginInput}
							label='Password'
							placeholder='Password'
							leftIcon={{ name: 'lock' }}
							onChangeText={this.onUsernameChange}
							secureTextEntry
						/>
					</View>
					{errorMessage}
					<View>
						<Button
							title='Login'
							icon={{ name: 'arrow-upward' }}
							onPress={this.onLoginClick}
							{...disabledButtonProps}
						/>
					</View>
				</View>
			</View>
		);
	}
}

Login.propTypes = {
	navigation: PropTypes.object.isRequired,
	setAuthToken: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	setAuthToken: actionCreators.setAuthToken
};

export default connect(null, mapDispatchToProps)(Login);
