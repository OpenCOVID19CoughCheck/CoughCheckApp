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
		<View style={styles.socialShareWrapper}>
			<View style={styles.progressTextWrapper}>
				<StyledTextLarge>{addCommasToNumber(appShares)}</StyledTextLarge>
				<StyledText>People have contributed so far</StyledText>
				<ProgressBar progress={0.4} />
				<StyledTextBold>
					Help us reach {addCommasToNumber('1000000' - appShares)} more
				</StyledTextBold>
			</View>
			<ButtonSocialShare text="Share"></ButtonSocialShare>
		</View>
	)
}

const styles = StyleSheet.create({
	socialShareWrapper: {
		flexGrow: 1,
	},
	progressTextWrapper: {
		marginBottom: 40,
	},
})
