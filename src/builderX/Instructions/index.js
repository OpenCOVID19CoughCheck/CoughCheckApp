import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

function Index(props) {
	return (
		<View style={styles.container}>
			<View style={styles.rectangle1}>
				<View style={styles.rectangle2}>
					<View style={styles.group3}>
						<Image
							source={require('./assets/images/e59eac52ff951c3737576fd268f1382ec442d99e.png')}
							resizeMode="cover"
							style={styles.bitmap1}
						></Image>
						<Text style={styles.largeTitle}>Instructions</Text>
						<Text style={styles.tapTheAboveMic}>
							1. Tap the above microphone to start recording.{'\n'}
							{'\n'}2. Cough in the microphone for 30 seconds.{'\n'}
							{'\n'}3. Start and stop as many times as you like to give us as much
							recordable audio as possible
						</Text>
						<View style={styles.bitmap2Row}>
							<Image
								source={require('./assets/images/a2511cca2ac07d9c98a4b38515ca431876c529c2.png')}
								resizeMode="cover"
								style={styles.bitmap2}
							></Image>
							<Text style={styles.headline}>Don’t show this again</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 375,
		height: 812,
		opacity: 1,
	},
	rectangle1: {
		width: 375,
		height: 812,
		backgroundColor: 'rgba(38,50,56,0.8)',
	},
	rectangle2: {
		width: 327,
		height: 551,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 12,
		marginTop: 90,
		marginLeft: 24,
	},
	group3: {
		width: 326,
		height: 398,
		opacity: 1,
		marginTop: 21,
		marginLeft: 1,
	},
	bitmap1: {
		width: 16,
		height: 15,
		backgroundColor: 'transparent',
		opacity: 1,
		marginLeft: 22,
	},
	largeTitle: {
		width: 326,
		height: 41,
		backgroundColor: 'transparent',
		color: 'rgba(144,164,174,1)',
		opacity: 1,
		fontSize: 34,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 41,
		letterSpacing: 0.37,
		textAlign: 'center',
		marginTop: 80,
	},
	tapTheAboveMic: {
		width: 287,
		height: 222,
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 20,
		fontFamily: 'SFProDisplay-Regular',
		lineHeight: 24,
		letterSpacing: 0.38,
		marginTop: 10,
		marginLeft: 19,
	},
	bitmap2: {
		width: 16,
		height: 16,
		backgroundColor: 'transparent',
		opacity: 1,
		marginTop: 3,
	},
	headline: {
		backgroundColor: 'transparent',
		color: 'rgba(120,144,156,1)',
		opacity: 1,
		fontSize: 17,
		fontFamily: 'SFProText-Semibold',
		lineHeight: 22,
		letterSpacing: -0.41,
		marginLeft: 9,
	},
	bitmap2Row: {
		height: 22,
		flexDirection: 'row',
		marginTop: 8,
		marginLeft: 20,
		marginRight: 117,
	},
})

export default Index
