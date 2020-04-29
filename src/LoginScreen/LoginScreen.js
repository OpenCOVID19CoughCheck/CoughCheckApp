import React from 'react'
import { StyleSheet, View } from 'react-native'
import SignupForm from './SignupFormComponent.js'
import ThirdPartyAuth from './ThirdPartyAuthComponent.js'
import { Logo } from '../components/logo/Logo.js'
import { StyledText } from 'src/components/styledComponents'
import SignupFormComponent from './SignupFormComponent.js'

function LoginScreen(props) {
	// const [email, setEmail] = React.useState('')
	// const [password, setPassword] = React.useState('')
	// const [checked, toggleChecked] = React.useState('true')
	// Might need to raise the state up here?

	return (
		<View style={styles.wrapper}>
			<Logo />

			{/* How can I pass CSS into one of these components? */}
			<SignupFormComponent />

			<View style={styles.orWrapper}>
				<StyledText>OR</StyledText>
			</View>
			<ThirdPartyAuth />

			<View>
				<StyledText>Have an account? Sign In</StyledText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: '20%',
		paddingBottom: '5%',
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		// alignItems: 'stretch',
		// width: '100%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	orWrapper: {
		marginTop: 10,
		marginBottom: 10,
	},
})

export default LoginScreen
