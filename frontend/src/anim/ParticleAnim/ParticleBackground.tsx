import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesConfig from './particle-config'
import styled from 'styled-components'
import { useTheme } from '@mui/material'

// function generateRandomColor() {
//    const r = Math.floor(Math.random() * 256)
//       .toString(16)
//       .padStart(2, '0')
//    const g = Math.floor(Math.random() * 256)
//       .toString(16)
//       .padStart(2, '0')
//    const b = Math.floor(Math.random() * 256)
//       .toString(16)
//       .padStart(2, '0')
//    return `#${r}${g}${b}`
// }

export const ParticleBackground = ({
   onePager = false,
}) => {
   const particlesInit = async (main: any) => {
      console.log(main)
      await loadFull(main)
   }

   const theme = useTheme()

   let config = ParticlesConfig
   config.particles.color = theme?.palette?.secondary?.main
   config.particles.shape.stroke.color =
      theme?.palette?.secondary?.light
   return (
      <ParticleBox
         style={{
            height: '100%',
            width: '100%',
            position: onePager ? 'fixed' : 'absolute',
         }}
      >
         <Particles
            init={particlesInit}
            params={config}
            canvasClassName="squares-anim"
         ></Particles>
      </ParticleBox>
   )
}

const ParticleBox = styled.div`
   width: 100%;
   height: 100%;
   top: 0px;
   left: 0px;
   background-color: ${({ theme }) =>
      theme?.palette?.primary?.main};
   #tsparticles {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
      .squares-anim {
         position: absolute !important;
         width: 100%;
         height: 100% !important;
         top: 0;
         left: 0;
      }
   }
`
