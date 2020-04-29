import React from 'react'
import useAudioRecorder from 'src/cough-recorder/useAudioRecorder'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
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
} from 'src/cough-recorder/RecorderScreenButtons'

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
				<TouchableOpacity onPress={() => {}}>
					<StyledTextBold style={styles.topwrapper}>Re-record</StyledTextBold>
				</TouchableOpacity>
				<View style={styles.recorderWrapper}>
					<View style={styles.buttonWrapper}>
						<PlayButton onPress={handlePlaySound} />
					</View>
					<StyledTextLarge>Cough recorded!</StyledTextLarge>
				</View>
				<View style={styles.bottomwrapper}>
					<StyledText>
						Check the sound has recorded correctly, and then press Submit
					</StyledText>
					<ButtonCTALarge
						text="Submit"
						onPress={() => {
							console.log('onPress TODO')
						}}
					/>
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
						<View style={styles.recorderWrapper}>
							<View style={styles.buttonWrapper}>
								<RecordButton onPress={handleStartRecording} />
							</View>
							<StyledTextLarge>Tap to record</StyledTextLarge>
						</View>
					) : (
						<View style={styles.recorderWrapper}>
							<View style={styles.buttonWrapper}>
								<StopButton onPress={handleStopRecording} />
							</View>
							<StyledTextLarge>Recording...</StyledTextLarge>
						</View>
					)}
					<View style={styles.bottomwrapper}>{/* <SocialShareComponent/> */}</View>
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
		// paddingTop: 50,
		paddingBottom: 50,
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-end',
		width: '100%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	buttonWrapper: {
		alignItems: 'center',
		marginBottom: 30,
	},
	recorderWrapper: {
		// For layout testing only:
		// backgroundColor: '#eee',
	},
	bottomwrapper: {
		height: '40%',
		justifyContent: 'space-evenly',
	},
	topwrapper: {
		marginBottom: 40,
	},
})
