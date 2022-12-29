import {
   Alert,
   AlertTitle,
   Button,
   ButtonProps,
   Grow,
   Stack,
   useMediaQuery,
} from '@mui/material'
import {
   createContext,
   ReactNode,
   useEffect,
   useRef,
   useState,
} from 'react'

export const BannerContext = createContext<any>(null!)

interface BannerContextProviderProps {
   children?: ReactNode
}

interface BannerStateProps {
   title?: ReactNode
   description?: ReactNode
   variant?: 'filled' | 'standard' | 'outlined'
   severity?: 'error' | 'info' | 'warning' | 'success'
   actions?: [
      {
         props: ButtonProps
         name: string
      }
   ]
}

export const BannerContextProvider = ({
   children,
}: BannerContextProviderProps) => {
   const bannerRef = useRef<HTMLDivElement>(null)

   const [isVisible, setIsVisible] =
      useState<boolean>(false)

   const [state, setState] =
      useState<BannerStateProps | null>({
         title: <>The title alert</>,
         description: <>The title alert</>,
         variant: 'filled',
         severity: 'error',
         actions: [
            {
               props: {
                  color: 'inherit',
                  size: 'small',
                  variant: 'text',
               },
               name: 'Cancel',
            },
         ],
      })

   const displayBanner = () => {
      setIsVisible(true)
   }

   const hideBanner = () => {
      setIsVisible(false)
   }

   const setBanner = (data: any) => {
      setState({ ...state, ...data })
      setIsVisible(true)
   }

   const isBannerVisibble = () => {
      return isVisible
   }

   const isSm = useMediaQuery('(max-width:600px)')

   return (
      <BannerContext.Provider
         value={{
            state,
            setState,
            displayBanner,
            hideBanner,
            setBanner,
            isBannerVisibble,
         }}
      >
         {children}
         <Grow in={isVisible} unmountOnExit>
            <Alert
               ref={bannerRef}
               variant={state?.variant}
               severity={state?.severity}
               action={
                  <Stack
                     direction={isSm ? 'column' : 'row'}
                     gap={isSm ? 0 : 2}
                     alignItems="center"
                  >
                     {state?.actions?.map(
                        (e: any, index: number) => (
                           <Button
                              key={`banner-action-${index}`}
                              {...e.props}
                           >
                              {e?.name}
                           </Button>
                        )
                     )}
                  </Stack>
               }
               sx={{
                  position: 'fixed',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 50,
                  width: !isSm
                     ? `calc(100vw - 270px)`
                     : '100%',
                  boxShadow: (theme) => theme.shadows[1],
               }}
            >
               <AlertTitle>{state?.title}</AlertTitle>
               {state?.description}
            </Alert>
         </Grow>
      </BannerContext.Provider>
   )
}
