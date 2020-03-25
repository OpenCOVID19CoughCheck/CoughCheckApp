import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
	PlayButton,
	RecordButton,
	StopButton,
} from 'src/cough-recorder/cough-recorder-buttons'
import useAudioRecorder from 'src/cough-recorder/useAudioRecorder'

export default function CoughRecorderScreen() {
	const {
		recordedSound,
		handlePlaySound,
		recordingInstance,
		isRecording,
		handleStartRecording,
		handleStopRecording,
	} = useAudioRecorder()

	if (recordedSound) {
		return (
			<View style={styles.container}>
				<PlayButton onPress={handlePlaySound} />
			</View>
		)
	}

	if (recordingInstance) {
		return (
			<View style={styles.container}>
				{!isRecording ? (
					<RecordButton onPress={handleStartRecording} />
				) : (
					<StopButton onPress={handleStopRecording} />
				)}
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text>Please allow us to use your microphone</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
