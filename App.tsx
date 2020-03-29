import * as React from 'react'
import { Container, Root } from 'native-base'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import AppNavigator from 'src/navigation/AppNavigator'

i18n.translations = {
	en: require('assets/strings/en.json'),
	es: require('assets/strings/es.json'),
}
i18n.locale = Localization.locale
i18n.fallbacks = true

function App() {
	return (
		<Root>
			<SafeAreaProvider>
				<AppNavigator />
			</SafeAreaProvider>
		</Root>
	)
}

export default App
