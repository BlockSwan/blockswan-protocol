import React from 'react'
import styled from 'styled-components'
import BouncingLoader from '../atoms/BouncingLoader'

export const AppLoader = () => {
   return (
      <LoaderStyle>
         <BouncingLoader />
      </LoaderStyle>
   )
}

const LoaderStyle = styled.section`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 9999;
   display: flex;
   justify-content: center;
   align-items: center;
`
