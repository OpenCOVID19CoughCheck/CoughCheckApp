import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProgressBar from 'src/components/ProgressBar'
import ButtonSocialShare from 'src/components/ButtonSocialShare'
import {
	StyledText,
	StyledTextLarge,
	StyledTextBold,
} from 'src/components/styledComponents'

export default function SocialShareComponent() {
	const appShares = 471218
	function addCommasToNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<View style={styles.socialShareContainer}>
			<View>
				<StyledTextLarge>{addCommasToNumber(appShares)}</StyledTextLarge>
				<StyledText>People have contributed so far</StyledText>
			</View>
			<ProgressBar progress={0.4} />
			<View style={styles.helpReachWrapper}>
				<StyledTextBold>
					Help us reach {addCommasToNumber('1000000' - appShares)} more
				</StyledTextBold>
			</View>
			<ButtonSocialShare text="Share"></ButtonSocialShare>
		</View>
	)
}

const styles = StyleSheet.create({
	socialShareContainer: {
		marginTop: 50,
	},
	helpReachWrapper: {
		marginBottom: 60,
	},
})
