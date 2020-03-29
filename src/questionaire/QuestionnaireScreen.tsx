import { Formik } from 'formik'
import i18n from 'i18n-js'
import React from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-paper'
import * as Yup from 'yup'
import { FormViewStyled } from 'src/components/styledComponents'
import styled from 'styled-components/native'

export default function QuestionnaireScreen() {
	const emailInput = React.useRef(null)
	return (
		<FormViewStyled behavior="position">
			<Text style={styles.title}>{i18n.t('collection_phase')}</Text>
			<Formik
				initialValues={{ name: '', email: '' }}
				validationSchema={Yup.object({
					name: Yup.string().required('Required'),
					email: Yup.string().email('Invalid Email').required('Required'),
				})}
				onSubmit={(values, formikActions) => {
					setTimeout(() => {
						Alert.alert(JSON.stringify(values))
						// Important: Make sure to setSubmitting to false so our loading indicator
						// goes away.
						formikActions.setSubmitting(false)
					}, 500)
				}}
			>
				{(props) => (
					<View>
						<TextInput
							onChangeText={props.handleChange('name')}
							onBlur={props.handleBlur('name')}
							value={props.values.name}
							autoFocus
							placeholder="Your Name"
							style={styles.input}
							onSubmitEditing={() => {
								emailInput.current.focus()
							}}
						/>
						{props.touched.name && props.errors.name ? (
							<Text style={styles.error}>{props.errors.name}</Text>
						) : null}
						<TextInput
							onChangeText={props.handleChange('email')}
							onBlur={props.handleBlur('email')}
							value={props.values.email}
							placeholder="Email Address"
							style={styles.input}
							ref={emailInput}
						/>
						{props.touched.email && props.errors.email ? (
							<Text style={styles.error}>{props.errors.email}</Text>
						) : null}
						<Button
							onPress={props.handleSubmit}
							mode="contained"
							loading={props.isSubmitting}
							disabled={props.isSubmitting}
							style={{ marginTop: 16 }}
						>
							Submit
						</Button>
						<Button
							onPress={props.handleReset}
							mode="outlined"
							disabled={props.isSubmitting}
							style={{ marginTop: 16 }}
						>
							Reset
						</Button>
					</View>
				)}
			</Formik>
		</FormViewStyled>
	)
}

const styles = StyleSheet.create({
	title: {
		margin: 24,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	error: {
		margin: 8,
		fontSize: 14,
		color: 'red',
		fontWeight: 'bold',
	},
	input: {
		height: 50,
		paddingHorizontal: 8,
		width: '100%',
		borderColor: '#ddd',
		borderWidth: 1,
		backgroundColor: '#fff',
	},
})
