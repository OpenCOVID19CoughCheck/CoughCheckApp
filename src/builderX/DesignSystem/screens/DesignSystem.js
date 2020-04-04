import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function DesignSystem(props) {
	return (
		<View style={styles.root}>
			<View style={styles.largeTitleColumnRow}>
				<View style={styles.largeTitleColumn}>
					<Text style={styles.largeTitle}>LargeTitle</Text>
					<Text style={styles.title1}>Title1</Text>
					<Text style={styles.title11}>Title1</Text>
					<Text style={styles.title2}>Title2</Text>
				</View>
				<View style={styles.ovalColumn}>
					<Svg viewBox="-0 -0 50 50" style={styles.oval}>
						<Path
							strokeWidth={0}
							fill="rgba(144,164,174,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
						></Path>
					</Svg>
					<Svg viewBox="-0 -0 50 50" style={styles.oval1}>
						<Path
							strokeWidth={0}
							fill="rgba(120,144,156,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
						></Path>
					</Svg>
				</View>
				<View style={styles.body6Column}>
					<Text style={styles.body6}>LargeTitle, Title1 and Title1 Bold</Text>
					<Text style={styles.body1}>Body text</Text>
				</View>
				<Image
					source={require('../assets/images/3186ac63277041a518551f29484697e5f52fc00e.png')}
					resizeMode="cover"
					style={styles.screenShot20200330At105924Am}
				></Image>
			</View>
			<View style={styles.title3Row}>
				<Text style={styles.title3}>Title3</Text>
				<Svg viewBox="-0 -0 50 50" style={styles.oval5}>
					<Path
						strokeWidth={0}
						fill="rgba(84,110,122,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
					></Path>
				</Svg>
				<Text style={styles.body2}>tappable icon</Text>
				<Text style={styles.headlineCopy3}>ICONS</Text>
			</View>
			<View style={styles.headlineRow}>
				<Text style={styles.headline}>Headline</Text>
				<Image
					source={require('../assets/images/f2fd17b19466647755d7bdb582e866b57a90f0a0.png')}
					resizeMode="cover"
					style={styles.bitmap}
				></Image>
				<Image
					source={require('../assets/images/151dac7481162200b68d6235711730bd0cc63851.png')}
					resizeMode="cover"
					style={styles.bitmap1}
				></Image>
				<Image
					source={require('../assets/images/e59eac52ff951c3737576fd268f1382ec442d99e.png')}
					resizeMode="cover"
					style={styles.bitmap2}
				></Image>
			</View>
			<View style={styles.bodyColumnRow}>
				<View style={styles.bodyColumn}>
					<Text style={styles.body}>Body</Text>
					<Text style={styles.body7}>Body</Text>
				</View>
				<Svg viewBox="-0 -0 50 50" style={styles.oval2}>
					<Path
						strokeWidth={0}
						fill="rgba(18,111,238,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
					></Path>
				</Svg>
				<Text style={styles.body3}>Buttons, primary actions</Text>
				<View style={styles.bitmap3Column}>
					<Image
						source={require('../assets/images/9db888760ab15a8676051b8b1004058becfb5fac.png')}
						resizeMode="cover"
						style={styles.bitmap3}
					></Image>
					<Image
						source={require('../assets/images/5c037508c2ae97aff04665f8e84bc47762b00bce.png')}
						resizeMode="cover"
						style={styles.bitmap6}
					></Image>
				</View>
				<View style={styles.bitmap4Column}>
					<Image
						source={require('../assets/images/aca2b4a65bf2f5707da6534147e3c39c26cf962e.png')}
						resizeMode="cover"
						style={styles.bitmap4}
					></Image>
					<Image
						source={require('../assets/images/33512283c87fb43e2b04e5132d8000c4e12657d8.png')}
						resizeMode="cover"
						style={styles.bitmap7}
					></Image>
				</View>
				<View style={styles.bitmap5Column}>
					<Image
						source={require('../assets/images/b7dcf4779eac4901893c42c39547ea2181653b05.png')}
						resizeMode="cover"
						style={styles.bitmap5}
					></Image>
					<Svg viewBox="-2.5 -2.5 27 27" style={styles.path}>
						<Path
							strokeWidth={5}
							fill="transparent"
							stroke="rgba(84,110,122,1)"
							fillOpacity={1}
							strokeOpacity={1}
							d="M2.50 11.00 C2.50 15.69 6.31 19.50 11.00 19.50 C15.69 19.50 19.50 15.69 19.50 11.00 C19.50 6.31 15.69 2.50 11.00 2.50 "
						></Path>
					</Svg>
				</View>
			</View>
			<View style={styles.subheadlineColumnRow}>
				<View style={styles.subheadlineColumn}>
					<Text style={styles.subheadline}>Subheadline</Text>
					<Text style={styles.subheadline1}>Subheadline</Text>
				</View>
				<Svg viewBox="-0 -0 50 50" style={styles.oval3}>
					<Path
						strokeWidth={0}
						fill="rgba(255,69,58,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
					></Path>
				</Svg>
				<Text style={styles.body4}>Recording {'\n'}related</Text>
				<View style={styles.bitmap8Column}>
					<Image
						source={require('../assets/images/60e411308c86775634e2050265443e3dcdab4fb8.png')}
						resizeMode="cover"
						style={styles.bitmap8}
					></Image>
					<Image
						source={require('../assets/images/9fde9779374c15db2c1e9686145e29d1b49d1d9e.png')}
						resizeMode="cover"
						style={styles.bitmap11}
					></Image>
				</View>
				<View style={styles.bitmap9Column}>
					<Image
						source={require('../assets/images/0f0cbde7c2d712bf7a94b1bb64ef9f2bc6fc4390.png')}
						resizeMode="cover"
						style={styles.bitmap9}
					></Image>
					<Image
						source={require('../assets/images/60fd10aa2fcf34fffd8c4327e3381678c075b087.png')}
						resizeMode="cover"
						style={styles.bitmap12}
					></Image>
				</View>
				<View style={styles.bitmap10Column}>
					<Image
						source={require('../assets/images/78eae7895c12cb2a259d5330ec5a02895e427ffa.png')}
						resizeMode="cover"
						style={styles.bitmap10}
					></Image>
					<Image
						source={require('../assets/images/71ef8d76ca2055d7ca34979541cb3c7b82982668.png')}
						resizeMode="cover"
						style={styles.bitmap13}
					></Image>
				</View>
			</View>
			<View style={styles.footnote1Row}>
				<Text style={styles.footnote1}>Footnote</Text>
				<Svg viewBox="-0 -0 50 50" style={styles.oval4}>
					<Path
						strokeWidth={0}
						fill="rgba(253,216,53,1)"
						fillOpacity={1}
						strokeOpacity={1}
						d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
					></Path>
				</Svg>
				<Text style={styles.body5}>Error{'\n'}related</Text>
			</View>
			<View style={styles.footnoteRow}>
				<Text style={styles.footnote}>Footnote</Text>
				<Image
					source={require('../assets/images/188b4a2bab22ceed46654366858c154f80f51b77.png')}
					resizeMode="cover"
					style={styles.bitmap15}
				></Image>
			</View>
			<View style={styles.headline12Row}>
				<Text style={styles.headline12}>TYPEFACES</Text>
				<Text style={styles.headline2}>COLORS</Text>
				<Text style={styles.headlineCopy}>LOGOS</Text>
				<Text style={styles.footnote2}>By Evangeline</Text>
			</View>
			<Image
				source={require('../assets/images/a2511cca2ac07d9c98a4b38515ca431876c529c2.png')}
				resizeMode="cover"
				style={styles.bitmap14}
			></Image>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'white',
	},
	largeTitle: {
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		opacity: 1,
		fontSize: 34,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 41,
		letterSpacing: 0.37,
	},
	title1: {
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		opacity: 1,
		fontSize: 28,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 34,
		letterSpacing: 0.36,
		marginTop: 26,
	},
	title11: {
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		opacity: 1,
		fontSize: 28,
		fontFamily: 'SFProDisplay-Bold',
		letterSpacing: 0.36,
		marginTop: 25,
	},
	title2: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 22,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 28,
		letterSpacing: 0.35,
		marginTop: 32,
	},
	largeTitleColumn: {
		width: 140,
		marginTop: 8,
	},
	oval: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
	},
	oval1: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginTop: 62,
	},
	ovalColumn: {
		width: 50,
		marginLeft: 181,
		marginTop: 8,
		marginBottom: 52,
	},
	body6: {
		width: 80,
		height: 66,
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
	},
	body1: {
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginTop: 58,
	},
	body6Column: {
		width: 80,
		marginLeft: 19,
		marginTop: 8,
		marginBottom: 68,
	},
	screenShot20200330At105924Am: {
		width: 186,
		height: 218,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 110,
	},
	largeTitleColumnRow: {
		height: 222,
		flexDirection: 'row',
		marginTop: 78,
		marginLeft: 32,
		marginRight: 214,
	},
	title3: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 20,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 24,
		letterSpacing: 0.38,
		marginTop: 15,
	},
	oval5: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginLeft: 271,
	},
	body2: {
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 19,
		marginTop: 12,
	},
	headlineCopy3: {
		backgroundColor: 'transparent',
		color: 'rgba(0,122,255,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 87,
		marginTop: 16,
	},
	title3Row: {
		height: 50,
		flexDirection: 'row',
		marginTop: 10,
		marginLeft: 32,
		marginRight: 349,
	},
	headline: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginTop: 8,
	},
	bitmap: {
		width: 24,
		height: 26,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 516,
		marginTop: 1,
	},
	bitmap1: {
		width: 23,
		height: 25,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 42,
	},
	bitmap2: {
		width: 27,
		height: 25,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 41,
		marginTop: 2,
	},
	headlineRow: {
		height: 30,
		flexDirection: 'row',
		marginTop: 7,
		marginLeft: 32,
		marginRight: 240,
	},
	body: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
	},
	body7: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginTop: 26,
	},
	bodyColumn: {
		width: 39,
		marginTop: 9,
	},
	oval2: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginLeft: 282,
		marginTop: 9,
	},
	body3: {
		width: 73,
		height: 66,
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 19,
		marginTop: 7,
	},
	bitmap3: {
		width: 18,
		height: 25,
		opacity: 1,
	},
	bitmap6: {
		width: 5,
		height: 23,
		opacity: 1,
		marginTop: 24,
		marginLeft: 7,
	},
	bitmap3Column: {
		width: 18,
		marginLeft: 123,
		marginBottom: 7,
	},
	bitmap4: {
		width: 19,
		height: 19,
		opacity: 1,
	},
	bitmap7: {
		width: 22,
		height: 21,
		opacity: 1,
		marginTop: 28,
	},
	bitmap4Column: {
		width: 22,
		marginLeft: 48,
		marginTop: 3,
		marginBottom: 8,
	},
	bitmap5: {
		width: 19,
		height: 21,
		opacity: 1,
		marginLeft: 5,
	},
	path: {
		width: 27,
		height: 27,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginTop: 24,
	},
	bitmap5Column: {
		width: 27,
		marginLeft: 40,
		marginTop: 2,
		marginBottom: 5,
	},
	bodyColumnRow: {
		height: 79,
		flexDirection: 'row',
		marginTop: 16,
		marginLeft: 32,
		marginRight: 239,
	},
	subheadline: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 15,
		fontFamily: 'SFProText-Regular',
		lineHeight: 20,
		letterSpacing: -0.24,
	},
	subheadline1: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 15,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 20,
		letterSpacing: -0.24,
		marginTop: 26,
	},
	subheadlineColumn: {
		width: 85,
		marginTop: 13,
		marginBottom: 5,
	},
	oval3: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginLeft: 236,
		marginTop: 30,
	},
	body4: {
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 19,
		marginTop: 40,
	},
	bitmap8: {
		width: 14,
		height: 24,
		opacity: 1,
		marginLeft: 4,
	},
	bitmap11: {
		width: 20,
		height: 21,
		opacity: 1,
		marginTop: 26,
	},
	bitmap8Column: {
		width: 20,
		marginLeft: 111,
		marginTop: 5,
		marginBottom: 8,
	},
	bitmap9: {
		width: 27,
		height: 30,
		opacity: 1,
		transform: [
			{
				rotate: '2deg',
			},
		],
	},
	bitmap12: {
		width: 22,
		height: 21,
		opacity: 1,
		marginTop: 24,
		marginLeft: 3,
	},
	bitmap9Column: {
		width: 27,
		marginLeft: 42,
		marginBottom: 9,
	},
	bitmap10: {
		width: 21,
		height: 20,
		opacity: 1,
		transform: [
			{
				rotate: '12deg',
			},
		],
		marginLeft: 1,
	},
	bitmap13: {
		width: 24,
		height: 24,
		opacity: 1,
		marginTop: 27,
	},
	bitmap10Column: {
		width: 24,
		marginLeft: 40,
		marginTop: 7,
		marginBottom: 6,
	},
	subheadlineColumnRow: {
		height: 84,
		flexDirection: 'row',
		marginTop: 12,
		marginLeft: 32,
		marginRight: 240,
	},
	footnote1: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 13,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 18,
		letterSpacing: -0.08,
		marginTop: 6,
	},
	oval4: {
		width: 50,
		height: 50,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		marginLeft: 266,
	},
	body5: {
		backgroundColor: 'transparent',
		color: 'rgba(60,60,67,0.6)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Regular',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 19,
		marginTop: 3,
	},
	footnote1Row: {
		height: 50,
		flexDirection: 'row',
		marginTop: 58,
		marginLeft: 32,
		marginRight: 538,
	},
	footnote: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 13,
		fontFamily: 'SFProText-Regular',
		lineHeight: 18,
		letterSpacing: -0.08,
		marginTop: 7,
	},
	bitmap15: {
		width: 17,
		height: 26,
		opacity: 1,
		marginLeft: 536,
	},
	footnoteRow: {
		height: 26,
		flexDirection: 'row',
		marginTop: -95,
		marginLeft: 32,
		marginRight: 373,
	},
	headline12: {
		backgroundColor: 'transparent',
		color: 'rgba(0,122,255,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
	},
	headline2: {
		backgroundColor: 'transparent',
		color: 'rgba(0,122,255,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 228,
	},
	headlineCopy: {
		backgroundColor: 'transparent',
		color: 'rgba(0,122,255,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 193,
	},
	footnote2: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 13,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 18,
		letterSpacing: -0.08,
		marginLeft: 12,
		marginTop: 2,
	},
	headline12Row: {
		height: 22,
		flexDirection: 'row',
		marginTop: -589,
		marginLeft: 32,
		marginRight: 247,
	},
	bitmap14: {
		width: 24,
		height: 24,
		backgroundColor: 'transparent',
		opacity: 1,
		marginTop: -76,
		marginLeft: 1325,
	},
})

export default DesignSystem
