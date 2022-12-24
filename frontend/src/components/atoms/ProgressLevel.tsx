import * as React from 'react'
import LinearProgress, {
   LinearProgressProps,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel(
   props: LinearProgressProps & {
      percent: number
      level: number
   }
) {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
         }}
      >
         <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress
               style={{
                  height: '1.5rem',
                  borderRadius: '0.5rem',
               }}
               variant="determinate"
               color="success"
               sx={{
                  boxShadow: (theme) => theme.shadows[1],
               }}
               {...props}
            />
         </Box>
         <Box
            sx={{
               width: '100%',
               position: 'absolute',
               textAlign: 'center',
            }}
         >
            <Typography
               variant="body2"
               color="secondary"
            >{`level ${props.level} - ${Math.round(
               props.percent
            )}%`}</Typography>
         </Box>
      </Box>
   )
}

export default function ProgressLevel() {
   let percent = 15.23
   let level = 8
   return (
      <Box sx={{ width: '100%' }}>
         <LinearProgressWithLabel
            value={percent}
            percent={percent}
            level={level}
         />
      </Box>
   )
}
