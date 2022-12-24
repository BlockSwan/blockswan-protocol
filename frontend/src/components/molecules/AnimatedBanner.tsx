import { Box, BoxProps } from '@mui/material'
import { ParticleBackground } from '../../anim/ParticleAnim/ParticleBackground'

type AnimatedBannerProps = BoxProps & {}

export const AnimatedBanner = (
   props: AnimatedBannerProps
) => {
   return (
      <Box {...props}>
         <ParticleBackground />
         <Box position={'relative'}>{props?.children}</Box>
      </Box>
   )
}
