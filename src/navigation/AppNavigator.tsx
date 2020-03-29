import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from 'src/home/HomeScreen'
import QuestionnaireScreen from 'src/questionaire/QuestionnaireScreen'
import CoughRecorderScreen from 'src/cough-recorder/CoughRecorderScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
				<Stack.Screen name="CoughRecorder" component={CoughRecorderScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
