import React, { useState } from 'react'

import { AsyncStorage, Button, Text, TextInput, View } from 'react-native'
import { useAuthContext } from 'src/globalState/AuthContext'
import { StandardViewStyled } from 'src/components/styledComponents'

const SignInScreen = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { dispatch } = useAuthContext()

	return (
		<StandardViewStyled>
			<TextInput
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button
				title="Sign in"
				onPress={() =>
					// signIn({ username, password })
					dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
				}
			/>
		</StandardViewStyled>
	)
}
export default SignInScreen
