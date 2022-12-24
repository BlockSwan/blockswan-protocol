import {
   AppBar,
   Toolbar,
   useMediaQuery,
} from '@mui/material'
import { ReactNode } from 'react'

export interface ISubHeader {
   children: ReactNode
}

export const SubHeader = ({ children }: ISubHeader) => {
   const drawerWidth = 240

   const isSm = useMediaQuery('(max-width:600px)')

   return (
      <>
         <AppBar
            position={'relative'}
            sx={{
               mt: isSm ? '57px' : '65px',
               px: 2,
               py: 2,

               width: {
                  md: isSm
                     ? '100% '
                     : `calc(100% - ${drawerWidth}px)`,
               },
               ml: {
                  md: isSm ? '0' : `${drawerWidth}px`,
               },
            }}
         >
            {children}
         </AppBar>
      </>
   )
}
