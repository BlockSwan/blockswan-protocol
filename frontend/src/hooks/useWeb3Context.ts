import { useContext } from 'react'
import { Web3Context } from '../contexts/web3Context'

export const useWeb3Context = () => {
   const context = useContext(Web3Context)

   if (!context) {
      throw Error('useWeb3Context must be used inside an Web3ContextProvider')
   }

   return context
}
