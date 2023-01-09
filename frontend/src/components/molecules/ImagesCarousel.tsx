import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { Skeleton } from '@mui/material'

export const ImagesCarousel = ({ array = [] }) => {
   if (!array || array?.length === 0)
      return (
         <Skeleton
            variant="rounded"
            sx={{ aspectRatio: 16 / 9, height: 370, width: '100%' }}
         />
      )

   return (
      <CarouselStyle showIndicators={false} showStatus={false}>
         {array?.map((el, idx) => (
            <div className="img-container" key={`images-nb-${idx}`}>
               <img src={el} alt="img" />
            </div>
         ))}
      </CarouselStyle>
   )
}

const CarouselStyle = styled(Carousel)`
   background-color: ${({ theme }) => theme.palette.secondary.main};
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   overflow: hidden;
   border: 1px solid ${({ theme }) => theme.palette.divider};
   box-shadow: 0px 0px 24px 9px rgba(0, 0, 0, 0.094);
   .carousel .thumb.selected,
   .carousel .thumb:hover {
      border: 1px solid ${({ theme }) => theme.palette.divider};
   }

   .thumb {
      border: 1px solid ${({ theme }) => theme.palette.divider};
   }

   .thumbs-wrapper {
      background-color: ${({ theme }) => theme.palette.divider};

      li {
         background-color: transparent;
         height: fit-content !important;
         width: fit-content !important;
         border-radius: 10px;

         img {
            aspect-ratio: 16/9;
            width: 60px;
            border-radius: 2px;
            background-size: cover;
         }
      }

      .thumb,
      .selected {
         border-radius: 3px;
      }
   }

   .slide selected {
      display: flex;
      justify-content: center;
   }
   .img-container {
      width: 100%;
   }
   img {
      border-radius: 0px;

      height: auto;
      aspect-ratio: 16/9;
      width: 100%;
      background-color: ${({ theme }) => theme.palette.secondary.light};
   }
`
