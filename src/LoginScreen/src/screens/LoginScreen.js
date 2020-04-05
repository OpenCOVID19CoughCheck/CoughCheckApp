import React, { Component } from 'react'
// Whats the {Component} for, do I need to keep it for later?
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button, Checkbox } from 'react-native-paper'
import { TextInput } from 'react-native-paper'
// import AppText from './src/global-components/AppText/AppText.js'
// Haven't got the component import working yet

const AppText = (props) => {
	return <Text style={styles.pText}>{props.children}</Text>
}

const AppTextSmall = (props) => {
	return <Text style={styles.pTextSmall}>{props.children}</Text>
}

function LoginScreen(props) {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [checked, toggleChecked] = React.useState('true')

	return (
		<View style={styles.root}>
			<View style={styles.sectionLogo}>
				<Image
					source={require('../assets/images/3186ac63277041a518551f29484697e5f528491n.png')}
					resizeMode="contain"
					style={[styles.logo, styles.spaceL]}
					// I'm using multiple CSS classes like I would in webkitCancelAnimationFrame, is there a more sensible way of doing this?
				></Image>
			</View>
			<View styles={styles.createAccount}>
				<TextInput
					style={[styles.textInput, styles.spaceS]}
					onChangeText={(email) => setEmail(email)}
					value={email}
					placeholder={'Email'}
				/>
				<TextInput
					style={[styles.textInput, styles.spaceS]}
					onChangeText={(password) => setPassword(password)}
					value={password}
					placeholder={'Password'}
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
				<View styles={styles.flexRow}>
					<Checkbox
						styles={styles.checkbox}
						status={checked ? 'checked' : 'unchecked'}
						// onPress={() => { toggleChecked }}
					/>
					<AppTextSmall>
						By proceeding to create your account, you are agreeing to our Terms of
						service and Privacy Policy
					</AppTextSmall>
				</View>
			</View>

			<View styles={styles.thirdPartyAuth}>
				<View styles={styles.spaceM}>
					<AppText>OR</AppText>
				</View>
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

			<AppText>Have an account? Sign In</AppText>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: 'rgba(255,255,255,1)',
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'space-around',
		width: '80%',
		marginLeft: '10%',
	},
	logo: {
		marginTop: 100,
		alignSelf: 'center',
		height: 50,
		backgroundColor: 'transparent',
	},
	section: {},
	createAccount: {},
	thirdPartyAuth: {},
	textInput: {
		// height: 40,
		// borderColor: 'gray',
		// borderWidth: 1,
		// borderRadius: 5,
		// padding: 10,
		// backgroundColor: '#ddd',
		// color: '#555',
	},
	flexRow: {
		flexDirection: 'row',
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
	pText: {
		textAlign: 'center',
		color: '#777',
		fontSize: 18,
		fontFamily: 'SFProDisplay-Regular',
		letterSpacing: 0.36,
	},
	pTextSmall: {
		textAlign: 'center',
		color: '#777',
		fontSize: 14,
		fontFamily: 'SFProDisplay-Regular',
	},
})

export default LoginScreen
