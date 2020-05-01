import React from 'react'
import { StyleSheet, View } from 'react-native'
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
			<SignupFormComponent />
			<View style={styles.textWrapper}>
				<StyledText>OR</StyledText>
			</View>
			<ThirdPartyAuth />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'stretch',
		// width: '100%',
		paddingTop: '5%',
		paddingBottom: '5%',
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	textWrapper: {
		marginTop: 10,
		marginBottom: 10,
		flexShrink: 1,
	},
})

export default LoginScreen
