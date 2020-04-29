import React from 'react'
import useAudioRecorder from 'src/cough-recorder/useAudioRecorder'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {
	StyledText,
	StyledTextLarge,
	StyledTextBold,
} from 'src/components/styledComponents'
import SocialShareComponent from 'src/components/SocialShareComponent'
import ButtonCTALarge from 'src/components/ButtonCTALarge'
import {
	RecordButton,
	StopButton,
	PlayButton,
} from 'src/cough-recorder/recorder-screen-buttons'

export default function RecorderScreen() {
	const {
		recordedSound,
		recordingInstance,
		isRecording,
		handleStartRecording,
		handleStopRecording,
		handlePlaySound,
	} = useAudioRecorder()

	if (recordedSound) {
		return (
			<View style={styles.wrapper}>
				<View style={styles.middleRecorderWrapper}>
					<PlayButton onPress={handlePlaySound} />
					<StyledTextLarge>Cough recorded!</StyledTextLarge>
				</View>
				<View style={styles.submitWrapper}>
					<StyledText style={{ marginBottom: 50 }}>
						Check the sound has recorded well, and then press Submit
					</StyledText>
					<ButtonCTALarge
						text="Submit"
						onPress={() => {
							console.log('onPress TODO')
						}}
					/>
					<TouchableOpacity onPress={() => {}}>
						<StyledTextBold>Re-record</StyledTextBold>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.wrapper}>
			{/* Test if we have Microphone access by seeing if recordingInstance has mounted */}
			{recordingInstance ? (
				<>
					{/* Test if we are Recording yet */}
					{!isRecording ? (
						<View style={styles.middleRecorderWrapper}>
							<RecordButton onPress={handleStartRecording} />
							<StyledTextLarge>Tap to record</StyledTextLarge>
						</View>
					) : (
						<View style={styles.middleRecorderWrapper}>
							<StopButton onPress={handleStopRecording} />
							<StyledTextLarge>Recording...</StyledTextLarge>
						</View>
					)}
					<SocialShareComponent />
				</>
			) : (
				<View>
					<StyledText>Please allow us to use your microphone</StyledText>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		paddingTop: '5%',
		paddingBottom: '5%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	middleRecorderWrapper: {
		marginBottom: '10%',
		flexShrink: 1,
		flexBasis: 500,
		justifyContent: 'center',
		alignItems: 'center',
	},
	submitWrapper: {
		flexGrow: 1,
		justifyContent: 'space-evenly',
	},
})
