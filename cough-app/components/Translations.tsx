import I18n from 'ex-react-native-i18n'

// let 'en-GB' fallback to 'en' if not found
I18n.fallbacks = true; 
I18n.translations = {
  'en': require('./assets/strings/en.json'),
  'es': require('./assets/strings/es.json'),
}

export default I18n;