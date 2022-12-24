import { ReactNode } from 'react'
import { CategoriesContextProvider } from './contexts/categoryContext'

import { Web3ContextProvider } from './contexts/web3Context'
import { GigsContextProvider } from './contexts/gigContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProtocolContextProvider } from './contexts/protocolContext'
import { UsersContextProvider } from './contexts/userContext'
interface AppProvidersProps {
   children?: ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
   return (
      <Router>
         <Web3ContextProvider>
            <ProtocolContextProvider>
               <CategoriesContextProvider>
                  <UsersContextProvider>
                     <GigsContextProvider>
                        {children}
                     </GigsContextProvider>
                  </UsersContextProvider>
               </CategoriesContextProvider>
            </ProtocolContextProvider>
         </Web3ContextProvider>
      </Router>
   )
}
export default AppProviders
