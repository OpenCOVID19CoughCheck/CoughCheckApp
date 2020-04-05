// import React, { Component } from 'react'
import { Text } from 'react-native'

const AppText = (props) => {
	return <Text style={styles.pText}>{props.children}</Text>
}

const styles = StyleSheet.create({
	pText: {
		textAlign: 'center',
		color: '#777',
		fontSize: 18,
		fontFamily: 'SFProDisplay-Regular',
		letterSpacing: 0.36,
	},
})

export default AppText
