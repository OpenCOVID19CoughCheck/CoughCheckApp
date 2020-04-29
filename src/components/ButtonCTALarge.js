import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
	StyledButtonCTALarge,
	StyledButtonCTALargeText,
} from 'src/components/styledComponents'

export default function ButtonCTALarge(props) {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<StyledButtonCTALarge>
				<StyledButtonCTALargeText>{props.text}</StyledButtonCTALargeText>
			</StyledButtonCTALarge>
		</TouchableOpacity>
	)
}
