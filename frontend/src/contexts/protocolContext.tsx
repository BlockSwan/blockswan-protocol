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

   const buyerFlatFee = 1
   const buyerPercentFee = 0.01

   const calcEarningWithTrial = (price: number) => {
      return price - price * trialFees
   }

   const calcEarningNoTrial = (price: number) => {
      return price - price * noTrialFees
   }

   const calcBuyingPercentFee = (price: number) => {
      return price * buyerPercentFee
   }

   const calcTotalBuyingPrice = (price: number) => {
      return price + buyerFlatFee + calcBuyingPercentFee(price)
   }

   return (
      <ProtocolContext.Provider
         value={{
            noTrialFees,
            trialFees,
            buyerFlatFee,
            buyerPercentFee,
            calcEarningWithTrial,
            calcEarningNoTrial,
            calcBuyingPercentFee,
            calcTotalBuyingPrice,
         }}
      >
         {children}
      </ProtocolContext.Provider>
   )
}
