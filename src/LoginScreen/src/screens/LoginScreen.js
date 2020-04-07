import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppText } from '../../../global-components/AppText/AppText.js'
import { SignupForm } from '../../../global-components/SignupForm/SignupForm.js'
import { ThirdPartyAuth } from '../../../global-components/ThirdPartyAuth/ThirdPartyAuth.js'
import { Logo } from '../../../global-components/Logo/Logo.js'

function LoginScreen(props) {
	// const [email, setEmail] = React.useState('')
	// const [password, setPassword] = React.useState('')
	// const [checked, toggleChecked] = React.useState('true')
	// Might need to raise the state up here?

	return (
		<View style={styles.root}>
			<Logo />
			{/* How can I pass CSS into one of these components? */}
			<SignupForm style={styles.SignupForm} />

			<View>
				<AppText>OR</AppText>
			</View>
			<ThirdPartyAuth style={styles.ThirdPartyAuth} />

			<View>
				<AppText>Have an account? Sign In</AppText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		paddingTop: 100,
		paddingBottom: 50,
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'space-around',
		width: '80%',
		marginLeft: '10%',
	},
	Logo: {
		marginTop: 100,
	},
	SignupForm: {
		flex: 10,
	},
	ThirdPartyAuth: {
		flex: -1,
	},
	textInput: {
		// height: 40,
		// borderColor: 'gray',
		// borderWidth: 1,
		// borderRadius: 5,
		// padding: 10,
		// backgroundColor: '#ddd',
		// color: '#555',
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

export default LoginScreen
