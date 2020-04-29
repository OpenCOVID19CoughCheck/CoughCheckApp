import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

export function RecordButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonCircle}>
			<Image
				source={require('./assets/images/9db888760ab15a8676051b8b1004058becfb5fac.png')}
				resizeMode="contain"
				style={styles.ButtonImage}
			></Image>
		</TouchableOpacity>
	)
}

export function StopButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonCircle}>
			<Image
				source={require('./assets/images/aca2b4a65bf2f5707da6534147e3c39c26cf962e.png')}
				resizeMode="contain"
				style={styles.ButtonImage}
			></Image>
		</TouchableOpacity>
	)
}

export function PlayButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonCircle}>
			<Image
				source={require('./assets/images/60e2f18874c8709abac21a1e26221a388eb7ad2a.png')}
				resizeMode="contain"
				style={[styles.ButtonImage, styles.playButton]}
			></Image>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonCircle: {
		width: 150,
		height: 150,
		borderRadius: 750,
		backgroundColor: 'white',
		elevation: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: 'grey',
		shadowOpacity: 0.5,
		shadowRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	playButton: {
		marginLeft: 10,
	},
})
