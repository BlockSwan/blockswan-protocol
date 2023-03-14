import {
   Alert,
   AlertTitle,
   Button,
   ButtonProps,
   Grow,
   Stack,
   Typography,
   useMediaQuery,
   Box,
   Divider,
} from '@mui/material'
import React, {
   createContext,
   ReactNode,
   useEffect,
   useRef,
   useState,
} from 'react'
import Modal from '../components/molecules/Modal'

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

   const [isVisible, setIsVisible] = useState<boolean>(false)

   const [state, setState] = useState<BannerStateProps | null>({
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

   const [isAgreementModalVisible, setIsAgreementModalVisible] =
      useState<boolean>(true)
   const closeAgreementModal = () => setIsAgreementModalVisible(false)

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
         <Modal
            title="Welcome to Blockswan Protocol Testnet!"
            open={isAgreementModalVisible}
            onClose={closeAgreementModal}
         >
            <React.Fragment>
               <Typography sx={{ mt: 2 }}>
                  This is a testnet client interface for exploring Blockswan.
                  Transactions are for testing purposes only and{' '}
                  <b>will not result in actual trades or exchanges.</b> We are
                  currently in the alpha stage, which means that unexpected
                  errors and bugs may arise during use.
               </Typography>
               <Divider sx={{ mt: 2 }} />
               <Stack direction={'row'} sx={{ mt: 2 }}>
                  <Box flexGrow={1} />
                  <Button variant="contained" onClick={closeAgreementModal}>
                     Fair enough
                  </Button>
               </Stack>
            </React.Fragment>
         </Modal>

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
                     {state?.actions?.map((e: any, index: number) => (
                        <Button key={`banner-action-${index}`} {...e.props}>
                           {e?.name}
                        </Button>
                     ))}
                  </Stack>
               }
               sx={{
                  position: 'fixed',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 50,
                  width: !isSm ? `calc(100vw - 270px)` : '100%',
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
