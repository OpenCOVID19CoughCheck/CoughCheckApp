import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av'

const recordMode: Audio.AudioMode = {
  playsInSilentModeIOS: true,
  allowsRecordingIOS: true,
  staysActiveInBackground: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  shouldDuckAndroid: false,
  playThroughEarpieceAndroid: false,
}

const playMode: Audio.AudioMode = {
  playsInSilentModeIOS: true,
  allowsRecordingIOS: false,
  staysActiveInBackground: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  shouldDuckAndroid: false,
  playThroughEarpieceAndroid: false,
}

async function setupAudio({ onPermissionDenied, onPrepared, onError }) {
  let recording: Audio.Recording
  try {
    const { granted } = await Audio.requestPermissionsAsync()
    if (!granted) {
      onPermissionDenied()
    }
    await Audio.setAudioModeAsync(recordMode)
    recording = new Audio.Recording()
    // recording.setOnRecordingStatusUpdate(console.log)
    await recording.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    )
  } catch (e) {
    onError(e)
    return
  }
  onPrepared(recording)
}

export default function App() {
  const [recordingInstance, setRecordingInstance] = React.useState<
    Audio.Recording
  >()
  const [isRecording, setIsRecording] = React.useState(false)
  const [recordedSound, setRecordedSound] = React.useState<Audio.Sound>()

  React.useEffect(() => {
    setupAudio({
      onPermissionDenied: () => {
        console.error('Permissions were denied')
      },
      onError: (e) => {
        console.error('Error thrown', e)
      },
      onPrepared: setRecordingInstance,
    })
  }, [setRecordingInstance])

  async function handleStartRecording() {
    await recordingInstance.startAsync()
    setIsRecording(true)
  }

  async function handleStopRecording() {
    setIsRecording(false)
    await recordingInstance.stopAndUnloadAsync()
    console.log(recordingInstance.getURI())
    const { sound } = await recordingInstance.createNewLoadedSoundAsync()
    setRecordedSound(sound)
  }

  async function handlePlaySound() {
    await Audio.setAudioModeAsync(playMode)
    await recordedSound.replayAsync()
    // await Audio.setAudioModeAsync(recordMode)
  }

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

function RecordButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.recordButton}
      onPress={onPress}
    ></TouchableOpacity>
  )
}

function StopButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.recordButton} onPress={onPress}>
      <View style={styles.stopIcon} />
    </TouchableOpacity>
  )
}

function PlayButton({ onPress }) {
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
