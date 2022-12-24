import { ProtocolContext } from './../contexts/protocolContext';
import { useContext } from 'react'

export const useProtocolContext = () => {
	const context = useContext(ProtocolContext)

	if (!context) {
		throw Error(
			'useGigsContext must be used inside an ProtocolContextProvider'
		)
	}

	return context
}
