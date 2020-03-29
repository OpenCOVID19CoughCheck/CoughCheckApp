import React, { createContext, useContext, useReducer } from 'react'

// AuthContext Creation
const AuthContext = createContext(null)

// Creating the Auth Context Provider, will be used just on the Context Provider
export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					}
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					}
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					}
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		}
	)

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}

// Custom Hook to expose the context without having to deal with extra imports
export const useAuthContext = () => {
	const filterContext = useContext(AuthContext)
	return filterContext
}
