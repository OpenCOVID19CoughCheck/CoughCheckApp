import React from 'react'
import { Audio } from 'expo-av'

import { recordMode, playMode } from './deviceAudioModes'

let recording: Audio.Recording

async function setupAudio({ onPermissionDenied, onPrepared, onError }) {
	try {
		const { granted } = await Audio.requestPermissionsAsync()
		if (!granted) {
			onPermissionDenied()
		}
		await Audio.setAudioModeAsync(recordMode)
		recording = new Audio.Recording()
		await recording.prepareToRecordAsync(
			Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
		)
	} catch (e) {
		onError(e)
		return
	}
	onPrepared(recording)
}

export default function useAudioRecorder() {
	const [recordingInstance, setRecordingInstance] = React.useState<
		Audio.Recording
	>()
	const [isRecording, setIsRecording] = React.useState(false)
	const [recordedSound, setRecordedSound] = React.useState<Audio.Sound>()

	React.useEffect(() => {
		setupAudio({
			onPermissionDenied: () => {
				console.error('Permissions were denied') // TODO: Report and handle this
			},
			onError: (e) => {
				console.error('Error thrown', e) // TODO: Send an error report
			},
			onPrepared: setRecordingInstance,
		})
		return async () => {
			if (recording) {
				const status = await recording.getStatusAsync()
				if (status.isRecording || status.canRecord) {
					return recording.stopAndUnloadAsync()
				}
			}
		}
	}, [setRecordingInstance])

	async function handleStartRecording() {
		await recordingInstance.startAsync()
		setIsRecording(true)
	}

	async function handleStopRecording() {
		setIsRecording(false)
		await recordingInstance.stopAndUnloadAsync()
		console.log(recordingInstance.getURI()) // TODO: Upload to OpenHumans
		const { sound } = await recordingInstance.createNewLoadedSoundAsync()
		setRecordedSound(sound)
	}

	async function handlePlaySound() {
		await Audio.setAudioModeAsync(playMode)
		await recordedSound.replayAsync()
	}

	return {
		isRecording,
		handleStartRecording,
		handleStopRecording,
		handlePlaySound,
		recordedSound,
		recordingInstance,
	}
}
