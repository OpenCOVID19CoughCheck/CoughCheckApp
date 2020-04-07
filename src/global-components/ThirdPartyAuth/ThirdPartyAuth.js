import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { render } from 'react-dom'

export const ThirdPartyAuth = (props) => {
	return (
		<View styles={styles.thirdPartyAuth}>
			<Button
				icon="google"
				style={styles.spaceM}
				mode="contained"
				// onPress={() => {
				// 	dispatch({
				// 		type: 'SIGN_IN',
				// 		token: 'TODO_SAVE_HERE_ANY_DATA_USEFUL_FOR_FUTURE_CALLS',
				// 	})
				// }}
			>
				Continue with Facebook
			</Button>
			<Button
				icon="facebook"
				style={styles.spaceM}
				mode="contained"
				// onPress={() => {
				// 	dispatch({
				// 		type: 'SIGN_IN',
				// 		token: 'TODO_SAVE_HERE_ANY_DATA_USEFUL_FOR_FUTURE_CALLS',
				// 	})
				// }}
			>
				Continue with Google
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	thirdPartyAuth: {
		height: 10,
	},
	spaceS: {
		marginBottom: 10,
	},
	spaceM: {
		marginBottom: 20,
	},
	spaceL: {
		marginBottom: 40,
	},
})
