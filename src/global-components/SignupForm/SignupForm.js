import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { Checkbox } from '../Checkbox/Checkbox.js'
import { AppText } from '../AppText/AppText.js'

export const SignupForm = (props) => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	return (
		<View>
			<TextInput
				style={[styles.textInput, styles.spaceS]}
				onChangeText={(email) => setEmail(email)}
				value={email}
				placeholder={'Username or Email'}
				secureTextEntry
				// keyboardType="email-address"
				// autoCapitalize="none"
				// autoCorrect={false}
				// returnKeyType="Next"
				// onSubmitEditing={() => this.passwordInput.focus()}
			/>
			<TextInput
				style={[styles.textInput, styles.spaceS]}
				onChangeText={(password) => setPassword(password)}
				value={password}
				placeholder={'Password'}
				secureTextEntry
				// returnKeyType="Go"
				// ref={(input) => this.passwordInput = input}
			/>
			<Button
				style={[styles.button, styles.spaceM]}
				contentStyle={{ height: 60 }}
				mode="contained"
				// onPress={() => {
				// 	dispatch({
				// 		type: 'SIGN_IN',
				// 		token: 'TODO_SAVE_HERE_ANY_DATA_USEFUL_FOR_FUTURE_CALLS',
				// 	})
				// }}
			>
				Sign up
			</Button>
			<AppText styles={styles.spaceM}>All your data will be anonymised</AppText>
			<Checkbox />
		</View>
	)
}

const styles = StyleSheet.create({
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
