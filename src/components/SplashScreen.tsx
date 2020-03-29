import React from 'react'
import { Text } from 'react-native'
import { Spinner } from 'native-base'
import { StandardViewStyled } from './styledComponents'
import styled from 'styled-components/native'

export const SpinnerView = styled(Spinner)`
	padding-left: 2px;
	padding-right: 2px;
`

const SplashScreen = () => {
	return (
		<StandardViewStyled>
			<SpinnerView />
		</StandardViewStyled>
	)
}
export default SplashScreen
