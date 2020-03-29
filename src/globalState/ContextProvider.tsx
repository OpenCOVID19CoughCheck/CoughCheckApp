import React from 'react'
import { AuthContextProvider } from './AuthContext'

function ProviderComposer({ contexts, children }) {
	return contexts.reduceRight(
		(kids, parent) =>
			React.cloneElement(parent, {
				children: kids,
			}),
		children
	)
}
// This context provider allows to add multiple contexts in the root of the app
function ContextProvider({ children }) {
	return (
		<ProviderComposer
			contexts={[<AuthContextProvider /> /*, <AnotherContext /> */]}
		>
			{children}
		</ProviderComposer>
	)
}

export default ContextProvider
