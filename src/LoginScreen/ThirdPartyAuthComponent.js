import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function ThirdPartyAuth(props) {
	return (
		<View style={styles.thirdPartyAuthWrapper}>
			<View style={styles.thirdPartyAuthbuttonWrapper}>
				<FontAwesome.Button
					name="facebook"
					backgroundColor="#126FEE"
					// onPress={props.loginWithFacebook}
					iconStyle={{ marginLeft: 6, marginRight: 18 }}
					style={{ height: 40 }}
				>
					Login with Facebook
				</FontAwesome.Button>
			</View>
			<View style={styles.thirdPartyAuthbuttonWrapper}>
				<FontAwesome.Button
					name="google"
					backgroundColor="#126FEE"
					iconStyle={{ marginLeft: 3, marginRight: 15 }}
					style={{ height: 40 }}
					// onPress={props.loginWithGoogle}
				>
					Login with Google
				</FontAwesome.Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	thirdPartyAuthWrapper: {
		flexGrow: 1,
	},
	thirdPartyAuthbuttonWrapper: {
		marginBottom: 10,
	},
})
