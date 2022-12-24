import { Alert, Grow } from '@mui/material'
import {
   createContext,
   ReactNode,
   useReducer,
   useState,
} from 'react'
import { defaultGig } from '../constants/default'
import { GigProps } from '../types/types'

export const BannerContext = createContext<any>(null!)



interface BannerContextProviderProps {
   children?: ReactNode
}

export const BannerContextProvider = ({
   children,
}: BannerContextProviderProps) => {
   const [isVisible, setIsVisible] =
      useState<boolean>(false)

   const handleVisible = () => setIsVisible((curr) => !curr)

   return (
      <BannerContext.Provider
         value={{
            isVisible,
            setIsVisible,
            handleVisible,
         }}
      >
         {children}
         <Grow in={isVisible} unmountOnExit>
            <Alert
               variant="filled"
               severity="error"
               action={
                  <Stack
                     direction={'row'}
                     gap={2}
                     alignItems="center"
                  >
                     <Button
                        color="inherit"
                        size="small"
                        variant="text"
                     >
                        RESET
                     </Button>
                     <Button
                        color="inherit"
                        sx={{ color: 'primary.main' }}
                        size="large"
                        variant="contained"
                        endIcon={<CheckIcon />}
                     >
                        SAVE
                     </Button>
                  </Stack>
               }
               sx={{
                  position: 'fixed',
                  right: 0,
                  bottom: 0,
                  zIndex: 50,
                  width: `calc(100vw - 270px)`,
                  boxShadow: (theme) => theme.shadows[1],
               }}
            >
               <AlertTitle>
                  Profile Modification!
               </AlertTitle>
               You are trying to modify your profile. Once
               finish, make sure to <strong>confirm</strong>{' '}
               your changes to share it with all the
               blockswan nodes.
            </Alert>
         </Grow>
      </BannerContext.Provider>
   )
}
