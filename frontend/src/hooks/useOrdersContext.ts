import { useContext } from 'react'
import { OrdersContext } from '../contexts/orderContext'

export const useOrdersContext = () => {
	const context = useContext(OrdersContext)

	if (!context) {
		throw Error('useOrdersContext must be used inside an OrdersContextProvider')
	}

	return context
}
