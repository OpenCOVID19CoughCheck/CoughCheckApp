import React from 'react'
import { Checkbox as CheckboxPaper } from 'react-native-paper'
// import { AppText } from '../AppText/AppText.js'
import { AppTextSmall } from '../AppTextSmall/AppTextSmall.js'
import { StyleSheet, View } from 'react-native'

export const Checkbox = (props) => {
	const [checked, toggleChecked] = React.useState('true')

	return (
		<View styles={styles.flexRow}>
			<CheckboxPaper
				status={checked ? 'checked' : 'unchecked'}
				// onPress={() => { toggleChecked }}
			/>
			<AppTextSmall>
				By proceeding to create your account, you are agreeing to our Terms of
				service and Privacy Policy
			</AppTextSmall>
		</View>
	)
}

const styles = StyleSheet.create({
	flexRow: {
		flexDirection: 'row',
	},
})
