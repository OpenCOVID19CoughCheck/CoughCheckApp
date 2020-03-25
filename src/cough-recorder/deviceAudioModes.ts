import { Audio } from 'expo-av'

export const recordMode: Audio.AudioMode = {
	playsInSilentModeIOS: true,
	allowsRecordingIOS: true,
	staysActiveInBackground: false,
	interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
	interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
	shouldDuckAndroid: false,
	playThroughEarpieceAndroid: false,
}

export const playMode: Audio.AudioMode = {
	playsInSilentModeIOS: true,
	allowsRecordingIOS: false,
	staysActiveInBackground: false,
	interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
	interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
	shouldDuckAndroid: false,
	playThroughEarpieceAndroid: false,
}
