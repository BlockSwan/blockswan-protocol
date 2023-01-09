import {
   Step,
   //   StepConnector,
   //   stepConnectorClasses,
   StepIconProps,
   StepLabel,
   Stepper as MuiStepper,
   StepperProps as MuiStepperProps,
   styled,
   useMediaQuery,
} from '@mui/material'
import React from 'react'

const StyledStepper = styled(MuiStepper)(({ theme }) => ({
   //   '.MuiSvgIcon-root': {
   //     borderRadius: theme.shape.borderRadius,
   //     background: theme.palette.primary.main,
   //   },
   //   '.MuiSvgIcon-root.Mui-completed': {
   //     color: theme.palette.secondary.main,
   //   },
   //   '.MuiSvgIcon-root:not(.Mui-completed)': {
   //     background: theme.palette.primary.light,
   //   },
}))

// const RainbowConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       background: theme.blockswan.superGreen75,
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       background: theme.blockswan.superGreen75,
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 1,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderRadius: 1,
//   },
// }))

const RainbowStepIconRoot = styled('div')<{
   ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
   background: theme.palette.primary.light,
   zIndex: 1,
   width: 25,
   height: 25,
   color: theme.palette.secondary.main,
   display: 'flex',
   borderRadius: theme.shape.borderRadius,
   justifyContent: 'center',
   alignItems: 'center',
   ...(ownerState.active && {
      background: theme.palette.primary.main,
   }),
   ...(ownerState.completed && {
      background: theme.blockswan.superGreen75,
   }),
}))

function RainbowlibStepIcon(props: StepIconProps) {
   const { active, completed, className } = props

   //   const icons: { [index: string]: React.ReactElement } = {
   //     1: <DoneIcon />,
   //     2: <DoneIcon />,
   //     3: <DoneIcon />,
   //   }

   return (
      <RainbowStepIconRoot
         ownerState={{ completed, active }}
         className={className}
      >
         {String(props.icon)}
      </RainbowStepIconRoot>
   )
}

type StepperProps = MuiStepperProps & {
   style?: React.CSSProperties
   steps: Array<string>
}

export const Stepper = (props: StepperProps) => {
   const isSm = useMediaQuery('(max-width:600px)')

   const { activeStep, steps } = props
   return (
      <StyledStepper {...props}>
         {(isSm && activeStep !== undefined
            ? steps.slice(0, activeStep + 1)
            : steps
         ).map((label, index: number) => (
            <Step key={label + '-' + index}>
               <StepLabel StepIconComponent={RainbowlibStepIcon}>
                  {label}
               </StepLabel>
            </Step>
         ))}
      </StyledStepper>
   )
}
