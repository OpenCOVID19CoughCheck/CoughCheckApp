import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProgressBar from 'src/components/ProgressBar'
import SocialShareButton from 'src/components/SocialShareButton'
import {
	StyledText,
	StyledTextLarge,
	StyledTextBold,
} from 'src/components/styledComponents'

export default function SocialShareComponent() {
	const appShares = 471218
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<View style={styles.socialShareContainer}>
			<View>
				<StyledTextLarge>{numberWithCommas(appShares)}</StyledTextLarge>
				<StyledText>People have contributed so far</StyledText>
			</View>
			<ProgressBar progress={0.4} />
			<View style={styles.HelpReachSpacer}>
				<StyledTextBold>
					Help us reach {numberWithCommas('1000000' - appShares)} more
				</StyledTextBold>
			</View>
			<SocialShareButton style={styles.shareButton}></SocialShareButton>
		</View>
	)
}

const styles = StyleSheet.create({
	HelpReachSpacer: {
		marginBottom: 60,
	},
})
