import * as React from 'react'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font'
import * as Localization from 'expo-localization'
import { Root } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import i18n from 'i18n-js'
import AppNavigator from 'src/navigation/AppNavigator'
import ContextProvider from 'src/globalState/ContextProvider'

const fonts = {
	'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.otf'),
	'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.otf'),
	'SFProText-Regular': require('./assets/fonts/SFProText-Regular.otf'),
	'SFProText-Semibold': require('./assets/fonts/SFProText-Semibold.otf'),
}

i18n.translations = {
	en: require('assets/strings/en.json'),
	es: require('assets/strings/es.json'),
}
i18n.locale = Localization.locale
i18n.fallbacks = true

function App() {
	const [fontsLoaded] = useFonts(fonts)
	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<Root>
				<ContextProvider>
					<SafeAreaProvider>
						<AppNavigator />
					</SafeAreaProvider>
				</ContextProvider>
			</Root>
		)
	}
}

export default App
