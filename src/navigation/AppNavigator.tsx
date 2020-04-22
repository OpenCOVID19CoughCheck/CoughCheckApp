import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'src/home/HomeScreen'
import QuestionnaireScreen from 'src/questionnaire/QuestionnaireScreen'
import CoughRecorderScreen from 'src/cough-recorder/CoughRecorderScreen'
import { useAuthContext } from 'src/globalState/AuthContext'
import SplashScreen from 'src/components/SplashScreen'
import LoginScreen from 'src/LoginScreen/src/screens/LoginScreen'
import { AsyncStorage } from 'react-native'

const Stack = createStackNavigator()
// Authentication based on [react-navigation best practices](https://reactnavigation.org/docs/auth-flow/)
const AppNavigator = () => {
	// We can get any property from the AuthContext at any point in the app
	const { state, dispatch } = useAuthContext()
	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken

			try {
				userToken = await AsyncStorage.getItem('userToken')
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken })
		}

		bootstrapAsync()
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{state.isLoading ? (
					// We haven't finished checking for the token yet
					<Stack.Screen name="Splash" component={SplashScreen} />
				) : state.userToken == null ? (
					// No token found, user isn't signed in
					<Stack.Screen
						name="Log In"
						component={LoginScreen}
						options={{
							title: 'Log in',
							// When logging out, a pop animation feels intuitive
							animationTypeForReplace: state.isSignout ? 'pop' : 'push',
						}}
					/>
				) : (
					// User is signed in
					<>
						<Stack.Screen name="CoughRecorder" component={CoughRecorderScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
