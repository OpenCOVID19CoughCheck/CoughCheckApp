import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function ReplayAndSubmit(props) {
	return (
		<View style={styles.root}>
			<View style={styles.group2Stack}>
				<View style={styles.group2}>
					<Image
						source={require('../assets/images/2773e81beda80d5a10e86877554206a85147f3a0.png')}
						resizeMode="cover"
						style={styles.bitmap}
					></Image>
				</View>
				<Text style={styles.title2}>Tap to record</Text>
				<Image
					source={require('../assets/images/60e2f18874c8709abac21a1e26221a388eb7ad2a.png')}
					resizeMode="cover"
					style={styles.bitmap3}
				></Image>
			</View>
			<View style={styles.group3}>
				<View style={styles.rectangle}>
					<Text style={styles.title3}>Submit</Text>
				</View>
			</View>
			<View style={styles.statusBar}>
				<View style={styles.endWrapperFiller}></View>
				<View style={styles.cellularConnectionPathRow}>
					<Svg
						viewBox="-0 -0 17 10.66666666666667"
						style={styles.cellularConnectionPath}
					>
						<Path
							strokeWidth={0}
							fill="rgba(255,255,255,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
						></Path>
					</Svg>
					<Svg viewBox="-0 -0 15.3333 11" style={styles.wifiPath}>
						<Path
							strokeWidth={0}
							fill="rgba(255,255,255,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M7.67 2.28 C7.67 2.28 3.30 3.14 1.69 4.67 C1.57 4.79 1.25 4.67 1.25 4.67 L0.09 3.50 C0.09 3.50 -0.00 3.35 0.00 3.27 C0.00 3.18 0.04 3.10 0.10 3.04 C4.33 -1.01 11.00 -1.01 15.24 3.04 C15.30 3.10 15.33 3.18 15.33 3.27 C15.33 3.35 15.24 3.50 15.24 3.50 L14.08 4.67 C14.08 4.67 13.77 4.79 13.64 4.67 C12.03 3.14 7.67 2.28 7.67 2.28 Z M7.67 6.09 C7.67 6.09 5.27 6.55 4.36 7.37 C4.24 7.48 3.93 7.36 3.93 7.36 L2.77 6.19 C2.77 6.19 2.67 6.05 2.67 5.96 C2.67 5.87 2.71 5.79 2.77 5.73 C5.53 3.16 9.80 3.16 12.56 5.73 C12.63 5.79 12.66 5.87 12.66 5.96 C12.66 6.04 12.57 6.19 12.57 6.19 L11.41 7.36 C11.41 7.36 11.10 7.48 10.97 7.37 C10.07 6.55 7.67 6.09 7.67 6.09 Z M7.89 10.91 C7.89 10.91 7.75 11.00 7.67 11.00 C7.58 11.00 7.44 10.91 7.44 10.91 L5.44 8.89 C5.44 8.89 5.34 8.74 5.34 8.65 C5.35 8.57 5.38 8.48 5.45 8.43 C6.73 7.34 8.60 7.34 9.89 8.43 C9.95 8.48 9.99 8.57 9.99 8.65 C9.99 8.74 9.89 8.89 9.89 8.89 L7.89 10.91 Z"
						></Path>
					</Svg>
					<View style={styles.battery}>
						<View style={styles.borderRow}>
							<View style={styles.border}>
								<View style={styles.capacity}></View>
							</View>
							<Svg viewBox="-0 -0 1.328038005608352 4" style={styles.cap}>
								<Path
									strokeWidth={0}
									fill="rgba(255,255,255,1)"
									fillOpacity={0.4}
									strokeOpacity={0.4}
									d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 "
								></Path>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.headlineStack}>
				<Text style={styles.headline}>Retry</Text>
				<Image
					source={require('../assets/images/3dd5c77779d49e2271c15d14362e874e9462bef0.png')}
					resizeMode="cover"
					style={styles.bitmap1}
				></Image>
			</View>
			<Image
				source={require('../assets/images/b2b75a6c0faef80bcc48c943a9046b16225a1dd3.png')}
				resizeMode="cover"
				style={styles.bitmap2}
			></Image>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'rgba(18,111,238,1)',
	},
	group2: {
		top: 0,
		left: 72,
		width: 232,
		height: 232,
		position: 'absolute',
		opacity: 1,
	},
	bitmap: {
		width: 232,
		height: 232,
		backgroundColor: 'transparent',
		opacity: 1,
	},
	title2: {
		top: 202,
		left: 0,
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		position: 'absolute',
		fontSize: 22,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 28,
		letterSpacing: 0.35,
		textAlign: 'center',
		height: 0,
		width: 0,
		opacity: 0,
	},
	bitmap3: {
		top: 80,
		left: 169,
		width: 48,
		height: 54,
		backgroundColor: 'transparent',
		position: 'absolute',
		opacity: 1,
	},
	group2Stack: {
		width: 375,
		height: 232,
		marginTop: 239,
	},
	group3: {
		width: 279,
		height: 60,
		opacity: 1,
		marginTop: 22,
		marginLeft: 48,
	},
	rectangle: {
		width: 279,
		height: 60,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 12,
	},
	title3: {
		width: 279,
		height: 24,
		backgroundColor: 'transparent',
		color: 'rgba(18,111,238,1)',
		opacity: 1,
		fontSize: 20,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 24,
		letterSpacing: 0.38,
		textAlign: 'center',
		marginTop: 17,
	},
	statusBar: {
		width: 340,
		height: 22,
		opacity: 1,
		flexDirection: 'row',
		marginTop: -546,
		marginLeft: 21,
	},
	endWrapperFiller: {
		flex: 1,
		flexDirection: 'row',
	},
	cellularConnectionPath: {
		width: 17,
		height: 11,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginRight: 5,
		marginTop: 1,
	},
	wifiPath: {
		width: 15,
		height: 11,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginRight: 5,
	},
	battery: {
		width: 25,
		height: 12,
		opacity: 1,
		flexDirection: 'row',
	},
	border: {
		width: 22,
		height: 11,
		backgroundColor: 'transparent',
		borderRadius: 2.67,
		borderColor: 'rgba(255,255,255,0.35)',
		borderWidth: 1,
	},
	capacity: {
		width: 18,
		height: 7,
		backgroundColor: 'rgba(255,255,255,1)',
		opacity: 1,
		borderRadius: 1.33,
		marginTop: 2,
		marginLeft: 2,
	},
	cap: {
		width: 1,
		height: 4,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginLeft: 1,
		marginTop: 4,
	},
	borderRow: {
		height: 11,
		flexDirection: 'row',
		flex: 1,
		marginRight: 1,
	},
	cellularConnectionPathRow: {
		height: 12,
		flexDirection: 'row',
		marginTop: 10,
	},
	headline: {
		top: 0,
		left: 0,
		width: 375,
		height: 22,
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		position: 'absolute',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: 'center',
	},
	bitmap1: {
		top: 3,
		left: 148,
		width: 12,
		height: 15,
		backgroundColor: 'transparent',
		position: 'absolute',
		opacity: 1,
	},
	headlineStack: {
		width: 375,
		height: 22,
		marginTop: 544,
		marginLeft: 5,
	},
	bitmap2: {
		width: 22,
		height: 22,
		backgroundColor: 'transparent',
		opacity: 1,
		marginTop: -537,
		marginLeft: 24,
	},
})

export default ReplayAndSubmit
