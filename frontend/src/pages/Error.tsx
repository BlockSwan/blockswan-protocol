import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export const Error = () => {
   return (
      <ErrorStyle>
         <Stack
            spacing={4}
            display={'flex'}
            alignItems={'center'}
            direction={'column'}
            width="100%"
            sx={{
               justifyContent: 'center',
            }}
         >
            <img
               className="emoji"
               alt="🚨"
               style={{ width: '100px', margin: 'auto' }}
               src="https://s.w.org/images/core/emoji/14.0.0/svg/1f6a8.svg"
            />
            <Typography
               sx={{
                  textAlign: 'center',
               }}
               variant="h2"
            >
               Oooopps, something went wrong
            </Typography>

            <Typography variant="body1">
               Can't render the content. Please try again.
            </Typography>
            <Link
               href="mailto:contact@blockswan.app"
               underline="none"
               sx={{
                  width: 'fit-content',
                  margin: 'auto',
                  borderBottom: '2.3px solid transparent',
                  opacity: 0.6,
                  fontFamily: 'Saira',
                  borderImage: (theme) =>
                     theme.blockswan.rainbows,
                  boxSizing: 'border-box',
                  borderImageSlice: 1,
                  transition: '0.3s ease-in-out',
                  ':hover': {
                     opacity: 1,
                  },
               }}
            >
               contact@blockswan.app
            </Link>
         </Stack>
      </ErrorStyle>
   )
}

const ErrorStyle = styled.div`
   display: flex;
   overflow: hidden;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   position: relative;
   min-height: 100vh;
   font-size: calc(10px + 2vmin);
`
