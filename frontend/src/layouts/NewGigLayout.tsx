import {
   Box,
   Toolbar,
   Typography,
   Stack,
   useMediaQuery,
   Button,
   Card,
   CardContent,
   CardActions,
   CardHeader,
   AppBar,
} from '@mui/material'
import { ReactNode } from 'react'
import { Stepper } from '../components/atoms/Stepper'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { LeftAndRight } from '../anim/Transitions'
import { useGigsContext } from '../hooks/useGigsContext'
import { useCategoriesContext } from '../hooks/useCategoriesContext'

const steps = [
   'Overview',

   'Pricing',

   'Description & FAQ',

   'Requirements',

   'Gallery',

   'Publish',
]

const descriptions = (isEditing: boolean) =>
   !isEditing
      ? [
           "Let's create a gig",

           'Scope & Pricing',

           'Description',

           'Requirements',

           'Showcase Your Services In A Gig Gallery',

           'Almost ready, watch out!',
        ]
      : [
           "Let's edit the gig",
           'Scope & Pricing',

           'Description',

           'Requirements',

           'Showcase Your Services In A Gig Gallery',

           'Almost ready, watch out!',
        ]

interface NewGigLayoutProps {
   children?: ReactNode
   step: number
   setStep: (val: number) => void
   onNext: () => void
   onBack: () => void
   action?: ReactNode
   buttonBackText?: string
   buttonNextText?: string
   isNextDisabled?: boolean
   secondChildren?: ReactNode
   secondChildrenHeaderText?: string
}

export const NewGigLayout = ({
   step,
   setStep,
   onNext,
   onBack,
   children,
   action,
   buttonBackText = 'Back',
   buttonNextText = 'Next',
   isNextDisabled = false,
   secondChildren = false,
   secondChildrenHeaderText = '',
}: NewGigLayoutProps) => {
   const isSm = useMediaQuery('(max-width:600px)')
   const { isEditing, gig } = useGigsContext()
   const { getCategoryById } = useCategoriesContext()
   const onClickContinue = () => {
      setStep(step + 1)
      onNext()
   }

   const onClickBack = () => {
      setStep(step - 1)
      onBack()
   }

   return (
      <>
         <Toolbar
            sx={{
               background: (theme) =>
                  theme.palette.secondary.main,
            }}
         />
         {!isSm && <Toolbar sx={{}} />}{' '}
         <AppBar
            position={!isSm ? 'fixed' : 'relative'}
            sx={{
               mt: isSm ? '0' : '65px',
               px: 2,
               py: 2,

               width: {
                  md: isSm ? '100%' : `calc(100% - 270px)`,
               },
               ml: { md: isSm ? '0' : `270px` },
            }}
         >
            <Stepper
               steps={steps}
               style={{ width: '100%' }}
               activeStep={step}
               orientation={
                  isSm ? 'vertical' : 'horizontal'
               }
            />
         </AppBar>{' '}
         <LeftAndRight isLeft={true}>
            <Card sx={{ m: 2 }}>
               {' '}
               <CardHeader
                  title={
                     <Typography
                        variant="h5"
                        fontWeight="bold"
                     >
                        {descriptions(isEditing)[step]}
                     </Typography>
                  }
                  action={action}
                  disableTypography
                  sx={{
                     fontWeight: 'bold',
                     borderBottom: '1px solid',
                     borderColor: 'divider',
                  }}
               />
               <CardContent
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     padding: 4,
                     gap: 4,
                     px: 2,
                  }}
               >
                  {children}
               </CardContent>
               <CardHeader
                  title={
                     <Typography
                        variant="h5"
                        fontWeight="bold"
                     >
                        {secondChildrenHeaderText}
                     </Typography>
                  }
                  disableTypography
                  sx={{
                     fontWeight: 'bold',
                     borderBottom: '1px solid',
                     borderColor: 'divider',
                     display: secondChildrenHeaderText
                        ? 'flex'
                        : 'none',
                  }}
               />
               <CardContent
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     padding: 4,
                     gap: 2,
                     px: 2,
                  }}
               >
                  {secondChildren}
               </CardContent>
               <CardActions
                  placeholder="pleease"
                  sx={{ px: 2 }}
               >
                  {step > 0 && (
                     <Button
                        startIcon={<ArrowBackIosNewIcon />}
                        onClick={onClickBack}
                        variant="outlined"
                     >
                        {buttonBackText}
                     </Button>
                  )}
                  <Box flexGrow={1} />
                  <Button
                     disabled={isNextDisabled}
                     endIcon={<NavigateNextIcon />}
                     onClick={() => onClickContinue()}
                     size="large"
                     variant="contained"
                  >
                     {buttonNextText}
                  </Button>
               </CardActions>
               <Stack
                  padding={2}
                  direction="row"
                  alignItems="center"
               ></Stack>
            </Card>
         </LeftAndRight>
         <pre>{JSON.stringify(gig, null, 4)}</pre>
         <pre>
            {JSON.stringify(
               getCategoryById(
                  gig?.subcategory?.category?.name
               )
            )}
         </pre>
      </>
   )
}
