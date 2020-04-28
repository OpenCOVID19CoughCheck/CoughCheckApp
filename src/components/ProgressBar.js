import React from 'react'
import ProgressBar from 'react-native-progress/Bar'

export default function ProgressBarComponent({ progress }) {
	return (
		<ProgressBar
			progress={progress}
			width={null}
			height={8}
			style={{ marginTop: 20, marginBottom: 20 }}
		/>
	)
}
