import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AppTextSmall = (props) => {
	return <Text style={styles.pTextSmall}>{props.children}</Text>
}

const styles = StyleSheet.create({
	pTextSmall: {
		textAlign: 'center',
		color: '#777',
		fontSize: 14,
		fontFamily: 'SFProDisplay-Regular',
	},
})
