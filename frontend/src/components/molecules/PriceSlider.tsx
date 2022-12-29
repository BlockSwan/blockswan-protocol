import * as React from 'react'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import { Typography } from '@mui/material'

function valuetext(value: number) {
   return `${value}$`
}

interface PriceSliderProps {
   value: number[]
   min: number
   max: number
   minDistance: number
   onChange: (newValues: number[]) => void
}

PriceSlider.defaultProps = {
   value: [0, 100],
   onChange: (newValue: number | number[]) => {
      console.log(newValue)
   },
   min: 0,
   max: 0,
   minDistance: 100,
}

export default function PriceSlider({
   value,
   onChange,
   min,
   max,
   minDistance,
}: PriceSliderProps) {
   const handleChange = (
      event: Event,
      newValue: number | number[],
      activeThumb: number
   ) => {
      if (!Array.isArray(newValue)) {
         return
      }

      if (activeThumb === 0) {
         onChange([
            Math.min(newValue[0], value[1] - minDistance),
            value[1],
         ])
      } else {
         onChange([
            value[0],
            Math.max(newValue[1], value[0] + minDistance),
         ])
      }
   }

   return (
      <>
         <Slider
            min={min}
            max={max}
            disableSwap
            sx={{
               '& .MuiSlider-thumb': {
                  borderRadius: '0.5rem',
               },
            }}
            getAriaLabel={() => 'Gig price'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
         />
         <Stack
            direction="row"
            alignItems={'center'}
            gap={2}
            justifyContent="space-between"
         >
            <Typography fontWeight={'bold'}>
               {value[0]}$
            </Typography>
            <Typography fontWeight={'bold'}>
               {value[1]}$
            </Typography>
         </Stack>
      </>
   )
}
