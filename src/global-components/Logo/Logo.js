import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export const Logo = (props) => {
	return (
		<View>
			<Image
				source={require('./assets/3186ac63277041a518551f29484697e5f528491n.png')}
				resizeMode="contain"
				style={[styles.logo, styles.spaceL]}
				// I'm using multiple CSS classes like I would in webkitCancelAnimationFrame, is there a more sensible way of doing this?
			></Image>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		height: 50,
		backgroundColor: 'transparent',
	},
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
