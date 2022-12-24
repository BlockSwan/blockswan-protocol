import {
   Grid,
   Paper,
   Toolbar,
   Tabs,
   Tab,
   Box,
} from '@mui/material'
import GigCard from '../../components/molecules/GigCard'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import React from 'react'
import { UpAndDown } from '../../anim/Transitions'
import { GigProps } from '../../types/types'
import { useParams } from 'react-router-dom'
import UserSide from './Side'
import { useUsersContext } from '../../hooks/useUsersContext'

const User = () => {
   //const isSm = useMediaQuery('(max-width:600px)')
   const { userData, evmAddress } = useWeb3Context()
   const { user } = useUsersContext()
   const params = useParams()

   const isUserProfile = React.useMemo(() => {
      return params.user === evmAddress
   }, [evmAddress, params.user])

   //const { authenticateUser } = useWeb3Context()

   //    useEffect(() => {
   //       authenticateUser()

   //    }, [])

   return (
      <>
         <UpAndDown>
            <Toolbar
               sx={{
                  background: (theme) =>
                     theme.palette.secondary.main,
               }}
            />

            <Grid container columns={20}>
               <Grid
                  md={6}
                  sm={20}
                  position="relative"
                  width="100%"
               >
                  <Paper
                     elevation={0.2}
                     sx={{
                        borderRadius: 0,
                        height: '100%',
                        borderRight: (theme) =>
                           `1px solid ${theme.palette.divider}`,

                        width: '100%',
                     }}
                  >
                     <Box
                        height={'fit-content'}
                        overflow="scroll"
                     >
                        <UserSide />
                     </Box>
                  </Paper>
               </Grid>
               <Grid md={14} sm={20} width="100%">
                  <Toolbar
                     sx={{
                        width: '100%',
                        height: '64px',
                        borderRadius: 0,
                        borderBottom: (theme) =>
                           `1px solid ${theme.palette.divider}`,

                        background: (theme) =>
                           theme.palette.secondary.main,
                     }}
                     style={{
                        paddingTop: 0,
                        paddingBottom: 0,
                     }}
                  >
                     <Tabs
                        value={1}
                        onChange={() => {}}
                        aria-label="disabled tabs example"
                     >
                        <Tab label="Active" value={1} />
                        <Tab label="Disabled" disabled />
                     </Tabs>
                  </Toolbar>
                  <Box
                     height={'fit-content'}
                     overflow="scroll"
                  >
                     <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={1}
                        columns={12}
                        sx={{ p: 2 }}
                     >
                        {user?.gigs?.map(
                           (
                              gig: GigProps,
                              index: number
                           ) => (
                              <Grid
                                 item
                                 key={gig?._id}
                                 xs={12}
                                 sm={6}
                                 md={4}
                                 display="flex"
                              >
                                 {' '}
                                 <GigCard
                                    isUser={true}
                                    avatarSrc={
                                       userData?.defaultProfileImg
                                    }
                                    imgSrc={
                                       gig?.imgs &&
                                       typeof gig
                                          ?.imgs[0] ===
                                          'string'
                                          ? gig?.imgs[0]
                                          : undefined
                                    }
                                    title={gig?.title}
                                    username={
                                       userData?.username
                                    }
                                    date={gig?._createdAt}
                                    price={
                                       gig?.packages[0]
                                          ?.price
                                    }
                                 />{' '}
                              </Grid>
                           )
                        )}
                     </Grid>
                  </Box>
               </Grid>
            </Grid>
         </UpAndDown>
      </>
   )
}

export default User
