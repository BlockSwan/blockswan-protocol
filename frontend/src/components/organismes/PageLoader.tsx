import React from 'react'
import styled from 'styled-components'
import BouncingLoader from '../atoms/BouncingLoader'
export const PageLoader = () => {
   return (
      <>
         <PageLoaderStyle>
            <BouncingLoader />
         </PageLoaderStyle>
      </>
   )
}

const PageLoaderStyle = styled.section`
   position: relative;
   width: 100%;
   height: 100vh;
   z-index: 1000;
   display: flex;
   justify-content: center;
   align-items: center;
`
