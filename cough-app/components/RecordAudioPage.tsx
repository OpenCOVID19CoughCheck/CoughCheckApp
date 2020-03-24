import React from 'react'
import I18n from 'ex-react-native-i18n'
import { Text, View } from 'react-native'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// Get the device locale
const deviceLocale = I18n.locale

class RecordAudioPage extends React.Component {
    // Async call to init the locale
    // Load translations before rendering
    async componentWillMount() {
        await I18n.initAsync();
    }

    // Check for auth token
    // await this.props.validateAuth();

    render () {
        <>
        return (
            <Text>{I18n.t('collection_phase')}</Text>
            <Text>{I18n.t('start_button')</Text>
            <Text>{I18n.t('recording')</Text>
            <Text>{I18n.t('not_recording')</Text>    
        )
      </>
    }
  }

  export default RecordAudioPage;