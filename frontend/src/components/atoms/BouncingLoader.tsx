import { CSSProperties } from 'react'
import styled from 'styled-components'

interface BouncingLoaderProps {
   number?: number
   width?: CSSProperties['width']
   height?: CSSProperties['height']
   size?: number
}

interface DivWithDelayProps {
   delay?: number
   width?: CSSProperties['width']
   height?: CSSProperties['height']
}

const BouncingLoader = (props: BouncingLoaderProps) => {
   return (
      <BouncingLoaderStyle>
         {Array.from(Array(props?.number || 3).keys()).map(
            (_, i) => (
               <DivWithDelayStyle
                  height={
                     props?.height
                        ? props?.height
                        : '1.5rem'
                  }
                  key={`bullet-${i}`}
                  delay={0.2 * (i + 1)}
                  width={
                     props?.width ? props?.width : '1.5rem'
                  }
               />
            )
         )}
      </BouncingLoaderStyle>
   )
}

const DivWithDelayStyle = styled.div<DivWithDelayProps>`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   margin: 3rem 0.2rem;
   background: ${(props) =>
      props.theme.palette.primary.main};
   border-radius: 8px;
   animation: bouncing-loader 0.6s infinite alternate;
   animation-delay: ${(props) => props.delay}s;
`

const BouncingLoaderStyle = styled.div<BouncingLoaderProps>`
   display: flex;
   justify-content: center;
`

export default BouncingLoader
