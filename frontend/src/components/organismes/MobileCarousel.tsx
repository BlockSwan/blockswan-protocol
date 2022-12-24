import { Box, useMediaQuery } from '@mui/material'
import { ReactNode } from 'react'

type CarouselProps = {
   children?: ReactNode
   maxWidth?: number
   minWidth?: number
   style?: object
}

export const Carousel = ({
   children,
   maxWidth,
   minWidth,
   style,
}: CarouselProps) => {
   const styleSm = {
      width: minWidth || 346,
   }
   const styleMd = {
      width: maxWidth || 'calc(100vw - 260px)',
   }

   const isSm = useMediaQuery('(max-width:600px)')

   return (
      <Box
         style={style}
         sx={{
            display: 'flex',
            gap: 1,
            py: 1,
            paddingRight: 2,
            overflow: 'auto',
            width: isSm ? styleSm.width : styleMd.width,
            scrollSnapType: 'x mandatory',
            '& > *': {
               scrollSnapAlign: 'center',
            },
            '::-webkit-scrollbar': { display: 'none' },
         }}
      >
         {children}
      </Box>
   )
}
