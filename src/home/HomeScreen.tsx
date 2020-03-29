import i18n from 'i18n-js'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { StandardViewStyled } from 'src/components/styledComponents'

import styled from 'styled-components/native'
import { useAuthContext } from 'src/globalState/AuthContext'

const ButtonStyled = styled(Button)`
	margin-bottom: 20px;
`

export default function HomeScreen({ navigation }) {
	const { dispatch } = useAuthContext()

	return (
		<StandardViewStyled center>
			<ButtonStyled
				mode="contained"
				onPress={() => {
					navigation.navigate('CoughRecorder')
				}}
			>
				Record a Cough
			</ButtonStyled>
			<ButtonStyled
				onPress={() => {
					navigation.navigate('Questionnaire')
				}}
			>
				{i18n.t('navigation.complete_questionnaire')}
			</ButtonStyled>
			<Button
				onPress={() => {
					dispatch({ type: 'SIGN_OUT' })
				}}
			>
				{i18n.t('navigation.logout')}
			</Button>
		</StandardViewStyled>
	)
}
