import React from 'react';
import { Platform, View, Text, Button } from 'react-native';
import styles from './styles/index.js';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
	android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu'
});

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome to React Native!</Text>
			<Text style={styles.instructions}>To get started, edit App.js</Text>
			<Text style={styles.instructions}>{instructions}</Text>
			<div>
				<Text h1>Test Title</Text>
				<Button title='Test button'/>
			</div>
		</View>
	);
}
