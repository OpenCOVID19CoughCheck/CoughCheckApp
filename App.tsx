import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import HomeScreen from 'src/home/HomeScreen'
import QuestionnaireScreen from 'src/questionaire/QuestionnaireScreen'
import CoughRecorderScreen from 'src/cough-recorder/CoughRecorderScreen'

i18n.translations = {
	en: require('assets/strings/en.json'),
	es: require('assets/strings/es.json'),
}
i18n.locale = Localization.locale
i18n.fallbacks = true

const Stack = createStackNavigator()

function App() {
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

export default App
