import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function SuccesfullUpload(props) {
	return (
		<View style={styles.root}>
			<View style={styles.bitmap6Row}>
				<Image
					source={require('../assets/images/9e119526013acbf594b238debbcb61bcfa13277d.png')}
					resizeMode="cover"
					style={styles.bitmap6}
				></Image>
				<Image
					source={require('../assets/images/aaddcde602871a8bf244923b2479a36b4439a4b1.png')}
					resizeMode="cover"
					style={styles.bitmap5}
				></Image>
				<Image
					source={require('../assets/images/76e3a6f43d5172d2b018d9a774bf1ae0c4dadf1f.png')}
					resizeMode="cover"
					style={styles.bitmap}
				></Image>
			</View>
			<View style={styles.title2Stack}>
				<Text style={styles.title2}>Tap to record</Text>
				<Text style={styles.title21}>
					Help us defeat COVID-19 by sharing the app with your friends and loved ones
				</Text>
			</View>
			<View style={styles.title1Stack}>
				<Text style={styles.title1}>Thanks! We’ve received your recording</Text>
				<View style={styles.group2Copy}>
					<Image
						source={require('../assets/images/2773e81beda80d5a10e86877554206a85147f3a0.png')}
						resizeMode="cover"
						style={styles.bitmap1}
					></Image>
				</View>
				<Image
					source={require('../assets/images/18c9045aac3c2effe4efe8a2c1a6c582265c5003.png')}
					resizeMode="cover"
					style={styles.bitmap3}
				></Image>
			</View>
			<View style={styles.groupStack}>
				<View style={styles.group}></View>
				<View style={styles.rectangle}>
					<View style={styles.bitmap4Row}>
						<Image
							source={require('../assets/images/af9b9a179ef8e395771155fe18965309cd6106ff.png')}
							resizeMode="cover"
							style={styles.bitmap4}
						></Image>
						<Text style={styles.title22}>Copy link</Text>
					</View>
				</View>
			</View>
			<Text style={styles.headline}>Done</Text>
			<View style={styles.statusBarCopy}>
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
	bitmap6: {
		width: 36,
		height: 36,
		backgroundColor: 'transparent',
		opacity: 1,
	},
	bitmap5: {
		width: 36,
		height: 36,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 29,
	},
	bitmap: {
		width: 36,
		height: 36,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 29,
	},
	bitmap6Row: {
		height: 36,
		flexDirection: 'row',
		marginTop: 633,
		marginLeft: 104,
		marginRight: 105,
	},
	title2: {
		top: 0,
		left: 0,
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		position: 'absolute',
		fontSize: 22,
		lineHeight: 28,
		letterSpacing: 0.35,
		textAlign: 'center',
		height: 0,
		width: 0,
		opacity: 0,
	},
	title21: {
		top: 11,
		left: 35,
		width: 307,
		height: 81,
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		position: 'absolute',
		opacity: 1,
		fontSize: 22,
		lineHeight: 28,
		letterSpacing: 0.35,
		textAlign: 'center',
	},
	title2Stack: {
		width: 375,
		height: 92,
		marginTop: -228,
	},
	title1: {
		top: 220,
		left: 0,
		width: 323,
		height: 70,
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		position: 'absolute',
		opacity: 1,
		fontSize: 28,
		letterSpacing: 0.36,
		textAlign: 'center',
	},
	group2Copy: {
		top: 0,
		left: 45,
		width: 232,
		height: 232,
		position: 'absolute',
		opacity: 1,
	},
	bitmap1: {
		width: 232,
		height: 232,
		backgroundColor: 'transparent',
		opacity: 1,
	},
	bitmap3: {
		top: 81,
		left: 134,
		width: 56,
		height: 53,
		backgroundColor: 'transparent',
		position: 'absolute',
		opacity: 1,
	},
	title1Stack: {
		width: 323,
		height: 290,
		marginTop: -404,
		marginLeft: 26,
	},
	group: {
		top: 14,
		left: 69,
		width: 130,
		height: 23,
		position: 'absolute',
		opacity: 1,
	},
	rectangle: {
		top: 0,
		left: 0,
		width: 279,
		height: 60,
		backgroundColor: 'rgba(255,255,255,1)',
		position: 'absolute',
		borderRadius: 12,
		flexDirection: 'row',
	},
	bitmap4: {
		width: 27,
		height: 27,
		backgroundColor: 'transparent',
		opacity: 1,
	},
	title22: {
		width: 94,
		height: 28,
		backgroundColor: 'transparent',
		color: 'rgba(18,111,238,1)',
		opacity: 1,
		fontSize: 22,
		lineHeight: 28,
		letterSpacing: 0.35,
		marginLeft: 9,
	},
	bitmap4Row: {
		height: 28,
		flexDirection: 'row',
		flex: 1,
		marginRight: 84,
		marginLeft: 65,
		marginTop: 17,
	},
	groupStack: {
		width: 279,
		height: 60,
		marginTop: 134,
		marginLeft: 48,
	},
	headline: {
		width: 375,
		height: 19,
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		opacity: 1,
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: 'center',
		marginTop: 99,
	},
	statusBarCopy: {
		width: 340,
		height: 22,
		opacity: 1,
		flexDirection: 'row',
		marginTop: -724,
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
	bitmap2: {
		width: 22,
		height: 22,
		backgroundColor: 'transparent',
		opacity: 1,
		marginTop: 29,
		marginLeft: 24,
	},
})

export default SuccesfullUpload
