import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export function RecordButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.recordButton} onPress={onPress}>
			<Icon name="microphone" size={50} color="#333" />
		</TouchableOpacity>
	)
}

export function StopButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.recordButton} onPress={onPress}>
			<Icon name="stop" size={50} color="#333" />
		</TouchableOpacity>
	)
}

export function PlayButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.recordButton} onPress={onPress}>
			<Icon name="play" size={50} color="#333" style={{ marginLeft: 10 }} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111',
		alignItems: 'center',
		justifyContent: 'center',
	},
	recordButton: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'crimson',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
