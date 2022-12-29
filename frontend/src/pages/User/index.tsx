import {
   Grid,
   Paper,
   Toolbar,
   Tabs,
   Tab,
   Box,
   Grow,
} from '@mui/material'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import React from 'react'
import {
   UpAndDown,
   LeftAndRight,
} from '../../anim/Transitions'
import { useParams } from 'react-router-dom'
import UserSide from './Side'
import Gigs from './Main/Gigs'
import Reviews from './Main/Reviews'
import { useAppNavigation } from '../../hooks/useAppNavigation'

interface TabPanelProps {
   children?: React.ReactNode
   index: number
   value: number
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         <Box height={'fit-content'} overflow="scroll">
            <Grid
               container
               rowSpacing={1}
               columnSpacing={1}
               columns={12}
               sx={{ p: 2 }}
            >
               {value === index && children}
            </Grid>
         </Box>
      </div>
   )
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

interface UserPageProps {
   page?: number
}

const User = ({ page }: UserPageProps) => {
   //const isSm = useMediaQuery('(max-width:600px)')
   const { goToUser, goToUserReviews } = useAppNavigation()
   const { evmAddress } = useWeb3Context()
   const params = useParams()
   const [value, setValue] = React.useState(page ? page : 0)

   const handleChange = (
      event: React.SyntheticEvent,
      newValue: number
   ) => {
      setValue(newValue)
   }

   const isUserProfile = React.useMemo(() => {
      return params.user === evmAddress
   }, [evmAddress, params.user])

   //const { authenticateUser } = useWeb3Context()

   //    useEffect(() => {
   //       authenticateUser()

   //    }, [])

   return (
      <>
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
                  elevation={1}
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
                     value={value}
                     onChange={handleChange}
                     aria-label="basic tabs example"
                     sx={{
                        '& .MuiTabs-indicator': {
                           backgroundImage: (theme) =>
                              theme.blockswan.rainbows,
                        },
                        '& .MuiTabs-flexContainer': {
                           height: '100%',
                        },
                        height: '100%',
                     }}
                  >
                     <Tab label="Gigs" {...a11yProps(0)} />
                     <Tab
                        label="Offers"
                        {...a11yProps(1)}
                     />
                     <Tab
                        label="Reviews"
                        {...a11yProps(2)}
                     />
                     <Tab
                        label="Gallery"
                        {...a11yProps(2)}
                     />
                  </Tabs>
               </Toolbar>
               <TabPanel value={value} index={0}>
                  <Gigs />
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <Reviews />
               </TabPanel>
            </Grid>
         </Grid>
      </>
   )
}

export default User
