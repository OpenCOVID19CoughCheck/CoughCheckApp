import React, { Component } from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function HomeScreen(props) {
	return (
		<View style={styles.root}>
			<View style={styles.bitmapStack}>
				<ImageBackground
					source={require('../assets/images/2773e81beda80d5a10e86877554206a85147f3a0.png')}
					resizeMode="cover"
					style={styles.bitmap}
					imageStyle={styles.bitmap_imageStyle}
				>
					<Image
						source={require('../assets/images/9db888760ab15a8676051b8b1004058becfb5fac.png')}
						resizeMode="cover"
						style={styles.bitmap3}
					></Image>
				</ImageBackground>
				<Text style={styles.title1}>Tap to record</Text>
			</View>
			<View style={styles.bitmap2Row}>
				<Image
					source={require('../assets/images/f2fd17b19466647755d7bdb582e866b57a90f0a0.png')}
					resizeMode="cover"
					style={styles.bitmap2}
				></Image>
				<Image
					source={require('../assets/images/151dac7481162200b68d6235711730bd0cc63851.png')}
					resizeMode="cover"
					style={styles.bitmap1}
				></Image>
			</View>
			<Text style={styles.title2}>Tap to record</Text>
			<Text style={styles.body}>Cough, record, save lives.</Text>
			<View style={styles.statusBar}>
				<View style={styles.endWrapperFiller}></View>
				<View style={styles.cellularConnectionPathRow}>
					<Svg
						viewBox="-0 -0 17 10.66666666666667"
						style={styles.cellularConnectionPath}
					>
						<Path
							strokeWidth={0}
							fill="rgba(0,0,0,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
						></Path>
					</Svg>
					<Svg viewBox="-0 -0 15.3333 11" style={styles.wifiPath}>
						<Path
							strokeWidth={0}
							fill="rgba(0,0,0,1)"
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
									fill="rgba(0,0,0,1)"
									fillOpacity={0.4}
									strokeOpacity={0.4}
									d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 "
								></Path>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style={styles.headline}>People have contribuited so far</Text>
			<Text style={styles.title11}>471,218</Text>
			<Text style={styles.subheadline}>Help us reach 528,782 more people</Text>
			<View style={styles.rectangle}>
				<Text style={styles.title3}>Share</Text>
			</View>
			<View style={styles.line2Stack}>
				<Svg viewBox="-1 -1 332 5" style={styles.line2}>
					<Path
						strokeWidth={2}
						fill="transparent"
						stroke="rgba(207,216,220,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M1.50 1.50 L328.50 1.50 "
					></Path>
				</Svg>
				<Svg viewBox="-3.5 -3.5 134 15" style={styles.lineCopy}>
					<Path
						strokeWidth={7}
						fill="transparent"
						stroke="rgba(18,111,238,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M4.00 4.00 L123.00 4.00 "
					></Path>
				</Svg>
			</View>
			<Text style={styles.footnote}>Help us defeat COVID-19</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'rgba(255,255,255,1)',
	},
	bitmap: {
		top: 0,
		left: 72,
		width: 232,
		height: 232,
		backgroundColor: 'transparent',
		position: 'absolute',
	},
	bitmap_imageStyle: {
		opacity: 1,
	},
	bitmap3: {
		width: 46,
		height: 65,
		backgroundColor: 'transparent',
		opacity: 1,
		marginTop: 74,
		marginLeft: 92,
	},
	title1: {
		top: 211,
		left: 0,
		width: 375,
		height: 34,
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		position: 'absolute',
		opacity: 1,
		fontSize: 28,
		fontFamily: 'SFProDisplay-Bold',
		letterSpacing: 0.36,
		textAlign: 'center',
	},
	bitmapStack: {
		width: 375,
		height: 245,
		marginTop: 150,
	},
	bitmap2: {
		width: 24,
		height: 26,
		backgroundColor: 'transparent',
		opacity: 1,
	},
	bitmap1: {
		width: 23,
		height: 25,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 274,
	},
	bitmap2Row: {
		height: 26,
		flexDirection: 'row',
		marginTop: -335,
		marginLeft: 26,
		marginRight: 28,
	},
	title2: {
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		fontSize: 22,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 28,
		letterSpacing: 0.35,
		textAlign: 'center',
		marginTop: 355,
		height: 0,
		width: 0,
		opacity: 0,
	},
	body: {
		width: 375,
		height: 22,
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: 'center',
		marginTop: -72,
	},
	statusBar: {
		width: 340,
		height: 22,
		opacity: 1,
		flexDirection: 'row',
		marginTop: -412,
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
		borderColor: 'rgba(0,0,0,0.35)',
		borderWidth: 1,
	},
	capacity: {
		width: 18,
		height: 7,
		backgroundColor: 'rgba(0,0,0,1)',
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
		width: 375,
		height: 22,
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: 'center',
		marginTop: 548,
	},
	title11: {
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		opacity: 1,
		fontSize: 28,
		fontFamily: 'SFProDisplay-Bold',
		letterSpacing: 0.36,
		marginTop: -58,
		marginLeft: 135,
	},
	subheadline: {
		width: 375,
		height: 20,
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 15,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 20,
		letterSpacing: -0.24,
		textAlign: 'center',
		marginTop: 72,
	},
	rectangle: {
		width: 279,
		height: 60,
		backgroundColor: 'rgba(18,111,238,1)',
		borderRadius: 12,
		marginTop: 43,
		marginLeft: 48,
	},
	title3: {
		width: 279,
		height: 24,
		backgroundColor: 'transparent',
		color: 'rgba(255,255,255,1)',
		opacity: 1,
		fontSize: 20,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 24,
		letterSpacing: 0.38,
		textAlign: 'center',
		marginTop: 17,
	},
	line2: {
		top: 3,
		left: 2,
		width: 332,
		height: 5,
		backgroundColor: 'transparent',
		position: 'absolute',
		borderColor: 'transparent',
	},
	lineCopy: {
		top: 0,
		left: 0,
		width: 134,
		height: 15,
		backgroundColor: 'transparent',
		position: 'absolute',
		borderColor: 'transparent',
	},
	line2Stack: {
		width: 334,
		height: 15,
		marginTop: -141,
		marginLeft: 21,
	},
	footnote: {
		width: 375,
		height: 18,
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 13,
		fontFamily: 'SFProText-Regular',
		lineHeight: 18,
		letterSpacing: -0.08,
		textAlign: 'center',
		marginTop: 134,
	},
})

export default HomeScreen
