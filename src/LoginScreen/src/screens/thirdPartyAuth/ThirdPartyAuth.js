import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export const ThirdPartyAuth = (props) => {
	return (
		<View>
			<View style={styles.spaceS}>
				<FontAwesome.Button
					name="facebook"
					backgroundColor="#126FEE"
					// onPress={this.loginWithFacebook}
					iconStyle={{ marginLeft: 6, marginRight: 18 }}
					style={{ height: 50 }}
				>
					Login with Facebook
				</FontAwesome.Button>
			</View>
			<View style={styles.spaceS}>
				<FontAwesome.Button
					name="google"
					backgroundColor="#126FEE"
					iconStyle={{ marginLeft: 3, marginRight: 15 }}
					style={{ height: 50 }}
					// onPress={this.loginWithGoogle}
				>
					Login with Google
				</FontAwesome.Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	spaceS: {
		marginBottom: 10,
	},
	spaceM: {
		marginBottom: 20,
	},
	spaceL: {
		marginBottom: 40,
	},
})
