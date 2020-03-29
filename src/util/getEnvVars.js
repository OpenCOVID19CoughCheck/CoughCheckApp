import Constants from 'expo-constants'

// Following this approach: https://stackoverflow.com/a/57548308/508290
function getEnvVars() {
	if (__DEV__) {
		return returnEnvVars()
	} else {
		return new Promise((resolve) => {
			resolve(Constants.manifest.extra)
		})
	}
}

async function returnEnvVars() {
	return await require('../../envLocal.json')
}

export default getEnvVars
