import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export const StandardViewStyled = styled(SafeAreaView)`
	flex: 1;
	flex-direction: column;
	${({ center }) => {
		if (center) {
			return `
      align-items: center;
      justify-content: center;
      `
		}
	}}

	${({ extraPadding }) => {
		if (extraPadding) {
			return `
      padding-top: 50px;
			padding-bottom: 50px;
      `
		}
	}}
`
/**
 * Prop types
 */
StandardViewStyled.propTypes = {
	center: PropTypes.bool,
	extraPadding: PropTypes.bool,
}

StandardViewStyled.defaultProps = {
	center: false,
	extraPadding: true,
}
export const FormViewStyled = styled(KeyboardAvoidingView)`
	display: flex;
	background-color: #ecf0f1;
	padding: 8px;
`
