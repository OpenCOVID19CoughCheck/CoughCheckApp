import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SignupForm } from './signupForm/SignupForm.js'
import { ThirdPartyAuth } from './thirdPartyAuth/ThirdPartyAuth.js'
import { Logo } from '../../../components/logo/Logo.js'
import { StyledText } from 'src/components/styledComponents'

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
				<StyledText>OR</StyledText>
			</View>
			<ThirdPartyAuth style={styles.ThirdPartyAuth} />

			<View>
				<StyledText>Have an account? Sign In</StyledText>
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
