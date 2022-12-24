import { createContext, ReactNode } from 'react'

export const ProtocolContext = createContext<any>(null!)

interface ProtocolContextProviderProps {
   children?: ReactNode
}

export const ProtocolContextProvider = ({
   children,
}: ProtocolContextProviderProps) => {
   const noTrialFees = 0.04
   const trialFees = 0.08

   const calcEarningWithTrial = (price: number) => {
      return price - price * trialFees
   }

   const calcEarningNoTrial = (price: number) => {
      return price - price * noTrialFees
   }

   return (
      <ProtocolContext.Provider
         value={{
            noTrialFees,
            trialFees,
            calcEarningWithTrial,
            calcEarningNoTrial,
         }}
      >
         {children}
      </ProtocolContext.Provider>
   )
}
