import { useContext } from 'react'
import { BannerContext } from '../contexts/bannerContext'

export const useBannerContext = () => {
   const context = useContext(BannerContext)

   if (!context) {
      throw Error(
         'useUsersContext must be used inside an BannerContextProvider'
      )
   }

   return context
}
