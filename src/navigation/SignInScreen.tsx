import React, { useState } from 'react'
import axios from 'axios'
import { AuthSession } from 'expo'
import { TouchableOpacity, View, AsyncStorage } from 'react-native'
import { Button } from 'react-native-paper'
import SplashScreen from 'src/components/SplashScreen'
import {
	FormViewStyled,
	TextSignInStyled,
} from 'src/components/styledComponents'
import { useAuthContext } from 'src/globalState/AuthContext'
import getEnvVars from '../util/getEnvVars'
import { Text } from 'native-base'

const SignInScreen = ({ route }) => {
	const { dispatch } = useAuthContext()
	const [isConnectingAuth, setConnectionAuth] = useState(false)
	const [errorInfo, setErrorInfo] = useState({
		code: undefined,
		message: route.params?.message ?? undefined,
		rawMessage: 'Error with startAsync not succeeded',
	})
	const redirectURL = AuthSession.getRedirectUrl()

	const _signInAsync = async () => {
		setConnectionAuth(true)
		const { expo } = await getEnvVars()
		const {
			OH_OAUTH_URL,
			OH_OAUTH_URL_TOKEN,
			REMOTE_ACCESS_CONSUMER_KEY,
			CLIENT_SECRET,
		} = expo.extra
		try {
			const codeResponse = await AuthSession.startAsync({
				authUrl:
					`${OH_OAUTH_URL}` +
					`?response_type=code` +
					`&immediate=false` +
					`&prompt=login%20consent` +
					`&client_id=${REMOTE_ACCESS_CONSUMER_KEY}` +
					`&redirect_uri=${encodeURIComponent(redirectURL)}`,
			})

			const { type } = codeResponse
			// Please continue with setting up the params with
			console.log(
				"TODO check what it's coming back " +
					'from the auth to take the code and make the second call',
				codeResponse
			)
			if (type === 'success') {
				// const { code } = codeResponse.params
				const code = 'TODO usually code will be needed to make the authorization'
				const tokenResponse = await axios.post(
					`${OH_OAUTH_URL_TOKEN}`,
					`grant_type=authorization_code` +
						`&code=${code}` +
						`&client_secret=${CLIENT_SECRET}` +
						`&redirect_uri=${encodeURIComponent(redirectURL)}`
				)
				// Just simple way to store the token in this example
				console.log('we have response from OH:', tokenResponse)
				const { data: userToken } = tokenResponse

				userToken.namespace = 'preempt'
				await AsyncStorage.setItem(userToken, JSON.stringify(userToken))
				// We have to redirect again to authLoading
				setConnectionAuth(false)
				dispatch({
					type: 'SIGN_IN',
					token: 'TODO_SAVE_HERE_ANY_DATA_USEFUL_FOR_FUTURE_CALLS',
				})
			} else {
				setConnectionAuth(false)
				setErrorInfo({
					...errorInfo,
					message: 'TODO_ADD_CLEAR_MESSAGE_FOR_SIGN_IN_PROBLEM',
				})
			}
		} catch (e) {
			setErrorInfo({
				...errorInfo,
				message: 'TODO_ADD_CLEAR_MESSAGE_FOR_LOGIN_DISMISSED_OR_CANCEL',
				rawMessage: e.message,
			})

			setConnectionAuth(false)
		}
	}

	return (
		<FormViewStyled>
			<View>
				{isConnectingAuth ? (
					<SplashScreen />
				) : (
					<>
						<TouchableOpacity onPress={_signInAsync}>
							<TextSignInStyled>Sign in!</TextSignInStyled>
						</TouchableOpacity>
						<Button
							onPress={() => {
								dispatch({
									type: 'SIGN_IN',
									token: 'TODO_SAVE_HERE_ANY_DATA_USEFUL_FOR_FUTURE_CALLS',
								})
							}}
						>
							Bypass OAuth
						</Button>
					</>
				)}

				{errorInfo && errorInfo.message ? (
					<View>
						<Text>{errorInfo.message}</Text>
					</View>
				) : null}
			</View>
		</FormViewStyled>
	)
}
export default SignInScreen
