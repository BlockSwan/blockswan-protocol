import {
   createContext,
   ReactNode,
   useState,
   useEffect,
   useMemo,
} from 'react'
import { useWeb3Context } from '../hooks/useWeb3Context'
import UserService from '../services/UserService'
import { UserProps } from '../types/types'

interface UserContextProps {
   user: UserProps | null
   setUser: (user: UserProps) => void
   isAuthenticated: boolean
}

export const UsersContext = createContext<UserContextProps>(
   null!
)

interface UserContextProviderProps {
   children?: ReactNode
}

export const UsersContextProvider = ({
   children,
}: UserContextProviderProps) => {
   const { web3auth, provider, evmAddress } =
      useWeb3Context()
   const [user, setUser] = useState<UserProps | null>(
      {} as UserProps
   )

   const isAuthenticated = useMemo(() => {
      return (
         web3auth !== null &&
         provider !== null &&
         evmAddress !== null
      )
   }, [web3auth, provider, evmAddress])

   useEffect(() => {
      if (isAuthenticated) {
         UserService.getUser(evmAddress)
            .then((data) => {
               console.log(data)
               setUser(data)
            })
            .catch((err) => console.error(err))
      }
   }, [isAuthenticated, evmAddress])

   return (
      <UsersContext.Provider
         value={{
            user,
            setUser,
            isAuthenticated,
         }}
      >
         {children}
      </UsersContext.Provider>
   )
}
