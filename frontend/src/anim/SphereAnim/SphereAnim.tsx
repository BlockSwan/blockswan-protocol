import { Box, styled } from '@mui/material'

export interface ISphereAnim {
   width: any
   height: any
}
export const SphereAnim = ({
   width,
   height,
}: ISphereAnim) => {
   return (
      <SphereAnimStyle>
         <div
            className="scene"
            style={{ width: width, height: height }}
         >
            <div className="wrapper">
               <div className="globe">
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>

                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
               </div>
            </div>
         </div>
      </SphereAnimStyle>
   )
}
const SphereAnimStyle = styled(Box)`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
   height: max-content;
   width: 100%;
   height: 100%;

   // best in chrome

   @keyframes spin {
      to {
         transform: rotateY(-360deg);
      }
   }

   @keyframes show {
      to {
         opacity: 1;
      }
   }

   @keyframes flicker-on-2 {
      0% {
         opacity: 0;
      }

      10% {
         opacity: 1;
      }

      15% {
         opacity: 0;
      }

      30% {
         opacity: 1;
      }

      55% {
         opacity: 1;
      }

      57% {
         opacity: 0;
      }

      75% {
         opacity: 0;
      }

      76% {
         opacity: 1;
      }

      99% {
         opacity: 0;
      }

      100% {
         opacity: 1;
      }
   }
   .component-wrapper {
      position: absolute;
   }

   .scene {
      position: absolute;

      width: 15rem;
      height: 15rem;
      margin: 2% auto;
      perspective: 100rem;
      animation: flicker-on-2 1000ms linear 1500ms forwards;
      opacity: 0;
      ${({ theme }) => `${theme.breakpoints.up('md')} {
		width: 25rem;
		height: 25rem;
  	}`}
   }

   .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotateX(-8deg) rotateY(0deg);
      transform-style: preserve-3d;
   }

   .globe {
      position: relative;
      width: 40%;
      height: 40%;
      margin: 0 auto;
      transform-style: preserve-3d;
      animation: spin 25s 0ms linear infinite;
      @media (max-width: 768px) {
         width: 70%;
         height: 70%;
      }
   }
   .ring {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0.3rem;
      border-style: dotted;
      border-radius: 50%;
      color: #141e1e;
      animation: show 0.75s forwards ease-in-out;
      opacity: 0;
   }

   .ring-2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0.3rem;
      border-style: dotted;
      border-radius: 50%;
      color: #4f5656;
      animation: show 0.75s forwards ease-in-out;
      opacity: 0;
   }

   .ring:nth-child(1) {
      transform: rotateY(4deg);
   }
   .ring:nth-child(2) {
      transform: rotateY(30deg);
   }
   .ring:nth-child(3) {
      transform: rotateY(56deg);
   }
   .ring:nth-child(4) {
      transform: rotateY(82deg);
   }
   .ring:nth-child(5) {
      transform: rotateY(108deg);
   }
   .ring:nth-child(6) {
      transform: rotateY(134deg);
   }
   .ring:nth-child(7) {
      transform: rotateY(160deg);
   }

   .ring:nth-child(8) {
      transform: rotateY(4deg) rotateX(75deg) scale(2);
      border-style: dashed;
   }
   .ring:nth-child(9) {
      transform: rotateY(4deg) rotateX(75deg) scale(1.75);
      border-style: solid;
   }

   .ring:nth-child(10) {
      transform: rotateY(4deg) rotateX(75deg) scale(1.5);
      border-style: dashed;
   }
`
