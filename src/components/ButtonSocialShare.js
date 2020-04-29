import React from 'react'
import {
	StyledShareButton,
	StyledShareButtonText,
} from 'src/components/styledComponents'

export default function SocialShareButton(props) {
	return (
		<StyledShareButton>
			<StyledShareButtonText>{props.text}</StyledShareButtonText>
		</StyledShareButton>
	)
}
