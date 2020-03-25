import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export function RecordButton({ onPress }) {
	return (
		<TouchableOpacity
			style={styles.recordButton}
			onPress={onPress}
		></TouchableOpacity>
	)
}

export function StopButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.recordButton} onPress={onPress}>
			<View style={styles.stopIcon} />
		</TouchableOpacity>
	)
}

export function PlayButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.recordButton} onPress={onPress}>
			<Text style={styles.playIcon}>▶︎</Text>
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
	stopIcon: {
		width: 60,
		height: 60,
		backgroundColor: '#333',
	},
	playIcon: {
		fontSize: 92,
		color: '#333',
	},
})
