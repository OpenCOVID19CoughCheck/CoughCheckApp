import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import i18n from 'i18n-js'

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				style={styles.button}
				mode="contained"
				onPress={() => {
					navigation.navigate('CoughRecorder')
				}}
			>
				Record a Cough
			</Button>
			<Button
				style={styles.button}
				onPress={() => {
					navigation.navigate('Questionnaire')
				}}
			>
				{i18n.t('navigation.complete_questionnaire')}
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		marginBottom: 20,
	},
})
