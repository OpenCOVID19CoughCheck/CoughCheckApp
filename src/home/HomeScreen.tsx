import i18n from 'i18n-js'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { StandardViewStyled } from 'src/components/styledComponents'

import styled from 'styled-components/native'

const ButtonStyled = styled(Button)`
	margin-bottom: 20px;
`

export default function HomeScreen({ navigation }) {
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
			<Button
				onPress={() => {
					navigation.navigate('Questionnaire')
				}}
			>
				{i18n.t('navigation.complete_questionnaire')}
			</Button>
		</StandardViewStyled>
	)
}
