import { createContext, ReactNode, useReducer, useState } from 'react'
import { defaultOrder } from '../constants/default'
import { OrderProps } from '../types/types'

export const OrdersContext = createContext<any>(null!)

interface OrdersContextProviderProps {
   children?: ReactNode
}

export const OrdersContextProvider = ({
   children,
}: OrdersContextProviderProps) => {
   const [order, setOrder] = useState<OrderProps>(defaultOrder)
   return (
      <OrdersContext.Provider value={{ order, setOrder }}>
         {children}
      </OrdersContext.Provider>
   )
}
